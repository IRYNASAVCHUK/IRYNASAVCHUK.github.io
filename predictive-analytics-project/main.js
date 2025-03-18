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
window.addEventListener('DOMContentLoaded', () => {
    // Trova tutte le celle con la classe 'hours' nella tabella
    const hoursCells = document.querySelectorAll('.hours');

    // Somma le ore
    let totalHours = 0;
    hoursCells.forEach(cell => {
        totalHours += parseFloat(cell.textContent);
    });

    // Visualizza il totale
    document.getElementById('total-hours').textContent = totalHours;
});
