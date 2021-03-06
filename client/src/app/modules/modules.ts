import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule } from "ngx-toastr";
import { AuthService } from "../services/auth/auth.service";
import { CustomerService } from "../services/customer/customer.service";
import { DateService } from "../services/date.service";
import { DictionaryService } from "../services/dictionary.service";
import { ErrorMessageService } from "../services/error-message.service";
import { FormValidationService } from "../services/form-validation.service";
import { HttpService } from "../services/http.service";
import { JSONValidationService } from "../services/json-validation.service";
import { ListService } from "../services/list.service";
import { RecaptchaService } from "../services/recaptcha.service";
import { SearchService } from "../services/search.service";
import { StorageService } from "../services/storage.service";
import { AngularMaterialModule } from "./angular-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { CookieService } from "ngx-cookie-service";
import { AccountService } from "../services/account/account.service";
import { AuthGuardService } from "../services/auth/auth-guard.service";
import { AuthInterceptor } from "../services/auth/auth-interceptor.service";

export const services = [
    DictionaryService,
    HttpService,
    ListService,
    ErrorMessageService,
    StorageService,
    SearchService,
    DateService,
    AuthService,
    AuthGuardService,
    AccountService,
    RecaptchaService,
    CustomerService,
    FormValidationService,
    JSONValidationService,
    CookieService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];

export const externalModules = [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularMaterialModule,
];