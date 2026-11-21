# Alumno 4: Colección Mujer

- **Rama:** `alumno4-mujer`
- **Sección en la web:** `#mujer`
- **Prefijo CSS:** `.a4-`
- **Tus archivos:** `secciones/04-mujer.html`, `css/04-mujer.css`, `js/04-mujer.js`, `img/alumno4/`

## ¿Qué hace tu sección?
Catálogo de ropa de mujer con filtros (Vestidos, Blusas, Jeans, Faldas) y un botón de corazón para marcar favoritos, con contador.

## Imágenes que necesitas
- Mínimo 12 fotos verticales de 600 × 750 px (proporción 4:5).

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno4/` y cambiar el `src` de los 8 productos.
2. [ ] Cambiar nombre y precio de los 8 productos. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en los atributos `data-nombre` y `data-precio` (los usa el carrito) y en el texto visible (`<h3 class="producto-nombre">` y `<p class="producto-precio">`). Cambia los dos. En `data-precio` escribe solo números con punto: `49.90` (sin S/ ni comas).
3. [ ] Revisar que `data-categoria` coincida con los filtros: `vestidos`, `blusas`, `jeans`, `faldas`.
4. [ ] Agregar 4 productos más (cada uno con su botón ♡ `.a4-fav`). Total: 12 productos.
5. [ ] Cambiar el subtítulo de la sección por uno propio.
6. [ ] En su CSS cambiar el color del corazón activo (`.a4-fav.activo`) y el fondo de la sección (`.a4-seccion`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Polos" con sus productos.
- [ ] Que el mensaje al quitar un favorito diga "Quitado de favoritos" (en el JS, usar `else`).

## Antes de subir, comprueba que
- [ ] Los filtros funcionan.
- [ ] El corazón cambia a ♥ rojo y el contador de favoritos sube y baja.
- [ ] Agregar al carrito funciona.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
