const buttons = Array.from(document.querySelectorAll('[id^="myBtn"]'));
const modals = buttons.map(button => document.getElementById(button.id.replace('myBtn', 'myModal')));

const spans = document.getElementsByClassName('close');

function openModal(modal, button) {
  modal.style.display = 'flex';
  button.closest('.exp-thumb').classList.add('card-open');
}

function closeModal(modal) {
  modal.style.display = 'none';
  modal.closest('.exp-thumb').classList.remove('card-open');
}

// ouvrir les modales
buttons.forEach((button, index) => {
  button.onclick = () => openModal(modals[index], button);
});

// fermer quand on clique sur la croix
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = () => closeModal(spans[i].closest('.modal'));
}

// fermer quand on clique à l'extérieur
window.onclick = event => {
  modals.forEach(modal => {
    if (event.target == modal) closeModal(modal);
  });
};
