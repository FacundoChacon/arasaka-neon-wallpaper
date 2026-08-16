# ARASAKA Neon Wallpaper

Fondo de pantalla animado tipo web para **Wallpaper Engine** con temática *Cyberpunk / Arasaka*:

- Logo Arasaka estilizado + nombre **ARASAKA** en neón rojo con brillo titilante gradual.
- Fondo negro con finas líneas de código rojo que ascienden de abajo hacia arriba, con brillo sutil para no competir con el nombre.

## Uso en Wallpaper Engine

### Opción A — Carpeta local (recomendada, funciona offline)

1. Copiá la carpeta del proyecto a:
   `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\Arasaka Neon`
2. Abrí Wallpaper Engine; en *Mis fondos* debería aparecer **Arasaka Neon**.
3. Click derecho sobre él → *Aplicar a monitor*.

### Opción B — Desde la URL de Vercel

1. Desplegado el proyecto (ver abajo), creá un wallpaper de tipo **Web**.
2. En las propiedades del wallpaper, en *URL del sitio web*, pegá la URL de Vercel.
   *(Requerís conexión a internet en el momento.)*

## Publicar en el Workshop (opcional)

En el editor de Wallpaper Engine: **Archivo → Publicar en Workshop**.
Necesitás una imagen de preview (PNG/JPG) y completar categoría/etiquetas/clasificación de edad.
Asegurate de tener derechos sobre el contenido (el logo es una aproximación estilizada fan-made del emblema de Arasaka / CD Projekt Red).

## Deploy

```bash
vercel --prod
```

Sitio estático: solo `index.html`, `style.css` y `script.js`.
