# Alumno 5: Colección Niños

- **Rama:** `alumno5-ninos`
- **Sección en la web:** `#ninos`
- **Prefijo CSS:** `.a5-`
- **Tus archivos:** `secciones/05-ninos.html`, `css/05-ninos.css`, `js/05-ninos.js`, `img/alumno5/`

## ¿Qué hace tu sección?
Catálogo infantil con filtro por edad (Bebé, Niño, Niña). Cada producto tiene bolitas de color: al hacer clic cambia el texto "Color: ..." y ese color se guarda en el carrito.

## Imágenes que necesitas
- Mínimo 9 fotos verticales de 600 × 750 px.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno5/` y cambiar el `src` de los 6 productos.
2. [ ] Cambiar nombre y precio de los 6 productos. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en los atributos `data-nombre` y `data-precio` (los usa el carrito) y en el texto visible (`<h3 class="producto-nombre">` y `<p class="producto-precio">`). Cambia los dos. En `data-precio` escribe solo números con punto: `49.90` (sin S/ ni comas).
3. [ ] Revisar que `data-categoria` sea `bebe`, `nino` o `nina` (sin ñ ni tildes).
4. [ ] Cambiar los colores de cada producto. Cada bolita es: `<button class="a5-color" data-color="Rojo" style="background:#d64545">`. `data-color` es el nombre y `background` el código del color (buscar en Google "color picker").
5. [ ] El primer color de cada producto debe tener la clase `activo`, y el texto `<p class="a5-color-texto">` debe decir ese mismo color.
6. [ ] Agregar 3 productos más. Total: 9 productos.
7. [ ] En su CSS cambiar el color principal de la sección (ahora es azul `#3b6fd8`) por otro alegre.

## Retos extra (puntos adicionales)
- [ ] Agregar botones de talla por edad (2, 4, 6, 8 años) en cada producto.
- [ ] Agregar un filtro "Uniformes escolares".

## Antes de subir, comprueba que
- [ ] Los filtros por edad funcionan.
- [ ] Al tocar un color cambia el texto "Color: ...".
- [ ] En el carrito aparece "Nombre - Color".
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
