const container = document.querySelector('.cards');

pickSpotlights();

async function pickSpotlights() {
    fetch('../chamber/data/members.json')
    .then(response => {
        if (!response) {
            throw new Error('Data could not be retrieved');
        }
        return response.json();
    })
    .then(data => {
        const indexes = getRandom(3, data.length);
        indexes.forEach(index => {
            const business = data[index];
            const card = document.createElement('div');
            card.classList.add('card')
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
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(web);
            container.appendChild(card);
        });
    })

    function getRandom(count, limit) {
        let array = [];

        for (let index = 0; index < count; index++) {
            const position = Math.floor(Math.random() * limit);
            if (!array.includes(position)) {
                array.push(position);          
            } else {
                index--;
            }
        }

        return array;
    }
    
}