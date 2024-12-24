document.getElementById("calculer").addEventListener("click", () => {
  const copies = parseInt(document.getElementById("copies").value, 10);
  console.log(copies);

  const resultat = document.getElementById("resultat");
  console.log(resultat);

  let totalCout = 0;

  if (copies <= 10) {
    totalCout = copies * 0.1;
  } else if (copies <= 30) {
    totalCout = 10 * 0.1 + (copies - 10) * 0.09;
  } else {
    totalCout = 10 * 0.1 + 20 * 0.09 + (copies - 30) * 0.08;
  }

  resultat.innerHTML =
    "<p>Le coût total des photocopies est : " + totalCout.toFixed(2) + " €</p>";
});
