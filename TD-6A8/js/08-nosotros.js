// ALUMNO 8 - Contadores animados y carrusel de testimonios
(() => {
  // ---------- 1. Contadores que suben cuando aparecen en pantalla ----------
  const numeros = document.querySelectorAll('.a8-stat strong');
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (!entrada.isIntersecting) return;
      const el = entrada.target;
      const final = Number(el.dataset.numero);
      let actual = 0;
      const paso = Math.max(1, Math.ceil(final / 60)); // aprox. 60 pasos
      const animacion = setInterval(() => {
        actual = Math.min(final, actual + paso);
        el.textContent = '+' + actual.toLocaleString('es-PE');
        if (actual === final) clearInterval(animacion);
      }, 25);
      observador.unobserve(el);
    });
  }, { threshold: 0.5 });
  numeros.forEach(n => observador.observe(n));

  // ---------- 2. Carrusel de testimonios ----------
  const testimonios = document.querySelectorAll('.a8-testimonio');
  const puntos = document.querySelector('.a8-puntos');
  let actual = 0;

  testimonios.forEach((t, i) => {
    const punto = document.createElement('button');
    punto.setAttribute('aria-label', 'Testimonio ' + (i + 1));
    punto.addEventListener('click', () => mostrar(i));
    puntos.appendChild(punto);
  });

  function mostrar(n) {
    testimonios[actual].classList.remove('activo');
    puntos.children[actual].classList.remove('activo');
    actual = n % testimonios.length;
    testimonios[actual].classList.add('activo');
    puntos.children[actual].classList.add('activo');
  }

  mostrar(0);
  setInterval(() => mostrar(actual + 1), 6000); // cambia cada 6 segundos
})();
