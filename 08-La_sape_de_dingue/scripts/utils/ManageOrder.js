import {
  setProductLocalStorage,
  getProductsLocalStorage,
} from "../utils/Api.js";

export const AddProductPanier = (data) => {
  const buttonAddPanier = document.querySelector(".button__panier");
  buttonAddPanier.addEventListener("click", (event) => {
    // event.preventDefault();
    const quantity = parseInt(document.querySelector(".quantity").value);

    const dataProduct = {
      id: data.id,
      name: data.name,
      quantity: quantity,
      price: data.price,
      image: data.image,
    };

    // Si l'id du produit est exisant dans le localStorage, donc le produit est présent dans le panier, on entre dans la condition IF
    if (getProductsLocalStorage().hasOwnProperty(data.id)) {
      // console.log('produit existant dans le localStorage');

      // On ajoute à la quantité initiale du produit (getProductsLocalStorage()[data.id].quantity) avec la quantité selectionné sur la page produit (quantity)
      dataProduct.quantity =
        getProductsLocalStorage()[data.id].quantity + quantity;
    }

    // localStorage.setItem(243, {dataProduct})
    setProductLocalStorage(data.id, JSON.stringify(dataProduct));
  });
};

export const RemoveItemPanier = () => {
  // console.log("RemoveItemPanier");
  const buttonValidateRemoveItem = document.querySelector(".button__remove");
  buttonValidateRemoveItem.addEventListener("click", () => {
    // alert('test');
    const id = buttonValidateRemoveItem.getAttribute("data-id");
    // console.log(id);
    localStorage.removeItem(id);

    setTimeout(() => {
      window.location.reload();
    }, "500");
  });
};

export const AddQuantityPanier = () => {
  // console.log("AddQuantityPanier");
  const linksIconePlus = document.querySelectorAll(".link__icone__plus");
  linksIconePlus.forEach((link) => {
    link.addEventListener("click", (event) => {
      // event.preventDefault();
      // alert("test");
      const id = link.getAttribute("data-id");
      const productPanier = localStorage.getItem(id);
      let parseObject = JSON.parse(productPanier);
      parseObject.quantity = parseObject.quantity + 1;
      const stringifyObject = JSON.stringify(parseObject);
      setProductLocalStorage(id, stringifyObject);

      // Recharger la page pour mettre à jour l'affichage
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  });
};

export const RemoveQuantityPanier = () => {
  // console.log("RemoveQuantityPanier");
  const linksIconeMinus = document.querySelectorAll(".link__icone__minus");
  // console.log(linksIconeMinus);
  linksIconeMinus.forEach((link) => {
    link.addEventListener("click", (event) => {
      // event.preventDefault();
      // alert("test");
      const id = link.getAttribute("data-id");
      const dataProduct = localStorage.getItem(id);
      let parseObject = JSON.parse(dataProduct);
      if (parseObject.quantity == 1) {
        link.classList.add("user__select");
      } else {
        parseObject.quantity = parseObject.quantity - 1;
        const stringifyObject = JSON.stringify(parseObject);
        setProductLocalStorage(id, stringifyObject);

        // Recharger la page pour mettre à jour l'affichage
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    });
  });
};

export const RemoveAllProductsPanier = () => {
  const buttonDeleteCart = document.querySelector(".button__delete__cart");
  buttonDeleteCart.addEventListener("click", (event) => {
    // Vérifier si le panier n'est pas déjà vide
    if (localStorage.length === 0) {
      alert("Le panier est déjà vide !");
      return;
    }

    // Demander confirmation avant de vider le panier
    const confirmation = confirm(
      "Êtes-vous sûr de vouloir vider votre panier ?"
    );
    if (confirmation) {
      localStorage.clear();
      alert("Votre panier a été vidé avec succès !");
      // Recharger la page pour refléter les changements
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });
};
