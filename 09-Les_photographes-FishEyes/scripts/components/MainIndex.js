export const MainIndex = (data) => {
  // console.log();

  let cards = "";
  data.forEach((photographers) => {
    // console.log(photographers.id);
    cards += `
      
            <div class="card">
              <a href="photographers.html?id=${photographers.id}" class="link__photographer">
                <img
                  src="assets/images/photographers/thumbnails/${photographers.portrait}"
                  alt="${photographers.name}"
                  class="thumbnail"
                />
              </a>
  
              <div class="identity__content">
                <a href="photographers.html?id=${photographers.id}" class="link__photographer">
                  <h2 class="title__h2">${photographers.name}</h2>
                </a>
                <p class="locality__paragraph">${photographers.city}, ${photographers.country}</p>
                <p class="speciality__paragraph">
                  ${photographers.tagline}
                </p>
                <p class="price__paragraph">${photographers.price}€/jour</p>
              </div>
            </div>
  
      `;
  });

  // console.log(cards);

  return `     
  
        <main class="main">
          <section class="card__content">
  
           ${cards}
           
          </section>
        </main>`;
};
