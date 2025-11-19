document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});
