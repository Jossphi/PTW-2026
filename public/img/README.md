# Imágenes del diseño

Este proyecto reproduce la landing de **Perú Tech Week 2026** desde Figma.

Las **fotografías/imágenes raster** del diseño no pudieron descargarse
automáticamente porque el entorno de generación bloquea el acceso a
`figma.com`. Mientras tanto se usan **gradientes/placeholders** fieles a la
estética (oscuro con acentos rojos).

## Cómo poner las imágenes reales

Exporta las imágenes desde Figma (clic derecho → *Export*) y colócalas aquí
con estos nombres para que se usen automáticamente:

| Archivo               | Dónde se usa                                  |
|-----------------------|-----------------------------------------------|
| `hero-bg.png`         | Fondo del hero (image 7)                       |
| `about.png`           | Imagen de la sección "¿Qué es Peru Tech Week?" |

Para las demás secciones (galería, eventos, sponsors, "cómo funciona") los
placeholders están listos para reemplazarse editando el CSS del componente
correspondiente en `src/components/`.
