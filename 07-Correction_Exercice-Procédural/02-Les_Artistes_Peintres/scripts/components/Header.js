export const Header = (datas) => {
  //   console.log(datas);
  let navLink = "";
  // Picasso in object toute les données de Picasso
  for (let key in datas) {
    // console.log(key);

    const activeLink = window.location.href.includes(`?peintre=${key}`);
    navLink += ` <li class="nav__item">
              <a href="?peintre=${key}" "data-peintre="${key}" class="nav__link ${
      activeLink ? "nav__link__hover" : ""
    }">${key}</a>
             </li>`;
  }

  //   console.log(navLink);

  return ` <header class="header">
        <div class="header__logo">
          <a href="index.html" class="header__link__logo">
            <img
              src="assets/logos/logo-art-peinture.png"
              alt="logo"
              class="logo"
            />
          </a>
          <h1 class="header__title">Les Artistes Peintres</h1>
        </div>
        <i class="fa-solid fa-bars icone__burger"></i>
        <nav class="nav">
          <ul class="nav__list">${navLink}</ul>
        </nav>
      </header>
    `;
};

// Exo : créer une fonction permettant de gérer le menu déroulant en cliquant sur le bouton hamburger

export const showMenuBurger = () => {
  // console.log("showMenuBurger");
  const iconeBurger = document.querySelector(".icone__burger");
  const navList = document.querySelector(".nav__list");
  // console.log(navList);
  iconeBurger.addEventListener("click", () => {
    navList.classList.toggle("nav__list__toggle");
  });
};




// Exo : créer une fonction pour les liens actifs, si dans l'url ?peintre=Picasso, le lien <a>"Picasso" devient actif

export const activeNavLink = () => {
  const navLinkActive = document.querySelectorAll(".nav__link");
  navLinkActive.forEach((link) => {
    link.addEventListener("click", function () {
      // navLinkActive.forEach((link) => link.classList.remove(""));
      this.classList.add("nav__link.active");
    });
  });
};

