// Exercice la galerie JS

function showLargePhoto(thumbnail) {
  const largeImage = document.getElementById("largeImage");
  const caption = document.getElementById("caption");

  largeImage.src = thumbnail.src;
  largeImage.alt = thumbnail.alt;
  caption.textContent = thumbnail.alt;
}

function showCaption() {
  const caption = document.getElementById("caption");
  caption.style.display = "block";
}

function hideCaption() {
  const caption = document.getElementById("caption");
  caption.style.display = "none";
}

// Exercice la recopie

function copyText() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");
  outputText.value = inputText;
}

// Exercice calcul cube et carré

function calculate() {
  const inputNumber = document.getElementById("inputNumber").value;
  const carreValue = document.getElementById("carreValue");
  const cubeValue = document.getElementById("cubeValue");

  carreValue.textContent = inputNumber * inputNumber;
  cubeValue.textContent = inputNumber * inputNumber * inputNumber;
}

// Exercice du carre bleu qui bouge en carré
let step = 0;
const blueCarre = document.getElementById("blueCarre"); // Récupère l'élément carré
const blueButton = document.getElementById("blueButton");
console.log(blueButton); // Récupère l'élément carré
function moveCarre() {
  // alert("test");
  let newPosition;
  // console.log("Carré actuel: ", blueCarre);

  switch (step % 4) {
    case 0:
      // Déplacer vers la droite
      newPosition = blueCarre.offsetLeft + 150;
      blueCarre.style.left = newPosition + "px";
      console.log("Droite: ", newPosition);
      break;
    case 1:
      // Déplacer vers le haut
      newPosition = blueCarre.offsetTop - 150;
      blueCarre.style.top = newPosition + "px";
      console.log("Haut: ", newPosition);
      break;
    case 2:
      // Déplacer vers la gauche
      newPosition = blueCarre.offsetLeft - 150;
      blueCarre.style.left = newPosition + "px";
      console.log("Gauche: ", newPosition);
      break;
    case 3:
      // Déplacer vers le bas
      newPosition = blueCarre.offsetTop + 150;
      blueCarre.style.top = newPosition + "px";
      console.log("Bas: ", newPosition);
      break;
  }
  step++; // Incrémente l'étape
  // console.log(step);
  // console.log("Étape actuelle: ", step);
}

// le carré vert qui scroll

// const scrollContainer = document.querySelector(".content");
// const greenCarre = document.querySelector("#greenCarre");
// let startPosition = 0;

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();

//   startPosition = parseInt(startPosition) + 25;

//   if (startPosition <= 1440) {
//     console.log(startPosition);
//     greenCarre.style.left = startPosition + "px";
//   }

const scrollContainer = document.querySelector(".content");
const greenCarre = document.querySelector("#greenCarre");
let startPosition = 0;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();

  // Ajuster la position en fonction de la direction de scroll
  if (evt.deltaY > 0) {
    startPosition += 40; // Scroll vers la droite
  } else {
    startPosition -= 40; // Scroll vers la gauche
  }

  // Empêcher la position de dépasser les limites
  if (startPosition < 0) startPosition = 0;
  if (startPosition > 1440) startPosition = 1200;

  // console.log(startPosition);
  greenCarre.style.left = startPosition + "px";
});

// le menu déroulant
