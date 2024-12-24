// *************************************************************//
// Création de la liste des tableaux à implémenter

const paintPicasso = [
  { src: "Autoportrait_Picasso.png", title: "Autoportrait (1906)" },
  { src: "Demoiselles_Avignon.png", title: "Les demoiselles d'Avignon (1907)" },
  { src: "Femme_qui_pleure.png", title: "Femme qui pleure (1937)" },
  { src: "guernica.png", title: "Guernica (1937)" },
  {
    src: "Le_Peintre_et_son_Modele.png",
    title: "Le peintre et son modèle (1967)",
  },
  { src: "Marie_Therese.png", title: "Marie Thérèse (1906)" },
];

const paintCaillebotte = [
  { src: "Autoportrait_Caillebotte.png", title: "Autoportrait (1977)" },
  { src: "Jour_de_pluie_à_Paris.png", title: " Jour de pluie à Paris (1877)" },
  {
    src: "Peintres_en_batiment.png",
    title: " Les Peintres en bâtiment (1877)",
  },
  {
    src: "Périssoires_sur_l’Yerres.png",
    title: "Périssoires sur l'Yerres (1877)",
  },
  { src: "Raboteurs_de_parquet.png", title: "Les Raboteurs de Parquet (1877)" },
];

const paintVermeer = [
  { src: "fille_a_la-perle.png", title: "La fille à la perle (1665)" },
  { src: "La_Laitière.png", title: "La laitière(1658)" },
  {
    src: "La_Liseuse_à_la_fenêtre.png",
    title: "La liseuse à la fenêtre (1657)",
  },
];

const paintKandinsky = [
  { src: "Composition-1939.png", title: "Composition X (1939)" },
  { src: "Composition-VI-1913.png", title: " Compostion VI (1913)" },
  { src: "Jaune_rouge_bleu.png", title: "Jaune Rouge Bleu (1925)" },
  { src: "Moscou-1916.png", title: "Moscow (1916)" },
  { src: "Noir-et-violet-1923.png", title: "Noir et Violet (1923)" },
  { src: "tableau-en-bleu-1925-.png", title: "Tableau en bleu (1925)" },
];

const paintVanGogh = [
  {
    src: "Campagne_Montagneuse-1889.jpg",
    title: " Campagne montagneuse (1889)",
  },
  {
    src: "La_Chambre_de_van_gogh-1889-.png",
    title: " La chambre de Van Gogh (1889)",
  },
  { src: "La_nuit_étoilée-1889.png", title: "La nuit étoilée (1889)" },
  { src: "La_Sieste.png", title: " La sieste (1890)" },
  { src: "Les_Iris-1889.png", title: "Les Iris (1889)" },
  { src: "Terrasse_café.png", title: " Terrasse du café le soir (1888)" },
];

const paintMonet = [
  {
    src: "Impression_soleil_levant-1872.png",
    title: "Impression, soleil levant (1874)",
  },
  { src: "La_Promenade.png", title: "La promenade (1875) " },
  { src: "Le_déjeuner-1873.png", title: " Le déjeuner (1873)" },
  { src: "Les_Coquelicots.png", title: "Les coquelicots (1873)" },
  {
    src: "Madame_Monet_et_Enfant-1875.png",
    title: " Madame Monet et son enfant (1875) ",
  },
  { src: "Nymphéas-1916.png", title: "Nymphéas (1916)" },
];

function insertionPaint(peintre) {
  const sectionGallery = document.querySelector(".gallery");

  // j'efface le tableau actuel
  sectionGallery.innerHTML = "";

  let data;

  switch (peintre) {
    case "Picasso":
      data = paintPicasso;
      break;
    case "Caillebotte":
      data = paintCaillebotte;
      break;
    case "Vermeer":
      data = paintVermeer;
      break;
    case "Kandinsky":
      data = paintKandinsky;
      break;
    case "Monet":
      data = paintMonet;
      break;
    case "Van Gogh":
      data = paintVanGogh;
      break;
  }

  // console.log(data);

  const blockArtist = document.createElement("section");
  blockArtist.classList.add("title__animate");

  const titlePeintre = document.createElement("h3");
  titlePeintre.classList.add("title__h3");
  titlePeintre.innerText = `Galerie ${peintre}`;
  blockArtist.appendChild(titlePeintre);
  // console.log(titlePeintre);

  const galleryPaint = document.createElement("div");
  galleryPaint.classList.add("gallery__paint");
  galleryPaint.classList.add("gallery__animate");
  // console.log(galleryPaint);

  // boucle sur les tableaux

  data.forEach((painting) => {
    const figure = document.createElement("figure");
    figure.classList.add("figure");
    // console.log(figure);

    const img = document.createElement("img");
    img.src = `../assets/atelier_les-artistes-peintres/peintures/galerie_${peintre}/${painting.src}`;
    img.alt = painting.title;
    img.classList.add("picture");
    // console.log(img);

    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("figcaption");
    figcaption.textContent = painting.title;
    // console.log(figcaption);

    galleryPaint.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  });

  blockArtist.appendChild(titlePeintre);
  blockArtist.appendChild(galleryPaint);

  sectionGallery.appendChild(blockArtist);
  sectionGallery.appendChild(galleryPaint);
}

// Evenements au clic sur chaque item des artistes pour appeler leur galerie
const navItem = document.querySelectorAll(".nav__item");
// console.log(navItem);
navItem.forEach((item) => {
  //   console.log(item);
  item.addEventListener("click", (event) => {
    event.preventDefault();
    insertionPaint(item.textContent);
  });
});

const menuNav = document.querySelector(".nav");
console.log(menuNav);
const iconeBurger = document.querySelector("#iconeBurger");

function showMenuBurger() {
  menuNav.classList.toggle("toggleNav");
}

iconeBurger.addEventListener("click", showMenuBurger);
