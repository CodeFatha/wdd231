const joinBtn = document.querySelector('#join');
const form = document.querySelector('#join-chamber');
const memberships = document.querySelector('.memberships');

loadMemberships();

joinBtn.addEventListener('click', () => {
  document.getElementById('timestamp').value = new Date().toISOString();
  localStorage.setItem('join-form-data', JSON.stringify(new FormData(form)));
  })

function loadMemberships() {
  const levels = ['Non-profit', 'Bronze', 'Silver', 'Gold'];
  levels.forEach( function(membership) {
    const card = document.createElement('div');
    const text = document.createElement('p');
    const btn = document.createElement('button');
    card.className = 'member-card';
    card.classList.add('fly-in');
    text.innerHTML = `${membership} Membership Level`;
    btn.innerHTML = 'Learn More';
    card.appendChild(text);
    card.appendChild(btn);
    memberships.appendChild(card);

  });
}
