# Alumno 7: Ofertas

- **Rama:** `alumno7-ofertas`
- **Sección en la web:** `#ofertas`
- **Prefijo CSS:** `.a7-`
- **Tus archivos:** `secciones/07-ofertas.html`, `css/07-ofertas.css`, `js/07-ofertas.js`, `img/alumno7/`

## ¿Qué hace tu sección?
Sección de fondo negro con una cuenta regresiva y productos en oferta. El JavaScript calcula solo el porcentaje de descuento (ej: -40%) y tacha el precio anterior. Cuando el tiempo termina, los botones se desactivan.

## Imágenes que necesitas
- Mínimo 6 fotos verticales de 600 × 750 px.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno7/` y cambiar el `src` de los 4 productos.
2. [ ] Cambiar el nombre (`data-nombre` y el `<h3>`) de cada oferta.
3. [ ] Cambiar los precios SOLO en los atributos: `data-antes` (precio normal) y `data-precio` (precio con descuento). El precio con descuento debe ser MENOR. El % y los textos se calculan solos.
4. [ ] Cambiar la fecha de fin de la oferta en `data-fin` del contador. Formato: `2026-12-31T23:59:59-05:00` (año-mes-día, T, hora, -05:00 es la hora de Perú).
5. [ ] Agregar 2 ofertas más. Total: 6 ofertas.
6. [ ] Cambiar el título y subtítulo de la sección.
7. [ ] En su CSS cambiar el color de los cuadros del contador (`.a7-contador div`).

## Retos extra (puntos adicionales)
- [ ] Probar con una fecha que ya pasó para ver el mensaje "¡La oferta terminó!" (luego volver a poner la fecha correcta).
- [ ] Mostrar debajo de cada producto cuánto se ahorra: "Ahorras S/ 100.00" (calcular `antes - ahora` en el JS).

## Antes de subir, comprueba que
- [ ] Cada producto muestra el % correcto.
- [ ] La cuenta regresiva baja cada segundo.
- [ ] En el carrito aparece "Nombre (Oferta)" con el precio rebajado.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
