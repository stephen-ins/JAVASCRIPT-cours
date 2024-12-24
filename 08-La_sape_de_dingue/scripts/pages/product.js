import { AddProductPanier } from '../utils/ManageOrder.js';
import { getProductById, setProductLocalStorage } from "../utils/Api.js";
import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { MainProduct } from "../components/MainProduct.js";
import { Footer } from "../components/Footer.js";

const displayData = (data) => {
    const body = document.querySelector('body');
    body.innerHTML = `
        <div class="container">
        ${Header()}
        ${Nav()}
        ${MainProduct(data)}
        ${Footer()}
        </div>
    `;

    AddProductPanier(data);
}

(async () => {
    const data = await getProductById();
    displayData(data);
})();