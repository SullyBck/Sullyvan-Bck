function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.addEventListener('DOMContentLoaded', () => {
    // Cocher la case "Cours"
    const coursParam = getQueryParam('cours');
    if(coursParam === '1') {
        const coursCheckbox = document.querySelector('input[name="cours"]');
        if(coursCheckbox) coursCheckbox.checked = true;
    }

    // Remplir le textarea
    const messageParam = getQueryParam('message');
    if(messageParam) {
        const messageBox = document.querySelector('textarea[name="message"]');
        if(messageBox) messageBox.value = decodeURIComponent(messageParam);
    }
});

