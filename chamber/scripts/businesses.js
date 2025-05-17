const container = document.querySelector('.container');
const listContainer = document.querySelector('.list-container');
const gridBtn = document.querySelector('.grid-btn');
const listBtn = document.querySelector('.list-btn');

createCards();
gridBtn.classList.add('selected');


gridBtn.addEventListener('click', () => {
    container.innerHTML = '';
    listContainer.innerHTML = '';
    gridBtn.classList.add('selected');
    listBtn.classList.remove('selected')
    createCards();
});

listBtn.addEventListener('click', () => {
    container.innerHTML = '';
    listContainer.innerHTML = '';
    gridBtn.classList.remove('selected');
    listBtn.classList.add('selected');
    createList();
})

async function createCards() {
    fetch('../chamber/data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(business => {
                const div = document.createElement('div');
                div.classList.add('card');
                const image = document.createElement('img');
                const phone = document.createElement('p');
                const address = document.createElement('p');
                address.classList.add('address');
                const web = document.createElement('a');
                image.src = business.image;
                image.alt = `${business.name}`; 
                image.width = '240';
                image.height = '180';
                address.innerHTML = `${business.address}`;
                phone.innerHTML = `${business.phone}`;
                web.innerHTML = `${business.websiteUrl}`;
                web.href = business.websiteUrl;
                web.target = '_blank';
                div.appendChild(image);
                div.appendChild(address);
                div.appendChild(phone);
                div.appendChild(web);

                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading businesses:', error));
}

async function createList() {
    fetch('../chamber/data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(business => {
                const div = document.createElement('div');
                div.classList.add('list');
                const details = document.createElement('h2');
                const site = document.createElement('h2');
                const anchor = document.createElement('a');
                details.innerHTML = `${business.name} | ${business.phone} | ${business.address}`;
                anchor.innerHTML = `Website`;
                anchor.href = business.websiteUrl;
                anchor.target = '_blank';
                site.appendChild(anchor);
                div.appendChild(details);
                div.appendChild(site);
                listContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading businesses:', error));
}

