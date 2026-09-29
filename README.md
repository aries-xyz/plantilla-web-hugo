# Plantilla Hugo

Plantilla base para sitios web estáticos con Hugo. Diseño minimalista, móvil-first, con sistema de temas claro/oscuro, formulario de contacto y estructura de contenido organizada.

## Características

- **Hugo**: Generador de sitios estáticos rápido y flexible
- **Diseño propio**: Sin temas de terceros, CSS personalizado
- **Temas claro/oscuro**: Con persistencia y reactividad al sistema
- **Móvil-first**: Diseño responsive optimizado para pantallas pequeñas
- **Accesible**: Respeta `prefers-reduced-motion` y usa HTML semántico
- **Formulario de contacto**: Genérico, configurable con cualquier endpoint
- **Taxonomías**: Tags y categorías para organizar contenido
- **Código comentado**: Todos los archivos tienen comentarios detallados en español

## Estructura del proyecto

```
plantilla-hugo/
├── archetypes/              # Plantillas para `hugo new`
│   ├── default.md           # Plantilla base (draft = true)
│   └── proyectos.md         # Plantilla para proyectos (draft = false)
├── content/                 # Contenido del sitio (markdown)
│   ├── _index.md            # Página principal
│   ├── acerca-de.md         # Página "Acerca de"
│   ├── gracias.md           # Página de agradecimiento (post-formulario)
│   ├── contacto/            # Página de contacto
│   ├── proyectos/           # Sección de proyectos
│   ├── articulos/           # Sección de artículos
│   └── recursos/            # Sección de recursos
├── layouts/                 # Plantillas HTML
│   ├── index.html           # Layout de la página principal
│   ├── _default/
│   │   ├── baseof.html      # Estructura base de todas las páginas
│   │   ├── list.html        # Layout de listas/secciones
│   │   └── single.html      # Layout de páginas individuales
│   ├── _markup/
│   │   └── render-link.html # Render personalizado de enlaces
│   ├── partials/            # Fragmentos reutilizables
│   │   ├── head.html        # Metadatos del <head>
│   │   ├── header.html      # Barra de navegación
│   │   └── footer.html      # Pie de página
│   └── shortcodes/          # Shortcodes personalizados
│       ├── contacto.html    # Formulario de contacto
│       ├── mailto.html      # Enlace de email
│       └── img-static.html  # Imágenes desde /static/
├── static/                  # Assets estáticos
│   ├── css/                 # Hojas de estilo
│   │   ├── style.css        # Punto de entrada (@imports)
│   │   ├── variables.css    # Variables de diseño (colores, tipografía, etc.)
│   │   ├── base.css         # Reset y estilos base
│   │   ├── layout.css       # Estructura del layout
│   │   ├── components.css   # Componentes UI
│   │   ├── utilities.css    # Clases de utilidad
│   │   └── navbar.css       # Barra de navegación
│   ├── js/                  # JavaScript
│   │   ├── theme.js         # Gestión de temas claro/oscuro
│   │   └── contact-form.js  # Validación del formulario
│   └── images/              # Imágenes estáticas
├── hugo.toml                # Configuración del sitio
└── README.md                # Este archivo
```

## Requisitos

