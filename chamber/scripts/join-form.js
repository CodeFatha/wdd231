const joinBtn = document.querySelector('#join');
const form = document.querySelector('#join-chamber');
const memberships = document.querySelector('.memberships');
memberLevels = [
  {
    id: '1',
    name: 'Non-profit',
    description: 'For non-profit organizations and community groups.',
  },
  {
    id: '2',
    name: 'Bronze',
    description: 'For small businesses and startups.',
  },
  {
    id: '3',
    name: 'Silver',
    description: 'For established businesses and organizations.',
  },
  {
    id: '4',
    name: 'Gold',
    description: 'For premium members with exclusive benefits.',
  }
]

loadMemberships();

joinBtn.addEventListener('click', () => {
  document.getElementById('timestamp').value = new Date().toISOString();
  localStorage.setItem('join-form-data', JSON.stringify(new FormData(form)));
  })

function loadMemberships() {
  this.memberLevels.forEach( function(membership) {
    const card = document.createElement('div');
    const text = document.createElement('p');
    const btn = document.createElement('button');
    card.className = 'member-card';
    card.classList.add('fly-in');
    text.innerHTML = `${membership.name} Membership Level`;    
    btn.innerHTML = 'Learn More';
    btn.id = membership.id;
    btn.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      const modalHeading = document.querySelector('.modal-heading');
      const desc = document.querySelector('.description');
      modalHeading.innerHTML = `${membership.name} Membership`
      desc.innerHTML = `${membership.description}`;
      modal.style.display = 'block';
      modal.style.textAlign = 'center';
      modal.style.animation = 'fadeIn 0.5s';
      modalContent.style.animation = 'slideIn 0.5s';
    });
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal.style.display = 'none';
    });
    card.appendChild(text);
    card.appendChild(btn);
    memberships.appendChild(card);

  });
}


