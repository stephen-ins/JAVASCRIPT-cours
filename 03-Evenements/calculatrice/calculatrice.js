// Exercice la calculatrice Js

function calculate(event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operation = document.getElementById("calcul__select").value;
  const resultDisplay = document.getElementById("result");
  const informationFail = document.getElementById("information__fail");

  let resultat;
  let calculation;

  if (isNaN(number1) || isNaN(number2)) {
    informationFail.textContent = "Veuillez entrer des nombres valides.";
    return;
  }
  informationFail.textContent = "";

  switch (operation) {
    case "+":
      resultat = number1 + number2;
      calculation = `${number1} + ${number2} = ${resultat}`;
      break;
    case "-":
      resultat = number1 - number2;
      calculation = `${number1} - ${number2} = ${resultat}`;

      break;
    case "*":
      resultat = number1 * number2;
      calculation = `${number1} * ${number2} = ${resultat}`;

      break;
    case "/":
      if (number2 === 0) {
        informationFail.textContent = "Division par zéro impossible.";
        return;
      }
      resultat = number1 / number2;
      calculation = `${number1} / ${number2} = ${resultat}`;

      break;
    default:
      informationFail.textContent = "Veuillez sélectionner une opération.";
      return;
  }

  alert(calculation);
  // cumulativeResult += resultat;
  // alert(`Calcul: ${calculation}\nRésultat cumulé: ${cumulativeResult}`);
  resultDisplay.textContent = resultat;

  const inputNumber1 = document.querySelector("#number1");
  const hiddenMessage1 = document.getElementById("hiddenMessage1");
  const inputNumber2 = document.querySelector("#number2");
  const hiddenMessage2 = document.getElementById("hiddenMessage2");
  const calculSelect = document.querySelector("#calcul__select");
  const hiddenMessage3 = document.getElementById("hiddenMessage3");

  inputNumber1.addEventListener("mouseover", () => {
    hiddenMessage1.style.display = "block";
  });

  inputNumber1.addEventListener("mouseout", () => {
    hiddenMessage1.style.display = "none";
  });

  inputNumber2.addEventListener("mouseover", () => {
    hiddenMessage2.style.display = "block";
  });

  inputNumber2.addEventListener("mouseout", () => {
    hiddenMessage2.style.display = "none";
  });

  calculSelect.addEventListener("mouseover", () => {
    hiddenMessage3.style.display = "block";
  });

  calculSelect.addEventListener("mouseout", () => {
    hiddenMessage3.style.display = "none";
  });

  const openButton = document.getElementById("openButton");
  const closeButton = document.getElementById("closeButton");
  const block = document.querySelector(".block");

  function openBlock() {
    block.style.display = "block";
    openButton.style.display = "none";
    closeButton.style.display = "inline";
  }

  function closeBlock() {
    block.style.display = "none";
    openButton.style.display = "inline";
    closeButton.style.display = "none";
  }

  openButton.addEventListener("click", openBlock);
  closeButton.addEventListener("click", closeBlock);
}
