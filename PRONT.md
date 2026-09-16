# PRONT · ALMEXA — El Expediente de Bodega

Dirección visual pinneada por el usuario (2026-09-15). Este documento es el
contrato de diseño durante la build; no viaja al artefacto publicado. La
identidad "EL EXPEDIENTE" se conserva y se profundiza; nada reemplaza la
verdad de producto (cifras, hechos, 39 anexos, 825 horas).

## Mundo material
- Superficie: papel manila claro + papel más oscuro de carbón. Tinta casi
  negra sobre folio; azul burocrático como acento formal; un solo vermellón
  para el sello. Sin gradientes "glass", sin glow, sin sombras esponjosas.
- Hostigamiento visual: la página es una pila de hojas foliadas (folio grid
  de fondo), con estanterías (racks) en parallax que enuncian BODEGA, y una
  ruta punteada que recorre la página teñida por sección (verde/terracota/
  azul según la capa del informe). La ruta se anima con scroll.

## Capas (de atrás hacia delante)
1. **Folio grid** — líneas de folio espaciadas, fijas, tinta 4-6 % de opacidad.
2. **Shelf parallax** — estanterías de fondo que se desplazan más lento que el
   scroll (transform translateY, galope suave) y se desvanecen a ~60 % del
   viewport. Solo decorativas (aria-hidden, no cubren texto).
3. **Ruta punteada** — línea SVG con `stroke-dasharray` que se "dibuja" con
   scroll (Scroll-Driven Animations) y cambia de tinte por sección vía
   secciones con clase de tinte (`.tint-resumen`, `.tint-arq`, …). Si el
   navegador no soporta (no `@supports (animation-timeline: scroll())`), el
   camino queda estático: la propuesta actual del inmueble es un <linearGradient>.
4. **Hojas (contenido)** — las tarjetas/folios existentes más firmes.

## Tokens
- Ampliar `:root` con `--elev-*` (profundidad: `--elev-1` a `--elev-6`, sombras
  sutiles de papel apilado, `0 1px 0 rgba(...)` estilo expediente), `--dur-*`
  (duraciones, `--dur-fast`, `--dur-med`, `--dur-slow`), `--ease-*`
  (`--ease-out-quart`, etc.).
- `--muted` ajustado para ≥ 4.5:1 sobre `--sheet`/`--paper` (mantener AA).
- Cualquier interés de render en CSS se comenta en UNA línea.

## Firma
- UN solo momento firma: el sello "RECIBIDO" en la portada permanece; ningún
  otro sello aparece en el cuerpo (se eliminan los ".seal" por sección: "Revisado").
  El folio sigue en cada sección.

## Motion
- `prefers-reduced-motion: reduce` bloquea TODA animación (visibles y de
  scroll), no solo las decorativas.
- CSS Scroll-Driven Animations donde aplique (scroll progress del camino,
  reveals), con fallback síncrono/reveal-IO bajo `@supports`. GSAP solo si el
  efecto queda inalcanzable en CSS puro (no es el caso esperado).
- Hover: mantener el desplazamiento del expediente (subtle translateY + tinta),
  sin bounce.

## Accesibilidad / lectura
- `--muted` ≥ 4.5:1.
- `:focus-visible` global (estilo expediente: dotted 2px azul) en nav (10 links),
  filtros de anexos y búsqueda.
- Filtros de anexos: `role="radiogroup"`/`aria-pressed` sobre los pills.
- Mini-glosario inline ERF/CU/DA (ideble: primer `<abbr title>` o nota al pie
  en Requisitos y Anexos).
- Tablas con `font-variant-numeric: tabular-nums`; en móvil pista de scroll en
  `.table-wrap` (fade a la derecha) sin ocultar datos.
- Iconos de tipo de archivo SVG (PDF/DOCX/DRAWIO/PUML/TXT/PNG/HTML) en las
  tarjetas de anexos.

## Verdad de producto (inalterable)
- 39 anexos / 10 categorías; Hero muestra el total derivado (`anexos.length`).
- Horas: 810 del equipo + 15 de validación = **825 en total** (estat/stat,
  narrativa, título de Costos, PRODUCT.md, descripción del anexo RRHH).
- PostgreSQL 16 definitivo; ISO/IEC/IEEE 29148; versiones hasta 2.5 (sin v2.6).
- $30.004.700 COP, 8 módulos, 53 ERF, 12 entidades/13 tablas, ficha 3407799.
- DER debe reemplazarse por la copia local verificada (layout: modelo idéntico).