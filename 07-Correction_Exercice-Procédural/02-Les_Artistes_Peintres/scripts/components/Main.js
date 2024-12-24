export const Main = (datas) => {
  // console.log(datas);

  const dataTableauxByPeintre = datas;

  const displayGalery = () => {
    // rendu: <div class = "block__animation"><div>
    // Cet élément html contient l'ensemble de la galerie (h2, div, figure, img, figcaption)
    const blockAnimation = document.createElement("div");
    blockAnimation.classList.add("block__animation");

    // On génère le titre <h2> de la galerie (ex: Galerie Picasso)
    const peintureTitle = document.createElement("h2");
    peintureTitle.classList.add("peinture__title");
    peintureTitle.innerText = `Galerie ${dataTableauxByPeintre.name}`;

    // On inje{cte comme enfant le titre <h2> au blockAnimation global
    blockAnimation.appendChild(peintureTitle);
    // console.log(blockAnimation);

    // On génère une div contenant toute les card de la galerie
    const peintureContent = document.createElement("div");
    peintureContent.classList.add("peinture__content");
    // console.log(peintureContent);

    // On boucle les tableaux récupérées dans le fichier data.json et on génère une card <figure> par tour de boucle, la boucle tourne autant de fois qu'il y a de tableaux pour la peintre
    dataTableauxByPeintre.data.forEach((tableau, index) => {
      // console.log(index);
      // Création de la balise <figure>
      const card = document.createElement("figure");
      card.classList.add("card");

      // Création de la balise <img>
      const picture = document.createElement("img");
      picture.classList.add("peinture__picture");

      // On définit l'atribut alt de l'image et l'attribut src de l'image
      picture.setAttribute(
        "alt",
        `Tableau ${dataTableauxByPeintre.name} ${tableau}`
      );
      picture.setAttribute("data-position", index);
      picture.setAttribute("data-peintre", dataTableauxByPeintre.name);
      picture.src = `assets/images/${dataTableauxByPeintre.name}/${tableau}`;

      // Création de la balise <figcaption> pour la légende de l'image
      const legend = document.createElement("figcaption");
      legend.classList.add("card__legend");
      // console.log(tableau.split("."));

      // split() permet de couper une chaîne de caractères en plusieurs parties, ici on coupe le tableau par le point (.) et place chaque partie dans un tableau array
      const textLegend = tableau.split(".")[0].replace(/[_-]/g, " ");
      legend.innerText = textLegend;

      // On affecte comme enfant à chaque card l'image et la balise figcaption
      card.appendChild(picture);
      card.appendChild(legend);

      // On affecte comme enfant l'ensemble des cards au block peintureContent
      peintureContent.appendChild(card);

      // console.log(peintureContent);
    });

    // On affecte l'ensemble des éléments HTML générés (h2, cards ...) au bloc global blockAnimation
    blockAnimation.appendChild(peintureContent);
    // console.log(blockAnimation);

    blockAnimation.classList.add("animationBounce");

    // outerHTML permet de convertir l'object HTMLElement blockAnimation en une chaîne de caractères contenant des éléments HTML genérés
    return blockAnimation.outerHTML;
  };

  // displayGalery();

  return `
     <main class="main">
        <section class="main__presentation">
          <img
            src="assets/banner/img_baniere.png"
            alt="peinture bannière"
            class="banner"
          />
          <div class="presentation__content">
            <h2 class="presentation__title">Ce que nous faisons</h2>
            <p class="presentation__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque minima sint temporibus, quis hic natus dolorem
              assumenda! Velit eius impedit omnis repellendus itaque
              exercitationem id quo ut quibusdam. Dicta ad laborum consectetur
              nemo atque ipsa corporis voluptatibus autem aliquam quaerat,
              adipisci culpa quod. Praesentium, ad temporibus. Veritatis labore
              excepturi magnam!
            </p>
          </div>
        </section>

        <section class="galery">
          <aside class="galery__nav">
            <ul class="galery__nav__list">
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Nos productions</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Qui sommes nous</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Notre philosophie</a>
              </li>
              <li class="galery__nav__item">
                <a href="" class="galery__nav__link">Nous contacter</a>
              </li>
            </ul>
          </aside>
          <section class="peinture">
           ${displayGalery()}
          </section>
        </section>
      </main>`;
};
