/*
Entrainement ::
    -- 1 -- 	COMMENTAIRES
    -- 2 --		AFFICHAGE
    -- 3 -- 	VARIABLES
    -- 4 -- 	TYPES DE DONNÉES
    -- 5 -- 	CONSTANTES
    -- 6 -- 	CONCATÉNATION
    -- 7 -- 	OPÉRATEURS ARITHMÉTIQUES
    -- 8 -- 	CONDITIONS
    -- 9 -- 	OPERATEURS
    -- 10 -- 	CONDITIONS SWITCH
    -- 11 -- 	BOUCLES
    -- 12 -- 	FONCTION PREDEFINIE
    -- 13 -- 	FONCTION UTILISATEUR
    -- 14 -- 	PORTEE DES VARIABLES
    -- 15 -- 	ARRAY
    -- 16 -- 	OBJECT
    Chapitres 16, 17 supplémentaire.
*/

//  -- 1 -- COMMENTAIRE
//  Un commentaire sur une seule ligne
/*
    Un commentaire sur 
    plusieurs lignes
*/

//  -- 2 -- AFFICHAGE / OUTILS DE DEBUG
//  console.log est un outil de debug permettant de controler les données selectionnées dans le code JS, le résultat apparait dans la console de l'inspecteur du navigateur.
console.log("Attention aux erreurs de synthaxes");
console.log(document);
document.write("<h1 class='title__h1'>JAVASCRIPT</h1>");

// document représente le DOM (document objet model), qui est un programme interne à notre navigateur qui fait en sorte que chaque élément (balises, attribut, évènememts etc...) soit récupérable, manipulable et exploitable par le langage JAVASCRIPT.

//  write est une fonction prédéfini permettant d'écrire dans le DOM.
// nous l'utilisons uniquement pour ce fichier !! Ce n'est pas une bonne pratique pour la suite !!

// alert('test'); // Boite de dialogue
// confirm('Etes-vous sur ?'); // Boite de dialogue avec confirmation
// prompt('Quel age as-tu ?'); // Boite de dialogue avec champs de saisie

document.write(
  "<h2 class='title__h2'>Variables : déclaration / affectation</h2>"
);

// une variable est une "boite virtuelle" permettant de conserver une donnée. Cette donnée peut-être de n'importe qu'elle type, comme des chiffres, une chaine de caractère, un tableau, un objet etc...
// let permet de déclarer une variable et le simple '=' permet d'affecter la valeur à la variable.
let maboite = 45;
// let maboite = 56; !!! il n'est pas possible de déclarer 2 fois la même variable portant le même nom.
console.log(maboite);
document.write(maboite);
document.write("<br>");

maboite = "changement de valeur";
document.write(maboite);

// il est possible de déclarer plusieurs varibles en une seule fois avec let
let prenom = "Sylvie",
  nom = "Robert",
  genre = "féminin";

document.write("<br>");
document.write(prenom); // affiche Sylvie

prenom = nom; // assigne  la variable nom à la variable prenom
document.write("<br>");
document.write(prenom); // affiche Robert

// la concaténation lors de l'affectation, cela ajoute un valeur à la variable sans remplacer son contenu d'origine
let fruit = "pomme";
fruit += " fraise";
document.write("<br>");
document.write(fruit); // affiche "pomme fraise"

document.write('<h2 class="title__h2">Les types de données</h2>');

let chiffre = 20;
let negatif = -10;
document.write(typeof chiffre + "<br>"); // varible de type NUMBER
// le + permet de concaténer, c'est à dire afficher des données les unes à la suite des autres

let monTexte = "Voici une phrase entre double quotes";
let apostrophes =
  "Pour l'utilisation d'une apostrophe, il faut utiliser un caractère d'échappement"; // il faut échapper les apostrophes avec le caractère anti-slash '\'

document.write(typeof monTexte + "<br>"); // variable de type STRING

// typeof est une fonction pédéfinie qui retourne le type d'une variable
let choix = true; // ou false
document.write(typeof choix + "<br>"); // variable de type BOOLEAN

