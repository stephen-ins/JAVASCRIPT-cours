const toggleDropdown = (buttonDropdown) => {
  console.log(buttonDropdown.children[1]);
  //   console.log(buttonDropdown.nextElementSibling);

  buttonDropdown.nextElementSibling.classList.toggle("toggle__dropdown");
  buttonDropdown.children[1].classList.toggle("fa-rotate-180");

  document.onclick = (event) => {
    console.log(event.target);

    if (
      !event.target.matches(".dropdown") &&
      !event.target.matches(".buttonDropdown") &&
      !event.target.matches(".title__dropdown") &&
      !event.target.matches(".fa-chevron-down")
    ) {
      // Exo : Faites en sorte que le chevron revienne à sa place initiale lorsque nous cliquons à l'extérieur du menu déroulant.

      //   console.log("Je n'ai pas cliqué sur le menu déroulant");
      buttonDropdown.nextElementSibling.classList.remove("toggle__dropdown");
      buttonDropdown.children[1].classList.toggle("fa-rotate-180");
    }
  };
};


