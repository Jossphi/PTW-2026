# Perú Tech Week 2026 — Landing (React + Vite)

Reproducción fiel de la landing **PTW-2026** diseñada en Figma, desarrollada
con **React 18 + Vite**. Replica el layout, la tipografía, los colores y los
componentes del diseño original.

## Stack y decisiones

- **React + Vite** (sin dependencias extra).
- **CSS modular por componente** (un `.css` por sección) + tokens de diseño
  globales en `src/styles/index.css`.
- **Tipografías** (Google Fonts, cargadas en `index.html`):
  Host Grotesk, Inter, Geist Mono, DM Sans.
- **Íconos** en SVG inline (`src/components/Icons.jsx`).
- **Color de acento:** `#fb2c2c` (rojo). Fondo oscuro `#0a0a0a`.

## Estructura

```
src/
  styles/index.css        Tokens de diseño (colores, fuentes, botones pill)
  components/
    Header.jsx   Hero.jsx       StatsBand.jsx  Marquee.jsx
    Gallery.jsx  Impact.jsx     About.jsx      AnchorEvents.jsx
    Agenda.jsx   HowItWorks.jsx Sponsors.jsx   FinalCta.jsx
    Faq.jsx      Footer.jsx     Icons.jsx
  App.jsx                 Ensambla las secciones en orden
```

## Secciones (en orden)

1. Hero — título, fecha/lugar, countdown en vivo, CTAs
2. Estadísticas (+5,000 / +80 / +200 / +100)
3. Marquee "conecta · construye · inspira"
4. Galería "Lo mejor del Perú Tech Week del 2025"
5. Impacto en números (círculos)
6. About "¿Qué es Peru Tech Week?"
7. Eventos ancla del 2026
8. Agenda completa (tabs de días + filtros)
9. ¿Cómo funciona la agenda oficial? (3 pasos)
10. Sponsors (Platino / Oro / Plata)
11. CTA final "Vamos a transformar el ecosistema Tech"
12. FAQ (acordeón)
13. Footer

## Desarrollo

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build
```

## Imágenes

Las fotos raster usan placeholders (gradientes). Ver
[`public/img/README.md`](./public/img/README.md) para colocar los exports
reales de Figma.
