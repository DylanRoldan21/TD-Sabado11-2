// ALUMNO 2 - Las tarjetas aparecen con animación cuando llegas a la sección
(() => {
  const tarjetas = document.querySelectorAll('.a2-cat');

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  tarjetas.forEach((tarjeta, i) => {
    tarjeta.style.transitionDelay = (i * 0.15) + 's'; // una después de otra
    observador.observe(tarjeta);
  });
})();
