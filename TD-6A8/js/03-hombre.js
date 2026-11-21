/* ======================= ALUMNO 3: HOMBRE — SCRIPT PRO ======================= */
window.addEventListener('load', () => {
  // Pequeño retraso para asegurar que el include.js del profesor ya cargó el HTML
  setTimeout(() => {
    const seccion = document.getElementById('hombre');
    if (!seccion) return;

    // ====== ELEMENTOS ======
    const grid = document.getElementById('a3-grid');
    const contador = document.getElementById('a3-contador');
    const searchInput = document.getElementById('a3-search-input');
    const precioSelect = document.getElementById('a3-precio-filtro');
    const ordenSelect = document.getElementById('a3-orden');
    const filtros = seccion.querySelectorAll('.a3-filtro');
    
    // Modal
    const modal = document.getElementById('a3-modal');
    const modalOverlay = document.getElementById('a3-modal-overlay');
    const modalClose = document.getElementById('a3-modal-close');
    const modalImg = document.getElementById('a3-modal-img');
    const modalTitle = document.getElementById('a3-modal-title');
    const modalPrecio = document.getElementById('a3-modal-precio');
    const modalTallasContainer = document.getElementById('a3-modal-tallas');
    const modalBtnAgregar = document.getElementById('a3-modal-btn-agregar');

    // Drawer (Carrito)
    const drawer = document.getElementById('a3-drawer');
    const drawerOverlay = document.getElementById('a3-drawer-overlay');
    const drawerBody = document.getElementById('a3-drawer-body');
    const totalEl = document.getElementById('a3-total');
    const closeDrawerBtn = document.getElementById('a3-drawer-close');
    const vaciarBtn = document.getElementById('a3-btn-vaciar');
    
    const toast = document.getElementById('a3-toast');

    // ====== ESTADO ======
    let categoriaActual = 'todo';
    let textoBusqueda = '';
    let precioActual = 'todo';
    let ordenActual = 'default';
    let carrito = JSON.parse(localStorage.getItem('a3-carrito')) || [];
    let productoActual = null;
    let tallaSeleccionada = null;

    // ====== UTILIDADES ======
    const formatearPrecio = (n) => `S/ ${Number(n).toFixed(2)}`;
    const productos = () => Array.from(seccion.querySelectorAll('.a3-producto'));

    function mostrarToast(msg) {
      toast.textContent = msg;
      toast.classList.add('visible');
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.remove('visible'), 2200);
    }

    function guardarCarrito() {
      localStorage.setItem('a3-carrito', JSON.stringify(carrito));
    }

    // ====== FILTROS + BUSQUEDA + PRECIO + ORDEN ======
    function aplicarFiltros() {
      let visibles = 0;
      const lista = productos();

      lista.forEach(p => {
        const cat = p.dataset.categoria;
        const nombre = p.dataset.nombre.toLowerCase();
        const precio = parseFloat(p.dataset.precio);

        let okCat = categoriaActual === 'todo' || cat === categoriaActual;
        let okBusqueda = !textoBusqueda || nombre.includes(textoBusqueda);
        let okPrecio = true;
        if (precioActual === '0-50') okPrecio = precio <= 50;
        else if (precioActual === '50-100') okPrecio = precio > 50 && precio <= 100;
        else if (precioActual === '100-200') okPrecio = precio > 100 && precio <= 200;
        else if (precioActual === '200+') okPrecio = precio > 200;

        const mostrar = okCat && okBusqueda && okPrecio;
        p.classList.toggle('oculto', !mostrar);
        if (mostrar) visibles++;
      });

      const visiblesEls = lista.filter(p => !p.classList.contains('oculto'));
      visiblesEls.sort((a, b) => {
        const pa = parseFloat(a.dataset.precio);
        const pb = parseFloat(b.dataset.precio);
        if (ordenActual === 'precio-asc') return pa - pb;
        if (ordenActual === 'precio-desc') return pb - pa;
        return 0;
      });
      visiblesEls.forEach(el => grid.appendChild(el));

      contador.textContent = `Mostrando ${visibles} producto${visibles === 1 ? '' : 's'}`;
    }

    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        categoriaActual = btn.dataset.filtro;
        aplicarFiltros();
      });
    });

    searchInput.addEventListener('input', (e) => {
      textoBusqueda = e.target.value.trim().toLowerCase();
      aplicarFiltros();
    });

    precioSelect.addEventListener('change', (e) => {
      precioActual = e.target.value;
      aplicarFiltros();
    });

    ordenSelect.addEventListener('change', (e) => {
      ordenActual = e.target.value;
      aplicarFiltros();
    });

    // ====== ABRIR MODAL DE PRODUCTO ======
    function abrirModal(producto) {
      productoActual = producto;
      tallaSeleccionada = null;

      modalImg.src = producto.querySelector('img').src;
      modalImg.alt = producto.dataset.nombre;
      modalTitle.textContent = producto.dataset.nombre;
      modalPrecio.textContent = formatearPrecio(producto.dataset.precio);

      const categoria = producto.dataset.categoria;
      let tallas = [];
      if (categoria === 'pantalones') {
        tallas = ['28', '30', '32', '34', '36', '38'];
      } else {
        tallas = ['S', 'M', 'L', 'XL', 'XXL'];
      }

      modalTallasContainer.innerHTML = '';
      tallas.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'a3-modal-talla-btn';
        btn.textContent = t;
        btn.dataset.talla = t;
        btn.addEventListener('click', () => {
          modalTallasContainer.querySelectorAll('.a3-modal-talla-btn').forEach(b => b.classList.remove('activo'));
          btn.classList.add('activo');
          tallaSeleccionada = t;
        });
        modalTallasContainer.appendChild(btn);
      });

      modal.classList.add('abierto');
      modalOverlay.classList.add('abierto');
    }

    function cerrarModal() {
      modal.classList.remove('abierto');
      modalOverlay.classList.remove('abierto');
      productoActual = null;
      tallaSeleccionada = null;
    }

    seccion.querySelectorAll('.a3-producto').forEach(prod => {
      prod.addEventListener('click', () => abrirModal(prod));
    });

    modalClose.addEventListener('click', cerrarModal);
    modalOverlay.addEventListener('click', cerrarModal);

    // ====== AGREGAR AL CARRITO DESDE MODAL ======
    modalBtnAgregar.addEventListener('click', () => {
      if (!tallaSeleccionada) {
        mostrarToast('⚠️ Primero elige una talla');
        return;
      }
      if (!productoActual) return;

      const item = {
        id: productoActual.dataset.id,
        nombre: productoActual.dataset.nombre,
        precio: parseFloat(productoActual.dataset.precio),
        talla: tallaSeleccionada,
        img: productoActual.querySelector('img').src,
        cantidad: 1
      };

      const existente = carrito.find(c => c.id === item.id && c.talla === item.talla);
      if (existente) existente.cantidad++;
      else carrito.push(item);

      guardarCarrito();
      renderCarrito();
      cerrarModal();
      abrirDrawer();
      mostrarToast('✅ Agregado al carrito');
    });

    // ====== DRAWER ======
    function abrirDrawer() {
      drawer.classList.add('abierto');
      drawerOverlay.classList.add('abierto');
    }
    function cerrarDrawer() {
      drawer.classList.remove('abierto');
      drawerOverlay.classList.remove('abierto');
    }
    closeDrawerBtn.addEventListener('click', cerrarDrawer);
    drawerOverlay.addEventListener('click', cerrarDrawer);

    // ====== RENDER CARRITO ======
    function renderCarrito() {
      if (carrito.length === 0) {
        drawerBody.innerHTML = '<p class="a3-carrito-vacio">Tu carrito está vacío.</p>';
        totalEl.textContent = 'S/ 0.00';
        return;
      }
      let total = 0;
      drawerBody.innerHTML = carrito.map((it, i) => {
        total += it.precio * it.cantidad;
        return `
          <div class="a3-item">
            <img src="${it.img}" alt="${it.nombre}">
            <div class="a3-item-info">
              <h4>${it.nombre}</h4>
              <span class="a3-item-talla">Talla: ${it.talla}</span>
              <div class="a3-item-controles">
                <button data-accion="menos" data-idx="${i}">−</button>
                <span>${it.cantidad}</span>
                <button data-accion="mas" data-idx="${i}">+</button>
              </div>
              <strong>${formatearPrecio(it.precio * it.cantidad)}</strong>
            </div>
            <button class="a3-item-eliminar" data-accion="eliminar" data-idx="${i}">✕</button>
          </div>`;
      }).join('');
      totalEl.textContent = formatearPrecio(total);

      drawerBody.querySelectorAll('button[data-accion]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx);
          const accion = btn.dataset.accion;
          if (accion === 'mas') carrito[idx].cantidad++;
          else if (accion === 'menos') {
            carrito[idx].cantidad--;
            if (carrito[idx].cantidad <= 0) carrito.splice(idx, 1);
          } else if (accion === 'eliminar') carrito.splice(idx, 1);
          guardarCarrito();
          renderCarrito();
        });
      });
    }

    vaciarBtn.addEventListener('click', () => {
      carrito = [];
      guardarCarrito();
      renderCarrito();
      mostrarToast('🗑️ Carrito vaciado');
    });

    // ====== INICIALIZAR ======
    aplicarFiltros();
    renderCarrito();

    window.a3AbrirCarrito = abrirDrawer;
  }, 300); // Espera 300ms a que el HTML se cargue
});