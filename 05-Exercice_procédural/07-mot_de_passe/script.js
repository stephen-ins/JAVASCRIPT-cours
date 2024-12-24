const inputMdp = document.querySelector("#inputMdp");
inputMdp.addEventListener("input", () => {
  console.log("je tape dans l'input:", inputMdp.value);
});
const message = document.querySelector("#message");
console.log("le message:", message);

inputMdp.addEventListener("keydown", forceMdp);
inputMdp.addEventListener("keyup", forceMdp);

function forceMdp() {
  const mdp = inputMdp.value;
  const force = controleMdp(mdp);

  let info = "";
  let cssClass = "";

  switch (force) {
    case "crack":
      info = "!!! IMPOSSIBLE A CRACKER !!!";
      cssClass = "no__crack";
      break;
    case "tSecure":
      info = "TRES SECURISE";
      cssClass = "tres__securise";
      break;
    case "secure":
      info = "SECURISE";
      cssClass = "securise";
      break;

    case "medium":
      info = "MOYEN";
      cssClass = "moyen";
      break;
    case "dangerous":
      info = "!!! DANGEREUX !!!";
      cssClass = "dangereux";
      break;
  }
  message.textContent = info;
  message.className = `message ${cssClass}`;
}

function controleMdp(mdp) {
  let forcePoint = 0;

  if (/.{12,}/.test(mdp)) forcePoint++; // Au moins 8 caractères
  if (/[A-Z]/.test(mdp)) forcePoint++; // Au moins une majuscule
  if (/[a-z]/.test(mdp)) forcePoint++; // Au moins une minuscule
  if (/[0-9]/.test(mdp)) forcePoint++; // Au moins un chiffre
  if (/[!@#$%^&*(),.?":{}|<>]/.test(mdp)) forcePoint++; // Au moins un caractère spécial

  if (forcePoint === 5) {
    return "crack";
  } else if (forcePoint === 4) {
    return "tSecure";
  } else if (forcePoint === 3) {
    return "secure";
  } else if (forcePoint === 2) {
    return "medium";
  } else {
    return "dangerous";
  }
}
