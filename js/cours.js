// --- PDF Maths ---
function changePDF(newPDFPath) {
  const pdf = document.getElementById('pdf');
  pdf.src = `https://drive.google.com/file/d/${newPDFPath}/preview`;
}

// --- PDF SES ---
function changePDF2(newPDFPath) {
  const pdf2 = document.getElementById('pdf2');
  pdf2.src = `https://drive.google.com/file/d/${newPDFPath}/preview`;
}

// --- Accordéon mobile ---
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
  category.addEventListener('click', () => {
    const section = category.closest('section'); // 🌟 section parente (maths ou ses)
    const targetId = category.dataset.category;
    const targetSubtabs = section.querySelector(`#${targetId}`);
    const isOpen = targetSubtabs.classList.contains('open');

    // Fermer les autres catégories dans la même section
    section.querySelectorAll('.subtabs').forEach(st => {
      if (st !== targetSubtabs) st.classList.remove('open');
    });

    // Basculer celle qu'on clique
    targetSubtabs.classList.toggle('open');

    // --- Gestion de la classe active ---
    if (isOpen) {
      category.classList.remove('active');
    } else {
      section.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
      category.classList.add('active');
    }
  });
});

// --- Highlight des boutons PDF, isolé par section ---
(function () {
  // pour chaque section (maths et ses)
  document.querySelectorAll('section').forEach(section => {
    const pdfButtons = section.querySelectorAll('.subtabs button');
    const programmeBtns = section.querySelectorAll('.programme-btn');

    pdfButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // désactiver seulement les boutons de cette section
        section.querySelectorAll('.subtabs button').forEach(b => b.classList.remove('active'));
        section.querySelectorAll('.programme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    programmeBtns.forEach(pb => {
      pb.addEventListener('click', () => {
        section.querySelectorAll('.subtabs button').forEach(b => b.classList.remove('active'));
        section.querySelectorAll('.programme-btn').forEach(b => b.classList.remove('active'));
        pb.classList.add('active');
      });
    });
  });
})();

// Récupération des éléments
const niveau = document.getElementById('niveau');
const lyceeOptions = document.getElementById('lycee-options');
const ecgOptions = document.getElementById('ecg-options');
const tsiOptions = document.getElementById('tsi-options');
const videoFrame = document.getElementById('videoFrame');

// Lien de base (sans paramètre)
const videoBase = "https://www.youtube.com/embed/877AaHb6I-I";

// Timecodes de départ (en secondes)
const timecodes = {
  lycee: 0,    // 0:00
  ecg: 75,     // 1:15
  tsi: 140     // 2:20
};

// Quand l’utilisateur change de niveau
niveau.addEventListener('change', () => {
  // Masquer toutes les sous-options
  lyceeOptions.classList.add('d-none');
  ecgOptions.classList.add('d-none');
  tsiOptions.classList.add('d-none');

  // Afficher la sous-section correspondante
  if (niveau.value === 'lycee') lyceeOptions.classList.remove('d-none');
  if (niveau.value === 'ecg') ecgOptions.classList.remove('d-none');
  if (niveau.value === 'tsi') tsiOptions.classList.remove('d-none');

  // Charger la vidéo au bon moment
  if (niveau.value) {
    const start = timecodes[niveau.value];
    videoFrame.src = `${videoBase}?start=${start}&autoplay=1`;
  } else {
    videoFrame.src = videoBase;
  }
});
