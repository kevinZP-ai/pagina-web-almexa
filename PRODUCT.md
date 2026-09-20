# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Evaluadores SENA del proyecto (instructores y mesa de evaluación) contrastando el documento de cierre del proyecto formativo con los anexos de evidencia. Visitante secundario: compañeros y futuros aprendices ADSO que usan el proyecto como referencia. Evaluación en español, principalmente en portátil.

## Product Purpose

Las personas (página web ALMEXA) entienden en segundos qué es el proyecto, por qué se hizo y cómo se sustenta técnicamente, y encuentran sin fricción la evidencia documental (41 anexos) que respalda el informe técnico del proyecto formativo.

## Positioning

Una ventana al proceso de construcción del sistema, no una demostración del software: una sola página que narrativamente conecta el problema (control de inventario en organizaciones con recursos limitados), la solución técnica (arquitectura cliente-servidor de tres capas con patrón MVC, Node.js/Express, PostgreSQL, licencias de código abierto) y la evidencia completa que lo acredita.

## Operating Context

Entrega presentada junto al documento de cierre del proyecto formativo del programa ADSO (ficha 3407799, Grupo 1). Los evaluadores cruzan el contenido de las secciones con los anexos de evidencia (SRS, diagramas, prototipos, matrices, trazabilidad, validación). El presupuesto a doble escenario ($2.082.116 COP caso real del Grupo 1 con recursos humanos no remunerados, $52.287.584 COP caso ideal académico), las 2.160 horas-persona, los 8 módulos funcionales y los 53 requisitos funcionales son hechos verificables del informe (v3.0) y no deben modificarse.

## Capabilities and Constraints

- Una sola página (SPA React + Vite, JS) con secciones: resumen, objetivos, arquitectura, requisitos, calidad, costos, licencia, conclusiones y anexos.
- 41 anexos en `public/anexos/` organizados en 10 categorías; mecanismo de apertura/descarga por tipo de archivo (PDF/HTML/TXT abren pestaña; DOCX/DRAWIO/PUML descargan).
- Datos de contenido en `src/data/proyecto.js` y `src/data/anexos.js`; no inventar cifras, siglas o hechos.
- Ejecución solo con los integrantes del Grupo 1. PostgreSQL como motor definitivo. Ley 1581 de 2012 (datos personales). BSL 1.1 provisional (Change Date 2030, GPL v2.0 o posterior) a la espera de aprobación del SENA.

## Brand Commitments

- Nombre y logotipo ALMEXA, proyecto formativo SENA CIES, ficha 3407799, Grupo 1.
- Identidad ligada al dominio: gestión de inventario y bodega (stock, control, trazabilidad).
- El usuario exige que el resultado no parezca una plantilla genérica de IA.

## Evidence on Hand

- `public/anexos/`: 41 documentos reales del proyecto (SRS, diagramas, prototipo, matrices, licencia, metodología, trazabilidad, validación).
- `src/data/proyecto.js`: resumen, objetivos, arquitectura, requisitos, QA, riesgos, costos, licencia, conclusiones, versiones.
- `src/data/anexos.js`: catálogo de las 10 categorías y 41 anexos.
- Sin testimonios, fotografías ni casos de clientes reales; no fabricar ninguno.

## Product Principles

- La evidencia manda: los anexos se encuentran en segundos desde cualquier punto del recorrido.
- El informe es la columna vertebral: las secciones reflejan su estructura para permitir el cruce evaluador-anexos.
- Los hechos son autoridad: cifras, siglas y artefactos no se inventan ni se adornan.
- La escala doméstica es virtud: herramientas de código abierto y costo cero de licencia se cuentan como decisión, no como carencia.
- Un solo idioma humano: la página se lee completa en español, con la jerga técnica explicada.

## Accessibility & Inclusion

- Cumplir WCAG AA (contraste, foco visible, navegación por teclado) según el piso de calidad del diseño.
