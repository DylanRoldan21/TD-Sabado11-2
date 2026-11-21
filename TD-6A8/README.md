# TD-6A8 · Tienda de ropa online (trabajo en equipo con Git)

Web de una tienda de ropa dividida en **9 secciones independientes**. Cada alumno trabaja SOLO en sus archivos,
así al unir las 9 ramas no hay conflictos.

Repositorio: https://github.com/DylanRoldan21/TD-6A8.git

## Reparto

| Alumno | Sección | Rama | Archivos |
|---|---|---|---|
| 1 | Header, banner y carrito | `alumno1-banner` | `secciones/01-header-banner.html`, `css/01-header-banner.css`, `js/01-header-banner.js`, `img/alumno1/` |
| 2 | Categorías y beneficios | `alumno2-categorias` | `secciones/02-categorias.html`, `css/02-categorias.css`, `js/02-categorias.js`, `img/alumno2/` |
| 3 | Colección Hombre | `alumno3-hombre` | `secciones/03-hombre.html`, `css/03-hombre.css`, `js/03-hombre.js`, `img/alumno3/` |
| 4 | Colección Mujer | `alumno4-mujer` | `secciones/04-mujer.html`, `css/04-mujer.css`, `js/04-mujer.js`, `img/alumno4/` |
| 5 | Colección Niños | `alumno5-ninos` | `secciones/05-ninos.html`, `css/05-ninos.css`, `js/05-ninos.js`, `img/alumno5/` |
| 6 | Accesorios y calzado | `alumno6-accesorios` | `secciones/06-accesorios.html`, `css/06-accesorios.css`, `js/06-accesorios.js`, `img/alumno6/` |
| 7 | Ofertas | `alumno7-ofertas` | `secciones/07-ofertas.html`, `css/07-ofertas.css`, `js/07-ofertas.js`, `img/alumno7/` |
| 8 | Nosotros y testimonios | `alumno8-nosotros` | `secciones/08-nosotros.html`, `css/08-nosotros.css`, `js/08-nosotros.js`, `img/alumno8/` |
| 9 | Contacto, newsletter y footer | `alumno9-contacto` | `secciones/09-contacto-footer.html`, `css/09-contacto-footer.css`, `js/09-contacto-footer.js`, `img/alumno9/` |

## Reglas de oro
1. Solo editas TUS 3 archivos y TU carpeta de imágenes.
2. **Nunca** edites `index.html`, `css/base.css`, `js/tienda.js` ni `js/include.js` (son del profesor).
3. Tus clases CSS nuevas empiezan con tu prefijo: `.a1-`, `.a2-` … `.a9-`.
4. Puedes **usar** las clases comunes de `base.css`: `.btn`, `.producto`, `.filtro`, `.titulo-seccion`, etc.
5. Rutas de imágenes: `img/alumnoX/nombre.jpg` (minúsculas, sin espacios, con la extensión correcta).

## Cómo ver la web
Las secciones se cargan con JavaScript: **no funciona con doble clic**.
VS Code → extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.

## El carrito (compartido)
Cualquier sección agrega un producto con `agregarAlCarrito('Nombre', 49.90)` y muestra avisos con
`mostrarToast('texto')`. Estas funciones están en `js/tienda.js`. El Alumno 1 muestra el contador y el total.

## Pasos en Git (alumno)
```bash
git clone https://github.com/DylanRoldan21/TD-6A8.git
cd TD-6A8
git checkout -b alumnoX-nombre        # tu rama
# ...trabajas...
git add .
git commit -m "Alumno X: descripción del cambio"
git push -u origin alumnoX-nombre
```
Luego en GitHub: **Compare & pull request** hacia `main`.

## Pasos en Git (profesor) – subir esta plantilla
```bash
cd TD-6A8                 # la carpeta descomprimida
git init
git add .
git commit -m "Plantilla inicial tienda de ropa"
git branch -M main
git remote add origin https://github.com/DylanRoldan21/TD-6A8.git
git push -u origin main
```

## Unir las ramas (profesor)
GitHub → **Pull requests** → revisar *Files changed* → **Merge pull request** (uno por uno).
Publicar: **Settings → Pages → Branch: main / (root) → Save**.

Las tareas detalladas de cada alumno están en la carpeta `tareas/` y en el PDF de indicaciones.
