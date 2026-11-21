// ALUMNO 6 - Filtros, contador de productos, ordenar por precio y carrito
(() => {
  const seccion = document.getElementById('accesorios');
  const grid = document.getElementById('a6-grid');
  const filtros = seccion.querySelectorAll('.filtro');
  const cantidad = document.getElementById('a6-cantidad');

  function actualizarCantidad() {
    const visibles = grid.querySelectorAll('.producto:not(.oculto)').length;
    cantidad.textContent = visibles + (visibles === 1 ? ' producto' : ' productos');
  }

  // ---------- 1. Filtrar ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      grid.querySelectorAll('.producto').forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
      actualizarCantidad();
    });
  });

  // ---------- 2. Ordenar por precio ----------
  document.getElementById('a6-orden').addEventListener('change', (e) => {
    const opcion = e.target.value;
    const lista = [...grid.querySelectorAll('.producto')];
    lista.sort((a, b) => {
      if (opcion === 'menor') return a.dataset.precio - b.dataset.precio;
      if (opcion === 'mayor') return b.dataset.precio - a.dataset.precio;
      return a.dataset.orden - b.dataset.orden;
    });
    lista.forEach(p => grid.appendChild(p)); // los vuelve a colocar en el nuevo orden
  });

  // ---------- 3. Agregar al carrito ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      agregarAlCarrito(producto.dataset.nombre, producto.dataset.precio);
    });
  });

  actualizarCantidad();
})();
