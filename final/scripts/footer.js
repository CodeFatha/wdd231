const year = document.querySelector(".year");
const element = document.querySelector("#date-placeholder");
const cards = document.querySelector(".cards");
const ribbon = document.querySelector(".ribbon");
const today = new Date();
let lastVisit = localStorage.getItem("lastVisit");


year.innerHTML = `\u00A9 ${today.getFullYear()}`;
element.innerHTML = `Last modified: ${document.lastModified}`;

