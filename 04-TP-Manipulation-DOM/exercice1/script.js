const selectItem = (thumbnail) => {
  // Thumbnail est une variable de reception que NOUS définissons permettant ici de réceptionner l'image thumbnail sur laquelle l'utilisateur a cliqué

  const largePicture = document.querySelector(".picture__first");
  const figCaption = document.querySelector(".legend__picture");

  //  On affecte la source (attribut html src) de la petite image à la grande image
  largePicture.src = thumbnail.src;

  //  On envoi le contenu de l'attribut alt de la petite image à la balise figcaption, la légende de la grande image
  figCaption.innerText = thumbnail.alt;
};

// Exercice : faites en sorte lorsque l'on clique sur l'image que l'opacité reste sur l'image

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((vignette) => {
  vignette.addEventListener("click", () => {
    // Retirer la classe 'thumbnail__opacity' de toutes les vignettes
    thumbnails.forEach((el) => {
      el.classList.remove("thumbnail__opacity");
    });

    // Ajouter la classe 'thumbnail__opacity' à la vignette cliquée
    vignette.classList.add("thumbnail__opacity");
  });

  console.log(vignette); // Affiche chaque vignette dans la console
});
