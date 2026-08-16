# ARASAKA Neon Wallpaper

Fondo de pantalla animado tipo web para **Wallpaper Engine** con temática *Cyberpunk / Arasaka*:

- **Emblema real de Arasaka**: árbol de tres ramas en anillo (representa las tres divisiones de la corp: *Seguridad, Manufactura y Banco*), fiel al logotipo oficial, en rojo Arasaka (`#E60000`).
- **Wordmark ARASAKA** al lado del emblema (layout horizontal, como el branding oficial) con las letras del logotipo real de la corp (SVG).
- **Kanji 荒坂** debajo, con el mismo color, pulso y tratamiento que el logo y el wordmark.
- **Pulso neón**: el logo, el wordmark y el kanji se encienden (rojo más claro + halo) y vuelven al rojo cada 1 segundo, con flotaciones verticales sutiles e independientes.
- Fondo negro con finas líneas de código en rojo rosado que ascienden con brillo en las cabezas y destellos aleatorios.

## Uso en Wallpaper Engine

### Opción A — Carpeta local (recomendada, funciona offline)

1. Copiá la carpeta del proyecto a:
   `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\Arasaka Neon`
2. Abrí Wallpaper Engine; en *Mis fondos* debería aparecer **Arasaka Neon**.
3. Click derecho sobre él → *Aplicar a monitor*.

*(El proyecto incluye `project.json` y `preview.png` para que Wallpaper Engine lo reconozca.)*

### Opción B — Desde la URL de Vercel

1. Desplegado el proyecto (ver abajo), creá un wallpaper de tipo **Web**.
2. En las propiedades del wallpaper, en *URL del sitio web*, pegá la URL de Vercel.
   *(Requerís conexión a internet en el momento.)*

## Publicar en el Workshop (opcional)

En el editor de Wallpaper Engine: **Archivo → Publicar en Workshop**.
Necesitás una imagen de preview (PNG/JPG) y completar categoría/etiquetas/clasificación de edad.
Asegurate de tener derechos sobre el contenido (el emblema es una reproducción fan del logotipo de Arasaka / CD Projekt Red; la fuente Michroma es SIL Open Font License, gratuita).

## Licencia de la fuente

`fonts/Michroma-Regular.ttf` es **Michroma** por Brian J. Bonislawsky (Vernon Adams, revisión de Astigmatic), licencia **SIL Open Font License 1.1**. Incluida localmente para funcionar sin conexión.

## Deploy

```bash
vercel --prod
```

Sitio estático: solo `index.html`, `style.css`, `script.js` y la fuente en `fonts/`.
