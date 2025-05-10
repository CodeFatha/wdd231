const element = document.querySelector("#date-placeholder");
const year = document.querySelector(".year");
const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const logo = document.querySelector('.brand');
const today = new Date();

year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;


hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('show');
    logo.classList.toggle('show');
    nav.classList.toggle('show');
}


const courses = [
    {
        'name': 'CSE110',
        'description': 'Introduction to Computer Science',
        'credits': 3,
    },
    {
        'name': 'CSE111',
        'description': 'intermediate Programming',
        'credits': 3,
    },
    {
        'name': 'CSE210',
        'description': 'Semi-advanced Programming',
        'credits': 3,
    },
    {
        'name': 'WDD131',
        'description': 'Web Fundamentals',
        'credits': 3,
    },
    {
        'name': 'WDD231',
        'description': 'Intermediate Web Development',
        'credits': 3,
    }
]