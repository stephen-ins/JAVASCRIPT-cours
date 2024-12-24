let ageValue;
let genreValue;
const buttonInput = document.querySelector("#button");
const messageInfo = document.querySelector("#message");
buttonInput.addEventListener("click", controleImposition, false);

console.log("ciblage:", buttonInput);
console.log("ciblage:", messageInfo);

function controleImposition() {
  ageValue = document.querySelector("#age").value;
  console.log("age:", ageValue);
  genreValue = document.querySelector("#genre").value;
  console.log("genre:", genreValue);

  if (genreValue == "HOMME" && ageValue >= 18) {
    console.log("age:", ageValue);
    console.log("genre:", genreValue);

    messageInfo.innerHTML =
      '<div class="message__rouge">Euh mon petit doigt me dit ... SISI, vous êtes imposable</div>';
  } else if (genreValue == "FEMME" && ageValue >= 20 && ageValue <= 35) {
    console.log("age:", ageValue);
    console.log("genre:", genreValue);
    messageInfo.innerHTML =
      '<div class="message__rouge">Oh QUE oui, et puis quoi encore, les femmes aussi vous êtes imposables !!!!!</div>';
  } else {
    messageInfo.innerHTML =
      '<div class="message__vert">NON, vous êtes PAS imposable</div>';
  }
}

