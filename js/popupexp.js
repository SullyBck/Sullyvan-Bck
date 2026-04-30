const modals = [
  document.getElementById('myModal1'),
  document.getElementById('myModal2'),
  document.getElementById('myModal3'),
  document.getElementById('myModal4'),
  document.getElementById('myModal5'),
  document.getElementById('myModal6')
].filter(Boolean);

const buttons = [
  document.getElementById('myBtn1'),
  document.getElementById('myBtn2'),
  document.getElementById('myBtn3'),
  document.getElementById('myBtn4'),
  document.getElementById('myBtn5'),
  document.getElementById('myBtn6')
].filter(Boolean);

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
