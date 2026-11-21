# Alumno 9: Contacto, newsletter y footer

- **Rama:** `alumno9-contacto`
- **Sección en la web:** `#contacto`
- **Prefijo CSS:** `.a9-`
- **Tus archivos:** `secciones/09-contacto-footer.html`, `css/09-contacto-footer.css`, `js/09-contacto-footer.js`, `img/alumno9/`

## ¿Qué hace tu sección?
Datos de la tienda y un formulario que valida los datos y abre WhatsApp con el mensaje escrito. Luego un formulario de suscripción por correo, el pie de página y el botón flotante verde de WhatsApp.

## Imágenes que necesitas
- Opcional: logo para el footer (400 × 120 px, de preferencia .png con fondo transparente).

## Tareas obligatorias
1. [ ] Cambiar el número de WhatsApp en DOS lugares: en el JS (`const NUMERO_WHATSAPP = '51987654321'`, 51 + 9 dígitos sin espacios) y en el `href` del botón flotante `.a9-whatsapp`.
2. [ ] Cambiar los 4 datos de contacto: dirección, teléfono, horario y correo.
3. [ ] Cambiar las opciones del `<select>` de motivo (mínimo 4 opciones).
4. [ ] Probar las validaciones: nombre vacío, celular con 8 dígitos y mensaje vacío deben mostrar error en rojo.
5. [ ] Cambiar el texto de la promoción del newsletter y el código de descuento del mensaje en el JS.
6. [ ] En el footer: poner el MISMO nombre de tienda que el Alumno 1, escribir los links reales de Facebook, Instagram y TikTok (con `target="_blank"`) y los nombres de los 9 integrantes en `.a9-copy`.
7. [ ] En su CSS cambiar el color de fondo del newsletter (`.a9-newsletter`).

## Retos extra (puntos adicionales)
- [ ] Agregar un mapa de Google Maps (`<iframe>`) debajo de los datos de contacto.
- [ ] Agregar un campo "Correo" al formulario con validación.

## Antes de subir, comprueba que
- [ ] El formulario con datos correctos abre WhatsApp con el mensaje.
- [ ] Un correo inválido en el newsletter muestra aviso.
- [ ] El año del footer es el actual.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
