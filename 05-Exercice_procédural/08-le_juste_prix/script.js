const objects = [
  {
    name: "Aspirateur Karcher eau et poussières",
    image: "../assets/images/images-juste_prix/aspirateur.webp",
  },
  {
    name: "Magnifique Canapé en cuir",
    image: "../assets/images/images-juste_prix/canape.jpg",
  },
  {
    name: "La console Playstation 5",
    image: "../assets/images/images-juste_prix/console_jeux-video.webp",
  },
  {
    name: "Le meilleur Lave vaisselle Whirlpool",
    image: "../assets/images/images-juste_prix/lave_vaisselle.jpg",
  },
  {
    name: "La légendes des Platines vinyle Technics",
    image: "../assets/images/images-juste_prix/platine_vinyle.jpg",
  },
  {
    name: "Dernier Téléviseur Philips",
    image: "../assets/images/images-juste_prix/televiseur.webp",
  },
];

const objectsImage = document.querySelector(".image__object");
console.log("l'image :", objectsImage);

const objectsName = document.querySelector(".name__object");
console.log("le nom :", objectsName);

const objetsAleatoire = objects[Math.floor(Math.random() * objects.length)];
console.log("tirage aléatoire de l'objet:", objetsAleatoire);

objectsImage.src = objetsAleatoire.image;
objectsName.textContent = objetsAleatoire.name;

const inputPrice = document.querySelector("#inputPrice");
inputPrice.addEventListener("input", () => {
  console.log("le prix que j'affiche:", inputPrice.value);
});

const tentativeMessage = document.querySelector(".tentative__message");
const resultatMessage = document.querySelector(".resultat__message");
const prixObject = Math.floor(Math.random() * 100) + 1;
console.log("Le prix :", prixObject);

let tentative = 10;

const buttonGame = document.querySelector("#buttonGame");

function devinerPrix() {
  const candidatJustePrix = Number(inputPrice.value);
  tentative--;
  console.log("La saisie:", candidatJustePrix);

  if (candidatJustePrix === prixObject) {
    resultatMessage.textContent =
      "SUPER !!! Vous gagnez le produit en question !!!";
    resultatMessage.className = "win";
    buttonGame.disabled = true;
  } else if (tentative === 0) {
    resultatMessage.textContent =
      "PERDU !!! Vous avez épuisez toutes vos tentatives !";
    resultatMessage.className = "lose";
    buttonGame.disabled = true;
  } else {
    resultatMessage.textContent =
      candidatJustePrix > prixObject ? "C'est moins !" : "C'est plus !";
    resultatMessage.className = "enchere__message";
  }

  tentativeMessage.textContent = `Attention, il vous reste : ${tentative} tentatives !!`;
  tentativeMessage.className = "tentative__message";
}

buttonGame.addEventListener("click", devinerPrix);
