const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const sender = document.querySelector('.sender');

sender.innerHTML = params.get('name').split(' ')[0];

