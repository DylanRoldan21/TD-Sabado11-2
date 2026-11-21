# Alumno 3: Colección Hombre

- **Rama:** `alumno3-hombre`
- **Sección en la web:** `#hombre`
- **Prefijo CSS:** `.a3-`
- **Tus archivos:** `secciones/03-hombre.html`, `css/03-hombre.css`, `js/03-hombre.js`, `img/alumno3/`

## ¿Qué hace tu sección?
Catálogo de ropa de hombre con filtros por tipo de prenda (Polos, Camisas, Pantalones, Casacas). Cada producto tiene botones de talla y el cliente DEBE elegir una talla antes de agregarlo al carrito.

## Imágenes que necesitas
- Mínimo 12 fotos verticales de 600 × 750 px (proporción 4:5), de preferencia con fondo claro.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno3/` y cambiar el `src` de los 8 productos (ej: `img/alumno3/polo-negro.jpg`).
2. [ ] Cambiar nombre y precio de los 8 productos. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en los atributos `data-nombre` y `data-precio` (los usa el carrito) y en el texto visible (`<h3 class="producto-nombre">` y `<p class="producto-precio">`). Cambia los dos. En `data-precio` escribe solo números con punto: `49.90` (sin S/ ni comas).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `polos`, `camisas`, `pantalones` o `casacas` (en minúscula y sin tildes).
4. [ ] Agregar 4 productos más (copiar un `<article>` completo y pegarlo antes de `</div>`). Total: 12 productos.
5. [ ] Cambiar o quitar las etiquetas `NUEVO` / `TOP` (`<span class="producto-etiqueta">`).
6. [ ] Revisar las tallas de cada producto; un pantalón puede usar 28, 30, 32, 34.
7. [ ] En su CSS cambiar el estilo de los botones de talla (`.a3-tallas button`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro nuevo "Shorts": un botón `<button class="filtro" data-filtro="shorts">Shorts</button>` y productos con `data-categoria="shorts"`.
- [ ] Mostrar el precio anterior tachado en algún producto usando `<del>S/ 79.90</del>`.

## Antes de subir, comprueba que
- [ ] Cada filtro muestra solo sus prendas.
- [ ] Si no elijo talla sale el aviso "Primero elige una talla".
- [ ] En el carrito aparece "Nombre (Talla M)".
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
