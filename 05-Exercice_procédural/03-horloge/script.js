document.getElementById("calculer").addEventListener("click", () => {
  console.log(calculer);

  let heures = parseInt(document.getElementById("heures").value, 10);
  let minutes = parseInt(document.getElementById("minutes").value, 10);
  let secondes = parseInt(document.getElementById("secondes").value, 10);

  const resultat = document.getElementById("resultat");
  console.log(resultat);

  // Ajouter 1 seconde
  secondes += 1;

  if (secondes >= 60) {
    secondes = 0;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  if (heures >= 24) {
    heures = 0;
  }

  const formaterHeure =
    heures.toString().padStart(2, "0") +
    "h" +
    minutes.toString().padStart(2, "0") +
    "min" +
    secondes.toString().padStart(2, "0") +
    "sec";
  console.log(formaterHeure);

  resultat.innerHTML = "<p>L'heure qu'il sera est de : " + formaterHeure + "</p>";
});
