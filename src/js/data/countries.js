// All countries
// length 252
const Countries = [
	{code: "AF",alpha_3: "AFG",name: "Afghanistan",capital: "Kabul",continent: "Asia",continent_code: "AS",phone: 93,currency: "AFN",currency_symbol: "؋"},
	{code: "AL",alpha_3: "ALB",name: "Albanie",capital: "Tirana",continent: "Europe",continent_code: "EU",phone: 355,currency: "ALL",currency_symbol: "Lek"},
	{code: "DZ",alpha_3: "DZA",name: "Algérie",capital: "Algiers",continent: "Africa",continent_code: "AF",phone: 213,currency: "DZD",currency_symbol: "دج"},
	{code: "AD",alpha_3: "AND",name: "Andorre",capital: "Andorra la Vella",continent: "Europe",continent_code: "EU",phone: 376,currency: "EUR",currency_symbol: "€"},
	{code: "AO",alpha_3: "AGO",name: "Angola",capital: "Luanda",continent: "Africa",continent_code: "AF",phone: 244,currency: "AOA",currency_symbol: "Kz"},
	{code: "AI",alpha_3: "AIA",name: "Anguilla",capital: "The Valley",continent: "North America",continent_code: "NA",phone: 1264,currency: "XCD",currency_symbol: "$"},
	{code: "AG",alpha_3: "ATG",name: "Antigua-et-Barbuda",capital: "St. John's",continent: "North America",continent_code: "NA",phone: 1268,currency: "XCD",currency_symbol: "$"},
	{code: "AR",alpha_3: "ARG",name: "Argentine",capital: "Buenos Aires",continent: "South America",continent_code: "SA",phone: 54,currency: "ARS",currency_symbol: "$"},
	{code: "AM",alpha_3: "ARM",name: "Arménie",capital: "Yerevan",continent: "Asia",continent_code: "AS",phone: 374,currency: "AMD",currency_symbol: "֏"},
	{code: "AU",alpha_3: "AUS",name: "Australie",capital: "Canberra",continent: "Oceania",continent_code: "OC",phone: 61,currency: "AUD",currency_symbol: "$"},
	{code: "AT",alpha_3: "AUT",name: "Autriche",capital: "Vienna",continent: "Europe",continent_code: "EU",phone: 43,currency: "EUR",currency_symbol: "€"},
	{code: "AZ",alpha_3: "AZE",name: "Azerbaïdjan",capital: "Baku",continent: "Asia",continent_code: "AS",phone: 994,currency: "AZN",currency_symbol: "m"},
	{code: "BS",alpha_3: "BHS",name: "Bahamas",capital: "Nassau",continent: "North America",continent_code: "NA",phone: 1242,currency: "BSD",currency_symbol: "B$"},
	{code: "BH",alpha_3: "BHR",name: "Bahreïn",capital: "Manama",continent: "Asia",continent_code: "AS",phone: 973,currency: "BHD",currency_symbol: ".د.ب"},
	{code: "BD",alpha_3: "BGD",name: "Bangladesh",capital: "Dhaka",continent: "Asia",continent_code: "AS",phone: 880,currency: "BDT",currency_symbol: "৳"},
	{code: "BB",alpha_3: "BRB",name: "Barbade",capital: "Bridgetown",continent: "North America",continent_code: "NA",phone: 1246,currency: "BBD",currency_symbol: "Bds$"},
	{code: "BY",alpha_3: "BLR",name: "Biélorussie",capital: "Minsk",continent: "Europe",continent_code: "EU",phone: 375,currency: "BYN",currency_symbol: "Br"},
	{code: "BE",alpha_3: "BEL",name: "Belgique",capital: "Brussels",continent: "Europe",continent_code: "EU",phone: 32,currency: "EUR",currency_symbol: "€"},
	{code: "BZ",alpha_3: "BLZ",name: "Belize",capital: "Belmopan",continent: "North America",continent_code: "NA",phone: 501,currency: "BZD",currency_symbol: "$"},
	{code: "BJ",alpha_3: "BEN",name: "Bénin",capital: "Porto-Novo",continent: "Africa",continent_code: "AF",phone: 229,currency: "XOF",currency_symbol: "CFA"},
	{code: "BT",alpha_3: "BTN",name: "Bhoutan",capital: "Thimphu",continent: "Asia",continent_code: "AS",phone: 975,currency: "BTN",currency_symbol: "Nu."},
	{code: "BO",alpha_3: "BOL",name: "Bolivie",capital: "Sucre",continent: "South America",continent_code: "SA",phone: 591,currency: "BOB",currency_symbol: "Bs."},
	{code: "BA",alpha_3: "BIH",name: "Bosnie Herzégovine",capital: "Sarajevo",continent: "Europe",continent_code: "EU",phone: 387,currency: "BAM",currency_symbol: "KM"},
	{code: "BW",alpha_3: "BWA",name: "Botswana",capital: "Gaborone",continent: "Africa",continent_code: "AF",phone: 267,currency: "BWP",currency_symbol: "P"},
	{code: "BR",alpha_3: "BRA",name: "Brésil",capital: "Brasilia",continent: "South America",continent_code: "SA",phone: 55,currency: "BRL",currency_symbol: "R$"},
	{code: "BN",alpha_3: "BRN",name: "Brunei",capital: "Bandar Seri Begawan",continent: "Asia",continent_code: "AS",phone: 673,currency: "BND",currency_symbol: "B$"},
	{code: "BG",alpha_3: "BGR",name: "Bulgarie",capital: "Sofia",continent: "Europe",continent_code: "EU",phone: 359,currency: "BGN",currency_symbol: "Лв."},
	{code: "BF",alpha_3: "BFA",name: "Burkina Faso",capital: "Ouagadougou",continent: "Africa",continent_code: "AF",phone: 226,currency: "XOF",currency_symbol: "CFA"},
	{code: "BI",alpha_3: "BDI",name: "Burundi",capital: "Bujumbura",continent: "Africa",continent_code: "AF",phone: 257,currency: "BIF",currency_symbol: "FBu"},
	{code: "KH",alpha_3: "KHM",name: "Cambodge",capital: "Phnom Penh",continent: "Asia",continent_code: "AS",phone: 855,currency: "KHR",currency_symbol: "KHR"},
	{code: "CM",alpha_3: "CMR",name: "Cameroun",capital: "Yaounde",continent: "Africa",continent_code: "AF",phone: 237,currency: "XAF",currency_symbol: "FCFA"},
	{code: "CA",alpha_3: "CAN",name: "Canada",capital: "Ottawa",continent: "North America",continent_code: "NA",phone: 1,currency: "CAD",currency_symbol: "$"},
	{code: "CV",alpha_3: "CPV",name: "Cap-Vert",capital: "Praia",continent: "Africa",continent_code: "AF",phone: 238,currency: "CVE",currency_symbol: "$"},
	{code: "CF",alpha_3: "CAF",name: "République centrafricaine",capital: "Bangui",continent: "Africa",continent_code: "AF",phone: 236,currency: "XAF",currency_symbol: "FCFA"},
	{code: "TD",alpha_3: "TCD",name: "Tchad",capital: "N'Djamena",continent: "Africa",continent_code: "AF",phone: 235,currency: "XAF",currency_symbol: "FCFA"},
	{code: "CL",alpha_3: "CHL",name: "Chili",capital: "Santiago",continent: "South America",continent_code: "SA",phone: 56,currency: "CLP",currency_symbol: "$"},
	{code: "CN",alpha_3: "CHN",name: "Chine",capital: "Beijing",continent: "Asia",continent_code: "AS",phone: 86,currency: "CNY",currency_symbol: "¥"},
	{code: "CO",alpha_3: "COL",name: "Colombie",capital: "Bogota",continent: "South America",continent_code: "SA",phone: 57,currency: "COP",currency_symbol: "$"},
	{code: "KM",alpha_3: "COM",name: "Comores",capital: "Moroni",continent: "Africa",continent_code: "AF",phone: 269,currency: "KMF",currency_symbol: "CF"},
	{code: "CG",alpha_3: "COG",name: "Congo",capital: "Brazzaville",continent: "Africa",continent_code: "AF",phone: 242,currency: "XAF",currency_symbol: "FC"},
	{code: "CD",alpha_3: "COD",name: "République démocratique du Congo",capital: "Kinshasa",continent: "Africa",continent_code: "AF",phone: 242,currency: "CDF",currency_symbol: "FC"},
	{code: "CR",alpha_3: "CRI",name: "Costa Rica",capital: "San Jose",continent: "North America",continent_code: "NA",phone: 506,currency: "CRC",currency_symbol: "₡"},
	{code: "CI",alpha_3: "CIV",name: "Côte d'Ivoire",capital: "Yamoussoukro",continent: "Africa",continent_code: "AF",phone: 225,currency: "XOF",currency_symbol: "CFA"},
	{code: "HR",alpha_3: "HRV",name: "Croatie",capital: "Zagreb",continent: "Europe",continent_code: "EU",phone: 385,currency: "HRK",currency_symbol: "kn"},
	{code: "CU",alpha_3: "CUB",name: "Cuba",capital: "Havana",continent: "North America",continent_code: "NA",phone: 53,currency: "CUP",currency_symbol: "$"},
	{code: "CY",alpha_3: "CYP",name: "Chypre",capital: "Nicosia",continent: "Asia",continent_code: "AS",phone: 357,currency: "EUR",currency_symbol: "€"},
	{code: "CZ",alpha_3: "CZE",name: "Tchéquie",capital: "Prague",continent: "Europe",continent_code: "EU",phone: 420,currency: "CZK",currency_symbol: "Kč"},
	{code: "DK",alpha_3: "DNK",name: "Danemark",capital: "Copenhagen",continent: "Europe",continent_code: "EU",phone: 45,currency: "DKK",currency_symbol: "Kr."},
	{code: "DJ",alpha_3: "DJI",name: "Djibouti",capital: "Djibouti",continent: "Africa",continent_code: "AF",phone: 253,currency: "DJF",currency_symbol: "Fdj"},
	{code: "DM",alpha_3: "DMA",name: "Dominique",capital: "Roseau",continent: "North America",continent_code: "NA",phone: 1767,currency: "XCD",currency_symbol: "$"},
	{code: "DO",alpha_3: "DOM",name: "République dominicaine",capital: "Santo Domingo",continent: "North America",continent_code: "NA",phone: 1809,currency: "DOP",currency_symbol: "$"},
	{code: "EC",alpha_3: "ECU",name: "Equateur",capital: "Quito",continent: "South America",continent_code: "SA",phone: 593,currency: "USD",currency_symbol: "$"},
	{code: "EG",alpha_3: "EGY",name: "Egypte",capital: "Cairo",continent: "Africa",continent_code: "AF",phone: 20,currency: "EGP",currency_symbol: "ج.م"},
	{code: "SV",alpha_3: "SLV",name: "Le Salvador",capital: "San Salvador",continent: "North America",continent_code: "NA",phone: 503,currency: "USD",currency_symbol: "$"},
	{code: "GQ",alpha_3: "GNQ",name: "Guinée Équatoriale",capital: "Malabo",continent: "Africa",continent_code: "AF",phone: 240,currency: "XAF",currency_symbol: "FCFA"},
	{code: "ER",alpha_3: "ERI",name: "Érythrée",capital: "Asmara",continent: "Africa",continent_code: "AF",phone: 291,currency: "ERN",currency_symbol: "Nfk"},
	{code: "EE",alpha_3: "EST",name: "Estonie",capital: "Tallinn",continent: "Europe",continent_code: "EU",phone: 372,currency: "EUR",currency_symbol: "€"},
	{code: "ET",alpha_3: "ETH",name: "Ethiopie",capital: "Addis Ababa",continent: "Africa",continent_code: "AF",phone: 251,currency: "ETB",currency_symbol: "Nkf"},
	{code: "FJ",alpha_3: "FJI",name: "Fidji",capital: "Suva",continent: "Oceania",continent_code: "OC",phone: 679,currency: "FJD",currency_symbol: "FJ$"},
	{code: "FI",alpha_3: "FIN",name: "Finlande",capital: "Helsinki",continent: "Europe",continent_code: "EU",phone: 358,currency: "EUR",currency_symbol: "€"},
	{code: "FR",alpha_3: "FRA",name: "France",capital: "Paris",continent: "Europe",continent_code: "EU",phone: 33,currency: "EUR",currency_symbol: "€"},
	{code: "GA",alpha_3: "GAB",name: "Gabon",capital: "Libreville",continent: "Africa",continent_code: "AF",phone: 241,currency: "XAF",currency_symbol: "FCFA"},
	{code: "GM",alpha_3: "GMB",name: "Gambie",capital: "Banjul",continent: "Africa",continent_code: "AF",phone: 220,currency: "GMD",currency_symbol: "D"},
	{code: "GE",alpha_3: "GEO",name: "Géorgie",capital: "Tbilisi",continent: "Asia",continent_code: "AS",phone: 995,currency: "GEL",currency_symbol: "ლ"},
	{code: "DE",alpha_3: "DEU",name: "Allemagne",capital: "Berlin",continent: "Europe",continent_code: "EU",phone: 49,currency: "EUR",currency_symbol: "€"},
	{code: "GH",alpha_3: "GHA",name: "Ghana",capital: "Accra",continent: "Africa",continent_code: "AF",phone: 233,currency: "GHS",currency_symbol: "GH₵"},
	{code: "GR",alpha_3: "GRC",name: "Grèce",capital: "Athens",continent: "Europe",continent_code: "EU",phone: 30,currency: "EUR",currency_symbol: "€"},
	{code: "GD",alpha_3: "GRD",name: "Grenade",capital: "St. George's",continent: "North America",continent_code: "NA",phone: 1473,currency: "XCD",currency_symbol: "$"},
	{code: "GT",alpha_3: "GTM",name: "Guatemala",capital: "Guatemala City",continent: "North America",continent_code: "NA",phone: 502,currency: "GTQ",currency_symbol: "Q"},
	{code: "GN",alpha_3: "GIN",name: "Guinée",capital: "Conakry",continent: "Africa",continent_code: "AF",phone: 224,currency: "GNF",currency_symbol: "FG"},
	{code: "GW",alpha_3: "GNB",name: "Guinée-Bissau",capital: "Bissau",continent: "Africa",continent_code: "AF",phone: 245,currency: "XOF",currency_symbol: "CFA"},
	{code: "GY",alpha_3: "GUY",name: "Guyana",capital: "Georgetown",continent: "South America",continent_code: "SA",phone: 592,currency: "GYD",currency_symbol: "$"},
	{code: "HT",alpha_3: "HTI",name: "Haïti",capital: "Port-au-Prince",continent: "North America",continent_code: "NA",phone: 509,currency: "HTG",currency_symbol: "G"},
	{code: "VA",alpha_3: "VAT",name: "Vatican",capital: "Vatican City",continent: "Europe",continent_code: "EU",phone: 39,currency: "EUR",currency_symbol: "€"},
	{code: "HN",alpha_3: "HND",name: "Honduras",capital: "Tegucigalpa",continent: "North America",continent_code: "NA",phone: 504,currency: "HNL",currency_symbol: "L"},
	{code: "HU",alpha_3: "HUN",name: "Hongrie",capital: "Budapest",continent: "Europe",continent_code: "EU",phone: 36,currency: "HUF",currency_symbol: "Ft"},
	{code: "IS",alpha_3: "ISL",name: "Islande",capital: "Reykjavik",continent: "Europe",continent_code: "EU",phone: 354,currency: "ISK",currency_symbol: "kr"},
	{code: "IN",alpha_3: "IND",name: "Inde",capital: "New Delhi",continent: "Asia",continent_code: "AS",phone: 91,currency: "INR",currency_symbol: "₹"},
	{code: "ID",alpha_3: "IDN",name: "Indonésie",capital: "Jakarta",continent: "Asia",continent_code: "AS",phone: 62,currency: "IDR",currency_symbol: "Rp"},
	{code: "IR",alpha_3: "IRN",name: "Iran",capital: "Tehran",continent: "Asia",continent_code: "AS",phone: 98,currency: "IRR",currency_symbol: "﷼"},
	{code: "IQ",alpha_3: "IRQ",name: "Irak",capital: "Baghdad",continent: "Asia",continent_code: "AS",phone: 964,currency: "IQD",currency_symbol: "د.ع"},
	{code: "IE",alpha_3: "IRL",name: "Irlande",capital: "Dublin",continent: "Europe",continent_code: "EU",phone: 353,currency: "EUR",currency_symbol: "€"},
	{code: "IL",alpha_3: "ISR",name: "Israël",capital: "Jerusalem",continent: "Asia",continent_code: "AS",phone: 972,currency: "ILS",currency_symbol: "₪"},
	{code: "IT",alpha_3: "ITA",name: "Italie",capital: "Rome",continent: "Europe",continent_code: "EU",phone: 39,currency: "EUR",currency_symbol: "€"},
	{code: "JM",alpha_3: "JAM",name: "Jamaïque",capital: "Kingston",continent: "North America",continent_code: "NA",phone: 1876,currency: "JMD",currency_symbol: "J$"},
	{code: "JP",alpha_3: "JPN",name: "Japon",capital: "Tokyo",continent: "Asia",continent_code: "AS",phone: 81,currency: "JPY",currency_symbol: "¥"},
	{code: "JO",alpha_3: "JOR",name: "Jordanie",capital: "Amman",continent: "Asia",continent_code: "AS",phone: 962,currency: "JOD",currency_symbol: "ا.د"},
	{code: "KZ",alpha_3: "KAZ",name: "Kazakhstan",capital: "Astana",continent: "Asia",continent_code: "AS",phone: 7,currency: "KZT",currency_symbol: "лв"},
	{code: "KE",alpha_3: "KEN",name: "Kenya",capital: "Nairobi",continent: "Africa",continent_code: "AF",phone: 254,currency: "KES",currency_symbol: "KSh"},
	{code: "KI",alpha_3: "KIR",name: "Kiribati",capital: "Tarawa",continent: "Oceania",continent_code: "OC",phone: 686,currency: "AUD",currency_symbol: "$"},
	{code: "KP",alpha_3: "PRK",name: "Corée du Nord",capital: "Pyongyang",continent: "Asia",continent_code: "AS",phone: 850,currency: "KPW",currency_symbol: "₩"},
	{code: "KR",alpha_3: "KOR",name: "Corée du Sud",capital: "Seoul",continent: "Asia",continent_code: "AS",phone: 82,currency: "KRW",currency_symbol: "₩"},
	{code: "XK",alpha_3: "XKX",name: "Kosovo",capital: "Pristina",continent: "Europe",continent_code: "EU",phone: 383,currency: "EUR",currency_symbol: "€"},
	{code: "KW",alpha_3: "KWT",name: "Koweït",capital: "Kuwait City",continent: "Asia",continent_code: "AS",phone: 965,currency: "KWD",currency_symbol: "ك.د"},
	{code: "KG",alpha_3: "KGZ",name: "Kirghizistan",capital: "Bishkek",continent: "Asia",continent_code: "AS",phone: 996,currency: "KGS",currency_symbol: "лв"},
	{code: "LA",alpha_3: "LAO",name: "Laos",capital: "Vientiane",continent: "Asia",continent_code: "AS",phone: 856,currency: "LAK",currency_symbol: "₭"},
	{code: "LV",alpha_3: "LVA",name: "Lettonie",capital: "Riga",continent: "Europe",continent_code: "EU",phone: 371,currency: "EUR",currency_symbol: "€"},
	{code: "LB",alpha_3: "LBN",name: "Liban",capital: "Beirut",continent: "Asia",continent_code: "AS",phone: 961,currency: "LBP",currency_symbol: "£"},
	{code: "LS",alpha_3: "LSO",name: "Lesotho",capital: "Maseru",continent: "Africa",continent_code: "AF",phone: 266,currency: "LSL",currency_symbol: "L"},
	{code: "LR",alpha_3: "LBR",name: "Libéria",capital: "Monrovia",continent: "Africa",continent_code: "AF",phone: 231,currency: "LRD",currency_symbol: "$"},
	{code: "LY",alpha_3: "LBY",name: "Libye",capital: "Tripolis",continent: "Africa",continent_code: "AF",phone: 218,currency: "LYD",currency_symbol: "د.ل"},
	{code: "LI",alpha_3: "LIE",name: "Liechtenstein",capital: "Vaduz",continent: "Europe",continent_code: "EU",phone: 423,currency: "CHF",currency_symbol: "CHf"},
	{code: "LT",alpha_3: "LTU",name: "Lituanie",capital: "Vilnius",continent: "Europe",continent_code: "EU",phone: 370,currency: "EUR",currency_symbol: "€"},
	{code: "LU",alpha_3: "LUX",name: "Luxembourg",capital: "Luxembourg",continent: "Europe",continent_code: "EU",phone: 352,currency: "EUR",currency_symbol: "€"},
	{code: "MK",alpha_3: "MKD",name: "Macédoine du Nord",capital: "Skopje",continent: "Europe",continent_code: "EU",phone: 389,currency: "MKD",currency_symbol: "ден"},
	{code: "MG",alpha_3: "MDG",name: "Madagascar",capital: "Antananarivo",continent: "Africa",continent_code: "AF",phone: 261,currency: "MGA",currency_symbol: "Ar"},
	{code: "MW",alpha_3: "MWI",name: "Malawi",capital: "Lilongwe",continent: "Africa",continent_code: "AF",phone: 265,currency: "MWK",currency_symbol: "MK"},
	{code: "MY",alpha_3: "MYS",name: "Malaisie",capital: "Kuala Lumpur",continent: "Asia",continent_code: "AS",phone: 60,currency: "MYR",currency_symbol: "RM"},
	{code: "ML",alpha_3: "MLI",name: "Mali",capital: "Bamako",continent: "Africa",continent_code: "AF",phone: 223,currency: "XOF",currency_symbol: "CFA"},
	{code: "MT",alpha_3: "MLT",name: "Malte",capital: "Valletta",continent: "Europe",continent_code: "EU",phone: 356,currency: "EUR",currency_symbol: "€"},
	{code: "MH",alpha_3: "MHL",name: "Iles Marshall",capital: "Majuro",continent: "Oceania",continent_code: "OC",phone: 692,currency: "USD",currency_symbol: "$"},
	{code: "MR",alpha_3: "MRT",name: "Mauritanie",capital: "Nouakchott",continent: "Africa",continent_code: "AF",phone: 222,currency: "MRO",currency_symbol: "MRU"},
	{code: "MU",alpha_3: "MUS",name: "Maurice",capital: "Port Louis",continent: "Africa",continent_code: "AF",phone: 230,currency: "MUR",currency_symbol: "₨"},
	{code: "MX",alpha_3: "MEX",name: "Mexique",capital: "Mexico City",continent: "North America",continent_code: "NA",phone: 52,currency: "MXN",currency_symbol: "$"},
	{code: "FM",alpha_3: "FSM",name: "États fédérés de Micronésie",capital: "Palikir",continent: "Oceania",continent_code: "OC",phone: 691,currency: "USD",currency_symbol: "$"},
	{code: "MD",alpha_3: "MDA",name: "Moldavie",capital: "Chisinau",continent: "Europe",continent_code: "EU",phone: 373,currency: "MDL",currency_symbol: "L"},
	{code: "MC",alpha_3: "MCO",name: "Monaco",capital: "Monaco",continent: "Europe",continent_code: "EU",phone: 377,currency: "EUR",currency_symbol: "€"},
	{code: "MN",alpha_3: "MNG",name: "Mongolie",capital: "Ulan Bator",continent: "Asia",continent_code: "AS",phone: 976,currency: "MNT",currency_symbol: "₮"},
	{code: "ME",alpha_3: "MNE",name: "Monténégro",capital: "Podgorica",continent: "Europe",continent_code: "EU",phone: 382,currency: "EUR",currency_symbol: "€"},
	{code: "MA",alpha_3: "MAR",name: "Maroc",capital: "Rabat",continent: "Africa",continent_code: "AF",phone: 212,currency: "MAD",currency_symbol: "DH"},
	{code: "MZ",alpha_3: "MOZ",name: "Mozambique",capital: "Maputo",continent: "Africa",continent_code: "AF",phone: 258,currency: "MZN",currency_symbol: "MT"},
	{code: "MM",alpha_3: "MMR",name: "Myanmar (Birmanie)",capital: "Nay Pyi Taw",continent: "Asia",continent_code: "AS",phone: 95,currency: "MMK",currency_symbol: "K"},
	{code: "NA",alpha_3: "NAM",name: "Namibie",capital: "Windhoek",continent: "Africa",continent_code: "AF",phone: 264,currency: "NAD",currency_symbol: "$"},
	{code: "NR",alpha_3: "NRU",name: "Nauru",capital: "Yaren",continent: "Oceania",continent_code: "OC",phone: 674,currency: "AUD",currency_symbol: "$"},
	{code: "NP",alpha_3: "NPL",name: "Népal",capital: "Kathmandu",continent: "Asia",continent_code: "AS",phone: 977,currency: "NPR",currency_symbol: "₨"},
	{code: "NL",alpha_3: "NLD",name: "Pays-Bas",capital: "Amsterdam",continent: "Europe",continent_code: "EU",phone: 31,currency: "EUR",currency_symbol: "€"},
	{code: "NZ",alpha_3: "NZL",name: "Nouvelle-Zélande",capital: "Wellington",continent: "Oceania",continent_code: "OC",phone: 64,currency: "NZD",currency_symbol: "$"},
	{code: "NI",alpha_3: "NIC",name: "Nicaragua",capital: "Managua",continent: "North America",continent_code: "NA",phone: 505,currency: "NIO",currency_symbol: "C$"},
	{code: "NE",alpha_3: "NER",name: "Niger",capital: "Niamey",continent: "Africa",continent_code: "AF",phone: 227,currency: "XOF",currency_symbol: "CFA"},
	{code: "NG",alpha_3: "NGA",name: "Nigeria",capital: "Abuja",continent: "Africa",continent_code: "AF",phone: 234,currency: "NGN",currency_symbol: "₦"},
	{code: "NU",alpha_3: "NIU",name: "Niue",capital: "Alofi",continent: "Oceania",continent_code: "OC",phone: 683,currency: "NZD",currency_symbol: "$"},
	{code: "NO",alpha_3: "NOR",name: "Norvège",capital: "Oslo",continent: "Europe",continent_code: "EU",phone: 47,currency: "NOK",currency_symbol: "kr"},
	{code: "OM",alpha_3: "OMN",name: "Oman",capital: "Muscat",continent: "Asia",continent_code: "AS",phone: 968,currency: "OMR",currency_symbol: ".ع.ر"},
	{code: "PK",alpha_3: "PAK",name: "Pakistan",capital: "Islamabad",continent: "Asia",continent_code: "AS",phone: 92,currency: "PKR",currency_symbol: "₨"},
	{code: "PW",alpha_3: "PLW",name: "Palaos",capital: "Melekeok",continent: "Oceania",continent_code: "OC",phone: 680,currency: "USD",currency_symbol: "$"},
	{code: "PA",alpha_3: "PAN",name: "Panama",capital: "Panama City",continent: "North America",continent_code: "NA",phone: 507,currency: "PAB",currency_symbol: "B/."},
	{code: "PG",alpha_3: "PNG",name: "Papouasie Nouvelle Guinée",capital: "Port Moresby",continent: "Oceania",continent_code: "OC",phone: 675,currency: "PGK",currency_symbol: "K"},
	{code: "PY",alpha_3: "PRY",name: "Paraguay",capital: "Asuncion",continent: "South America",continent_code: "SA",phone: 595,currency: "PYG",currency_symbol: "₲"},
	{code: "PE",alpha_3: "PER",name: "Pérou",capital: "Lima",continent: "South America",continent_code: "SA",phone: 51,currency: "PEN",currency_symbol: "S/."},
	{code: "PH",alpha_3: "PHL",name: "Philippines",capital: "Manila",continent: "Asia",continent_code: "AS",phone: 63,currency: "PHP",currency_symbol: "₱"},
	{code: "PL",alpha_3: "POL",name: "Pologne",capital: "Warsaw",continent: "Europe",continent_code: "EU",phone: 48,currency: "PLN",currency_symbol: "zł"},
	{code: "PT",alpha_3: "PRT",name: "Portugal",capital: "Lisbon",continent: "Europe",continent_code: "EU",phone: 351,currency: "EUR",currency_symbol: "€"},
	{code: "QA",alpha_3: "QAT",name: "Qatar",capital: "Doha",continent: "Asia",continent_code: "AS",phone: 974,currency: "QAR",currency_symbol: "ق.ر"},
	{code: "RO",alpha_3: "ROM",name: "Roumanie",capital: "Bucharest",continent: "Europe",continent_code: "EU",phone: 40,currency: "RON",currency_symbol: "lei"},
	{code: "RU",alpha_3: "RUS",name: "Russie",capital: "Moscow",continent: "Asia",continent_code: "AS",phone: 7,currency: "RUB",currency_symbol: "₽"},
	{code: "RW",alpha_3: "RWA",name: "Rwanda",capital: "Kigali",continent: "Africa",continent_code: "AF",phone: 250,currency: "RWF",currency_symbol: "FRw"},
	{code: "KN",alpha_3: "KNA",name: "Saint-Christophe-et-Niévès",capital: "Basseterre",continent: "North America",continent_code: "NA",phone: 1869,currency: "XCD",currency_symbol: "$"},
	{code: "LC",alpha_3: "LCA",name: "Sainte-Lucie",capital: "Castries",continent: "North America",continent_code: "NA",phone: 1758,currency: "XCD",currency_symbol: "$"},
	{code: "VC",alpha_3: "VCT",name: "Saint-Vincent-et-les-Grenadines",capital: "Kingstown",continent: "North America",continent_code: "NA",phone: 1784,currency: "XCD",currency_symbol: "$"},
	{code: "WS",alpha_3: "WSM",name: "Samoa",capital: "Apia",continent: "Oceania",continent_code: "OC",phone: 684,currency: "WST",currency_symbol: "SAT"},
	{code: "SM",alpha_3: "SMR",name: "Saint Marin",capital: "San Marino",continent: "Europe",continent_code: "EU",phone: 378,currency: "EUR",currency_symbol: "€"},
	{code: "ST",alpha_3: "STP",name: "Sao Tomé et Principe",capital: "Sao Tome",continent: "Africa",continent_code: "AF",phone: 239,currency: "STD",currency_symbol: "Db"},
	{code: "SA",alpha_3: "SAU",name: "Arabie Saoudite",capital: "Riyadh",continent: "Asia",continent_code: "AS",phone: 966,currency: "SAR",currency_symbol: "﷼"},
	{code: "SN",alpha_3: "SEN",name: "Sénégal",capital: "Dakar",continent: "Africa",continent_code: "AF",phone: 221,currency: "XOF",currency_symbol: "CFA"},
	{code: "RS",alpha_3: "SRB",name: "Serbie",capital: "Belgrade",continent: "Europe",continent_code: "EU",phone: 381,currency: "RSD",currency_symbol: "din"},
	{code: "SC",alpha_3: "SYC",name: "Seychelles",capital: "Victoria",continent: "Africa",continent_code: "AF",phone: 248,currency: "SCR",currency_symbol: "SRe"},
	{code: "SL",alpha_3: "SLE",name: "Sierra Leone",capital: "Freetown",continent: "Africa",continent_code: "AF",phone: 232,currency: "SLL",currency_symbol: "Le"},
	{code: "SG",alpha_3: "SGP",name: "Singapour",capital: "Singapur",continent: "Asia",continent_code: "AS",phone: 65,currency: "SGD",currency_symbol: "$"},
	{code: "SK",alpha_3: "SVK",name: "Slovaquie",capital: "Bratislava",continent: "Europe",continent_code: "EU",phone: 421,currency: "EUR",currency_symbol: "€"},
	{code: "SI",alpha_3: "SVN",name: "Slovénie",capital: "Ljubljana",continent: "Europe",continent_code: "EU",phone: 386,currency: "EUR",currency_symbol: "€"},
	{code: "SB",alpha_3: "SLB",name: "Les îles Salomon",capital: "Honiara",continent: "Oceania",continent_code: "OC",phone: 677,currency: "SBD",currency_symbol: "Si$"},
	{code: "SO",alpha_3: "SOM",name: "Somalie",capital: "Mogadishu",continent: "Africa",continent_code: "AF",phone: 252,currency: "SOS",currency_symbol: "Sh.so."},
	{code: "ZA",alpha_3: "ZAF",name: "Afrique du Sud",capital: "Pretoria",continent: "Africa",continent_code: "AF",phone: 27,currency: "ZAR",currency_symbol: "R"},
	{code: "SS",alpha_3: "SSD",name: "Soudan du sud",capital: "Juba",continent: "Africa",continent_code: "AF",phone: 211,currency: "SSP",currency_symbol: "£"},
	{code: "ES",alpha_3: "ESP",name: "Espagne",capital: "Madrid",continent: "Europe",continent_code: "EU",phone: 34,currency: "EUR",currency_symbol: "€"},
	{code: "LK",alpha_3: "LKA",name: "Sri Lanka",capital: "Colombo",continent: "Asia",continent_code: "AS",phone: 94,currency: "LKR",currency_symbol: "Rs"},
	{code: "SD",alpha_3: "SDN",name: "Soudan",capital: "Khartoum",continent: "Africa",continent_code: "AF",phone: 249,currency: "SDG",currency_symbol: ".س.ج"},
	{code: "SR",alpha_3: "SUR",name: "Suriname",capital: "Paramaribo",continent: "South America",continent_code: "SA",phone: 597,currency: "SRD",currency_symbol: "$"},
	{code: "SJ",alpha_3: "SJM",name: "Svalbard et Jan Mayen",capital: "Longyearbyen",continent: "Europe",continent_code: "EU",phone: 47,currency: "NOK",currency_symbol: "kr"},
	{code: "SZ",alpha_3: "SWZ",name: "Eswatini (Swaziland)",capital: "Mbabane",continent: "Africa",continent_code: "AF",phone: 268,currency: "SZL",currency_symbol: "E"},
	{code: "SE",alpha_3: "SWE",name: "Suède",capital: "Stockholm",continent: "Europe",continent_code: "EU",phone: 46,currency: "SEK",currency_symbol: "kr"},
	{code: "CH",alpha_3: "CHE",name: "Suisse",capital: "Berne",continent: "Europe",continent_code: "EU",phone: 41,currency: "CHF",currency_symbol: "CHf"},
	{code: "SY",alpha_3: "SYR",name: "Syrie",capital: "Damascus",continent: "Asia",continent_code: "AS",phone: 963,currency: "SYP",currency_symbol: "LS"},
	{code: "TW",alpha_3: "TWN",name: "Taïwan",capital: "Taipei",continent: "Asia",continent_code: "AS",phone: 886,currency: "TWD",currency_symbol: "$"},
	{code: "TJ",alpha_3: "TJK",name: "Tadjikistan",capital: "Dushanbe",continent: "Asia",continent_code: "AS",phone: 992,currency: "TJS",currency_symbol: "SM"},
	{code: "TZ",alpha_3: "TZA",name: "Tanzanie",capital: "Dodoma",continent: "Africa",continent_code: "AF",phone: 255,currency: "TZS",currency_symbol: "TSh"},
	{code: "TH",alpha_3: "THA",name: "Thaïlande",capital: "Bangkok",continent: "Asia",continent_code: "AS",phone: 66,currency: "THB",currency_symbol: "฿"},
	{code: "TL",alpha_3: "TLS",name: "Timor oriental",capital: "Dili",continent: "Asia",continent_code: "AS",phone: 670,currency: "USD",currency_symbol: "$"},
	{code: "TG",alpha_3: "TGO",name: "Togo",capital: "Lome",continent: "Africa",continent_code: "AF",phone: 228,currency: "XOF",currency_symbol: "CFA"},
	{code: "TO",alpha_3: "TON",name: "Tonga",capital: "Nuku'alofa",continent: "Oceania",continent_code: "OC",phone: 676,currency: "TOP",currency_symbol: "$"},
	{code: "TT",alpha_3: "TTO",name: "Trinité-et-Tobago",capital: "Port of Spain",continent: "North America",continent_code: "NA",phone: 1868,currency: "TTD",currency_symbol: "$"},
	{code: "TN",alpha_3: "TUN",name: "Tunisie",capital: "Tunis",continent: "Africa",continent_code: "AF",phone: 216,currency: "TND",currency_symbol: "ت.د"},
	{code: "TR",alpha_3: "TUR",name: "Turquie",capital: "Ankara",continent: "Asia",continent_code: "AS",phone: 90,currency: "TRY",currency_symbol: "₺"},
	{code: "TM",alpha_3: "TKM",name: "Turkménistan",capital: "Ashgabat",continent: "Asia",continent_code: "AS",phone: 7370,currency: "TMT",currency_symbol: "T"},
	{code: "TV",alpha_3: "TUV",name: "Tuvalu",capital: "Funafuti",continent: "Oceania",continent_code: "OC",phone: 688,currency: "AUD",currency_symbol: "$"},
	{code: "UG",alpha_3: "UGA",name: "Ouganda",capital: "Kampala",continent: "Africa",continent_code: "AF",phone: 256,currency: "UGX",currency_symbol: "USh"},
	{code: "UA",alpha_3: "UKR",name: "Ukraine",capital: "Kiev",continent: "Europe",continent_code: "EU",phone: 380,currency: "UAH",currency_symbol: "₴"},
	{code: "AE",alpha_3: "ARE",name: "Emirats Arabes Unis",capital: "Abu Dhabi",continent: "Asia",continent_code: "AS",phone: 971,currency: "AED",currency_symbol: "إ.د"},
	{code: "GB",alpha_3: "GBR",name: "Royaume-Uni",capital: "London",continent: "Europe",continent_code: "EU",phone: 44,currency: "GBP",currency_symbol: "£"},
	{code: "US",alpha_3: "USA",name: "États-Unis",capital: "Washington",continent: "North America",continent_code: "NA",phone: 1,currency: "USD",currency_symbol: "$"},
	{code: "UY",alpha_3: "URY",name: "Uruguay",capital: "Montevideo",continent: "South America",continent_code: "SA",phone: 598,currency: "UYU",currency_symbol: "$"},
	{code: "UZ",alpha_3: "UZB",name: "Ouzbékistan",capital: "Tashkent",continent: "Asia",continent_code: "AS",phone: 998,currency: "UZS",currency_symbol: "лв"},
	{code: "VU",alpha_3: "VUT",name: "Vanuatu",capital: "Port Vila",continent: "Oceania",continent_code: "OC",phone: 678,currency: "VUV",currency_symbol: "VT"},
	{code: "VE",alpha_3: "VEN",name: "Venezuela",capital: "Caracas",continent: "South America",continent_code: "SA",phone: 58,currency: "VEF",currency_symbol: "Bs"},
	{code: "VN",alpha_3: "VNM",name: "VietNam",capital: "Hanoi",continent: "Asia",continent_code: "AS",phone: 84,currency: "VND",currency_symbol: "₫"},
	{code: "YE",alpha_3: "YEM",name: "Yémen",capital: "Sanaa",continent: "Asia",continent_code: "AS",phone: 967,currency: "YER",currency_symbol: "﷼"},
	{code: "ZM",alpha_3: "ZMB",name: "Zambie",capital: "Lusaka",continent: "Africa",continent_code: "AF",phone: 260,currency: "ZMW",currency_symbol: "ZK"},
	{code: "ZW",alpha_3: "ZWE",name: "Zimbabwe",capital: "Harare",continent: "Africa",continent_code: "AF",phone: 263,currency: "ZWL",currency_symbol: "$"}
];