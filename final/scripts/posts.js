import {posts} from '../data/posts.mjs'
const stickers = document.querySelector('.stickers');
const localPosts = localStorage.getItem('posts');

loadPosts();

async function loadPosts() {
    if (!localPosts) {
        try {            
            const postData = await posts;
            localStorage.setItem('posts', JSON.stringify(postData));
        } catch (error) {
            console.log(error);
        }
    }
    const data = localPosts ? JSON.parse(localPosts) : posts;
    data.reverse(); // So newly created posts show at the top
    data.forEach(element => {
        const sticker = document.createElement('div');
        const title = document.createElement('h2');
        const image = document.createElement('img');
        const desc = document.createElement('p');
        const username = document.createElement('p');
        
        sticker.className = 'sticker';
        image.width = '240';
        image.height = '180';

        title.innerHTML = element.title;
        image.src = `../final/images/${element.image}`;
        image.loading = 'lazy';
        desc.innerHTML = element.description;
        username.innerHTML = `Posted by ${element.username}`;
        sticker.id = element.id;

        sticker.appendChild(title);
        sticker.appendChild(image);
        sticker.appendChild(desc);
        sticker.appendChild(username);
        sticker.addEventListener('click', () => {
            modal.style.display = 'block';
            modalTitle.innerHTML = element.title;
            const description = document.createElement('p');
            const category = document.createElement('p');
            const author = document.createElement('p');
            const phone = document.createElement('p');
            const address = document.createElement('p');
            
            description.innerHTML = element.description;
            category.innerHTML = `Category: ${element.category}`;
            author.innerHTML = `Posted By: ${element.username}`;
            phone.innerHTML = `Contact: ${element.phone}`;
            address.innerHTML = `Location: ${element.address}`;
            modalDetails.innerHTML = '';
            modalDetails.appendChild(description);
            modalDetails.appendChild(category);
            modalDetails.appendChild(author);
            modalDetails.appendChild(phone);
            modalDetails.appendChild(address);

        });
        stickers.appendChild(sticker);
    });
}

