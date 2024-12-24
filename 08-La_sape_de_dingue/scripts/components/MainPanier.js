import { getProductsLocalStorage } from "../utils/Api.js";

export const MainPanier = () => {
  const dataProductsPanier = getProductsLocalStorage();

  let content = "";
  let montantTotal = 0;
  for (const key in dataProductsPanier) {
    //          dataProductsPanier[124]
    //          dataProductsPanier[568]
    //          dataProductsPanier[789]
    // product reveptionne un OBJET d'1 produit par tour de boucle
    let product = dataProductsPanier[key];

    content += `
            <tr>
                <td>
                <img
                    src="assets/images/products/${product.image}"
                    class="picture__panier"
                    alt="${product.name}"
                />
                </td>
                <td>${product.name}</td>
                <td>
                <div class="quantity__order">
                    <a href="#" class="link__icone__minus" data-id="${
                      product.id
                    }">
                    <i class="fa-solid fa-minus icone__minus"></i>
                    </a>
                    <p class="panier__quantity">${product.quantity}</p>
                    <a href="#" class="link__icone__plus" data-id="${
                      product.id
                    }">
                    <i class="fa-solid fa-plus icone__plus"></i>
                    </a>
                </div>
                </td>
                <td>${product.price}€</td>
                <td>${parseFloat(product.quantity * product.price).toFixed(
                  2
                )}€</td>
                <td>
                <a href="#" data-id="${product.id}" class="icone__delete__item">
                    <i class="fa-solid fa-trash"></i>
                </a>
                </td>
            </tr>
        `;

    // On additionne toutes les quantités * par les prix du produit
    montantTotal += parseFloat(product.quantity * product.price);
  }

  const mainContent = `
        <main class="main__panier">
            <h2 class="title__h2">Votre panier</h2>
            <table class="table__order">
            ${content}
            <tr>
                <td class="montant__total">MONTANT TOTAL</td>
                <td></td>
                <td></td>
                <td></td>
                <td class="price__total">${parseFloat(montantTotal).toFixed(
                  2
                )}€</td>
            </tr>
            </table>
            <div class="block__action__cart">
              <a href="#" class="button__delete__cart">Vider le panier</a>
              <a href="#" class="button__validate__cart">Valider la commande</a>
            </div>
        </main>
    `;

  // On retourne d'abord le contenu
  return mainContent;
};
