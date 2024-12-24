import { getPhotographerById } from "../utils/Api.js";
import { HeaderPhotographer } from "../components/HeaderPhotographer.js";
import { MainPhotographer } from "../components/MainPhotographer.js";
import { initModal } from "../utils/ModalContact.js";
import { lightBox } from "../utils/Lightbox.js";
import { Footer } from "../components/Footer.js";

const displayData = (data) => {
  const body = document.querySelector(".container");
  body.innerHTML = `
    ${HeaderPhotographer()}
    ${MainPhotographer(data)}
    ${Footer()}
  `;
  initModal(data.photographer);

  // Ajouter les écouteurs d'événements pour la lightbox
  const mediaElements = document.querySelectorAll(".link__lightbox");
  mediaElements.forEach((mediaElement, index) => {
    mediaElement.addEventListener("click", (e) => {
      e.preventDefault();
      lightBox(data.media, data.photographer, index);
    });
  });
};

// Fonction asynchrone anonyme qui s'exécute automatiquement
(async () => {
  try {
    const data = await getPhotographerById();
    displayData(data);
  } catch (error) {
    console.error("Erreur lors du chargement du photographe:", error);
  }
})();
