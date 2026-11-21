// =====================================================================
// NO TOCAR (profesor). CARRITO COMPARTIDO por todas las secciones.
//
// Cualquier sección agrega un producto así:
//     agregarAlCarrito('Polo Negro (Talla M)', 49.90);
//
// Cualquier sección muestra un mensaje flotante así:
//     mostrarToast('Mensaje para el cliente');
//
// Cada vez que el carrito cambia se dispara el evento 'carrito-actualizado'
// (el Alumno 1 lo escucha para actualizar el contador y el panel).
// =====================================================================
window.carrito = [];

window.agregarAlCarrito = function (nombre, precio) {
  window.carrito.push({ nombre: nombre, precio: Number(precio) });
  document.dispatchEvent(new CustomEvent('carrito-actualizado', { detail: window.carrito }));
  mostrarToast('🛍️ ' + nombre + ' agregado al carrito');
};

window.mostrarToast = function (texto) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = texto;
  toast.classList.add('visible');
  clearTimeout(toast.temporizador);
  toast.temporizador = setTimeout(() => toast.classList.remove('visible'), 2200);
};
