// console.log("test");

const itemBlock1 = document.querySelector(".background__lightblue");
console.log(itemBlock1);

itemBlock1.addEventListener("click", function () {
  console.log(this.classList[1]);

  let classeActuelle = this.classList[1];
  switch (classeActuelle) {
    case "background__lightblue":
      console.log("class background__lightblue ok !!");
      this.classList.remove("background__lightblue"); // supprime la classe CSS
      this.classList.add("background__lightcoral"); // on affecte la classe CSS
      break;
    case "background__lightcoral":
      console.log("class background__lightcoral ok !!");
      this.classList.remove("background__lightcoral");
      this.classList.add("background__orange");
      break;
    case "background__orange":
      this.classList.remove("background__orange");
      this.classList.add("background__purple");
      break;
    case "background__purple":
      this.classList.remove("background__purple");
      this.classList.add("background__lightblue");
      break;
    // default:
    //   break;
  }
});

//              arrayPays, inputValue
const getMatch = (arr, str) => {
  // Lors de la correspondance, les différences de casse sont ignorées (minuscule, majuscule)
  // RegExp est une classe en javascript, un modèle, un plan de construction
  // new permet de créer un nouvel exemplaire de la classe RegExp
  let reg = new RegExp(str, "i");
  // arrayPays.filter, pays
  return arr.filter((item) => {
    // pays    inputValue      pays
    if (item.match(reg)) {
      // console.log(item);
      // console.log(reg);
      return item; // On retourne le pays
    }
  });
};
//                   this
const formSearch = (input) => {
  // console.log(input.value);
  // input représente le champs input de saisie
  // input.value permet de récupérer la valeur saisie dans le champs input
  const inputValue = input.value;
  const resultSearch = document.querySelector(".result__search");
  // console.log(resultSearch);
  let data = null;

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  let content = "";
  // On execute la fonction getMatch() pour trouver les correspondances entre le tableau des pays et la valeur saisie dans le formulaire de recherche
  data = getMatch(countryList, inputValue);
  console.log(data);
  // On boucle le résultat de la recherche, on génère un lien <a> pour chaque tour de boucle, et on stock l'ensemble du résultat dans la variable content grace à l'opérateur ++ (concaténation lors de l'affectation)
  data.forEach((element) => {
    // console.log(element);
    content +=
      "<a href='#' class='country__link' onclick='selectCountry(this)'>" +
      element +
      "</a>";
  });
  // console.log(content);

  /* 
  Exo : 
  1. Faites en sorte d'afficher un message si il n'y a pas de pays trouvé dans la recherche
  2. Faites en sorte de ne pas afficher la liste des pays si le champs de saisie est vide
  3. Faites en sorte d'afficher le pays selectionné dans le champs de saisie
*/

  // Exo 1 :

  // On envoi le résultat de la recherche dans la div class CSS resultSearch
  // On entre dans la condition IF seulement dans le cas où le tableau Array data est vide, c'est à dire lorsqu'il n'y a aucune correspondance entre la saisie de l'utilisateur et le tableau Array CountryList
  resultSearch.innerHTML = content;

  if (data.length == 0) {
    resultSearch.innerHTML =
      '<p class="error__msg">Aucun résultat à votre recherche</p>';
  }
  // else {
  // Sinon dans les autres cas, on entre dans les conditions else dans le cas où le tableau Array data contient un résultat, c'est à dire des noms de pays.
  // resultSearch.innerHTML = message;

  // Exo 2 :
  // inputValue permet de stocker les données saisie par l'utilisateur dans le champs de recherche du formulaire (input.value)
  // On entre dans la condition if seulement dans le cas où l'internaute n'a rien saisi dans le champs du formulaire
  if (inputValue == 0) {
    // console.log("aucune données saisie");
    resultSearch.innerHTML = "";
  }
};

// Exo 3 :

const selectCountry = (link) => {
  // link est une variable de réception que NOUS définissons, elle réceptionne ici le lien d'un pays sur lequel nous avons cliqué

  // récupère le contenu text du lien, c'est à dire le pays
  const linkText = link.innerText;
  // On sélectionne le champs saisi <input>
  const inputSearch = document.querySelector(".input__text");
  // On sélectionne la div <div class="result__search">
  const resultSearch = document.querySelector(".result__search");
  console.log(link.innerText);
  console.log(inputSearch);
  console.log(resultSearch);

  // On affecte comme valeur par défaut dans le champs de saisi le contenu text du lien sur lien sur lequel nous avons cliqué
  inputSearch.value = linkText;

  // On vide la div <div class="result__search"> en insérant une chaine de caractère vide
  resultSearch.innerHTML = "";
};

// Exemple contrôle formulaire

const form = document.querySelector(".form");
// console.log(form);
form.addEventListener("submit", function (event) {
  // event est un objet qui représente l'évènement submit
  // preventDefault() est une fonction permettant le comportement initial ici de mon formulaire, qui a pour but de soumettre les données du formulaire et de recharger la page
  event.preventDefault();

  // document.querySelector(".error__prenom").innerHTML = "test";

  // console.log(event);
  // console.log("test");

  const inputPrenom = document.querySelector("#prenom");
  const displayErrorPrenom = document.querySelector(".error__prenom");
  const inputNom = document.querySelector("#nom");
  const displayErrorNom = document.querySelector(".error__nom");
  const displayOkForm = document.querySelector(".message__validation");
  // console.log(displayOkForm);
  // Exo : si le champs n'est pas vide, retirer le message d'erreur et la bordure
  let count = 0;

  /*
  Exo :
  1. Faites en sorte de retirer la bordure et le message d'erreur si l'internaute a correctement rempli le formulaire
  2. Faites le même pour le champs nom
  3. Faites en sorte d'afficher un message de validation si l'utilisateur a correctement rempli le formulaire
*/
  if (inputPrenom.value == 0) {
    let errorPrenom =
      '<span class="text__error">Saisi ton prenom bordel !!!</span>';
    displayErrorPrenom.innerHTML = errorPrenom;
    inputPrenom.classList.add("border");
    count++;
  } else {
    inputPrenom.classList.remove("border");
    displayErrorPrenom.innerHTML = "";
  }

  if (inputNom.value == 0) {
    let errorNom = '<span class="text__error">Saisi ton nom bordel !!!</span>';
    displayErrorNom.innerHTML = errorNom;
    inputNom.classList.add("border");
    count++;
  } else {
    inputNom.classList.remove("border");
    displayErrorNom.innerHTML = "";
  }

  // console.log(count);

  if (count == 0) {
    let okForm =
      '<span class="message__validation">Vous avez correctement saisi le formulaire</span>';
    displayOkForm.innerHTML = okForm;
  } else {
    displayOkForm.innerHTML = "";
  }
});
