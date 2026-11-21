/* ======================= SCRIPT ALUMNO 6: ACCESORIOS ======================= */
(() => {
  function initAccesorios() {
    const seccion = document.getElementById('accesorios');
    const grid = document.getElementById('a6-grid');
    const selectOrden = document.getElementById('a6-orden');
    const contador = document.getElementById('a6-cantidad');

    if (!seccion || !grid || !selectOrden || !contador) {
      return false;
    }

    if (seccion.dataset.a6Listo === 'true') {
      return true;
    }
    seccion.dataset.a6Listo = 'true';

    const botonesFiltro = seccion.querySelectorAll('.filtros .filtro');
    const productos = Array.from(grid.querySelectorAll('.producto'));
    let categoriaActiva = 'todo';

    function actualizarContador(visibles) {
      contador.textContent = `${visibles} ${visibles === 1 ? 'producto' : 'productos'}`;
    }

    function aplicarFiltrosYOrden() {
      const criterio = selectOrden.value;

      const ordenados = [...productos].sort((a, b) => {
        if (criterio === 'menor') {
          return parseFloat(a.dataset.precio) - parseFloat(b.dataset.precio);
        }
        if (criterio === 'mayor') {
          return parseFloat(b.dataset.precio) - parseFloat(a.dataset.precio);
        }
        if (criterio === 'az') {
          return a.dataset.nombre.localeCompare(b.dataset.nombre, 'es', { sensitivity: 'base' });
        }
        return parseInt(a.dataset.orden, 10) - parseInt(b.dataset.orden, 10);
      });

      let visibles = 0;

      ordenados.forEach((producto) => {
        const coincide =
          categoriaActiva === 'todo' || producto.dataset.categoria === categoriaActiva;

        producto.style.display = coincide ? '' : 'none';
        if (coincide) {
          visibles++;
        }
        grid.appendChild(producto);
      });

      actualizarContador(visibles);
    }

    botonesFiltro.forEach((boton) => {
      boton.addEventListener('click', () => {
        botonesFiltro.forEach((btn) => btn.classList.remove('activo'));
        boton.classList.add('activo');
        categoriaActiva = boton.dataset.filtro;
        aplicarFiltrosYOrden();
      });
    });

    selectOrden.addEventListener('change', aplicarFiltrosYOrden);

    grid.addEventListener('click', (evento) => {
      const botonAgregar = evento.target.closest('.btn-agregar');
      if (!botonAgregar) return;

      const tarjeta = botonAgregar.closest('.producto');
      if (!tarjeta) return;

      const nombre = tarjeta.dataset.nombre;
      const precio = parseFloat(tarjeta.dataset.precio);

      if (typeof agregarAlCarrito === 'function') {
        agregarAlCarrito(nombre, precio);
      }
      if (typeof mostrarToast === 'function') {
        mostrarToast(`"${nombre}" agregado al carrito`);
      }
    });

    aplicarFiltrosYOrden();
    return true;
  }

  if (!initAccesorios()) {
    const observer = new MutationObserver(() => {
      if (initAccesorios()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();