{{/*
  ============================================================
  ARCHETYPE: DEFAULT.MD - Plantilla base para nuevo contenido
  ============================================================
  Se usa automáticamente cuando ejecutas:
    hugo new mi-pagina.md

  Genera un archivo con:
    - Fecha actual
    - draft = true (no se publica hasta cambiar a false)
    - Título automático basado en el nombre del archivo

  PERSONALIZACIÓN:
  - Cambia draft = false si quieres que se publique inmediatamente
  - Añade más campos front matter según tus necesidades
  ============================================================
*/}}
+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++
