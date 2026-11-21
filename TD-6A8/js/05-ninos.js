// ALUMNO 5 - Filtros por edad, elegir color y agregar al carrito
(() => {
  const seccion = document.getElementById('ninos');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Filtrar por edad ----------
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

  // ---------- 2. Elegir color ----------
  productos.forEach(producto => {
    const bolitas = producto.querySelectorAll('.a5-color');
    const texto = producto.querySelector('.a5-color-texto');
    bolitas.forEach(bolita => bolita.addEventListener('click', () => {
      bolitas.forEach(b => b.classList.remove('activo'));
      bolita.classList.add('activo');
      texto.textContent = 'Color: ' + bolita.dataset.color;
    }));
  });

  // ---------- 3. Agregar al carrito con el color elegido ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const color = producto.querySelector('.a5-color.activo');
      const nombre = producto.dataset.nombre + (color ? ' - ' + color.dataset.color : '');
      agregarAlCarrito(nombre, producto.dataset.precio);
    });
  });
})();
