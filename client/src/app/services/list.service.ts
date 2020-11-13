import { Injectable } from '@angular/core';
import { IndustryFieldCode, Land, PaymentTerm } from '../interfaces/lists';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  legalFormsOrganization: { name: string }[] = [
    { name: 'AG' },
    { name: 'eG E. Genossenschaft    ' },
    { name: 'eV Eingetr. Verein' },
    { name: 'GmbH' },
    { name: 'GmbH&Co.KG' },
    { name: 'KG' },
    { name: 'KGAA' },
    { name: 'OHG' },
    { name: 'S.E.' },
    { name: 'Staatl. Einrichtung' },
    { name: 'Stiftung' },
    { name: 'UG' },
    { name: 'UG&Co. KG' },
    { name: 'GbR Ges. bürg. Rechts' },
    { name: 'Sonstiges' },
    { name: 'Privat' },
  ];

  legalFormsPerson: { name: string }[] = [
    { name: 'Eingetragener Kfm.' },
    { name: 'Einzelunternehmen' },
    { name: 'Freier Beruf' },
    { name: 'Gewerbebetrieb' },
    { name: 'Landwirt' },
    { name: 'Privat' },
  ];

  titles: { name: string }[] = [
    { name: 'Dr.' },
    { name: 'Prof.' },
    { name: 'Prof. Dr.' },
    { name: 'B.A.' },
    { name: 'MBA' },
    { name: 'Ph.D.' },
  ]

  salutationsOrganization: { name: string }[] = [
    { name: 'Firma' },
    { name: 'Frau und Frau' },
    { name: 'Frau und Herrn' },
    { name: 'Herrn und Frau' },
    { name: 'Herrn und Herrn' },
  ]

  salutationsPerson: { name: string }[] = [
    { name: 'Herr' },
    { name: 'Frau' },
  ]

  paymentTermsDebit: PaymentTerm[] = [
    { code: '0000', details: 'B000/000/000 fällig sofort netto'},
    { code: '0300', details: 'D003/000/000: fällig in 3 Tagen netto'},
    { code: '0800', details: 'B008/000/000 fällig in 8 Tagen netto'},
    { code: '0820', details: 'B030/008/020 8 Tage mit  2,0 % Skto'},
    { code: '0830', details: 'B030/008/030 8 Tage mit  3,0 % Skto'},
  ];

  paymentTermsCredit: PaymentTerm[] = [
    { code: '0000', details: 'B000/000/000 fällig sofort netto'},
    { code: '0500', details: 'K005/000/000: Beleg-Datum + 5 Tage netto'},
    { code: '0700', details: 'K007/000/000: Beleg-Datum + 7 Tage netto'},
    { code: '0800', details: 'B008/000/000 fällig in 8 Tagen netto'},
    { code: '0820', details: 'B030/008/020 8 Tage mit  2,0 % Skto'},
    { code: '0830', details: 'B030/008/030 8 Tage mit  3,0 % Skto'},
  ];

  industryFields: { name: string }[] = [
    { name: 'A1' },
    { name: 'A3' },
    { name: 'A5' },
    { name: 'A7' },
    { name: 'A9' },
    { name: 'B1' },
    { name: 'C1' },
    { name: 'D1' },
    { name: 'E1' },
    { name: 'E5' },
    { name: 'F1' },
    { name: 'F3' },
    { name: 'F5' },
    { name: 'G1' },
    { name: 'G4' },
    { name: 'G7' },
    { name: 'H1' },
    { name: 'I1' },
    { name: 'J1' },
    { name: 'K1' },
    { name: 'L1' },
    { name: 'M1' },
    { name: 'N1' },
    { name: 'O1' },
    { name: 'P1' },
    { name: 'Q1' },
    { name: 'R1' },
    { name: 'S1' },
    { name: 'T1' },
    { name: 'U1' }
  ];

  industryFieldCodeA1: IndustryFieldCode[] = [
    { code: '0111', details: 'Anbau von Getreide (ohne Reis), Hülsenfrüchten und Ölsaaten'},
    { code: '0112', details: 'Anbau von Reis'},
    { code: '0113', details: 'Anbau von Gemüse und Melonen sowie Wurzeln und Knollen'},
    { code: '0114', details: 'Anbau von Zuckerrohr'},
    { code: '0115', details: 'Anbau von Tabak'},
    { code: '0116', details: 'Anbau von Faserpflanzen'},
    { code: '0119', details: 'Anbau von sonstigen einjährigen Pflanzen'},
    { code: '0121', details: 'Anbau von Wein- und Tafeltrauben'},
    { code: '0122', details: 'Anbau von tropischen und subtropischen Früchten'},
    { code: '0123', details: 'Anbau von Zitrusfrüchten'},
    { code: '0124', details: 'Anbau von Kern- und Steinobst'},
    { code: '0125', details: 'Anbau von sonstigem Obst und Nüssen'},
    { code: '0126', details: 'Anbau von ölhaltigen Früchten'},
    { code: '0127', details: 'Anbau von Pflanzen zur Herstellung von Getränken'},
    { code: '0128', details: 'Anbau von Gewürzpflanzen, Pflanzen für aromatische, narkotische und pharmazeutische Zwecke'},
    { code: '0129', details: 'Anbau sonstiger mehrjähriger Pflanzen'},
    { code: '0130', details: 'Betrieb von Baumschulen, sowie Anbau von Pflanzen zu Vermehrungszwecken'},
  ];

  industryFieldCodeA3: IndustryFieldCode[] = [
    { code: '0141', details: 'Haltung von Milchkühen'},
    { code: '0142', details: 'Haltung von Pferden und Eseln'},
    { code: '0143', details: 'Haltung von Kamelen'},
    { code: '0144', details: 'Haltung von Schafen und Ziegen'},
    { code: '0145', details: 'Haltung von Schweinen'},
    { code: '0146', details: 'Haltung von Geflügel'},
    { code: '0149', details: 'Sonstige Tierhaltung'},
  ];

  industryFieldCodes = new Map([
    ['A1', this.industryFieldCodeA1],
    ['A3', this.industryFieldCodeA3],
  ])


  locations: Land[] = [
    { name: 'Andorra', abbreviation: 'AD' },
    { name: 'Ver.Arab.Emir.', abbreviation: 'AE' },
    { name: 'Afghanistan', abbreviation: 'AF' },
    { name: 'Antigua/Barbuda', abbreviation: 'AG' },
    { name: 'Anguilla', abbreviation: 'AI' },
    { name: 'Albanien', abbreviation: 'AL' },
    { name: 'Armenien', abbreviation: 'AM' },
    { name: ' ', abbreviation: 'AN' },
    { name: 'Angola', abbreviation: 'AO' },
    { name: 'Antarktis', abbreviation: 'AQ' },
    { name: 'Argentinien', abbreviation: 'AR' },
    { name: 'Samoa, Amerikan', abbreviation: 'AS' },
    { name: 'Österreich', abbreviation: 'AT' },
    { name: 'Australien', abbreviation: 'AU' },
    { name: 'Aruba', abbreviation: 'AW' },
    { name: ' ', abbreviation: 'AX' },
    { name: 'Aserbaidschan', abbreviation: 'AZ' },
    { name: 'Bosnien-Herz.', abbreviation: 'BA' },
    { name: 'Barbados', abbreviation: 'BB' },
    { name: 'Bangladesch', abbreviation: 'BD' },
    { name: 'Belgien', abbreviation: 'BE' },
    { name: 'Burkina-Faso', abbreviation: 'BF' },
    { name: 'Bulgarien', abbreviation: 'BG' },
    { name: 'Bahrain', abbreviation: 'BH' },
    { name: 'Burundi', abbreviation: 'BI' },
    { name: 'Benin', abbreviation: 'BJ' },
    { name: 'Blue', abbreviation: 'BL' },
    { name: 'Bermuda', abbreviation: 'BM' },
    { name: 'Brunei Drussal.', abbreviation: 'BN' },
    { name: 'Bolivien', abbreviation: 'BO' },
    { name: 'Bonaire, Saba', abbreviation: 'BQ' },
    { name: 'Brasilien', abbreviation: 'BR' },
    { name: 'Bahamas', abbreviation: 'BS' },
    { name: 'Bhutan', abbreviation: 'BT' },
    { name: 'Bouvet Inseln', abbreviation: 'BV' },
    { name: 'Botsuana', abbreviation: 'BW' },
    { name: 'Belarus', abbreviation: 'BY' },
    { name: 'Belize', abbreviation: 'BZ' },
    { name: 'Kanada', abbreviation: 'CA' },
    { name: 'Kokosinseln', abbreviation: 'CC' },
    { name: 'Republik Kongo', abbreviation: 'CD' },
    { name: 'Zentralaf. Rep.', abbreviation: 'CF' },
    { name: 'Kongo', abbreviation: 'CG' },
    { name: 'Schweiz', abbreviation: 'CH' },
    { name: 'Elfenbeinküste', abbreviation: 'CI' },
    { name: 'Cookinseln', abbreviation: 'CK' },
    { name: 'Chile', abbreviation: 'CL' },
    { name: 'Kamerun', abbreviation: 'CM' },
    { name: 'China', abbreviation: 'CN' },
    { name: 'Kolumbien', abbreviation: 'CO' },
    { name: 'Costa Rica', abbreviation: 'CR' },
    { name: 'Serbien/Monten.', abbreviation: 'CS' },
    { name: 'Kuba', abbreviation: 'CU' },
    { name: 'Kap Verde', abbreviation: 'CV' },
    { name: 'Curaçao', abbreviation: 'CW' },
    { name: 'Weihnachtsinsel', abbreviation: 'CX' },
    { name: 'Zypern', abbreviation: 'CY' },
    { name: 'Tschechische Re', abbreviation: 'CZ' },
    { name: 'Deutschland', abbreviation: 'DE' },
    { name: 'Dschibuti', abbreviation: 'DJ' },
    { name: 'Dänemark', abbreviation: 'DK' },
    { name: 'Dominica', abbreviation: 'DM' },
    { name: 'Dominik. Rep.', abbreviation: 'DO' },
    { name: 'Algerien', abbreviation: 'DZ' },
    { name: 'Ecuador', abbreviation: 'EC' },
    { name: 'Estland', abbreviation: 'EE' },
    { name: 'Ägypten', abbreviation: 'EG' },
    { name: 'West Sahara', abbreviation: 'EH' },
    { name: 'Eritrea', abbreviation: 'ER' },
    { name: 'Spanien', abbreviation: 'ES' },
    { name: 'Äthiopien', abbreviation: 'ET' },
    { name: 'Europäische U.', abbreviation: 'EU' },
    { name: 'Finnland', abbreviation: 'FI' },
    { name: 'Fidschi', abbreviation: 'FJ' },
    { name: 'Falklandinseln', abbreviation: 'FK' },
    { name: 'Mikronesien', abbreviation: 'FM' },
    { name: 'Färöer', abbreviation: 'FO' },
    { name: 'Frankreich', abbreviation: 'FR' },
    { name: 'Gabun', abbreviation: 'GA' },
    { name: 'Verein. Königr.', abbreviation: 'GB' },
    { name: 'Grenada', abbreviation: 'GD' },
    { name: 'Georgien', abbreviation: 'GE' },
    { name: 'Französ.Guayana', abbreviation: 'GF' },
    { name: 'Gournsey', abbreviation: 'GG' },
    { name: 'Ghana', abbreviation: 'GH' },
    { name: 'Gibraltar', abbreviation: 'GI' },
    { name: 'Grönland', abbreviation: 'GL' },
    { name: 'Gambia', abbreviation: 'GM' },
    { name: 'Guinea', abbreviation: 'GN' },
    { name: 'Guadeloupe', abbreviation: 'GP' },
    { name: 'Äquatorialguine', abbreviation: 'GQ' },
    { name: 'Griechenland', abbreviation: 'GR' },
    { name: 'S. Sandwich Ins', abbreviation: 'GS' },
    { name: 'Guatemala', abbreviation: 'GT' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Guinea-Bissau', abbreviation: 'GW' },
    { name: 'Guyana', abbreviation: 'GY' },
    { name: 'Hongkong', abbreviation: 'HK' },
    { name: 'Heard/McDon.Ins', abbreviation: 'HM' },
    { name: 'Honduras', abbreviation: 'HN' },
    { name: 'Kroatien', abbreviation: 'HR' },
    { name: 'Haiti', abbreviation: 'HT' },
    { name: 'Ungarn', abbreviation: 'HU' },
    { name: 'Indonesien', abbreviation: 'ID' },
    { name: 'Irland', abbreviation: 'IE' },
    { name: 'Israel', abbreviation: 'IL' },
    { name: 'Man Insel', abbreviation: 'IM' },
    { name: 'Indien', abbreviation: 'IN' },
    { name: 'Brit.Geb.Ind.Oz', abbreviation: 'IO' },
    { name: 'Irak', abbreviation: 'IQ' },
    { name: 'Iran', abbreviation: 'IR' },
    { name: 'Island', abbreviation: 'IS' },
    { name: 'Italien', abbreviation: 'IT' },
    { name: 'Jersey', abbreviation: 'JE' },
    { name: 'Jamaika', abbreviation: 'JM' },
    { name: 'Jordanien', abbreviation: 'JO' },
    { name: 'Japan', abbreviation: 'JP' },
    { name: 'Kenia', abbreviation: 'KE' },
    { name: 'Kirgisistan', abbreviation: 'KG' },
    { name: 'Kambodscha', abbreviation: 'KH' },
    { name: 'Kiribati', abbreviation: 'KI' },
    { name: 'Komoren', abbreviation: 'KM' },
    { name: 'St.Kitts&Nevis', abbreviation: 'KN' },
    { name: 'Nordkorea', abbreviation: 'KP' },
    { name: 'Südkorea', abbreviation: 'KR' },
    { name: 'Kuwait', abbreviation: 'KW' },
    { name: 'Kaimaninseln', abbreviation: 'KY' },
    { name: 'Kasachstan', abbreviation: 'KZ' },
    { name: 'Laos', abbreviation: 'LA' },
    { name: 'Libanon', abbreviation: 'LB' },
    { name: 'St. Lucia', abbreviation: 'LC' },
    { name: 'Liechtenstein', abbreviation: 'LI' },
    { name: 'Sri Lanka', abbreviation: 'LK' },
    { name: 'Liberia', abbreviation: 'LR' },
    { name: 'Lesotho', abbreviation: 'LS' },
    { name: 'Litauen', abbreviation: 'LT' },
    { name: 'Luxemburg', abbreviation: 'LU' },
    { name: 'Lettland', abbreviation: 'LV' },
    { name: 'Libyen', abbreviation: 'LY' },
    { name: 'Marokko', abbreviation: 'MA' },
    { name: 'Monaco', abbreviation: 'MC' },
    { name: 'Moldau', abbreviation: 'MD' },
    { name: '', abbreviation: 'ME' },
    { name: '', abbreviation: 'MF' },
    { name: 'Madagaskar', abbreviation: 'MG' },
    { name: 'Marshall-Insel', abbreviation: 'MH' },
    { name: 'Nordmazedonien', abbreviation: 'MK' },
    { name: 'Mali', abbreviation: 'ML' },
    { name: 'Myanmar', abbreviation: 'MM' },
    { name: 'Mongolei', abbreviation: 'MN' },
    { name: 'Macau', abbreviation: 'MO' },
    { name: 'Nördl. Marianen', abbreviation: 'MP' },
    { name: 'Martinique', abbreviation: 'MQ' },
    { name: 'Mauretanien', abbreviation: 'MR' },
    { name: 'Montserrat', abbreviation: 'MS' },
    { name: 'Malta', abbreviation: 'MT' },
    { name: 'Mauritius', abbreviation: 'MU' },
    { name: 'Malediven', abbreviation: 'MV' },
    { name: 'Malawi', abbreviation: 'MW' },
    { name: 'Mexiko', abbreviation: 'MX' },
    { name: 'Malaysia', abbreviation: 'MY' },
    { name: 'Mosambik', abbreviation: 'MZ' },
    { name: 'Namibia', abbreviation: 'NA' },
    { name: 'Neukaledonien', abbreviation: 'NC' },
    { name: 'Niger', abbreviation: 'NE' },
    { name: 'Norfolkinseln', abbreviation: 'NF' },
    { name: 'Nigeria', abbreviation: 'NG' },
    { name: 'Nicaragua', abbreviation: 'NI' },
    { name: 'Niederlande', abbreviation: 'NL' },
    { name: 'Norwegen', abbreviation: 'NO' },
    { name: 'Nepal', abbreviation: 'NP' },
    { name: 'Nauru', abbreviation: 'NR' },
    { name: 'NATO', abbreviation: 'NT' },
    { name: 'Niue-Inseln', abbreviation: 'NU' },
    { name: 'Neuseeland', abbreviation: 'NZ' },
    { name: 'Oman', abbreviation: 'OM' },
    { name: 'Orange', abbreviation: 'OR' },
    { name: 'Panama', abbreviation: 'PA' },
    { name: 'Peru', abbreviation: 'PE' },
    { name: 'FranzPolynesien', abbreviation: 'PF' },
    { name: 'Papua-Neuguinea', abbreviation: 'PG' },
    { name: 'Philippinen', abbreviation: 'PH' },
    { name: 'Pakistan', abbreviation: 'PK' },
    { name: 'Polen', abbreviation: 'PL' },
    { name: 'StPier.,Miquel.', abbreviation: 'PM' },
    { name: 'Pitcairn Inseln', abbreviation: 'PN' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Palästina', abbreviation: 'PS' },
    { name: 'Portugal', abbreviation: 'PT' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Paraguay', abbreviation: 'PY' },
    { name: 'Katar', abbreviation: 'QA' },
    { name: 'Reunion', abbreviation: 'RE' },
    { name: 'Rumänien', abbreviation: 'RO' },
    { name: '', abbreviation: 'RS' },
    { name: 'Russische Foed.', abbreviation: 'RU' },
    { name: 'Ruanda', abbreviation: 'RW' },
    { name: 'Saudi-Arabien', abbreviation: 'SA' },
    { name: 'Salomonen', abbreviation: 'SB' },
    { name: 'Seychellen', abbreviation: 'SC' },
    { name: 'Sudan', abbreviation: 'SD' },
    { name: 'Schweden', abbreviation: 'SE' },
    { name: 'Singapur', abbreviation: 'SG' },
    { name: 'St. Helena', abbreviation: 'SH' },
    { name: 'Slowenien', abbreviation: 'SL' },
    { name: 'Svalbard', abbreviation: 'SJ' },
    { name: 'Slowakei', abbreviation: 'SK' },
    { name: 'Sierra Leone', abbreviation: 'SL' },
    { name: 'San Marino', abbreviation: 'SM' },
    { name: 'Senegal', abbreviation: 'SN' },
    { name: 'Somalia', abbreviation: 'SO' },
    { name: 'Suriname', abbreviation: 'SR' },
    { name: 'Südsudan', abbreviation: 'SS' },
    { name: 'S.Tome,Principe', abbreviation: 'ST' },
    { name: 'El Salvador', abbreviation: 'SV' },
    { name: 'Sint Maarten', abbreviation: 'SX' },
    { name: 'Syrien', abbreviation: 'SY' },
    { name: 'Swasiland', abbreviation: 'SZ' },
    { name: 'Turks-,Caicosin', abbreviation: 'TC' },
    { name: 'Tschad', abbreviation: 'TD' },
    { name: 'French S.Territ', abbreviation: 'TF' },
    { name: 'Togo', abbreviation: 'TG' },
    { name: 'Thailand', abbreviation: 'TH' },
    { name: 'Tadschikistan', abbreviation: 'TJ' },
    { name: 'Tokelau-Inseln', abbreviation: 'TK' },
    { name: 'Osttimor', abbreviation: 'TL' },
    { name: 'Turkmenistan', abbreviation: 'TM' },
    { name: 'Tunesien', abbreviation: 'TN' },
    { name: 'Tonga', abbreviation: 'TO' },
    { name: 'Ost Timor', abbreviation: 'TP' },
    { name: 'Türkei', abbreviation: 'TR' },
    { name: 'Trinidad,Tobago', abbreviation: 'TT' },
    { name: 'Tuvalu', abbreviation: 'TV' },
    { name: 'Taiwan', abbreviation: 'TW' },
    { name: 'Tansania', abbreviation: 'TZ' },
    { name: 'Ukraine', abbreviation: 'UA' },
    { name: 'Uganda', abbreviation: 'UG' },
    { name: 'Minor Outl.Ins.', abbreviation: 'UM' },
    { name: 'Vereinigte Nat.', abbreviation: 'UN' },
    { name: 'USA', abbreviation: 'US' },
    { name: 'Uruguay', abbreviation: 'UY' },
    { name: 'Usbekistan', abbreviation: 'UZ' },
    { name: 'Vatikanstadt', abbreviation: 'VA' },
    { name: 'St. Vincent', abbreviation: 'VC' },
    { name: 'Venezuela', abbreviation: 'VE' },
    { name: 'Brit.Jungferni.', abbreviation: 'VG' },
    { name: 'Amer.Jungferni.', abbreviation: 'VI' },
    { name: 'Vietnam', abbreviation: 'VN' },
    { name: 'Vanuatu', abbreviation: 'VU' },
    { name: 'Wallis,Futuna', abbreviation: 'WF' },
    { name: 'Westsamoa', abbreviation: 'WS' },
    { name: 'Serbien', abbreviation: 'XS' },
    { name: 'Jemen', abbreviation: 'YE' },
    { name: 'Mayotte', abbreviation: 'YT' },
    { name: 'Südafrika', abbreviation: 'ZA' },
    { name: 'Sambia', abbreviation: 'ZM' },
    { name: 'Simbabwe', abbreviation: 'ZW' },

  ];



  constructor() { }
}