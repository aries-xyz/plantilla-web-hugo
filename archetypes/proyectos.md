{{/*
  ============================================================
  ARCHETYPE: PROYECTOS.MD - Plantilla para proyectos
  ============================================================
  Se usa automáticamente cuando ejecutas:
    hugo new proyectos/mi-proyecto.md

  Genera un archivo con:
    - Fecha actual
    - draft = false (se publica inmediatamente)
    - Título automático basado en el nombre del archivo
    - tags vacío (listo para llenar)

  PERSONALIZACIÓN:
  - Cambia draft = true si quieres revisar antes de publicar
  - Añade más campos front matter según tus necesidades
  ============================================================
*/}}
+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
tags = []
+++
