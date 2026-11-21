// ALUMNO 1 - Menú móvil, carrito y banner deslizante
(() => {
  // ---------- 1. Menú hamburguesa (celular) ----------
  const btnMenu = document.querySelector('.a1-menu-btn');
  const links = document.querySelector('.a1-links');
  btnMenu.addEventListener('click', () => links.classList.toggle('abierto'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('abierto')));

  // ---------- 2. Panel del carrito ----------
  const panel = document.getElementById('a1-panel');
  document.querySelector('.a1-carrito-btn').addEventListener('click', () => panel.classList.add('abierto'));
  panel.querySelector('.a1-cerrar').addEventListener('click', () => panel.classList.remove('abierto'));
  panel.querySelector('.a1-comprar').addEventListener('click', () => panel.classList.remove('abierto'));

  // Cada vez que alguien agrega un producto, se actualiza el contador, la lista y el total
  document.addEventListener('carrito-actualizado', (evento) => {
    const productos = evento.detail;
    document.getElementById('a1-contador').textContent = productos.length;

    const lista = document.getElementById('a1-lista');
    lista.innerHTML = productos
      .map(p => `<li><span>${p.nombre}</span><b>S/ ${p.precio.toFixed(2)}</b></li>`)
      .join('');

    const total = productos.reduce((suma, p) => suma + p.precio, 0);
    document.getElementById('a1-total').textContent = 'S/ ' + total.toFixed(2);
  });

  // ---------- 3. Banner deslizante ----------
  const VELOCIDAD = 5000; // milisegundos (5000 = 5 segundos)
  const slides = document.querySelectorAll('.a1-slide');
  const puntos = document.querySelector('.a1-puntos');
  let actual = 0;
  let temporizador;

  // Crea un punto por cada slide
  slides.forEach((slide, i) => {
    const punto = document.createElement('button');
    punto.setAttribute('aria-label', 'Ir al banner ' + (i + 1));
    punto.addEventListener('click', () => { irA(i); reiniciar(); });
    puntos.appendChild(punto);
  });

  function irA(n) {
    slides[actual].classList.remove('activo');
    puntos.children[actual].classList.remove('activo');
    actual = (n + slides.length) % slides.length;
    slides[actual].classList.add('activo');
    puntos.children[actual].classList.add('activo');
  }

  function reiniciar() {
    clearInterval(temporizador);
    temporizador = setInterval(() => irA(actual + 1), VELOCIDAD);
  }

  document.querySelector('.a1-prev').addEventListener('click', () => { irA(actual - 1); reiniciar(); });
  document.querySelector('.a1-next').addEventListener('click', () => { irA(actual + 1); reiniciar(); });

  irA(0);
  reiniciar();
})();
