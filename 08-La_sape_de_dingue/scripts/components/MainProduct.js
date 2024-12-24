export const MainProduct = (data) => {
  let options = "";
  //              1
  for (let i = 1; i <= 20; i++) {
    options += `<option value="${i}">${i}</option>`;
  }

  return `
        <main class="main__product">
            <h2 class="title__h2">${data.name}</h2>

            <section class="product">
            <img src="assets/images/products/${data.image}" class="picture__product" alt="${data.alt}">
            <div class="product__details">
                <h3 class="title__product">${data.title}</h3>
                <p class="product__price">${data.price}€</p>
                <p class="product__description">${data.description}</p>
                <div>
                    <form method="post" action="panier.html" class="add__panier">
                        <label for="quantity">Quantité</label>
                        <select class="quantity">
                        ${options}
                        </select>
                        <a href="panier.html" class="button__panier">Ajouter au panier</a>
                    </form>
                </div>
            </div>
            </section>
        </main>
    `;
};
