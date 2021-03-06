import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { ErrorMessageService } from 'src/app/services/error-message.service';
import { ListService } from 'src/app/services/list.service';
import { StorageService } from 'src/app/services/storage.service';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { SendCustomerConfirmationDialog } from 'src/app/dialogs/send-customer-confirmation-dialog/send-customer-confirmation.dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CodeDetails } from 'src/app/interfaces/list';


/**
 * Contains customer creation stepper. 
 * The stepper consists of steps, which contain forms required for customer creation. 
 * There are 4 different settings of steps: Debitor-Person, Debitor-Organization, Creditor-Person, Creditor-Organization.
 * Which one is currently showed depends on the choice in the preselection. 
 */
@Component({
  selector: 'app-new-iso',
  templateUrl: './new-iso.component.html',
  styleUrls: ['./new-iso.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NewISOComponent implements OnInit, OnDestroy {

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;

  generalInformation: FormGroup;
  contactInformation: FormGroup;
  applicant: FormGroup;
  payment: FormGroup;
  upload: FormGroup;

  industryFieldCodesSearchCtrl: FormControl = new FormControl('');
  countrySearchCtrl: FormControl = new FormControl('');
  public filteredFieldCodes: ReplaySubject<CodeDetails[]> = new ReplaySubject<CodeDetails[]>(1);
  public filteredCountries: ReplaySubject<CodeDetails[]> = new ReplaySubject<CodeDetails[]>(1);
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  onDestroyIndustryFieldCode = new Subject<void>();
  onDestroyCountry = new Subject<void>();

  legalForms;
  titles;
  salutations;
  salutationsApplicant;
  countries;
  paymentTerms;
  industryFields;
  applicantDefault;
  remarksLength = 72;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private formBuilder: FormBuilder, public dictionaryService: DictionaryService, public listService: ListService,
    public storageService: StorageService, private dialog: MatDialog, private customerService: CustomerService,
    public errorMessageService: ErrorMessageService, private searchService: SearchService, public authService: AuthService) {
    this.titles = this.listService.titles;
    this.countries = this.listService.countries;
    this.salutationsApplicant = this.listService.salutationsPerson;
  }

  ngOnInit(): void {
    this.applicantDefault = this.listService.salutationsPerson[0];
    //Initializes forms for selected types
    this.initForms();
    //Enable 'industryFieldCode' field, if industry field is selected
    this.payment.get('industryField')
      .valueChanges.subscribe(() => {
        this.industryFields = this.listService.industryFieldCodes.get(this.payment.get('industryField').value.code);
        this.payment.get('industryFieldCode').enable();
        this.initIndustryCodeFilter();
      });
    this.initCountryFilter();
  }

  /**
   * Called on destroy of the component.
   */
  ngOnDestroy() {
    this.onDestroyIndustryFieldCode.next();
    this.onDestroyIndustryFieldCode.complete();
    this.onDestroyCountry.next();
    this.onDestroyCountry.complete();
  }

  /**
   * Initializes country filter, required for the country free text search.
   */
  initCountryFilter() {
    this.filteredCountries.next(this.countries.slice());
    this.countrySearchCtrl.valueChanges
      .pipe(takeUntil(this.onDestroyCountry))
      .subscribe(() => {
        this.searchService.filter(this.countrySearchCtrl, this.countries, this.filteredCountries);
      });
  }

  /**
   * Initializes industry code filter, required for the country free text search.
   */
  initIndustryCodeFilter() {
    this.filteredFieldCodes.next(this.industryFields.slice());
    this.industryFieldCodesSearchCtrl.valueChanges
      .pipe(takeUntil(this.onDestroyIndustryFieldCode))
      .subscribe(() => {
        this.searchService.filter(this.industryFieldCodesSearchCtrl, this.industryFields, this.filteredFieldCodes);
      });
  }

  /**
   * Initializes forms according customer and debit/credit type.
   */
  initForms() {
    if (this.storageService.customerType === 'organization') {
      this.legalForms = this.listService.legalFormsOrganization;
      this.salutations = this.listService.salutationsOrganization;
      if (this.storageService.debitCreditType === 'debitor') {
        this.paymentTerms = this.listService.paymentTermsDebit;
        this.initOrganizationDebitForms()
      } else {
        this.paymentTerms = this.listService.paymentTermsCredit;
        this.initOrganizationCreditForms()
      }
    } else {
      this.legalForms = this.listService.legalFormsPerson;
      this.salutations = this.listService.salutationsPerson;
      if (this.storageService.debitCreditType === 'debitor') {
        this.paymentTerms = this.listService.paymentTermsDebit;
        this.initPersonDebitForms()
      } else {
        this.paymentTerms = this.listService.paymentTermsCredit;
        this.initPersonCreditForms()
      }
    }
  }

  /**
   * Initializes forms shared by all stepper settings.
   */
  initSharedForms() {
    this.generalInformation = this.formBuilder.group({
      legalForm: ['', Validators.required],
      interfaceNumber: [''],
      salutation: [''],
      additionalName: [''],
    });

    this.contactInformation = this.formBuilder.group({
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      mailbox: [''],
      zipMailbox: [''],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: [''],
      fax: [''],
      mobile: [''],
      email: ['', [Validators.email]],
    });

    this.payment = this.formBuilder.group({
      taxId: [''],
      vatId: [''],
      industryFieldCode: new FormControl({ value: "", disabled: true }, [Validators.required]),
      industryField: ['', Validators.required],
      iban: [''],
      paymentTerm: ['', Validators.required],
      notes: [''],
      sepa: [false],
    });

    this.upload = this.formBuilder.group({
      files: [[]],
    });
  }

  /**
   * Initializes FormControls for person type.
   */
  initPersonForms() {
    this.generalInformation.addControl('title', new FormControl(''));
    this.generalInformation.addControl('firstName', new FormControl('', Validators.required));
    this.generalInformation.addControl('secondName', new FormControl('', Validators.required));
    this.generalInformation.addControl('birthDate', new FormControl(null, this.storageService.debitCreditType == 'debitor' ? Validators.required : []));
  }

  /**
   * Initializes FormControls for person and debit type.
   */
  initPersonDebitForms() {
    this.initSharedForms();
    this.initPersonForms();
    this.payment.addControl('agb', new FormControl(false));
    this.payment.addControl('creditLimit', new FormControl(''));
  }

  /**
   * Initializes FormControls for person and credit type.
   */
  initPersonCreditForms() {
    this.initSharedForms();
    this.initPersonForms();
  }

  /**
   * Initializes FormControls for organization type.
   */
  initOrganizationForms() {
    this.generalInformation.addControl('orgaPersons', new FormControl('', Validators.required));
  }

  /**
   * Initializes FormControls for organization and debit type.
   */
  initOrganizationDebitForms() {
    this.initSharedForms();
    this.initOrganizationForms();
    if (this.authService.account.salutationCode !== '0000') {
      this.applicantDefault = this.listService.salutationsPerson.getObjectForCode(this.authService.account.salutationCode)
    }

    this.applicant = this.formBuilder.group({
      salutation: [this.applicantDefault, Validators.required],
      firstName: [this.authService.account.firstName, Validators.required],
      secondName: [this.authService.account.secondName, Validators.required],
      phone: [this.authService.account.phone],
      mobile: [this.authService.account.mobile],
      email: [this.authService.account.email, Validators.email],

      salutation1: [this.applicantDefault, Validators.required],
      firstName1: [this.authService.account.firstName, Validators.required],
      secondName1: [this.authService.account.secondName, Validators.required],
      birthDate1: ['', Validators.required],
      phone1: [this.authService.account.phone],
      mobile1: [this.authService.account.mobile],
      email1: [this.authService.account.email, Validators.email],

      salutation2: ['', Validators.required],
      firstName2: ['', Validators.required],
      secondName2: ['', Validators.required],
      birthDate2: ['', Validators.required],
      phone2: [''],
      mobile2: [''],
      email2: ['', Validators.email],
    });

    this.payment.addControl('agb', new FormControl(false));
    this.payment.addControl('creditLimit', new FormControl(''));
  }

  /**
   * Initializes FormControls for organization and credit type.
   */
  initOrganizationCreditForms() {
    this.initSharedForms();
    this.initOrganizationForms();
  }

  /**
   * Opens send customer dialog.
   */
  async openSendSOAPDialog() {
    const customer = {
      data: this.customerService.constructObject(this.generalInformation,
        this.contactInformation, this.payment, this.applicant, this.upload),
      customerType: this.storageService.customerType,
      debitCreditType: this.storageService.debitCreditType
    };
    await this.customerService.sendCustomer(customer).toPromise();
    return
    /*
    const sendCustomerDialogRef = this.dialog.open(SendCustomerConfirmationDialog);
    const isDirect = await sendCustomerDialogRef.afterClosed().toPromise();
    const customer = {
      data: this.customerService.constructObject(this.generalInformation,
        this.contactInformation, this.payment, this.applicant, this.upload),
      customerType: this.storageService.customerType,
      debitCreditType: this.storageService.debitCreditType
    };
    if (isDirect === true) {
      await this.customerService.sendCustomer(customer).toPromise();
    } else if (isDirect === false) {
      await this.customerService.sendCustomerRequest(customer).toPromise();
    }
    */
    //this.router.navigate(['/preselection']);
  }

  /**
   * Sets IBAN required validator.
   */
  setIbanRequired() {
    this.payment.get('iban').setValidators([Validators.required]);
    this.remarksLength = 58;
    this.payment?.get("notes")?.setValue(this.payment.get("notes").value.slice(0, this.remarksLength))
  }

  /**
   * Unsets IBAN required validator.
   */
  unsetIbanRequired() {
    this.payment.get('iban').setValidators([]);
    this.remarksLength = 72;
  }

  /**
   * Click on the "add file" button triggers this method. 
   * The method allows to choose files to upload. 
   * @param $event Input event
   */
  async uploadFile(event) {
    let files = this.upload.get('files').value;
    if (event.target.files && event.target.files.length) {
      for (let file of event.target.files) {
        let fileContent = <string>await this.pFileReader(file)
        files.push({ content: fileContent, filename: file.name, length: file.size });
      }
    }
    this.fileInput.nativeElement.value = "";
    this.upload.get('files').setValue(files);
  }

  pFileReader(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /**
   * Remove uploaded file.
   * @param file Uploaded file
   */
  removeFile(file): void {
    let files = this.upload.get('files').value;
    const index = files.indexOf(file);
    if (index >= 0) {
      files.splice(index, 1);
    }
    this.upload.get('files').setValue(files);
  }

}