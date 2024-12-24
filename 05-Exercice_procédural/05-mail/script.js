const emailInput = document.querySelector(".input__email");
const okMessage = document.querySelector("#message");

emailInput.addEventListener("input", () => {
  const valueEmail = emailInput.value;
  console.log("input:", valueEmail);

  const emailValid = validateEmail(valueEmail);

  if (emailValid) {
    okMessage.textContent = "Votre @ mail est valide";
    okMessage.className = "messageValid";
  } else {
    okMessage.textContent = "Votre @ mail est invalide !!!";
    okMessage.className = "messageInvalid";
  }
});

function validateEmail(email) {
  const arobase = email.indexOf("@");
  console.log("position de '@':", arobase);

  const arobaseCount = (email.match(/@/g) || []).length;
  console.log("nb arobase:", arobaseCount);

  const point = email.indexOf(".", arobase + 1);
  console.log("position de '.':", point);

  if (
    arobaseCount === 1 &&
    email.includes("@") &&
    arobase < point + 1 &&
    point < email.length - 1
  ) {
    const nomDomaine = email.substring(arobase + 1, point);
    console.log("domaine:", nomDomaine);

    const topDomaine = email.substring(point + 1);
    console.log("tld:", topDomaine);

    return nomDomaine.length > 0 && topDomaine.length > 0;
  }

  return false;
}
