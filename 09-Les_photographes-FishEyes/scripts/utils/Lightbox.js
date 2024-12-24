export const lightBox = (media, photographer, currentIndex = 0) => {
  const medias = media;
  const container = document.querySelector(".container");
  container.classList.add("blur");

  // Mise à jour du média (image ou vidéo)
  const updateMedia = () => {
    const currentMedia = medias[currentIndex];
    const lightboxContent = document.querySelector(".lightbox__content");
    const pictureTitle = document.querySelector(".picture__title__lightbox");

    // Supprimer l'ancien média
    const oldMedia = lightboxContent.querySelector(".lightbox__media");
    if (oldMedia) oldMedia.remove();

    // Créer le nouveau média
    let mediaElement;
    if (currentMedia.image) {
      mediaElement = `<img
        src="assets/images/photographers/samplePhotos-Medium/${photographer.name}/${currentMedia.image}"
        alt="${currentMedia.title}"
        class="lightbox__media lightbox__image"
      />`;
    } else if (currentMedia.video) {
      mediaElement = `<video
        class="lightbox__media lightbox__video"
        controls
        autoplay
      >
        <source src="assets/images/photographers/samplePhotos-Medium/${photographer.name}/${currentMedia.video}"
        type="video/mp4">
      </video>`;
    }

    // Insérer le nouveau média
    lightboxContent.insertAdjacentHTML("afterbegin", mediaElement);
    pictureTitle.textContent = currentMedia.title;
  };

  // Création de la lightbox avec le média initial
  const initialMedia = media[currentIndex];
  const lightboxHTML = `
    <section class="lightbox">
      <div class="lightbox__content">
        ${
          initialMedia.image
            ? `<img
              src="assets/images/photographers/samplePhotos-Medium/${photographer.name}/${initialMedia.image}"
              alt="${initialMedia.title}"
              class="lightbox__media lightbox__image"
            />`
            : `<video
              class="lightbox__media lightbox__video"
              controls
              autoplay
            >
              <source src="assets/images/photographers/samplePhotos-Medium/${photographer.name}/${initialMedia.video}"
              type="video/mp4">
            </video>`
        }
        <p class="picture__title__lightbox">${initialMedia.title}</p>
        <span class="lightbox__chevron lightbox__chevron--avant" aria-label="Média précédent">
          <i class="fas fa-chevron-left"></i>
        </span>
        <span class="lightbox__chevron lightbox__chevron--apres" aria-label="Média suivant">
          <i class="fas fa-chevron-right"></i>
        </span>
        <span class="lightbox__close" aria-label="Fermer la lightbox">
          <i class="fas fa-times"></i>
        </span>
      </div>
    </section>
  `;

  document.body.insertAdjacentHTML("beforeend", lightboxHTML);

  const navigate = (direction) => {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % medias.length;
    } else {
      currentIndex = (currentIndex - 1 + medias.length) % medias.length;
    }
    updateMedia();
  };

  // Fonction de fermeture
  const closeLightbox = () => {
    const lightbox = document.querySelector(".lightbox");
    container.classList.remove("blur");
    lightbox.remove();
    document.removeEventListener("keydown", handleKeyPress);
  };

  // Gestion des touches du clavier
  const handleKeyPress = (e) => {
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowRight":
        navigate("next");
        break;
      case "ArrowLeft":
        navigate("previous");
        break;
    }
  };

  // element de fermeture de la lightbox et de navigation
  const lightbox = document.querySelector(".lightbox");
  const closeBtn = lightbox.querySelector(".lightbox__close");
  const previousBtn = lightbox.querySelector(".lightbox__chevron--avant");
  const nextBtn = lightbox.querySelector(".lightbox__chevron--apres");

  closeBtn.addEventListener("click", closeLightbox);
  previousBtn.addEventListener("click", () => navigate("previous"));
  nextBtn.addEventListener("click", () => navigate("next"));
  document.addEventListener("keydown", handleKeyPress);
};
