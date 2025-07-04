import {places} from '../data/places.mjs';
const container = document.querySelector('.cards');
const chamber = document.querySelector('.chamber');

loadPlaces();
chamber.classList.add('active');

async function loadPlaces() {
    
        places.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card')
            const image = document.createElement('img');
            const name = document.createElement('h3');
            const desc = document.createElement('p');
            const address = document.createElement('p');
            address.classList.add('address');
            desc.classList.add('address');
            image.src = `images/${place.photo}`;
            image.alt = `${place.name}`; 
            image.width = '260';
            image.height = '180';
            image.loading = 'lazy';
            address.innerHTML = `${place.address}`;
            name.innerHTML = `${place.name}`;
            name.style.marginBottom = '5px';
            desc.innerHTML = `${place.description}`;
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(name);
            card.appendChild(desc);
            container.appendChild(card);
        });
}