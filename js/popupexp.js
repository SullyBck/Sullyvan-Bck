const modals = [
  document.getElementById('myModal1'),
  document.getElementById('myModal2'),
  document.getElementById('myModal3'),
  document.getElementById('myModal4'),
  document.getElementById('myModal5'),
  document.getElementById('myModal6'),
  document.getElementById('myModal7'),
  document.getElementById('myModal8')
];

const buttons = [
  document.getElementById('myBtn1'),
  document.getElementById('myBtn2'),
  document.getElementById('myBtn3'),
  document.getElementById('myBtn4'),
  document.getElementById('myBtn5'),
  document.getElementById('myBtn6'),
  document.getElementById('myBtn7'),
  document.getElementById('myBtn8')
];

const spans = document.getElementsByClassName('close');

// ouvrir les modales
buttons.forEach((button, index) => {
  button.onclick = () => {
    modals[index].style.display = 'block';
  };
});

// fermer quand on clique sur la croix
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = () => {
    spans[i].closest('.modal').style.display = 'none';
  };
}

// fermer quand on clique à l'extérieur
window.onclick = event => {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};
