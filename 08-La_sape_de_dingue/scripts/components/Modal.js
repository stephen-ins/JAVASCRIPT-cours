export const Modal = () => {
    return `
        <div class="modal">
            <h1 class="modal__title">Voulez-vous réellement supprimer ce produit ?</h1>
            <button class="button__remove">CONTINUER</button>
        </div>
    `;
}

export const ModalIn = () => {
    const iconesDeleteItem = document.querySelectorAll('.icone__delete__item');
    const modal = document.querySelector('.modal');
    const buttonValidateRemoveItem = document.querySelector('.button__remove');
    iconesDeleteItem.forEach((item)  => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const id = item.getAttribute('data-id');
            console.log(id);
            modal.classList.add('modalIn');
            modal.children[0].innerText = 'Voulez-vous réellement supprimer ce produit ?';
            buttonValidateRemoveItem.setAttribute('data-id', id);
        })
    })
}