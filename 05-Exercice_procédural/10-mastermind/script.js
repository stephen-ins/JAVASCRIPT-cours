const gameTable = document.querySelector("#gameTable");
// console.log("Table de jeu:", gameTable);
const gamePlateau = document.querySelector("#gamePlateau table");
// console.log("Plateau de jeu:", gamePlateau);
const pionPostion = document.querySelector("#pionPostion");
// console.log("La postion des pions: ", pionPostion);
const message = document.querySelector("#message");
// console.log(message);
// Création du bouton rejouer
const gameButton = document.querySelector(".button__submit");
// console.log("bouton jouer", gameButton);
gameButton.addEventListener("click", () => {
  location.reload();
  // console.log("clique sur le bouton rejouer:", gameButton);
});

// Création des couleurs
const colors = ["blue", "red", "yellow", "green", "white", "black"];
// console.log("les couleurs:", colors);
// console.log("le jaune:", colors[0]);
let maxEssai = 12;
let essai = 1;
let clickColor = 0;
let index = 0;
let tentative = [];

function decrementeEssai() {
  maxEssai--;
  if (maxEssai === 0) {
    // location.reload();
    message.innerHTML = `Game Over ! La combinaison était : ${combinaison.join(
      " , "
    )} `;
  }
}

// fonction de génération de couleurs aléatoires
function generateColors() {
  return Array.from(
    { length: 4 },
    () => colors[Math.floor(Math.random() * colors.length)]
  );
}
// console.log("génération aléatoire des couleurs:", generateColors());

const combinaison = generateColors();
console.log("La combinaison secrète :", combinaison);

// Tableau et index des couleurs
colors.forEach(function (item, index, array) {
  console.log(item, index);
});

const choiceColor = document.querySelectorAll(".color");
// console.log(choiceColor);
choiceColor.forEach((item) => {
  item.addEventListener("click", () => {
    // alert('test');

    clickColor++;

    let circle = document.querySelectorAll(".tr" + essai);
    console.log(circle);

    console.log(item.classList);
    circle[index].classList.add(item.classList[1]);
    tentative[index] = item.classList[1];

    console.log("index : " + index);

    index++;

    // l'utilisateur rempli les 4 couleurs
    if (clickColor % 4 === 0) {
      console.log("tentative complete:", tentative);

      // comparaison avec la combinaison secrete
      const result = compareColors(combinaison, tentative);
      console.log("resultat de comparaison:", result);

      let circleIndices = document.querySelectorAll(".trIndice" + essai);
      console.log("les cercles indices :", circleIndices);
      for (let i = 0; i < result.bienPlace; i++) {
        circleIndices[i].classList.add("bienPlace");
      }
      for (let j = 0; j < result.bienPlace + result.malPlace; j++) {
        circleIndices[j].classList.add("malPlace");
      }

      decrementeEssai();
      essai++;
      index = 0;
      tentative = [];
    }
  });
});

// Fonction de comparaison
function compareColors(combinaison, tentative) {
  let bienPlace = 0;
  let malPlace = 0;
  const controleIndices = [];

  // verifier bien place
  for (let i = 0; i < 4; i++) {
    if (tentative[i] === combinaison[i]) {
      alert("C'est pas mal ! Tu vises juste ;-)");
      bienPlace++;
      controleIndices.push(i);
    }
  }

  // verifier mal place
  for (let i = 0; i < 4; i++) {
    if (!controleIndices.includes(i)) {
      for (let j = 0; j < 4; j++) {
        if (
          !controleIndices.includes(j) &&
          tentative[i] === combinaison[j] &&
          i !== j
        ) {
          malPlace++;
          controleIndices.push(j);
          break;
        }
      }
    }
    if (bienPlace === 4) {
      message.innerHTML = `Bien joué, tu gagnes la partie ! Tu as trouvé dans l'ordre la combinaison : ${combinaison.join(
        " , "
      )}`;
    }
  }
  return { bienPlace, malPlace };
}
