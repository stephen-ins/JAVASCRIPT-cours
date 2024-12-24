const buttonSubmit = document.querySelector("#button");

buttonSubmit.addEventListener("click", () => {
  console.log("le click fonctionne sur submit:", buttonSubmit);

  const age = document.querySelector("#age").value;
  console.log("age:", age);
  const experience = document.querySelector("#experience").value;
  console.log("experience:", experience);

  const fidelite = document.querySelector("#fidelite").value;
  console.log("fidelite:", fidelite);

  const sinistre = document.querySelector("#sinistre").value;
  console.log("sinistre:", sinistre);
});

const inputValue = document.querySelectorAll(".input__item");

inputValue.forEach((input) => {
  input.addEventListener("input", () => {
    console.log("Je tape dans les input:", input.value);
  });
});

buttonSubmit.addEventListener("click", () => {
  // Récupérer les valeurs des inputs
  const age = Number(document.querySelector("#age").value);
  const experience = Number(document.querySelector("#experience").value);
  const fidelite = Number(document.querySelector("#fidelite").value);
  const sinistre = Number(document.querySelector("#sinistre").value);
});

const message = document.querySelector("#message");

buttonSubmit.addEventListener("click", () => {
  const age = Number(document.querySelector("#age").value);
  const experience = Number(document.querySelector("#experience").value);
  const fidelite = Number(document.querySelector("#fidelite").value);
  const sinistre = Number(document.querySelector("#sinistre").value);

  const tarif = obtenirTarif(age, experience, sinistre, fidelite);

  // Définir une classe CSS en fonction du tarif
  let tarifClasse = "";
  switch (tarif) {
    case "BLEU":
      tarifClasse = "tarifBlue";
      break;
    case "VERT":
      tarifClasse = "tarifGreen";
      break;
    case "ORANGE":
      tarifClasse = "tarifOrange";
      break;
    case "ROUGE":
      tarifClasse = "tarifRed";
      break;
    case "NON ELIGIBLE":
      tarifClasse = "tarifRefuse";
      break;
  }

  // message.innerHTML = `Tarif attribué : <span class="${tarifClasse}">${tarif}</span>`;
  message.innerHTML =
    "Tarif attribué : <span class='" + tarifClasse + "'>" + tarif + "</span>";
});

// Fonction pour obtenir le tarif selon les règles données
function obtenirTarif(age, experience, sinistre, fidelite) {
  if (sinistre > 3) {
    return "NON ELIGIBLE";
  }

  let tarif;

  if (age < 25) {
    if (experience < 2) {
      tarif = sinistre === 0 ? "ROUGE" : "NON ELIGIBLE";
    } else {
      switch (sinistre) {
        case 0:
          tarif = "ORANGE";
          break;
        case 1:
          tarif = "ROUGE";
          break;
        default:
          tarif = "NON ELIGIBLE";
      }
    }
  } else {
    if (experience < 2) {
      switch (sinistre) {
        case 0:
          tarif = "ORANGE";
          break;
        case 1:
          tarif = "ROUGE";
          break;
        default:
          tarif = "NON ELIGIBLE";
      }
    } else {
      switch (sinistre) {
        case 0:
          tarif = "VERT";
          break;
        case 1:
          tarif = "ORANGE";
          break;
        case 2:
          tarif = "ROUGE";
          break;
        default:
          tarif = "NON ELIGIBLE";
      }
    }
  }

  if (tarif !== "NON ELIGIBLE" && fidelite > 1) {
    switch (tarif) {
      case "ROUGE":
        tarif = "ORANGE";
        break;
      case "ORANGE":
        tarif = "VERT";
        break;
      case "VERT":
        tarif = "BLEU";
        break;
    }
  }

  return tarif;
}
