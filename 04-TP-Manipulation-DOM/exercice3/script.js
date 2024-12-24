const calcul = (field) => {
  // console.log(field.value);

  const cellule = document.querySelectorAll("#nombre, #carre, #cube");

  const number = field.value;
  const carre = Math.pow(number, 2); // calcul au carré | number * number
  const cube = Math.pow(number, 3); // calcul au cube | number * number * number

  // Si la valeur de number est bien un chiffre, on entre dans la condition IF
  // '!' Exprime la négation, N'EST PAS (Si number N'EST PAS une chaine de caractères)
  if (!isNaN(number)) {
    cellule[0].innerText = number;
    cellule[1].innerText = carre;
    cellule[2].innerText = cube;
  } else {
    // Sinon number contient une chaine de caractères, on affiche un message d'erreur.
    cellule[0].innerText = "Merci de saisir un chiffre";
  }

  console.log(cellule);
  // console.log(number);
  // console.log(carre);
  // console.log(cube);
};
