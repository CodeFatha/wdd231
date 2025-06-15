const form = document.getElementById('myForm');
const local = localStorage.getItem('posts');
let jsonData = null;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    switch (entries.category) {
        case 'housing':
            entries.image = 'house.webp';
            break;
        case 'furniture':
            entries.image = 'furniture.webp';
            break;
        case 'appliance':
            entries.image = 'dryer.webp';
            break;
        default:
            entries.image = 'car.webp';
            break;
    }
    const localArray = JSON.parse(local);
    entries.id = localArray.length + 1;
    localArray[localArray.length] = entries;
    localStorage.setItem('posts', JSON.stringify(localArray));
    form.submit();
});
