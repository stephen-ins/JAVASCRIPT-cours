/*
        SELECTION PAR L'ID
*/

//  getElementById() est une fonction / sélecteur permettant de selectionner un élément HTML dans le DOM possédant un "id"
let maSection = document.getElementById("section");
console.log(maSection);
//  Pour récupérer le texte
console.log(maSection.innerText);
//  Pour récupérer le contenu HTML
console.log(maSection.innerHTML);

//  Pour modifier le contenu HTML
maSection.innerHTML = '<h3 class=title__h3">Mon Titre H3</h3>';
//  Ajout de classe et d'attribut à la section
maSection.setAttribute("class", "block__section");
maSection.style.padding = "1rem";
maSection.style.textAlign = "center";
maSection.style.fontSize = "1.5rem";

//  addEventListener est un écouteur d'évenements permettant d'ajouter un évènement (click, dbclick, keydown, mousenter etc...), ici au click sur l'élément HTML maSection, nous modifions le background
maSection.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

/* 
        SELECTION PAR LA CLASSE
*/

let elemsDiv = document.getElementsByClassName("block");
console.log("elemsDiv : " + elemsDiv); // [objet HTML collection]
console.log(elemsDiv);

// Exo : modifier le contenu de la deuxième div sélectionnée, remplacer "Block 2" par "Nous sommes mardi"

console.log(elemsDiv[1]);
elemsDiv[1].innerText = "Nous sommes mardi";

// Exo : appliquer du CSS sur ces balises via une boucle

console.log(elemsDiv.length); // 4 éléments

for (let z = 0; z < elemsDiv.length; z++) {
  console.log(elemsDiv[z]);
  //   elemsDiv[z].style.backgroundColor = "#0523";
  //   elemsDiv[z].style.padding = "4rem";
  //   elemsDiv[z].style.fontSize = "1.2rem";
  //   elemsDiv[z].style.textAlign = "left";
  //   elemsDiv[z].style.margin = "20px auto";
  elemsDiv[z].style.cssText =
    " background: #159006; border-radius: 0.5rem; padding: 1.5rem; color: #000697";

  elemsDiv[z].addEventListener("click", function () {
    // alert("test");
    // this représente l'objet lui-même elemsDiv[z]
    //  classList est un objet contenant les classes CSS de l'élément HTML
    // toggle() est une fonction permettant d'affecter la classe si l'élément HTML ne l'a pas, et de la supprimer si l'élément HTML la possède
    // il existe aussi add() / remove()
    console.log(this.classList);
    this.classList.toggle("rotation");
  });
}

/* 
        SELECTION PAR LE NOM DE LA BALISE
*/

let elemsP = document.getElementsByTagName("p");
console.log("elemsP:" + elemsP); // [object HTMLCollection]
console.log(elemsP);

console.log(Array.from(elemsP));
// La boucle forEach fonctionne uniquement avec les tableaux Array et non avec les objets
// Array.from(elemsP) --> permet de convertir l'objet HTMLCollection en tableau Array
// La boucle forEach permet de passer en revu tout éléments HTML <p>
// item est une variable de réception, qui réceptionne un élément <p> par tour de boucle
// onclick est l'évènement 'click' ajouté à chaque élément <p>
Array.from(elemsP).forEach((item) => {
  //   console.log(item);
  item.onclick = function () {
    // this représente l'objet lui-même <p>
    this.classList.toggle("scale");
  };
});

/* 
        SELECTION AVEC querySelector() et querySelectorAll()
*/

// querySelector() nous renvoie le premier élément correspondant au selecteur mis dans les parenthères
let premierElementP = document.querySelector("p");
console.log(premierElementP);

// querySelectorAll() nous renvoie tous les éléments correspondant au selecteur mis dans les parenthères
let lesDivEtlesP = document.querySelectorAll("div, p, #section");
console.log(lesDivEtlesP);

// Exo : Au click sur l'élément div class 'message', récupérer son contenu et l'envoyer directement dans la div class 'result'

const tag = document.querySelector(".message");
console.log(tag);

const result = document.querySelector("#result");
console.log(result);

tag.onclick = function () {
  //   alert("test");
  console.log(this.innerText);
  //   on affecte le contenu de texte de la div class CSS message à la div id CSS result
  result.innerText = this.innerText;
};
