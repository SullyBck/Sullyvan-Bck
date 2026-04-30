const modalMap = {
    modalMontage:     'openPopupButton',
    modalAmelioration:'openPopupButton2',
    modalReparation:  'openPopupButton3',
    modalStockage:    'openPopupButton4',
};

function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    const btn = document.getElementById(modalMap[id]);
    btn.classList.add('btn-open');
    btn.closest('.hardware-thumb').classList.add('card-open');
    const videoWrap = modal.querySelector('.hw-video-wrap');
    if (videoWrap) {
        videoWrap.innerHTML = `<iframe src="${videoWrap.dataset.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    const btn = document.getElementById(modalMap[id]);
    btn.classList.remove('btn-open');
    btn.closest('.hardware-thumb').classList.remove('card-open');
    const videoWrap = modal.querySelector('.hw-video-wrap');
    if (videoWrap) videoWrap.innerHTML = '';
}

document.getElementById('openPopupButton').addEventListener('click', () => openModal('modalMontage'));
document.getElementById('openPopupButton2').addEventListener('click', () => openModal('modalAmelioration'));
document.getElementById('openPopupButton3').addEventListener('click', () => openModal('modalReparation'));
document.getElementById('openPopupButton4').addEventListener('click', () => openModal('modalStockage'));

document.getElementById('closeMontage').addEventListener('click', () => closeModal('modalMontage'));
document.getElementById('closeAmelioration').addEventListener('click', () => closeModal('modalAmelioration'));
document.getElementById('closeReparation').addEventListener('click', () => closeModal('modalReparation'));
document.getElementById('closeStockage').addEventListener('click', () => closeModal('modalStockage'));

window.addEventListener('click', e => {
    Object.keys(modalMap).forEach(id => {
        if (e.target === document.getElementById(id)) closeModal(id);
    });
});
