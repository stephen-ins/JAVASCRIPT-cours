const words = [
  "désincorporons",
  "métropolitaine",
  "déshumanisasse",
  "démobiliseriez",
  "débéquetterons",
  "court-circuité",
  "endoctrinèrent",
  "déparasiterais",
  "instruisissent",
  "rembarrassions",
  "rembarquassiez",
  "débrocheraient",
  "parementassent",
  "transpercèrent",
  "palancreraient",
  "fanfreluchâmes",
  "insensibiliser",
  "désassortiriez",
  "intaillassions",
  "disciplinèrent",
  "parkériserions",
  "désintoxiquera",
  "authentifiâmes",
  "fantasmatiques",
  "calamistreriez",
  "personnalisais",
  "nicotinisèrent",
  "revendiquasses",
  "reprogrammions",
  "belles-de-jour",
  "hétérosexuelle",
  "crayonneraient",
  "brillantinions",
  "surchauffèrent",
  "centraliseriez",
  "parallélisasse",
  "déballonneriez",
  "sandwichassiez",
  "verrouillaient",
  "sifflotassions",
  "éradiqueraient",
  "désorientaient",
  "réceptionnerez",
  "enchatonneront",
  "reblanchissiez",
  "dégasolinerais",
  "tranquillisées",
  "transistorisez",
  "condescendrait",
  "convaincraient",
  "délustreraient",
  "réquisitoriale",
  "bureaucratiser",
  "grognassassiez",
  "équilibrassiez",
  "hébraïseraient",
  "rapprochassent",
  "emmitonnerions",
  "confrontations",
  "complexifierez",
  "bouchonnerions",
  "embarrassantes",
  "dédicaçassions",
  "importunassent",
  "photograveuses",
  "démilitarisent",
  "coquillassions",
  "internationaux",
  "pythagoriciens",
  "chevronnassiez",
  "parasexualités",
  "transafricains",
  "subtilisations",
  "rentoileraient",
  "frigorifieront",
  "planchéiaisses",
  "estrapadassiez",
  "transsahariens",
  "mercantilisait",
  "grappillassent",
  "processionniez",
  "persévérassent",
  "prophétiseront",
  "charlatanismes",
  "barguignerions",
  "garde-barrière",
  "débenzolassiez",
  "triompheraient",
  "intertropicale",
  "débourbassions",
  "cytodiagnostic",
  "warranteraient",
  "triangulations",
  "éparpillassiez",
  "déchagrinèrent",
  "décerclassions",
  "sacralisassent",
  "marivaudassiez",
  "synthétisasses",
  "décompteraient",
  "réimplanterons",
  "entrebâillerai",
  "enquiquineront",
  "triangulerions",
  "désenveloppais",
  "débouclassions",
  "électronisâmes",
  "photocopierais",
  "alcaliniserais",
  "pistacheraient",
  "remarcheraient",
  "électroniseras",
  "débrouillerons",
  "explicitassent",
  "patouillassent",
  "byzantinologie",
  "engloutiraient",
  "répertoriaient",
  "désingularisée",
  "improuvassions",
  "dénasalisation",
  "déconstiperais",
  "accompagneriez",
  "fractionnerait",
  "modéliseraient",
  "triangulassiez",
  "ordonnancerais",
  "débraguettâtes",
  "renfermeraient",
  "désensorcelais",
  "biogéographies",
  "embellissasses",
  "européanisasse",
  "ensoleillaient",
  "radiodiffusion",
  "dépassionnante",
  "indépendamment",
  "contre-scellés",
  "ultra-violette",
  "boulangeassiez",
  "agglomérations",
  "habilitassions",
  "pied-de-chèvre",
  "désapprendrait",
  "orthophonistes",
  "reboutonnaient",
  "rétractassions",
  "mnémotechnique",
  "palissonnasses",
  "discréditasses",
];

// words = words.toUpperCase();

const wordsRandom = words[Math.floor(Math.random() * words.length)];
// console.log("Mot aléatoire:", wordsRandom);

const resultMessage = document.querySelector(".result__message");
const alphabetLetter = document.querySelector("#alphabetLetter");
const nbAttempts = document.querySelector("#nbAttempts");
const cacheWord = document.querySelector("#cacheWord");

let attempts = 9;
// création du tableau de 14 lettres max
//  ex pour un mot de 5 lettres : wordTab = ["_", "_", "_", "_", "_"];
let wordTab = Array(wordsRandom.length).fill("_");

function hiddenWord() {
  cacheWord.textContent = wordTab.join("");
  console.log("Affichage mot caché:", cacheWord);
}

// Création de l'alphabet
function displayAlphabet() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabet.forEach((letter) => {
    const button = document.createElement("span");
    button.textContent = letter;
    button.className = "letter";
    button.addEventListener("click", () => selectLetter(letter, button));
    alphabetLetter.appendChild(button);
  });
}

// conversion sans casse des lettres et mots
function normalizeLetter(letter) {
  return letter
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

// Selection de la lettre
function selectLetter(letter, button) {
  button.classList.add("disabled");
  button.style.pointerEvents = "none";

  if (normalizeLetter(wordsRandom).includes(normalizeLetter(letter))) {
    for (let i = 0; i < wordsRandom.length; i++) {
      if (normalizeLetter(wordsRandom[i]) === normalizeLetter(letter)) {
        wordTab[i] = wordsRandom[i];
      }
    }
    hiddenWord();
  } else {
    attempts--;
    console.log("lettre incorrecte, tentative(s) restante(s):", attempts);
    nbAttempts.textContent = `Il vous reste : ${attempts} tentative(s)`;
  }
  if (attempts === 0) {
    resultMessage.textContent = `Vous avez perdu ! Le mot était : ${wordsRandom.toUpperCase()}`;
    resultMessage.className = "lose";
    alphabetLetter.innerHTML = "";
  } else if (!wordTab.includes("_")) {
    resultMessage.textContent = "Vous avez trouvé !";
    resultMessage.className = "win";
    alphabetLetter.innerHTML = "";
  }
}

function initGame() {
  hiddenWord();
  displayAlphabet();
}

initGame();

const gameButton = document.querySelector(".button__submit");
console.log("bouton rejouer", gameButton);
gameButton.addEventListener("click", () => {
  location.reload();
});