let maVariable; // déclaration sans affectation
document.write(maVariable + "<br>"); // affiche undefined (non défini) car cette variable est déclarée mais non affectée

document.write('<h2 class="title__h2">Les constantes</h2>');
// une constante est une "boite virtuelle" permettant de conserver une donnée, mais sa valeur ne peut pas être modifiée, autrement dit : sa valeur est constante

const BOUGE_PAS = "Ma constante impossible à modifier";
// const BOUGE_PAS = "redeclaration impossible à modifier"; !! error ! il n'est pas possible de redéclarer une constante
// BOUGE_PAS = "Autre valeur"; !! error !! il n'est pas possible de modifier la valeur d'une constante
document.write(BOUGE_PAS + "<br>");

// Exercice : afficher vert-jaune-rouge avec les titrets sur la page web en plaçant chaque couleur dans une variable. Chaque mot doit être de la bonne couleur.

let vert = '- <span class="vert">vert</span>',
  jaune = '- <span class="jaune">jaune</span>',
  rouge = '- <span class="rouge">rouge</span>';

document.write("<br>");
document.write(
  vert + "<br>" + "<br>" + jaune + "<br>" + "<br>" + rouge + "<br>" + "<br>"
);

// ecriture templating
// `` backquotes Alt Gr + 7 (accents inversés)
let p = "Manu MACRON";
let result = `Je m'appel ${p} et je suis un crétin !!`;
document.write(result);

document.write('<h2 class="title__h2">Les opérateurs arithmétiques</h2>');

let resultat = 10 + 5;
document.write(resultat + "<br>"); //15

resultat = 10 - 5;
document.write(resultat + "<br>"); //5

resultat = 10 * 5;
document.write(resultat + "<br>"); //50

resultat = 10 / 5;
document.write(resultat + "<br>"); //2

resultat = 10 % 3; // le modulo, c'est le reste de la division, j'ai 10 billes et 3 personnes, je donne 3 billes à chaque personne, il en reste 1.
document.write(resultat + "<br>");

let chiffre1 = 10;
chiffre = 5;

resultat = chiffre1 + chiffre;
document.write(resultat + "<br>"); //15
chiffre1 = chiffre1 + 5; // chiffre1 = 10 + 5;
chiffre1 += 5; // raccourci de la ligne ci-dessus, fonctionnne avec tout les opérateurs: -= *= /= %=

document.write(
  '<h2 class="title__h2">Les conditions et opérateurs de comparaison</h2>'
);

/*
    = affectation
    == comparaison de la valeur
    === comparaison de la valeur et du type
    < strictement inférieur à
    > strictement supérieur à 
    <= inférieur ou égal à 
    >= supérieur ou égal à
    ! n'est pas 
    != différent de 
    && ET
    || OU
*/

let a = 10,
  b = 5,
  c = 2;

// Si la valeur de A est strictement supérieur à la valeur de B, la condition retourne TRUE et le code dans les accolades de la condition IF s'éxécute
// 10>5
if (a > b) {
  document.write("le chiffre A est supérieur au chiffre B<br>");
} else {
  // le cas ELSE est le cas par défaut, dans tout les autres cas, si la condition IF retourne FALSE, nous entrons alors dans le cas ELSE
  document.write("le chiffre =B est supérieur au chiffre A<br>");
}

// else (b>c) !! il n'est pas possible d'ajouter une condition au cas par défaut ELSE
// la condition ELSE n'est pas obligatoire

// IF avec AND
// Pour que IF retourne TRUE, il faut que les 2 conditions soient vérifiées
// 10 > 5     5 > 2
if (a > b && b > c) {
  document.write("OK pour les 2 conditions<br>");
}

// IF avec OR
// pour que IF retourne, il faut qu'au moins une des 2 conditions ou les 2 soient vérifiées
// Si la VALEUR de la variable est égale à 9
// 10 == 9    5 > 2
if (a == 9 || b > c) {
  document.write("OK pour au moins l'une des 2 conditions<br>");
}

