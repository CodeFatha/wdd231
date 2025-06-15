const header  = document.querySelector('.custom-header');
const footer  = document.querySelector('.custom-footer');
const closeBtn  = document.querySelector('.close');
const modal  = document.querySelector('.modal');
const modalTitle  = document.querySelector('.title');
const modalDetails  = document.querySelector('.details');

const script = document.createElement('script');
const menuscript = document.createElement('script');
script.src = 'scripts/hamburger.js';
menuscript.src = 'scripts/menu.js';

const page = window.location.href;

loadHeader();
loadFooter();

if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display= 'none')
}

function loadHeader() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {           
        header.innerHTML = data;
        document.head.appendChild(menuscript);
        document.head.appendChild(script);
        printBanner();
    })
    .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
            const year = document.querySelector('.year');
            const element = document.querySelector('#date-placeholder');
            const today = new Date();
            year.innerHTML = `\u00A9 ${today.getFullYear()}`;
            element.innerHTML = `Last modified: ${document.lastModified}`;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function printBanner() {
    const headerHeading = document.querySelector('.brand');
    const btn = document.querySelector('.action-btn');

    if (page.includes('index')) {
        headerHeading.innerHTML = 'Bulletin Board';
    } 
    else if (page.includes('about')) {
        headerHeading.innerHTML = 'About Bulletin Board';
        btn.style.marginTop = 0;
    }
    else if (page.includes('thankyou')) {
        headerHeading.innerHTML = 'Message Sent!';
        btn.style.marginTop = 0;
    }
    else {
        headerHeading.innerHTML = 'Contact Us';
    }
}