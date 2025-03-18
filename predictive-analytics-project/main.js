window.addEventListener('DOMContentLoaded', () => {
    // Carica l'intestazione
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });

    // Carica il footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
