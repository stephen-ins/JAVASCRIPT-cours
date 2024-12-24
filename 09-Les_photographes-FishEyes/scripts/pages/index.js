import { getData, getPhotographers } from "../utils/Api.js";
import { HeaderIndex } from "../components/HeaderIndex.js";
import { MainIndex } from "../components/MainIndex.js";
import { Footer } from "../components/Footer.js";

getData();

const displayData = (data) => {
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
    ${HeaderIndex()}
    ${MainIndex(data)}
    ${Footer()}
    </div>
    `;
};

// Fonction asynchrone anonyme qui s'exécute automatiquement
(async () => {
  try {
    const data = await getPhotographers();
    displayData(data);
  } catch (error) {
    console.error("Erreur lors du chargement des photographes:", error);
  }
})();
