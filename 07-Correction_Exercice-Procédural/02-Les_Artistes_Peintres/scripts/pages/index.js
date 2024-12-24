import { getPeintres, getTableauxByPeintre } from "../utils/Api.js";
import { Header, showMenuBurger, activeNavLink } from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Footer } from "../components/Footer.js";
import {
  closeLightBox,
  LightBoxRender,
  nextPicture,
  openLightBox,
  previousPicture,
} from "../utils/Lightbox.js";

const displayData = (datas, dataTableauxByPeintre) => {
  // console.log(dataTableauxByPeintre);
  //   console.log("test displayData");
  const body = document.querySelector("body");
  // console.log(body);
  body.innerHTML = `
  ${LightBoxRender()}
  <div class="container">
  ${Header(datas)}
  ${Main(dataTableauxByPeintre)}
  ${Footer()}
</div>
`;
  // Execution des fonctions importées
  activeNavLink();
  showMenuBurger();
  openLightBox();
  closeLightBox();
  nextPicture(dataTableauxByPeintre);
  previousPicture(dataTableauxByPeintre);
};

// La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'execution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche , de pouvoir continuer à réagir aux autres evenements pendant l'execution de la tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

(async () => {
  // On récupère l'ensemble des données peintres du fichier data.json que l'on envoi en argument de la fonction displayData().
  const dataTableauxByPeintre = await getTableauxByPeintre();
  const datas = await getPeintres();
  //   console.log(datas);
  displayData(datas, dataTableauxByPeintre);
})();
