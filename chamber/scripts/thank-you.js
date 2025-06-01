const applicant = document.querySelector('.applicant');
const details = document.querySelector('.details');
const params = new URLSearchParams(window.location.search);

applicant.innerHTML = params.get('first-name');
const keys = ['Name', 'Surname','Email', 'Phone Number', 'Business Name', 'Time stamp'];
let index = 0;
params.forEach( function (param ) {
    if (param !== 'Organisational Title') {
        const info = document.createElement('p')
        info.className = 'data-set';
        info.innerHTML = `${keys[index]}: ${param}`;
        details.appendChild(info);
        index++;
    }
});
