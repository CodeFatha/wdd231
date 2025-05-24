const homeLink = document.querySelector('.home');
const githubLink = document.querySelector('.github');
const finalLink = document.querySelector('.final');
const linkedin = document.querySelector('.linkedin');
const chamber = document.querySelector('.chamber');

homeLink.addEventListener('click', () => {
    homeLink.classList.add('active');
    githubLink.classList.remove('active');
    finalLink.classList.remove('active');
    chamber.classList.remove('active');
    linkedin.classList.remove('active');
});
githubLink.addEventListener('click', () => {
    githubLink.classList.add('active');
    homeLink.classList.remove('active');
    finalLink.classList.remove('active');
    chamber.classList.remove('active');
    linkedin.classList.remove('active');
});
finalLink.addEventListener('click', () => {
    finalLink.classList.add('active');
    homeLink.classList.remove('active');
    githubLink.classList.remove('active');
    chamber.classList.remove('active');
    linkedin.classList.remove('active');
});
chamber.addEventListener('click', () => {
    chamber.classList.add('active');
    homeLink.classList.remove('active');
    githubLink.classList.remove('active');
    finalLink.classList.remove('active');
    linkedin.classList.remove('active');
});
linkedin.addEventListener('click', () => {
    linkedin.classList.add('active');
    chamber.classList.remove('active');
    homeLink.classList.remove('active');
    githubLink.classList.remove('active');
    finalLink.classList.remove('active');
});