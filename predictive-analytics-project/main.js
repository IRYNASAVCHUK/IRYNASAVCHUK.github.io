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
window.addEventListener('DOMContentLoaded', function() {
    // Trova tutte le celle della tabella che contengono le ore
    const hoursCells = document.querySelectorAll('.hours');

    // Variabile per tenere traccia del totale delle ore
    let totalHours = 0;

    // Somma le ore
    hoursCells.forEach(function(cell) {
        let hours = parseFloat(cell.textContent.trim()); // Assicurati che il valore sia numerico
        if (!isNaN(hours)) { // Verifica che la cella contenga un numero valido
            totalHours += hours;
        }
    });

    // Visualizza il totale
    document.getElementById('total-hours').textContent = totalHours;
});

