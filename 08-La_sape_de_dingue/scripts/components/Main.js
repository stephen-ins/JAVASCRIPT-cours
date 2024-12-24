export const Main = (data) => {
  let cards = "";
  data.forEach((product) => {
    cards += `
            <figure class="card">
                <img src="assets/images/products/${product.image}" alt="${product.alt}" class="card__picture" />
                <figcaption class="card__legend">
                    <h3 class="title__h3">${product.name} ${product.price}€</h3>
                    <a href="product.html?id=${product.id}" class="card__link">Voir plus</a>
                </figcaption>
            </figure>
        `;
  });

  return `
        <main class="main__product">
        <h2 class="title__h2">Nos produits</h2>
        <div class="cards">
          ${cards}
        </div>
      </main>
    `;
};
