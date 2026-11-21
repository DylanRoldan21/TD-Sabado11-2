// ALUMNO 9 - Formulario a WhatsApp, newsletter y año del footer
(() => {
  const NUMERO_WHATSAPP = '51999999999'; // 51 = Perú + número de 9 dígitos (sin espacios)

  // ---------- 1. Formulario de contacto -> WhatsApp ----------
  const form = document.getElementById('a9-form');
  const error = document.getElementById('a9-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('a9-nombre').value.trim();
    const celular = document.getElementById('a9-celular').value.trim();
    const motivo = document.getElementById('a9-motivo').value;
    const mensaje = document.getElementById('a9-mensaje').value.trim();

    // Validaciones
    if (nombre.length < 3) { error.textContent = 'Escribe tu nombre completo.'; return; }
    if (!/^9\d{8}$/.test(celular)) { error.textContent = 'El celular debe tener 9 dígitos y empezar con 9.'; return; }
    if (mensaje.length < 5) { error.textContent = 'Escribe tu mensaje.'; return; }
    error.textContent = '';

    const texto = `Hola, soy ${nombre} (cel. ${celular}).\nMotivo: ${motivo}\n${mensaje}`;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank');
    form.reset();
  });

  // ---------- 2. Newsletter ----------
  document.getElementById('a9-suscribir').addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('a9-correo');
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim());
    if (!valido) {
      mostrarToast('⚠️ Escribe un correo válido');
      return;
    }
    mostrarToast('🎉 ¡Gracias! Tu código es BIENVENIDO10');
    correo.value = '';
  });

  // ---------- 3. Año automático en el footer ----------
  document.getElementById('a9-anio').textContent = new Date().getFullYear();
})();