- [Hugo](https://gohugo.io) (versión extendida recomendada)
- [Git](https://git-scm.com) (opcional, para control de versiones)

## Inicio rápido

### 1. Crear un nuevo sitio desde esta plantilla

```bash
# Crear nuevo sitio
hugo new site mi-sitio
cd mi-sitio

# Copiar los archivos de la plantilla
cp -r /ruta/a/plantilla-hugo/* .

# O usar git para clonar (si la plantilla está en un repo)
# git clone https://github.com/tu-usuario/plantilla-hugo.git mi-sitio
```

### 2. Configurar el sitio

Edita `hugo.toml`:

```toml
baseURL = "https://tu-dominio.com/"
title = "Mi Sitio"
defaultContentLanguage = "es"

[params]
emailContacto = "contacto@tu-dominio.com"
textoSitio = "Este portal no usa cookies ni recopila datos personales."
```

### 3. Configurar el formulario de contacto

Edita `hugo.toml` con la URL de tu endpoint de formulario:

```toml
[params]
formAction = "https://tu-servidor.com/api/contacto"
formRedirect = "/gracias"
```

### 4. Personalizar el contenido

- Edita `content/_index.md` para la página principal
- Edita `content/acerca-de.md` para tu biografía
- Edita `layouts/partials/header.html` para los enlaces de navegación
- Edita `static/css/variables.css` para los colores y tipografía

### 5. Ejecutar en desarrollo

```bash
hugo server -D
```

Abre http://localhost:1313 en tu navegador.

### 6. Generar para producción

```bash
hugo --minify
```

Los archivos generados estarán en `public/`. Sube el contenido de esta carpeta a tu hosting (Netlify, Vercel, GitHub Pages, etc.).

## Personalización

### Colores y tema

Edita `static/css/variables.css`:

```css
[data-theme="dark"] {
    --bg: #121212;           /* Fondo principal */
    --surface: #1A1A1A;      /* Fondo de cards */
    --text: #E0E0E0;         /* Texto principal */
    /* ... */
}
```

### Ancho del contenido

Edita `--container-width` en `static/css/variables.css`:

```css
:root {
    --container-width: 360px;  /* Ancho máximo del contenido */
}
```

### Navegación

Edita `layouts/partials/header.html`:

```html
<nav class="nav-links">
    <a href="{{ "/seccion-1/" | relURL }}">[Sección 1]</a>
    <a href="{{ "/seccion-2/" | relURL }}">[Sección 2]</a>
    <!-- Añade más enlaces -->
</nav>
```

## Comandos útiles de Hugo

```bash
# Crear nuevo contenido
hugo new mi-pagina.md                    # Usa archetype default
hugo new proyectos/mi-proyecto.md        # Usage archetype proyectos

# Desarrollo
hugo server -D                           # Servidor local con drafts
hugo server -D --navto                   # Abrir navegador automáticamente

# Producción
hugo                                     # Genera el sitio en public/
hugo --minify                            # Genera y minifica
hugo --gc                                # Limpia cache antes de generar

# Otros
hugo version                             # Ver versión instalada
hugo gen doc                             # Generar documentación
```

## Estructura de contenido

### Secciones

- **proyectos/**: Proyectos personales, experimentos, creaciones
- **articulos/**: Artículos, tutoriales, notas
- **recursos/**: Colecciones de enlaces, software recomendado

### Front matter

Cada archivo `.md` puede tener front matter YAML/TOML/JSON:

```yaml
---
title: "Título de la página"
date: 2026-01-01
draft: true                    # true = no publicado, false = publicado
description: "Descripción corta" # Se muestra en las cards de lista
tags: ["tag1", "tag2"]         # Etiquetas para la taxonomía
weight: 1                      # Orden de aparición (opcional)
---
```

### Shortcodes disponibles

- `{{< contacto >}}`: Formulario de contacto
- `{{< mailto >}}`: Enlace de email
- `{{< img-static src="images/foto.png" alt="Descripción" >}}`: Imagen desde /static/

## Despliegue

### Netlify

1. Sube el repositorio a GitHub/GitLab
2. En Netlify, importa el repositorio
3. Configura:
   - Build command: `hugo --minify`
   - Publish directory: `public`

### Vercel

1. Sube el repositorio a GitHub/GitLab
2. En Vercel, importa el repositorio
3. Configura:
   - Build command: `hugo --minify`
   - Output directory: `public`

### GitHub Pages

1. Sube el repositorio a GitHub
2. Crea un workflow de GitHub Actions para construir y desplegar
3. O usa `hugo deploy` con un bucket S3/GCS

## Licencia

Esta plantilla está liberada bajo [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). Puedes usarla, modificarla y distribuirla libremente, incluso para proyectos comerciales, sin necesidad de atribución.

## Créditos

- [Hugo](https://gohugo.io) - Generador de sitios estáticos
- Desarrollado con la ayuda de [LongCat 2.5 Preview Free](https://opencode.ai)
