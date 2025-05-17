const hamburger = document.querySelector('#menu');
const hdr = document.querySelector('.hdr');
const upper = document.querySelector('.upper-header');
const nav = document.querySelector('.navigation');
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
    hdr.classList.toggle('show');
    upper.classList.toggle('show');
}