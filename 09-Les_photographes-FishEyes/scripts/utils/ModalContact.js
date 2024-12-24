export const initModal = (photographer) => {
  const modalTemplate = `
    <section class="modal" id="contact_modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title">
      <div class="modal__content">
        <header class="modal__header">
          <h2 id="modal-title">Contactez-moi</h2>
          <p class="name__contact__modale">${photographer.name}</p>
          <button class="modal__close" aria-label="Fermer la modale">
            <i class="fas fa-times"></i>
          </button>
        </header>

        <form class="modal__contact">
          <div class="form-group">
            <label for="prenom" class="label">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>

          <div class="form-group">
            <label for="nom" class="label">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          <div class="form-group">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="message" class="label">Votre message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </div>
    </section>
  `;

  document.body.innerHTML += modalTemplate;

  const contactButton = document.querySelector(".contact__button");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".modal__close");
  const container = document.querySelector(".container");

  contactButton.addEventListener("click", () => {
    // console.log("ID du photographe:", photographer.id);
    modal.classList.add("modal__active");
    container.classList.add("blur");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal");
    container.classList.remove("blur");
  });
};


