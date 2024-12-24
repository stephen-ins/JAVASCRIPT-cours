export const LightBoxRender = () => {
  // console.log("LightBoxRender");
  return `    <i class="fa-solid fa-circle-xmark icone__close"></i>
    <i class="fa-solid fa-chevron-left icone__previous"></i>
    <i class="fa-solid fa-chevron-right icone__next"></i>
    <div class="lightbox">
      <img
        src="assets/images/Caillebotte/Autoportrait_Caillebotte.png"
        alt="image Caillebotte"
        class="picture__lightbox"
      />
    </div>`;
};

export const openLightBox = () => {
  // console.log("openLightBox");

  const pictureGalery = document.querySelectorAll(".peinture__picture");
  // console.log(pictureGalery);

  const itemsLightbox = document.querySelectorAll(
    ".icone__close, .icone__previous, .icone__next, .lightbox"
  );
  // console.log(itemsLightbox);

  const currentPictureLightbox = document.querySelector(".picture__lightbox");
  // console.log(currentPictureLightbox);

  pictureGalery.forEach((item) => {
    item.addEventListener("click", () => {
      // Pour avoir l'effet de zoom à chaque fois que l'on ouvre la lightbox, on supprime d'abord la classe animationFadeInScale pour l'affecter 50ms plus tard grace à la fonction setTimeout.
      currentPictureLightbox.classList.remove("animationFadeInScale");

      // Source de l'image de la galery sur laquelle nous avons cliqué
      const srcCurrentPictureGalery = item.src;
      const dataPositionPictureGalery = item.getAttribute("data-position");
      // console.log("position picture" + dataPositionPictureGalery);

      // On affecte la source de l'image de la galery sur laquelle on a cliqué, à la source de l'image de la lightbox.
      currentPictureLightbox.src = srcCurrentPictureGalery;
      currentPictureLightbox.setAttribute(
        "data-position",
        dataPositionPictureGalery
      );
      // console.log(srcCurrentPictureGalery);

      // On boucle tout les éléments de la lightbox (icônes, div, image) afin de leur affecter les classes css permettant de l'ouvvir / fermer.
      itemsLightbox.forEach((item) => {
        item.classList.remove("fadeOut");
        item.classList.add("fadeIn");
      });

      setTimeout(() => {
        currentPictureLightbox.classList.add("animationFadeInScale");
      });

      currentPictureLightbox.classList.add("animationFadeInScale");
    });
  });
};

export const closeLightBox = () => {
  // console.log("closeLightBox");
  const itemsLightbox = document.querySelectorAll(
    ".icone__close, .icone__previous, .icone__next, .lightbox"
  );
  const iconeClose = document.querySelector(".icone__close");
  // console.log(itemsLightbox);
  // console.log(iconeClose);

  iconeClose.addEventListener("click", () => {
    // alert("click icone close");

    itemsLightbox.forEach((item) => {
      item.classList.remove("fadeIn");
      item.classList.add("fadeOut");
    });
    compteur = 0;
    index = 0;
    position = 0;
  });
};

let compteur = 0;
let index = 0;
let position = -1;

export const nextPicture = (dataTableauxByPeintre) => {
  // console.log(dataTableauxByPeintre);
  const name = dataTableauxByPeintre.name;
  const arrayTableaux = dataTableauxByPeintre.data;
  const sizeArrayTableaux = arrayTableaux.length;
  // console.log(name);
  // console.log(arrayTableaux);
  // console.log(sizeArrayTableaux);

  const iconeNext = document.querySelector(".icone__next");
  // console.log(iconeNext);

  iconeNext.addEventListener("click", () => {
    // alert("click icone next");
    const currentPictureLightbox = document.querySelector(".picture__lightbox");
    // console.log(currentPictureLightbox);
    const currentPositionPicture = parseInt(
      currentPictureLightbox.getAttribute("data-position")
    );
    // console.log("currentPositionPicture : " + currentPositionPicture);

    compteur++;
    index = currentPictureLightbox + compteur;
    // console.log(index);

    if (index < sizeArrayTableaux) {
      console.log("index next: " + index);
      currentPictureLightbox.src = `assets/images/${name}/${arrayTableaux[index]}`;
    } else {
      position++;
      if (position === sizeArrayTableaux) position = 0;
      {
        console.log("position next: " + position);
        currentPictureLightbox.src = `assets/images/${name}/${arrayTableaux[position]}`;
      }
    }
  });
};

export const previousPicture = (dataTableauxByPeintre) => {
  // console.log("previousPicture");
  const name = dataTableauxByPeintre.name;
  const arrayTableaux = dataTableauxByPeintre.data;
  const sizeArrayTableaux = arrayTableaux.length;
  const iconePrevious = document.querySelector(".icone__previous");
  // console.log(iconePrevious);

  iconePrevious.addEventListener("click", () => {
    // alert("click icone previous");
    const currentPictureLightbox = document.querySelector(".picture__lightbox");
    // console.log(currentPictureLightbox);
    const currentPositionPicture = parseInt(
      currentPictureLightbox.getAttribute("data-position")
    );

    if (position <= 0) {
      if (position == -1) {
        position = sizeArrayTableaux - 1;
      } else {
        position = sizeArrayTableaux;
      }
    }

    compteur++;
    index = currentPositionPicture - compteur;

    if (index >= 0) {
      console.log("index previous:" + index);
      currentPictureLightbox.src = `assets/images/${name}/${arrayTableaux[index]}`;
    } else {
      position--;
      console.log("position previous:" + position);
      currentPictureLightbox.src = `assets/images/${name}/${arrayTableaux[position]}`;
    }

    // console.log(currentPictureLightbox);
    // console.log(currentPositionPicture);
  });
};
