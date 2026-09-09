# Web ALMEXA · Portafolio del Proyecto

Página web de portafolio del proyecto **ALMEXA — Sistema de Gestión de Inventario y Bodega**.
Proyecto formativo del programa ADSO, SENA CIES, ficha 3407799, Grupo 1.

## Stack

- React 19 + Vite 8 (JavaScript / JSX)
- Tema oscuro estilo ALMEXA (paleta del prototipo)

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción en dist/
npm run preview   # vista previa del build
npm run lint      # oxlint
```

## Estructura

```
public/anexos/           Copia de los 31 documentos anexos del informe técnico
src/data/proyecto.js     Contenido del Informe Técnico ALMEXA
src/data/anexos.js       Catálogo de anexos y categorías
src/components/          Componentes de las secciones
```

## Anexos

La sección de anexos agrupa los documentos por categoría (SRS, diagramas, prototipo,
hardware/software, RRHH, matrices, licencia, metodología, trazabilidad y validación).
Los archivos abribles por el navegador (PDF, HTML, TXT) se abren en pestaña nueva; los
archivos DOCX, DRAWIO y PUML se descargan para verse en su aplicación correspondiente.