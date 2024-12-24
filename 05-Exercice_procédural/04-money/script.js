document.querySelector("#buttonSubmit").addEventListener("click", () => {
  console.log("je clique sur enregister:", buttonSubmit);

  const prix = parseInt(document.querySelector("#prix").value, 10);
  console.log("prix:", prix);

  const monnaie = parseInt(document.querySelector("#monnaie").value, 10);
  console.log("monnaie:", monnaie);

  const resultat = document.querySelector("#resultat");
  console.log("resultat:", resultat);

  // if (isNaN(prix) || isNaN(monnaie) || monnaie >= prix) {
  //   resultat.innerHTML = "Entrez des montants valides !";
  //   return;
  // }

  let aRendre = monnaie - prix;

  const billet10 = Math.floor(aRendre / 10);
  aRendre %= 10;
  const billet5 = Math.floor(aRendre / 5);
  aRendre %= 5;
  const piece1 = aRendre;

  resultat.innerHTML =
    "Billets de 10 Euros : " +
    billet10 +
    "<br>" +
    "Billets de 5 Euros : " +
    billet5 +
    "<br>" +
    "Pièces de 1 Euro : " +
    piece1;
});
