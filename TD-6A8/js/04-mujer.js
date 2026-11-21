// ALUMNO 4 - Filtros, favoritos y agregar al carrito
(() => {
  const seccion = document.getElementById('mujer');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Filtrar por categoría ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      productos.forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
    });
  });

  // ---------- 2. Favoritos (corazón) ----------
  let favoritos = 0;
  const contador = document.getElementById('a4-favoritos');
  seccion.querySelectorAll('.a4-fav').forEach(corazon => {
    corazon.addEventListener('click', () => {
      corazon.classList.toggle('activo');
      const marcado = corazon.classList.contains('activo');
      corazon.textContent = marcado ? '♥' : '♡';
      favoritos += marcado ? 1 : -1;
      contador.textContent = favoritos;
      if (marcado) mostrarToast('❤️ Agregado a favoritos');
    });
  });

  // ---------- 3. Agregar al carrito ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      agregarAlCarrito(producto.dataset.nombre, producto.dataset.precio);
    });
  });
})();
