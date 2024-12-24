export const MainPhotographer = (data) => {
  const { photographer, media } = data;

  // Création de la galerie
  let mediaGallery = "";
  media.forEach((item) => {
    const mediaElement = item.image
      ? `<img src="assets/images/photographers/samplePhotos-Small/${photographer.name}/${item.image}" 
          alt="${item.title}" class="photographe__picture"/>`
      : `<video autoplay muted loop class="photographe__picture">
          <source src="assets/images/photographers/samplePhotos-Small/${photographer.name}/${item.video}" 
            type="video/mp4">
        </video>`;

    mediaGallery += `
      <div class="card__picture">
        <a href="" class="link__lightbox">
          ${mediaElement}
        </a>
        <section class="like__content">
          <p class="picture__title">${item.title}</p>
          <div class="like__icon">
            <i class="fas fa-heart"></i>
            <span class="like__count">${item.likes}</span>
          </div>
        </section>
      </div>
    `;
  });

  return `    
    <main class="main">
      <section class="card__identity__photographe">
        <div class="personal__info">
          <h2 class="title__h2__x2">${photographer.name}</h2>
          <p class="locality__paragraph__x2">${photographer.city}, ${
    photographer.country
  }</p>
          <p class="speciality__paragraph__x2">
            ${photographer.tagline}
          </p>
        </div>
        <section class="contact__button__section">
          <button class="contact__button">Contactez-moi</button>
        </section>
        <div class="personal__thumbnail">
          <img
            src="assets/images/photographers/thumbnails/${
              photographer.portrait
            }"
            alt="${photographer.name}"
            class="thumbnail"
          />
        </div>
      </section>

      <section class="menu__triage">
        <div class="menu__triage__content">
          <label for="triage" class="triage__label">Trier par :</label>
          <select id="triage" name="triage" class="triage__select">
            <option class="option" value="popularite">Popularité</option>
            <option class="option" value="date">Date</option>
            <option class="option" value="titre">Titre</option>
          </select>
        </div>
      </section>

      <section class="card__content">
        ${mediaGallery}
      </section>
    </main>

    <div class="content__information__bottom">
      <div class="like__icon">

        <!-- Ce code calcule le nombre total de "likes" pour tous les éléments de média en utilisant la méthode reduce. Il additionne les "likes" de chaque élément et affiche le total dans un élément span avec la classe "like__count". -->
        
        <span class="like__count">${media.reduce(
          (acc, curr) => acc + curr.likes,
          0
        )}</span>
        <i class="fas fa-heart"></i>
      </div>
      <div class="session__price">${photographer.price}€/jour</div>
    </div>
  `;
};
