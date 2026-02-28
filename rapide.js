
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Simulation tarif
document.getElementById('simulTarif').addEventListener('submit', function(e){
    e.preventDefault();
    const distance = +document.getElementById('distance').value;
    const prix = +document.getElementById('serviceType').value;
    const total = distance * prix;
    document.getElementById('resultat').innerText = total.toLocaleString('fr-FR') + ' Ar';
});


document.addEventListener('DOMContentLoaded', function() {
    // Gestionnaire pour l'animation de la navbar (si elle doit changer au scroll)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('navbar-scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('navbar-scrolled');
        }
    });

    // Gestionnaire pour l'animation de révélation des éléments
    const reveals = document.querySelectorAll('.reveal');

    function revealElements() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 150; // L'élément apparaît quand il est à 150px du bas de la fenêtre

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active'); // L'élément disparaît si on remonte (optionnel)
            }
        }
    }

    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements); // Active au chargement aussi
});