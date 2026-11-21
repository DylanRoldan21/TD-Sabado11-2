// =====================================================================
// NO TOCAR (profesor). Carga cada sección HTML y luego el JS de cada alumno.
// Funciona con Live Server (VS Code) o GitHub Pages. Con doble clic NO carga.
// =====================================================================
const scriptsAlumnos = [
  'js/01-header-banner.js',
  'js/02-categorias.js',
  'js/03-hombre.js',
  'js/04-mujer.js',
  'js/05-ninos.js',
  'js/06-accesorios.js',
  'js/07-ofertas.js',
  'js/08-nosotros.js',
  'js/09-contacto-footer.js'
];

async function cargarSecciones() {
  const bloques = document.querySelectorAll('[data-include]');
  for (const bloque of bloques) {
    const ruta = bloque.getAttribute('data-include');
    try {
      const resp = await fetch(ruta);
      if (!resp.ok) throw new Error(resp.status);
      bloque.outerHTML = await resp.text();
    } catch (e) {
      bloque.innerHTML = `<p style="padding:2rem;color:#d64545">No se pudo cargar <b>${ruta}</b>. Abre el proyecto con Live Server.</p>`;
    }
  }
  for (const src of scriptsAlumnos) {
    const s = document.createElement('script');
    s.src = src;
    document.body.appendChild(s);
  }
}

cargarSecciones();
