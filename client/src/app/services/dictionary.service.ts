import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  currentLanguage: string = 'DE';

  languages = new Map([
    ['DE', 'Deutsch'],
    ['EN', 'English'],
  ]);

  dictionaryDE = new Map([
    ['LOG', 'Anmeldung'],
    ['USR', 'Benutzername'],
    ['PSW', 'Passwort'],

    ['BCK', 'Zurück'],
    ['NXT', 'Weiter'],
    ['SND', 'Senden'],

    ['PRS', 'Vorauswahl'],
    ['CUT', 'Kundentyp'],
    ['PRV', 'Privatkunde'],
    ['COM', 'Gewerbekunde'],
    ['DEB', 'Debitor'],
    ['KRE', 'Kreditor'],
    ['LEF', 'Rechtsform'],

    ['CND', 'Kontaktdaten'],
    ['NIF', 'Namensangaben'],
    ['ADR', 'Anschrift'],
    ['CON', 'Kontakt'],
    ['CNA', 'Firma'],
    ['ANI', 'Zus. Namensangaben'],
    ['STR', 'Straße'],
    ['HNU', 'Hausnr.'],
    ['ZIP', 'Postleitzahl'],
    ['LOC', 'Ort'],
    ['COU', 'Land'],
    ['TEL', 'Telefon'],
    ['FAX', 'Telefax'],
    ['MOB', 'Mobiltelefon'],
    ['EMA', 'E-Mail'],

    ['EMP', 'Angestellter'],
    ['EMN', 'Angestellter Name'],
    ['EMC', 'Angestellter Kontakt'],
    ['TLE', 'Titel'],
    ['SAL', 'Anrede'],
    ['FNA', 'Vorname'],
    ['SNA', 'Nachname'],
    
    ['COM', 'Unternehmen'],
  ])

  dictionaryEN = new Map([
    ['LOG', 'Log In'],
    ['USR', 'Username'],
    ['PSW', 'Password'],

    ['BCK', 'Back'],
    ['NXT', 'Next'],
    ['SND', 'Send'],

    ['PRS', 'Preselection'],
    ['CUT', 'Customer type'],
    ['PRV', 'Private'],
    ['COM', 'Commercial'],
    ['DEB', 'Debtor'],
    ['KRE', 'Creditor'],
    ['LEF', 'Legal form'],

    ['CND', 'Contact'],
    ['NIF', 'Name'],
    ['ADR', 'Address'],
    ['CON', 'Contact'],
    ['CNA', 'Company'],
    ['ANI', 'Additional name'],
    ['STR', 'Street'],
    ['HNU', 'HN'],
    ['ZIP', 'ZIP'],
    ['LOC', 'Location'],
    ['COU', 'Country'],
    ['TEL', 'Phone'],
    ['FAX', 'Fax'],
    ['MOB', 'Mobile phone'],
    ['EMA', 'E-Mail'],

    ['EMP', 'Employee'],
    ['EMN', 'Employee name'],
    ['EMC', 'Employee contact'],
    ['TLE', 'Title'],
    ['SAL', 'Salutation'],
    ['FNA', 'Name'],
    ['SNA', 'Surname'],

    ['COM', 'Company'],
  ])

  dictionary = new Map([
    ['DE', this.dictionaryDE],
    ['EN', this.dictionaryEN]
  ])



  constructor() { }

  switchLanguage() {
    this.currentLanguage = (this.currentLanguage == 'DE' ? 'EN' : 'DE')
  }

  get(abbreviation: string) {
    return this.dictionary.get(this.currentLanguage).get(abbreviation);
  }
}
