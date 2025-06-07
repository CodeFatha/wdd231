const year = document.querySelector(".year");
const element = document.querySelector("#date-placeholder");
const cards = document.querySelector(".cards");
const ribbon = document.querySelector(".ribbon");
const today = new Date();
let lastVisit = localStorage.getItem("lastVisit");


year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;
let text = '';
if (!lastVisit) {
    text = 'Welcome! Let us know if you have any questions.';
    localStorage.setItem("lastVisit", today);
}
else if (today - new Date(lastVisit) < 1000 * 60 * 60 * 24) {
    text = 'Back so soon!Awesome!';
}
else {
    text = `You last visited ${Math.round((today - new Date(lastVisit)) / ( 1000 * 60 * 60 * 24))} days ago.`;
}
ribbon.innerHTML = `${text}`;
