const homeLink = document.querySelector('.home');
const githubLink = document.querySelector('.github');
const finalLink = document.querySelector('.final');
const linkedin = document.querySelector('.linkedin');
const chamber = document.querySelector('.chamber');
const links = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

homeLink.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.remove('active');
    });
    homeLink.classList.add('active');
});
githubLink.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.remove('active');
    });
    githubLink.classList.add('active');   
});
finalLink.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.remove('active');
    });
    finalLink.classList.add('active');
});
chamber.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.remove('active');
    });
    chamber.classList.add('active');
});
linkedin.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.remove('active');
    });
    linkedin.classList.add('active');
});