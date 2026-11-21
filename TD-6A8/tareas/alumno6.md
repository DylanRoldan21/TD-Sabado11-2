# Alumno 6: Accesorios y calzado

- **Rama:** `alumno6-accesorios`
- **Sección en la web:** `#accesorios`
- **Prefijo CSS:** `.a6-`
- **Tus archivos:** `secciones/06-accesorios.html`, `css/06-accesorios.css`, `js/06-accesorios.js`, `img/alumno6/`

## ¿Qué hace tu sección?
Catálogo de zapatillas, bolsos, gorras y relojes con filtros, contador de productos visibles y un selector para ordenar por precio (menor a mayor y mayor a menor).

## Imágenes que necesitas
- Mínimo 12 fotos verticales de 600 × 750 px, de preferencia con fondo blanco.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno6/` y cambiar el `src` de los 8 productos.
2. [ ] Cambiar nombre y precio de los 8 productos. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en los atributos `data-nombre` y `data-precio` (los usa el carrito) y en el texto visible (`<h3 class="producto-nombre">` y `<p class="producto-precio">`). Cambia los dos. En `data-precio` escribe solo números con punto: `49.90` (sin S/ ni comas).
3. [ ] Revisar que `data-categoria` sea `zapatillas`, `bolsos`, `gorras` o `relojes`.
4. [ ] Agregar 4 productos más. MUY IMPORTANTE: cada producto nuevo lleva `data-orden` con el número siguiente (9, 10, 11, 12).
5. [ ] Cambiar el texto del contador inicial ("8 productos") por el número real; el JS lo actualiza al filtrar.
6. [ ] En su CSS cambiar el estilo del selector de orden (`.a6-orden select`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Lentes de sol" con 2 productos.
- [ ] Agregar una opción "Nombre A-Z" en el select (en el JS usar `a.dataset.nombre.localeCompare(b.dataset.nombre)`).

## Antes de subir, comprueba que
- [ ] "Precio: menor a mayor" ordena bien los productos.
- [ ] Al filtrar, el contador dice cuántos productos se ven.
- [ ] Agregar al carrito funciona.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
