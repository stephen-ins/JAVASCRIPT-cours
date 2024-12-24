const BASE_URL = "data/data.json";
export const getData = async () => {
  try {
    // fecth permet de récupérer des données en fonction d'une adresse URL, fecth envoi une requete http dans le fichier data.json afiun de récupérer toutes les données du fichier
    const response = await fetch(BASE_URL);
    // console.log(response);
    return response.json();
  } catch (error) {
    return new Error("Quelque ne va pas.");
  }
};

export const getProducts = async () => {
  const data = await getData();
  // console.log(data.products);
  return data.products;
};

export const getProductById = async () => {
  // window.location.search permet de récupérer les paramètres de recherche dans l'URL (ex : ?id=243)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // Permet de récupérer uniquement la valeur de l'indice ?id= dans l'URL
  const id = urlParams.get("id");
  const products = await getProducts();

  // filter : fonction qui permet de filtrer un résultat en fonction d'une condition
  const data = products.filter((product) => {
    // SI l'id du produit est égal à l'id du produit dans l'URL (?id=243), alors on retourne le produit
    if (product.id == id) {
      return product;
    }
  });
  return data[0];

  /*
        interface URLSearchParams {
            const delete = () => {code ...}
            const append = () => {code ...}
            const entries = () => {code ...}
        }
    */
};

export const setProductLocalStorage = (id, arrayProduct) => {
  localStorage.setItem(id, arrayProduct);
};

export const getProductsLocalStorage = () => {
  // console.log(localStorage);

  // raccourci pemettant de rassembler les données du localStorage en un seul objet javascript
  const items = { ...localStorage };
  // console.log(items);

  let itemsPanier = {};
  //        124    L'ensemble des produits du panier
  for (const key in items) {
    // console.log(key);
    //          items[124];
    //          items[243];
    //          items[789];
    // console.log(items[key]);
    // console.log(localStorage[key]);
    // JSON.parse permet de convertir la cjaine de caractères des données de chaque produit en un objet Javascript que nous pouvons manipuler dans le panier pour afficher les données
    itemsPanier[key] = JSON.parse(items[key]);
  }
  // console.log(itemsPanier);
  return itemsPanier;
};