// Cas supplémentaire : IF / ELSE IF / ELSE
// 10 == 8
if (a == 8) {
  document.write("A est égale à 8<br>");
  // 10 !=10
} else if (a != 10) {
  document.write("A est différent de 10<br>");
} else {
  document.write("Tout le monde à faux !<br>");
}

// ELSE IF permet d'ajouter des cas supplémentaire à la condition IF. Si un des cas IF / ELSE est vérifié, retourne TRUE, on sort de la condition.

let varA = 1,
  varB = "1";

// Avec les 3 égales, la condition retourne FALSE, car les valeurs sont les mêmes mais le type est différent, une varible STRING et une variable de type NUMBER, c'est une mode strict qui compare la VALEUR et le TYPE
if (varA === varB) {
  document.write("il s'agit de la même chose<br>");
}

// switch permet de comparer une valeur à différent cas.
// les case représente les cas dans lesquel nous pouvons portentionnellement tomber
// break permet de stopper la condition SWITCH si nous entrons dans un des cas
// le cas default n'est pas obligatoire
let perso = "Mario";
switch (perso) {
  case "Luigi":
    document.write("C'est le Luigi le meilleur<br>");
    break;
  case "Bowser":
    document.write("C'est Bowser le meilleur<br>");
    break;
  case "Peach":
    document.write("C'est Peach la meilleure<br>");
    break;
  default:
    document.write("Mais vous êtes fou c'est Mario le meilleur !<br>");
    break;
}

// EXO : est il possible de réecrire la conditon SWITCH avec des conditions IF / ELSE IF / ELSE ? Si OUI, faites le.

if (perso == "Luigi") {
  document.write("C'est Luigi le meilleur<br>");
} else if (perso == "Bowser") {
  document.write("C'est Bowser le meilleur<br>");
} else if (perso == "Peach") {
  document.write("C'est Peach la meilleure<br>");
} else {
  document.write("C'est Mario le meilleur<br>");
}
// Si il y'a qu'une seule instruction dans les conditions; les accolades ne sont pas nécessaires

document.write('<h2 class="title__h2">Les BOUCLES</h2>');

//bouble WHILE
let i = 0; // '--' point de départ, initialisation
// 6 FALSE
while (i <= 5) {
  //              0---
  document.write(i + "---");
  i++; // incrémentation équivaut à i = i + 1
}
// 0---1---2---3---4---5---

document.write("<br>");

// Exo : retirer les '---' à la fin : 0---1---2---3---4---5

