const links = document.querySelectorAll('.nav-link');

const linksArray = Object.values(links);
linksArray.forEach( link => {
    if (link.href == window.location.href) {        
        link.classList.add('active');
    }
})