// ALUMNO 7 - Calcula descuentos, cuenta regresiva y carrito
(() => {
  const seccion = document.getElementById('ofertas');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Calcular el % de descuento de cada producto ----------
  productos.forEach(p => {
    const antes = Number(p.dataset.antes);
    const ahora = Number(p.dataset.precio);
    const porcentaje = Math.round((1 - ahora / antes) * 100);
    p.querySelector('.a7-descuento').textContent = '-' + porcentaje + '%';
    p.querySelector('.a7-antes').textContent = 'S/ ' + antes.toFixed(2);
    p.querySelector('.a7-ahora').textContent = 'S/ ' + ahora.toFixed(2);
  });

  // ---------- 2. Cuenta regresiva ----------
  const contador = seccion.querySelector('.a7-contador');
  const fin = new Date(contador.dataset.fin).getTime();
  const dosDigitos = n => String(n).padStart(2, '0');

  function actualizar() {
    const falta = fin - Date.now();
    if (falta <= 0) {
      contador.innerHTML = '<p style="font-size:1.3rem">⏰ ¡La oferta terminó!</p>';
      seccion.querySelectorAll('.btn-agregar').forEach(b => { b.disabled = true; b.textContent = 'Oferta terminada'; });
      clearInterval(intervalo);
      return;
    }
    document.getElementById('a7-dias').textContent = dosDigitos(Math.floor(falta / 86400000));
    document.getElementById('a7-horas').textContent = dosDigitos(Math.floor(falta / 3600000) % 24);
    document.getElementById('a7-min').textContent = dosDigitos(Math.floor(falta / 60000) % 60);
    document.getElementById('a7-seg').textContent = dosDigitos(Math.floor(falta / 1000) % 60);
  }
  const intervalo = setInterval(actualizar, 1000);
  actualizar();

  // ---------- 3. Agregar al carrito (con el precio de oferta) ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      agregarAlCarrito(producto.dataset.nombre + ' (Oferta)', producto.dataset.precio);
    });
  });
})();
