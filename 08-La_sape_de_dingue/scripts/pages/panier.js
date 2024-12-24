import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { MainPanier } from "../components/MainPanier.js";
import { Footer } from "../components/Footer.js";
import { Modal, ModalIn } from "../components/Modal.js";
import {
  RemoveItemPanier,
  AddQuantityPanier,
  RemoveAllProductsPanier,
  RemoveQuantityPanier,
} from "../utils/ManageOrder.js";

const displayData = () => {
  const body = document.querySelector("body");
  body.innerHTML = `
        ${Modal()}
        <div class="container">
            ${Header()}
            ${Nav()}
            ${MainPanier()}
            ${Footer()}
        </div>
    `;

  ModalIn();
  RemoveItemPanier();
  AddQuantityPanier();
  RemoveQuantityPanier();
  RemoveAllProductsPanier();
};

(async () => {
  displayData();
})();
