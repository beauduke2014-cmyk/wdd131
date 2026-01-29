const gallery = document.querySelector('.images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

gallery.addEventListener('click', openModal);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

function openModal(e) {
    const img = e.target;

    const alt = img.getAttribute('alt');

    modalImage.setAttribute('src', 'images/norris-full.jpg')
    modalImage.alt = alt;
    modal.showModal();

}

closeButton.addEventListener('click', () => {
    modal.close();
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})