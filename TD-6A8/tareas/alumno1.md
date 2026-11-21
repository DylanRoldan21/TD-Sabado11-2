# Alumno 1: Header, banner y carrito

- **Rama:** `alumno1-banner`
- **Sección en la web:** `#inicio`
- **Prefijo CSS:** `.a1-`
- **Tus archivos:** `secciones/01-header-banner.html`, `css/01-header-banner.css`, `js/01-header-banner.js`, `img/alumno1/`

## ¿Qué hace tu sección?
Es lo primero que ve el cliente: la barra de anuncio, el logo, el menú, el botón del carrito (con contador, lista y total) y el banner grande que cambia de imagen solo.

## Imágenes que necesitas
- 3 fotos horizontales de 1600 × 700 px para el banner (modelos, tienda, ropa en exhibición).

## Tareas obligatorias
1. [ ] Ponerse de acuerdo con TODO el equipo en el nombre de la tienda. Escribirlo en el logo: `<a class="a1-logo">MODA<span>Urbana</span></a>`. La parte dentro de `<span>` sale en color dorado y cursiva. Avisarle el nombre al Alumno 9 (lo usa en el footer).
2. [ ] Cambiar el texto de la barra negra superior (`.a1-anuncio`) por una promoción real de su tienda.
3. [ ] Guardar 3 fotos en `img/alumno1/` (ej: `banner1.jpg`) y cambiar el `src` de las 3 etiquetas `<img>` del banner. Ejemplo: `src="img/alumno1/banner1.jpg"`.
4. [ ] En cada uno de los 3 slides cambiar: el texto pequeño (`.a1-mini`), el título `<h1>` (usar `<br>` para partir la línea), el párrafo y el texto del botón.
5. [ ] Revisar que el botón de cada slide lleve a una sección real: `#hombre`, `#mujer`, `#ninos`, `#accesorios` u `#ofertas`.
6. [ ] Cambiar el `alt` de cada imagen por una descripción de la foto.
7. [ ] En `js/01-header-banner.js` cambiar la constante `VELOCIDAD` (5000 = 5 segundos) por la que prefieran.
8. [ ] En su CSS cambiar al menos 2 estilos: por ejemplo el color de fondo de `.a1-anuncio` y el tamaño del logo.

## Retos extra (puntos adicionales)
- [ ] Agregar un 4.º slide (copiar un `<div class="a1-slide">` completo). Los puntos se crean solos.
- [ ] Agregar un botón "Vaciar carrito" en el panel: `window.carrito.length = 0;` y luego `document.dispatchEvent(new CustomEvent('carrito-actualizado', { detail: window.carrito }));`

## Antes de subir, comprueba que
- [ ] El banner cambia solo y con las flechas.
- [ ] Al agregar productos desde otras secciones sube el contador rojo y el total.
- [ ] En celular (F12 → ícono de celular) aparece el botón ☰ y abre el menú.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