let k = 0;
//       5
while (k <= 5) {
  // on entre 1 seule fois dans le IF, au dernier tour, lorsque k vaut 5
  if (k == 5) document.write(k);
  // on entre ici dans les autres cas lorsque k vaut 0, 1, 2, 3 et 4
  else document.write(k + "---");
  k++;
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// la boucle FOR
document.write('<table class="table"><tr>');

for (let l = 0; l < 10; l++) {
  document.write("<td>" + l + "</td>");
}
document.write("</tr></table>");

document.write('<table class="table"></tr>');

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<hr>");
document.write("<br>");
document.write("<br>");

let compteur = 1;
document.write('<table class="table">');

for (let ligne = 0; ligne < 10; ligne++) {
  document.write("<tr>");

  for (let cellule = 0; cellule < 10; cellule++) {
    document.write("<td>" + compteur + "</td>");
    compteur++;
  }
  document.write("</tr>");
}
document.write("</table>");

// la première boucle FOR tourne 10 fois et crée 10 lignes <tr> dans le tableau
// la deuxième boucle FOR tourne 10 fois et crée 10 cellules dans chaque ligne <tr> du tableau
// 1 tour de la première boucle FOR entraine 10 tours de la deuxième
// la variable compteur ne réinitialise jamais à 0, on l'incrémente quelque soit le tour de boucle;

// une ligne , 10 cellules *10

document.write("<br>");
domCreateElement("hr");

// document.write('<h2 class="title__h2">Les FONCTIONS PREDEFINIES</h2>');

// createElement est fonction predefinie permettant de créer une document HTML dans le DOM.
const titleFonctions = document.createElement("h2");
// setAttribute est une fonction prédéfinie permettant d'ajouter un attribut et sa valeur à un élément HTML
titleFonctions.setAttribute("class", "title__h2");
// innerText est une propriété qui permet d'ajouter d'insérer du texte dans une élément HTML.
titleFonctions.innerText = "Les FONCTIONS PREDEFINIES";
// querySelector() est une fonction prédéfinie permettant de séléctionner des éléments HTML dans le DOM.
//  append est une fonction prédéfinie permettant d'insérer le title <h2> crée dans le body.
document.querySelector("body").append(titleFonctions);
console.log(document.querySelector("body"));
console.log(titleFonctions);
domCreateElement("hr");

let phrase = "Salut je m'appel Greg !";
document.write("Greg se trouve à la position: " + phrase.indexOf("Greg"));
console.log(phrase + "<br>");

//  phrase est une variable. C'est surtout un objet STRING qui contient des fonctions prédéfinies. Une fonction prédéfinie est un morceau de code encapsulé qu'on appel au besoin pour executer une action précise.
// indexOf() est une fonction prédéfini qui retourne ici la position de la chaine de caractère 'Greg' dans la variable phrase.

// toUpperCase(): fonction prédéfinie permettant de mettre la chaine de caractère en majuscule.
let body = document.querySelector("body");
let paragraph = document.createElement("p");
paragraph.innerText = phrase.toUpperCase();
body.append(paragraph);

// créer une balise h2 pour le titre : Fonctions utilisateur : déclaration / exécution

document.write("<br>");

// La manière appelée FUNCTION STATEMENT
function maFonction() {
  return document.write("<p>Vivement l'apéro !!</p>");
}

maFonction(); // execution de la fonction

// La fonction appelée FUNCTION OPERATOR
// fonction fléchée
const maFonction2 = () => {
  return document.write("<p>Vivement le week-end!</p>");
};
maFonction2();

// une fonction permet d'éviter la redondance d'actions, si nous avons un code que nous dupliquons plusieurs fois dans le script, nous devons encapsuler le code dans une fonction, nous avons la possibilté de créer nos propres fonctions avec nos propres paramètres.

// Fonction avec arguments
// prénom est une variable de reception que nous definissons, elle peut avoir une valeur par défaut, par conséquent, à l'execution de la fonction, nous ne sommes pas obligé de lui transmettre un argument.
//                    "tonton Gérard"
const direBonjour = (prenom = "Jason") => {
  //                                    "tonton Gérard"
  return document.write("<p>Bonjour " + prenom + " ! Comment vas-tu ?</p>");
};

direBonjour("tonton Gérard"); // execution de la fonction avec arguments
direBonjour();

const titleUtilisateur = document.createElement("h2");
titleUtilisateur.setAttribute("class", "title__h2");
titleUtilisateur.innerText = "Fonctions utilisateur : déclaration / exécution";
document.querySelector("body").append(titleUtilisateur);
// console.log(document.querySelector("body"));
// console.log(titleUtilisateur);

//                          'p'   'class'   'paragraph'   'test fonction'
function domCreateElement(
  tag, // "p"
  attribute = false, // "class"
  value = false, // "paragraph"
  content = false // "test fonction"
) {
  const item = document.createElement(tag);

  if (attribute && value) item.setAttribute(attribute, value);

  if (content) item.innerText = content;

  document.querySelector("body").append(item);
}

domCreateElement("p", "class", "paragraph", "test fonction");
domCreateElement("hr");

// const meteo = (saison, temperature) => {
//   let result =
//     " Nous sommes en " + saison + " et il fait " + temperature + " degré(s) ";
//   domCreateElement("p", "class", "paragraph", result);
// };

// meteo("autommne", 13);
/*
    = affectation
    == comparaison de la valeur
    === comparaison de la valeur et du type
    < strictement inférieur à
    > strictement supérieur à 
    <= inférieur ou égal à 
    >= supérieur ou égal à
    ! n'est pas 
    != différent de 
    && ET
    || OU
*/

//  Exo: faite en sorte que degré s'écrive avec un 's' au pluriel et sans s au singulier. Et penser aux articles ("en" été, "au" printemps)

//                          'p'   'class'   'paragraph'   'test fonction'
// const domCreateElement = (tag, attribute, value, content) => {
//   const item = document.createElement(tag);
//   item.setAttribute(attribute, value);
//   item.innerText = content;
//   document.querySelector("body").append(item);
// };

const articleSaison = {
  printemps: "au",
  été: "en",
  automne: "en",
  hiver: "en",
};

const meteo = (saison, temperature) => {
  let article = articleSaison[saison] || "en";
  let degre = temperature > 1 ? "degrés" : "degré";
  let result = `Nous sommes ${article} ${saison} et il fait ${temperature} ${degre}`;

  domCreateElement("p", "class", "paragraph", result);
};

meteo("printemps", 1);
meteo("été", 25);
meteo("automne", 13);
meteo("hiver", -5);

domCreateElement("p", "class", "paragraph", "test fonction");
domCreateElement("hr");

domCreateElement("hr");

const exoMeteo = (saison, temperature) => {
  let s = "s";
  if (temperature > 1 || temperature < -1) s = "s";
  else s = "";

  let art = "en";
  if (saison == "printemps") art = "au";

  let result =
    " Nous sommes " +
    art +
    " " +
    saison +
    " et il fait " +
    temperature +
    " degré " +
    s;
  domCreateElement("p", "class", "paragraph", result);
};

document.write("<br>");

exoMeteo("hiver", 0);
exoMeteo("hiver", 1);
exoMeteo("hiver", -1);
exoMeteo("hiver", 3);
exoMeteo("hiver", -4);
exoMeteo("printemps", 0);

document.write("<br>");
document.write("<br>");
document.write("<br>");

const calculTVA = (montant) => {
  let result = montant + " avec une TVA de 20% :" + " " + montant * 1.2 + " €";
  domCreateElement("p", "class", "paragraph", result);
};

calculTVA(200);
calculTVA(600);

// Exo : améliorer cette fonction pour faire en sorte de calculer un montant avec le taux de notre choix (5.5%, 7%, 19% etc ...). Avec calcul du taux.

const calculTVA2 = (montant, taux = 20) => {
  let calcul = montant * (1 + taux / 100);
  let result = montant + "€ avec une TVA de  " + taux + "% :" + calcul + "€";
  domCreateElement("p", "class", "paragraph", result);
};

calculTVA2(200, 35);
calculTVA2(450);

document.write("<br>");
document.write("<br>");
document.write("<br>");

domCreateElement("h2", "class", "title__h2", "Espace LOCAL / GLOBAL");

// en javascript, il existe 2 espaces : local et global lorsque nous travaillons dans une fonction, nous sommes dans un espace local, toute les variables déclarées dans une fonction ne sont accessiblent que dans la fonction. L'espace globla, l'espace par défaut, tout ce qui est déclaré à l'extérieur d'une fonction.
let personnage = "Mario"; // variable explicite externe donc global

const jeuxVideo = () => {
  let personnage = "Luigi"; // variable explicite interne donc local
  return personnage;
};

domCreateElement("p", "class", "paragraph", personnage);
domCreateElement("p", "class", "paragraph", jeuxVideo());
domCreateElement("p", "class", "paragraph", personnage);

document.write("<br>");
document.write("<br>");

let personnage2 = "Peach";
domCreateElement("hr");

const jeuxVideo2 = () => {
  personnage2 = "Luigi";
  return personnage2;
};

domCreateElement("p", "class", "paragraph", personnage2); // affiche peach
domCreateElement("p", "class", "paragraph", jeuxVideo2()); // en executant la fonction on change le contenu de la variable personnage2
domCreateElement("p", "class", "paragraph", personnage2);

// Il est possible d'importer une variable de l'espace global (à l'extérieur d'une fonction) vers l'espace local (à l'intérieur de la fonction). L'inverse n'est pas possible.

document.write("<br>");
document.write("<br>");
domCreateElement("hr");

domCreateElement(
  "h2",
  "class",
  "title__h2",
  "Les immediatly Invoked Functions Expressions"
);

// En javascrip nous avons la possibilité de créer des fonctions anonymes pour les exécuter immédiatement. Pratique pour récupérer automatiquement des données de la base de données.

document.write("<br>");
document.write("<br>");
domCreateElement("hr");

(function () {
  domCreateElement(
    "p",
    "class",
    "paragraph",
    "Cette fonction est automatiquement executée"
  );
})();

document.write("<br>");
domCreateElement("hr");

(() => {
  domCreateElement(
    "p",
    "class",
    "paragraph",
    "Cette fonction est automatiquement executée,fonction fléchée"
  );
})();

document.write("<br>");
domCreateElement("hr");

domCreateElement("h2", "class", "title__h2", "Les types ARRAY");

document.write("<br>");
domCreateElement("hr");

let array = ["Mario", "Luigi", "Peach", "Todd", "Bowser"];
console.log(array);

// indice valeur
// 0:"Mario"
// 1:"Luigi"
// 2:"Peach"
// 3:"Todd"
// 4:"Bowser"
domCreateElement("hr");

// Exo : tenter d'afficher "Peach" en passant par le tableau de données ARRAY
// on va piocher, crocheter à l'indice correspondant.
domCreateElement("p", "class", "paragraph", array[2]);

// Remplacement de Todd par Yoshi;
array[3] = "Yoshi";
console.log(array);

// length est une proprité permettant d'éléments déclaré dans le tableau ARRAY
let maxLength =
  "Nombre d'éléments dans le tableau ARRAY :" + " " + array.length;
domCreateElement("p", "class", "paragraph", maxLength);

document.write("<br>");
domCreateElement("hr");

// let array = ["Mario", "Luigi", "Peach", "Yoshi", "Bowser"];

// La boucle forEach permet de passer en revu un tableau de données Array
// element de variable de reception que nous définissions , elle recteptionne une valeur du tableau Array par tour de boucle.
// Une fois le tableau entièrement parcouru, la boucle s'arrête automatiquement
array.forEach((element) => {
  // outil de debug :
  console.log(element);
  // affichage de la page Web :
  domCreateElement("p", "class", "paragraph", element);
});

document.write("<br>");
domCreateElement("hr");

// lorsqu'il y' 2 variables déclarées, l'une parcours la colonne des indices (index) et l'autre parcours la colonne des valeurs (element)
array.forEach((element, index) => {
  // outil de debug :
  console.log(index + ":" + element);
  // affichage sur la page Web :
  domCreateElement("p", "class", "paragraph", index + " : " + element);
});

document.write("<br>");
document.write("<br>");
domCreateElement("hr");

// Exo : faîtes la même chose, le même affichage à l'aide d'une boucle for

for (let i = 0; i < array.length; i++) {
  console.log(i);
  //                                          0           array(0) --> Mario,
  //                                          1           array(1) --> Luigi ... etc
  domCreateElement("p", "class", "paragraph", i + " : " + array[i]);
}
domCreateElement("hr");

document.write("<br>");
document.write("<br>");

// Tableau multidimensionnel
let recettes = [
  ["Poulet coco", "Poulet", "Noix de coco", "Oignons", "Ail", "Gingembre"],
  ["Tarte aux pommes", "Pâte feuilletée", "Pommes", "Sucre", "Farine", "Oeufs"],
];

console.log(recettes);

// Exo : tenter d'afficher "pâte feuilletée" en passant par le tableau multidimmensionnel "recettes"

domCreateElement("p", "class", "paragraph", recettes[1][1]);

// Exo : afficher successivement les données du tableau multidimensionnel à l'aide de boucle (2 boucles FOR)
/*
  for (){
  }for()
*/

document.write("<br>");
document.write("<br>");
domCreateElement("hr");

for (let tab = 0; tab < recettes.length; tab++) {
  console.log(recettes.length);
  domCreateElement("p", "class", "paragraph", recettes[0]);
  //          recettes[0]
  //          recettes[1]
  console.log(recettes[tab]);
  //                             < 6
  //                             recettes[0].length
  //                             0 < 6
  for (let element = 0; element < recettes[tab].length; element++) {
    //                                          recettes [0][0] --> poulet coco
    //                                          recettes [0][1] --> poulet
    //                                          recettes [0][2] --> lait de coco
    //                                          recettes [0][5] --> gingembre
    //                                          recettes [1][0] --> tarte aux pommes
    domCreateElement("p", "class", "paragraph", recettes[tab][element]);
  }
}

document.write("<br>");
document.write("<br>");
domCreateElement("hr");

// Exo : afficher successivement les données du tableau multidimensionnel à l'aide de la boucle forEach (2 boulces forEach)

// 2 tours
recettes.forEach((tab) => {
  console.log(tab); // tab[0] --> l'ensemble du tableau ingrédient recette : poulet coco

  //            Gingembre
  tab.forEach((ingredient) => {
    console.log(ingredient);
    domCreateElement("p", "class", "paragraph", ingredient);
  });
});

domCreateElement("hr");
domCreateElement("br");
domCreateElement("hr");

domCreateElement("h2", "class", "title__h2", "Les OBJETS");

domCreateElement("br");
domCreateElement("br");

let monObjet = {};
monObjet.prenom = "Stephen"; // Création d'une propriété prénom
console.log(monObjet);

domCreateElement("p", "class", "paragraph", monObjet.prenom);

let sangoku = {
  nom: "San",
  prenom: "Goku",
  age: 35,
};

console.log(sangoku);
let msg =
  "Je m'appel " +
  sangoku.nom +
  sangoku.prenom +
  " et j'ai " +
  sangoku.age +
  " ans.";
domCreateElement("p", "class", "paragraph", msg);

let voiture = {
  marque: "BMW",
  modele: "Série 3",
  annee: 2020,
  couleur: "noir",
  changerCouleur: function (nouvelleCouleur) {
    // voiture.couleur = rouge
    return (this.couleur = nouvelleCouleur); // le mot clé 'this' veut dire lui même (donc l'objet dans lequel on se trouve 'voiture') voiture.couleur
  },
  optionDeSerie: [
    "clim",
    "autoradio",
    "siege chauffant",
    "park-assist",
    "cuir",
  ],
  toitOuvrant: true,
  motorisation: {
    energie: "diesel",
    puissance: "110 cv",
  },

  infos: function () {
    // Avec les fonctions fléchées, this représente la fenêtre du navigateur et nom l'objet voiture
    let marque = this.marque,
      modele = this.modele,
      couleur = this.couleur,
      annee = this.annee,
      optionDeSerie = this.optionDeSerie.join("/"); // join() permet de rassembler les éléments avec un séparateur

    let msg =
      marque +
      " - " +
      modele +
      " - " +
      couleur +
      " - " +
      annee +
      " - " +
      optionDeSerie;
    domCreateElement("p", "class", "paragraph", msg);
  },
};

domCreateElement("br");

console.log(voiture);
domCreateElement("p", "class", "paragraph", voiture.marque); // affiche BMW
domCreateElement("p", "class", "paragraph", voiture.couleur); // affiche noir
voiture.changerCouleur("rouge");
domCreateElement("p", "class", "paragraph", voiture.couleur); // affiche rouge

domCreateElement("br");

voiture.infos();

domCreateElement("p", "class", "paragraph", voiture.motorisation.energie);
// affiche diesel

domCreateElement("br");

voiture.optionDeSerie.forEach((el) => {
  domCreateElement("p", "class", "paragraph", el);
});

domCreateElement("br");
domCreateElement("hr");
domCreateElement("br");
