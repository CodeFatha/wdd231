const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('show');
    logo.classList.toggle('show');
    nav.classList.toggle('show');
}