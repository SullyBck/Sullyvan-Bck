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
const ecOptions = document.getElementById('ec-options');

// Quand l'utilisateur change de niveau
niveau.addEventListener('change', () => {
  lyceeOptions.classList.add('d-none');
  ecOptions.classList.add('d-none');
  ['maths-seconde', 'maths-premiere', 'maths-terminale', 'ec-annee-options'].forEach(id => {
    document.getElementById(id).classList.add('d-none');
  });
  if (niveau.value === 'lycee') lyceeOptions.classList.remove('d-none');
  if (niveau.value === 'ec') ecOptions.classList.remove('d-none');
});

// Quand l'utilisateur change de classe lycée
document.getElementById('classe').addEventListener('change', () => {
  const classe = document.getElementById('classe').value;
  ['maths-seconde', 'maths-premiere', 'maths-terminale'].forEach(id => {
    document.getElementById(id).classList.add('d-none');
  });
  if (classe) document.getElementById('maths-' + classe).classList.remove('d-none');
});

// Quand l'utilisateur sélectionne la filière prépa EC
document.getElementById('filiere-ec').addEventListener('change', () => {
  const filiere = document.getElementById('filiere-ec').value;
  const ecAnnee = document.getElementById('ec-annee-options');
  if (filiere) ecAnnee.classList.remove('d-none');
  else ecAnnee.classList.add('d-none');
});

// Textes du formulaire selon la langue de la page
const EN = document.documentElement.lang === 'en';
const T = EN ? {
    classe: 'Please select your class.',
    option: 'Please select your maths option.',
    filiere: 'Please select your track.',
    annee: 'Please select your year.',
    niveau: 'Please select your level.',
    classes: { seconde: 'Seconde (10th grade)', premiere: 'Première (11th grade)', terminale: 'Terminale (12th grade)' },
    core: 'Core maths',
    lycee: (classe, maths) => 'Hi, I am interested in your lessons for a high school student in ' + classe + maths + '.',
    ec: (annee, filiere) => 'Hi, I am interested in your lessons for a ' + annee + ' prépa EC student (' + filiere + ').'
} : {
    classe: 'Veuillez selectionner votre classe.',
    option: 'Veuillez selectionner votre option maths.',
    filiere: 'Veuillez selectionner votre filiere.',
    annee: 'Veuillez selectionner l\'annee.',
    niveau: 'Veuillez selectionner votre niveau.',
    classes: { seconde: 'seconde', premiere: 'premiere', terminale: 'terminale' },
    core: 'Maths tronc commun',
    lycee: (classe, maths) => 'Salut, je suis intéressé par tes cours pour un élève de ' + classe + maths + ' au lycée.',
    ec: (annee, filiere) => 'Salut, je suis intéressé par tes cours pour un élève de ' + annee + ' en prépa EC (' + filiere + ').'
};

document.getElementById('contactBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const niveauVal = document.getElementById('niveau').value;
    let message = '';

    if (niveauVal === 'lycee') {
        const classe = document.getElementById('classe').value;
        if (!classe) { alert(T.classe); return; }

        let mathsStr = '';
        if (classe === 'seconde') {
            mathsStr = ' (' + T.core + ')';
        } else if (classe === 'premiere') {
            const sel = document.getElementById('maths-premiere-select').value;
            if (!sel) { alert(T.option); return; }
            mathsStr = ' (' + sel + ')';
        } else if (classe === 'terminale') {
            const sel = document.getElementById('maths-terminale-select').value;
            if (!sel) { alert(T.option); return; }
            mathsStr = ' (' + sel + ')';
        }
        message = T.lycee(T.classes[classe], mathsStr);
    }
    else if (niveauVal === 'ec') {
        const filiere = document.getElementById('filiere-ec').value;
        if (!filiere) { alert(T.filiere); return; }
        const annee = document.getElementById('annee-ec').value;
        if (!annee) { alert(T.annee); return; }
        message = T.ec(annee, filiere);
    }
    else {
        alert(T.niveau);
        return;
    }

    const encodedMessage = encodeURIComponent(message);
    window.location.href = 'contact?cours=1&message=' + encodedMessage;
});

const carousel = document.getElementById("avisCarousel");
const nextBtn = document.getElementById("avisNext");
const prevBtn = document.getElementById("avisPrev");

function scrollCards(direction) {
    const cardWidth = carousel.querySelector(".avis-card").offsetWidth + 20; // 20px = gap
    carousel.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
}

nextBtn.addEventListener("click", () => scrollCards(1));
prevBtn.addEventListener("click", () => scrollCards(-1));