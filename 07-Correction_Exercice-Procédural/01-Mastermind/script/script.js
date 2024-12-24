const colors = ["green", "blue", "red", "purple", "black", "yellow"];
const colorsLenght = colors.length;
const circleSolution = document.querySelectorAll(".circle__solution");
const circleChoices = document.querySelectorAll(".circle__choices");
const choicesCurrent = document.querySelector(".choices").innerHTML;
const modal = document.querySelector(".modal");
const content = document.querySelector(".container");
const itemTentative = document.querySelector(".numberTentatives");
let compteur = 0;
let step = 1;
let handleSelectedColors = [];
let arrayMatchs = [];
let arrayColorsIndicators = [];
let nbTentatives = 12;
// arr = toute les couleurs selectionnées par l'utilisateur
// str = 1 couleur combinaison secrète
// handleSelectedColors, blue
const getMatch = (arr, str) => {
  //   console.log(arr);
  //   console.log(str);
  //                bleu
  let reg = new RegExp(str, "i");
  //               1 couleur, data-position
  return arr.filter((item, index) => {
    // si la couleur selectionné par l'internaute correspond à une couleur de la combinaison secrète
    if (item.match(reg)) {
      // arrayMatchs[2] = blue
      // arrayMatchs[data-position] = blue
      arrayMatchs[index] = item;
      return arrayMatchs;
    }
  });
};

const randomSelection = (n) => {
  let newArr = [];
  if (n >= colorsLenght) {
    return colors;
  }
  //              0 <= 3
  for (let i = 0; i <= n; i++) {
    //            colors[   0.45     *         6    ] = indice entre 0 et 6 maximum
    //            colors[0] = indice entre 0 et 6 maximum
    //            colors[3] = indice entre 0 et 6 maximum
    let newElem = colors[Math.floor(Math.random() * colorsLenght)];
    // console.log('couleur ' + i);
    // console.log('couleur ' + newElem);
    while (newArr.includes(newElem)) {
      newElem = colors[Math.floor(Math.random() * colorsLenght)];
    }
    newArr.push(newElem);
  }
  return newArr;
};

const arrayRandomColors = randomSelection(3);

circleSolution.forEach((el, index) => {
  //               arrayRandomColors[0] = 'red';
  el.classList.add(arrayRandomColors[index]);
});

// Autoriser le drop
const allowDrop = (event) => {
  event.preventDefault();
};

const dragstart = (event) => {
  let id = event.target.id + "-step" + step; // green-step2

  event.target.setAttribute("id", id);
  event.dataTransfer.setData("text/plain", id);
};

// Cette fonction permet de réinitialiser les choix de couleurs après chaque étapes
const reset = () => {
  const choices = document.querySelector(".choices");
  choices.innerHTML = choicesCurrent;
};

const drop = (event) => {
  event.preventDefault();

  compteur++;

  let data = event.dataTransfer.getData("text/plain");
  event.target.append(document.getElementById(data));

  // Une fois le drag and drop effectué, on ne peut plus déplacer l'éléments au nout de 500ms, setTimeout() s'execute automatiquement au bout de 500ms
  setTimeout(() => {
    document.getElementById(data).setAttribute("draggable", false);
  }, "500");

  const position = event.currentTarget.getAttribute("data-position");
  const color = document.getElementById(data).getAttribute("data-color");
  event.currentTarget.classList.add("user__select");

  // handleSelectedColors[2] = blue
  handleSelectedColors[position] = color;
  //   console.log(handleSelectedColors);

  // On entre dans cette condition tout les 4 drop
  if (compteur % 4 == 0) {
    // On boucle les couleurs de la combinaison secrète
    arrayRandomColors.forEach((colorRandom, indexRandom) => {
      getMatch(handleSelectedColors, colorRandom);
      //   console.log(arrayMatchs);

      // On convertit les tableaux de couleurs en chaine de caractères, si les deux chaines sont bien égales, l'utilisateur a trouvé la combinaison
      if (arrayRandomColors.toString() === arrayMatchs.toString()) {
        console.log("vous avez gagné");

        arrayColorsIndicators.push("green");

        setTimeout(() => {
          modal.classList.add("modalIn");
          modal.children[0].innerText =
            "Félicitations !! Vous avez trouvé la combinaison";
          content.classList.add("content__modal");
        }, "2000");
      } else {
        // On entre dans le else si il y a des correspondances de couleurs
        console.log("pas gagné");

        arrayMatchs.forEach((colorMatch, indexMatch) => {
          if (colorRandom == colorMatch && indexRandom == indexMatch) {
            // bonne couleur bien positionné
            console.log("ColorMatch " + colorMatch + " bien positionné");
            arrayColorsIndicators.push("green");
          }
          if (colorRandom == colorMatch && indexRandom != indexMatch) {
            // bonne couleur mal positionné
            console.log(
              "ColorMatch " + colorMatch + " existante mais mal positionnée"
            );
            arrayColorsIndicators.push("orange");
          }
        });
      }
    });

    // permet de lister les éléments de l'array par ordre alphabétique
    arrayColorsIndicators.sort();
    console.log(arrayColorsIndicators);
    const dataIndice = document.querySelectorAll(
      '[data-indice="' + step + '"]'
    );
    console.log(dataIndice);
    arrayColorsIndicators.forEach((couleur, index) => {
      dataIndice[index].classList.add(couleur);
    });

    nbTentatives--;
    step++;
    reset();

    itemTentative.innerHTML = nbTentatives;

    if (step > 12) {
      modal.classList.add("modalIn");
      modal.children[0].innerText = "Vous avez perdu !!";
      content.classList.add("content__modal");
    }

    const positionStep = document.querySelectorAll(
      '[data-step="' + step + '"]'
    );
    positionStep.forEach((element) => {
      element.setAttribute("ondrop", "drop(event)");
      element.setAttribute("ondragover", "allowDrop(event)");
    });

    // On réinitialise
    arrayMatchs = [];
    arrayColorsIndicators = [];
  }
};

const descoverResult = () => {
  circleSolution.forEach((el) => {
    el.classList.remove("hide");

    setTimeout(() => {
      modal.classList.add("modalIn");
      modal.children[0].innerText =
        "Perdu !! Voici la combinaison : " + arrayRandomColors;
      content.classList.add("content__modal");
    }, "1000");
  });
};
