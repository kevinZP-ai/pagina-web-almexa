export const proyecto = {
  nombre: 'ALMEXA',
  subtitulo: 'Sistema de Gestión de Inventario y Bodega',
  documento: 'Documento de cierre del proyecto formativo',
  programa: 'Programa de formación: Análisis y Desarrollo de Software (ADSO)',
  centro: 'Centro de Formación: CIES - SENA',
  ficha: 'Ficha: 3407799',
  instructor: 'Instructor: José de Jesús Motta Vargas',
  grupo: 'Grupo 1',
  integrantes: [
    'Juan José Narváez González',
    'Beimar Alejandro Rocha Suarez',
    'Kevin Santiago Vega Perez',
  ],
  fecha: '19/09/2026',
}

export const resumenEjecutivo = {
  parrafos: [
    'ALMEXA es una aplicación web para la gestión de inventario y bodega de una organización con recursos limitados, desarrollada por el Grupo 1 del programa ADSO del SENA CIES (ficha 3407799) como ejercicio formativo integral. El sistema organiza la operación en ocho módulos funcionales que van del registro de usuarios y el control de acceso por roles hasta la administración de proveedores, rutas, inventario con stock en tiempo real, espacios físicos de bodega, reportes exportables y una API para consultas externas; se implementa como caso piloto en la comunidad educativa del SENA, donde perfiles como el bodeguero, el técnico electricista y los técnicos en sistemas teleinformáticos y redes participan en su validación.',
    'La base técnica del proyecto es una arquitectura cliente-servidor de tres capas con patrón MVC. El backend se implementa en JavaScript con Node.js y el framework Express, el frontend es una aplicación web (HTML5, CSS3 y JavaScript) que consume una API REST documentada en OpenAPI, y la información se almacena en PostgreSQL, motor elegido como definitivo. Todo el software empleado es de código abierto, por lo que el costo de licenciamiento es cero.',
    'El presupuesto se estima en $52.287.584 COP en el escenario ideal académico (equipo de siete roles, 2.160 horas-persona) y en $2.082.116 COP en el caso real (los tres integrantes del Grupo 1, 2.160 horas-persona con trabajo académico no remunerado: recursos humanos = $0), con una ejecución de 6 meses (24 semanas); en el caso real el hardware imputado y los servicios operativos constituyen los rubros principales. La validación de requisitos confirmó la coherencia entre el SRS y los artefactos de diseño, con los ocho módulos funcionales verificados y los requisitos no funcionales medibles pendientes de pruebas empíricas. El licenciamiento se definió de forma provisional bajo la Business Source License 1.1 (BSL 1.1), a la espera de la aprobación del SENA.',
  ],
  stats: [
    { valor: '8', etiqueta: 'Módulos funcionales' },
    { valor: '53', etiqueta: 'Requisitos (ERF)' },
    { valor: '12', etiqueta: 'Entidades del dominio' },
    { valor: '$2M', etiqueta: 'Presupuesto real COP' },
    { valor: '2.160h', etiqueta: 'Horas persona (real)' },
    { valor: '6 meses', etiqueta: 'Duración' },
  ],
}

export const introduccion = {
  parrafos: [
    'En muchas organizaciones el inventario se controla con hojas de cálculo o registros manuales, lo que repite un patrón conocido: errores de digitación, desconocimiento de las existencias reales, faltantes que se detectan tarde y un historial de movimientos difícil de reconstruir. Esta situación, frecuente en las pequeñas y medianas empresas (más del 63 % de las pymes de América Latina carecen de un sistema digitalizado para el control de sus recursos, Montero, 2025), fue la que dio origen al proyecto en la comunidad educativa del SENA CIES, donde surgió la necesidad de una herramienta que centralice la información de stock, entradas y salidas y que, a la vez, sirva de ejercicio formativo integral para los aprendices del programa.',
    'La justificación del desarrollo se apoya en dos frentes. En lo práctico, un sistema que registre, consulte y actualice productos en tiempo real, que alerte sobre stock mínimo y caducidad y que genere reportes, reduce errores y agiliza la toma de decisiones operativas. En lo académico, el proyecto permite aplicar el análisis de requisitos, el modelado relacional, el diseño de interfaces y la lógica de negocio en un entorno cercano al real, en línea con los resultados de aprendizaje del programa ADSO.',
  ],
  alcance: [
    'Autenticación con control de acceso por roles',
    'Entradas y salidas de stock con fecha y responsable',
    'Categorías y proveedores',
    'Alertas de stock mínimo',
    'Reporte exportable del estado del inventario',
    'Historial de movimientos filtrable',
    'Interfaz responsiva',
    'Gestión de rutas y transporte',
    'Alertas de caducidad',
  ],
  restricciones: [
    'Se ejecuta únicamente con los integrantes del Grupo 1, sin personal externo.',
    'PostgreSQL es el motor de base de datos definitivo.',
    'El tratamiento de datos personales debe cumplir la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
  ],
}

export const objetivos = {
  general:
    'Desarrollar una aplicación web de gestión de inventario que permita registrar productos, controlar entradas y salidas de stock, consultar existencias en tiempo real y generar reportes de movimientos, de manera que apoye la toma de decisiones operativas en una organización y se convierta en un sistema de gestión inteligente de los espacios físicos de almacenamiento.',
  especificos: [
    'Levantar y documentar los requerimientos funcionales y no funcionales del sistema mediante entrevistas y análisis de casos de uso.',
    'Diseñar el modelo de base de datos relacional que soporte productos, categorías, proveedores y movimientos de inventario.',
    'Implementar el módulo de autenticación y control de acceso por roles (administrador, bodeguero, consultor y técnico).',
    'Implementar el módulo de entradas y salidas de inventario.',
    'Desarrollar un módulo de reportes que muestre el estado actual del inventario y el historial de movimientos por rango de fechas.',
    'Validar el sistema mediante pruebas funcionales y pruebas de usuario con los aprendices del grupo.',
    'Implementar un sistema inteligente de espacios físicos para el almacenamiento.',
    'Desarrollar el módulo de rutas y llegadas de productos.',
  ],
}

export const arquitectura = {
  enfoque:
    'El sistema adopta una arquitectura cliente-servidor de tres capas. La capa de presentación es una aplicación web que consume los servicios del backend; la capa de negocio implementa la lógica de cada módulo bajo el patrón MVC; y la capa de datos corresponde a PostgreSQL. La comunicación con sistemas externos se realiza mediante una API REST definida en OpenAPI, y cada petición valida el permiso del rol antes de procesarse, conforme a ERF2.3.',
  capas: [
    {
      nombre: 'Presentación',
      detalle: 'Aplicación web (HTML5, CSS3 y JavaScript) SPA responsiva',
      icono: '◈',
    },
    {
      nombre: 'Negocio',
      detalle: 'Lógica de cada módulo bajo patrón MVC en Node.js + Express',
      icono: '◈',
    },
    {
      nombre: 'Datos',
      detalle: 'PostgreSQL 16 como motor relacional definitivo',
      icono: '◈',
    },
  ],
  stack: [
    { tecnologia: 'Ubuntu Server LTS', componente: 'Servidor', rol: 'Sistema operativo del servidor' },
    { tecnologia: 'Node.js + Express', componente: 'Backend', rol: 'Lógica de negocio y API REST' },
    { tecnologia: 'HTML5, CSS3 y JavaScript', componente: 'Frontend', rol: 'Interfaz web responsiva' },
    { tecnologia: 'PostgreSQL 16', componente: 'Base de datos', rol: 'Motor relacional definitivo' },
    { tecnologia: 'API REST/JSON + OpenAPI', componente: 'Integración', rol: 'Exposición segura para sistemas externos (RF8)' },
    { tecnologia: 'Exportación PDF y Excel', componente: 'Reportes', rol: 'Cumplimiento de ERF7.10' },
    { tecnologia: 'Git y GitHub', componente: 'Control de versiones', rol: 'Repositorio y versionado del código' },
  ],
}

export const modulos = [
  { id: 'RF1', nombre: 'Gestión de usuarios', reqs: 'ERF1.1 – ERF1.6', descripcion: 'Registro, autenticación, recuperación de contraseña, modificación, desactivación, listado y búsqueda.' },
  { id: 'RF2', nombre: 'Roles y permisos', reqs: 'ERF2.1 – ERF2.4', descripcion: 'Definición de roles, asignación a usuarios, control de acceso por rol y bitácora.' },
  { id: 'RF3', nombre: 'Proveedores', reqs: 'ERF3.1 – ERF3.5', descripcion: 'Registro, consulta, modificación, desactivación y asociación con productos.' },
  { id: 'RF4', nombre: 'Rutas y transporte', reqs: 'ERF4.1 – ERF4.6', descripcion: 'Registro de rutas, fechas estimadas, productos asociados, modificación, eliminación y alertas de retraso.' },
  { id: 'RF5', nombre: 'Inventario y productos', reqs: 'ERF5.1 – ERF5.11', descripcion: 'Productos, validación de duplicados, entradas y salidas, caducidad, alertas de stock, consulta, ajuste manual, stock en tiempo real y panel.' },
  { id: 'RF6', nombre: 'Espacios y bodega', reqs: 'ERF6.1 – ERF6.6', descripcion: 'Espacios de almacenamiento, asignación de productos, equipos y control de ocupación.' },
  { id: 'RF7', nombre: 'Reportes e informes', reqs: 'ERF7.1 – ERF7.11', descripcion: 'Reportes de movimientos, stock, rutas, proveedores e inconsistencias, con exportación PDF o Excel.' },
  { id: 'RF8', nombre: 'API de integración externa', reqs: 'ERF8.1 – ERF8.4', descripcion: 'Consultas de productos, stock y precios, autenticación por token y documentación OpenAPI.' },
]

export const noFuncionales = [
  { id: 'RNF1', categoria: 'Usabilidad', criterio: 'Interfaz limpia y sin saturación; navegación al módulo principal en máximo dos clics; registro de producto en menos de tres minutos.' },
  { id: 'RNF2', categoria: 'Compatibilidad', criterio: 'Diseño responsivo visible en navegadores modernos (Chrome, Firefox, Safari y Edge) y en dispositivos móviles.' },
  { id: 'RNF3', categoria: 'Rendimiento', criterio: 'Operaciones CRUD por debajo de un segundo y búsquedas bajo dos segundos con hasta 50.000 registros.' },
  { id: 'RNF4', categoria: 'Confiabilidad', criterio: 'Transacciones consistentes (ACID), registro de ajustes e inconsistencias y resiliencia ante fallos.' },
  { id: 'RNF5', categoria: 'Seguridad', criterio: 'Contraseñas con hash seguro, autenticación JWT, bitácora de accesos mínima de seis meses y cumplimiento de la Ley 1581 de 2012.' },
  { id: 'RNF6', categoria: 'Escalabilidad', criterio: 'Arquitectura por capas y API desacoplada que permite ampliar el sistema.' },
  { id: 'RNF7', categoria: 'Mantenibilidad', criterio: 'Arquitectura MVC, documentación técnica y trazabilidad requisito-entregable.' },
]

export const entidades = [
  { entidad: 'Usuario', representa: 'Persona con cuenta de acceso; roles: Administrador, Bodeguero, Técnico, Consultor.', reqs: 'ERF1.1-1.6, ERF2.2' },
  { entidad: 'Rol', representa: 'Conjunto de permisos que determina el nivel de acceso.', reqs: 'ERF2.1-2.3' },
  { entidad: 'BitacoraAcceso', representa: 'Registro de intentos de acceso, exitosos o fallidos, para auditoría.', reqs: 'ERF2.3-2.4' },
  { entidad: 'Proveedor', representa: 'Empresa o persona que suministra los productos gestionados.', reqs: 'ERF3.1-3.5' },
  { entidad: 'Producto', representa: 'Ítem del inventario; incluye código, descripción, precio y stock.', reqs: 'ERF5.1-5.11' },
  { entidad: 'MovimientoInventario', representa: 'Entrada, salida o ajuste, con fecha, hora, usuario y justificación.', reqs: 'ERF5.3-5.5, ERF5.9' },
  { entidad: 'Ruta', representa: 'Trayecto de transporte de productos.', reqs: 'ERF4.1-4.6' },
  { entidad: 'EspacioAlmacenamiento', representa: 'Ubicación física de la bodega con capacidad y ocupación.', reqs: 'ERF6.1-6.6' },
  { entidad: 'EquipoBodega', representa: 'Equipamiento físico de la bodega.', reqs: 'ERF6.3, ERF6.5' },
  { entidad: 'Reporte', representa: 'Informe generado con exportación en PDF o Excel.', reqs: 'ERF7.1-7.11' },
  { entidad: 'SistemaExterno', representa: 'Aplicación externa que consume la API.', reqs: 'ERF8.1-8.2' },
  { entidad: 'TokenAPI', representa: 'Credencial de autenticación con vigencia para la API.', reqs: 'ERF8.3' },
]

export const casosUso = [
  { cu: 'CU-01', da: 'DA-01', modulo: 'RF1 - Usuarios', actores: 'Administrador, Usuario, Sistema' },
  { cu: 'CU-02', da: 'DA-02', modulo: 'RF2 - Roles y permisos', actores: 'Administrador, Usuario, Sistema' },
  { cu: 'CU-03', da: 'DA-03', modulo: 'RF3 - Proveedores', actores: 'Administrador, Consultor' },
  { cu: 'CU-04', da: 'DA-04', modulo: 'RF4 - Rutas y transporte', actores: 'Técnico, Sistema' },
  { cu: 'CU-04.4', da: 'DA-04', modulo: 'RF4 - Modificar ruta', actores: 'Técnico, Sistema' },
  { cu: 'CU-05', da: 'DA-05', modulo: 'RF5 - Inventario y productos', actores: 'Bodeguero, Administrador, Consultor' },
  { cu: 'CU-06', da: 'DA-06', modulo: 'RF6 - Espacios y bodega', actores: 'Administrador, Consultor' },
  { cu: 'CU-07', da: 'DA-07', modulo: 'RF7 - Reportes', actores: 'Administrador, Consultor' },
  { cu: 'CU-08', da: 'DA-08', modulo: 'RF8 - API externa', actores: 'Sistema Externo, Administrador' },
]

export const qa = {
  normas: [
    { sigla: 'ISO/IEC 25010', proposito: 'Calidad de producto de software: define las características de un software funcional, fiable, eficiente y seguro; guía los requisitos no funcionales y las pruebas.', principal: true },
    { sigla: 'ISO/IEC/IEEE 29148', proposito: 'Ingeniería de requisitos: normaliza la especificación desde la elicitación hasta la validación, garantizando trazabilidad requisito-diseño-prueba.', principal: false },
    { sigla: 'ISO/IEC 27001', proposito: 'Seguridad de la información: establece controles para proteger los datos personales y la información tratada por el sistema, alineada con la Ley 1581 de 2012.', principal: false },
  ],
  estrategia: [
    'Pruebas unitarias sobre la lógica de negocio',
    'Pruebas de integración entre módulos y servicios',
    'Pruebas funcionales de cada caso de uso',
    'Pruebas de usuario con los aprendices del grupo para verificar usabilidad',
    'Pruebas de carga con 50.000 registros y auditoría de seguridad (fase final)',
  ],
  validacion: [
    { modulo: 'RF1 - Usuarios', reqs: 'ERF1.1-1.6', estado: 'Validado', evidencia: 'CU-01, DA-01, prototipo' },
    { modulo: 'RF2 - Roles y permisos', reqs: 'ERF2.1-2.4', estado: 'Validado', evidencia: 'CU-02, DA-02' },
    { modulo: 'RF3 - Proveedores', reqs: 'ERF3.1-3.5', estado: 'Validado', evidencia: 'CU-03, DA-03' },
    { modulo: 'RF4 - Rutas y transporte', reqs: 'ERF4.1-4.6', estado: 'Validado', evidencia: 'CU-04 y CU-04.4, DA-04' },
    { modulo: 'RF5 - Inventario y productos', reqs: 'ERF5.1-5.11', estado: 'Validado', evidencia: 'CU-05, DA-05 (ERF5.9 y ERF5.11)' },
    { modulo: 'RF6 - Espacios y bodega', reqs: 'ERF6.1-6.6', estado: 'Validado', evidencia: 'CU-06, DA-06' },
    { modulo: 'RF7 - Reportes', reqs: 'ERF7.1-7.11', estado: 'Validado', evidencia: 'CU-07, DA-07, exportación PDF/Excel' },
    { modulo: 'RF8 - API externa', reqs: 'ERF8.1-8.4', estado: 'Validado', evidencia: 'CU-08, DA-08, OpenAPI' },
  ],
}

export const riesgos = [
  { id: 'T1', riesgo: 'Incumplimiento del rendimiento con 50.000 registros', requiere: 'RNF3', prob: 2, imp: 4, nivel: 'Medio', prioridad: 'Media' },
  { id: 'T2', riesgo: 'Inconsistencia del motor de base de datos en la documentación: SRS declara PostgreSQL, otros documentos usan MySQL', requiere: 'RF5, RF7, RF8', prob: 3, imp: 3, nivel: 'Medio', prioridad: 'Media' },
  { id: 'T3', riesgo: 'Fallas de seguridad (contraseñas, accesos, inyección) y manejo indebido de datos personales', requiere: 'RNF5, RF1, RF2, Ley 1581, Decreto 1377', prob: 3, imp: 4, nivel: 'Alto', prioridad: 'Alta' },
  { id: 'T4', riesgo: 'Pérdida de datos ante fallos o interrupciones', requiere: 'RNF4', prob: 2, imp: 4, nivel: 'Medio', prioridad: 'Media' },
  { id: 'T5', riesgo: 'Error de interpretación de requisitos o desalineación entre prototipo, modelo y requerimientos', requiere: 'RF5, RF2 a RF6', prob: 3, imp: 3, nivel: 'Medio', prioridad: 'Media' },
  { id: 'T6', riesgo: 'Incumplimiento de plazos del cronograma académico', requiere: 'Sección 2.3', prob: 3, imp: 4, nivel: 'Alto', prioridad: 'Alta' },
  { id: 'T7', riesgo: 'Equipo reducido sin personal externo y falta de conocimiento técnico', requiere: 'Sección 2.3', prob: 3, imp: 3, nivel: 'Medio', prioridad: 'Media' },
  { id: 'T8', riesgo: 'Duplicación de registros sin validación de unicidad', requiere: 'ERF5.2, RF3', prob: 2, imp: 2, nivel: 'Bajo', prioridad: 'Baja' },
  { id: 'T9', riesgo: 'Definición de licenciamiento incompleta o conflictiva', requiere: 'Normativa SENA', prob: 2, imp: 3, nivel: 'Medio', prioridad: 'Media' },
]

export const costos = {
  moneda: 'COP',
  duracion: '6 meses (24 semanas)',
  escenarios: [
    {
      nombre: 'Caso real (oficial) · Grupo 1',
      total: '$2.082.116',
      horas: '2.160 horas-persona',
      nota: 'Carga de trabajo del proceso formativo no remunerada (recursos humanos = $0); las tarifas de mercado se documentan solo como referencia (ponderada $19.333/h). Hardware de compra ($7.397.000) imputado en 6 meses por depreciación en línea recta (÷6 = 6 de 36 meses de vida útil). Hosting en local sin costo.',
      hardwareSubtotal: '$7.397.000',
      hardwareImputacion: '$1.232.833',
      categorias: [
        { categoria: 'Recursos humanos', monto: '$0', participacion: '0,0 %' },
        { categoria: 'Hardware', monto: '$1.232.833', participacion: '59,2 %' },
        { categoria: 'Otros', monto: '$660.000', participacion: '31,7 %' },
        { categoria: 'Software', monto: '$0', participacion: '0,0 %' },
        { categoria: 'Imprevistos (10 %)', monto: '$189.283', participacion: '9,1 %' },
      ],
      otros: [
        { nombre: 'Energía eléctrica (caso real)', monto: '$300.000' },
        { nombre: 'Internet (caso real)', monto: '$360.000' },
        { nombre: 'Hosting (en local)', monto: '$0' },
        { nombre: 'Imprevistos (10 %)', monto: '$189.283' },
      ],
      hardware: [
        { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Documentación y base de datos', cantidad: 2, valor: '$2.299.000' },
        { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Desarrollo de software', cantidad: 1, valor: '$2.799.000' },
      ],
      rh: [
        { rol: 'P1 — Líder / Product Owner + gestión', horas: '720 h', tarifa: '$21.000', costo: '$15.120.000' },
        { rol: 'P2 — Analista / DBA / Backend', horas: '720 h', tarifa: '$21.000', costo: '$15.120.000' },
        { rol: 'P3 — Frontend / Documentador / QA', horas: '720 h', tarifa: '$16.000', costo: '$11.520.000' },
        { rol: 'Instructor (supervisión)', horas: '—', tarifa: 'N/A', costo: 'Sin costo' },
        { rol: 'Usuarios finales (validación)', horas: '—', tarifa: 'N/A', costo: 'Sin costo' },
        { rol: 'Subtotal', horas: '2.160 h', tarifa: 'ponderada $19.333 (ref.)', costo: '$41.760.000 (referencia)' },
      ],
    },
    {
      nombre: 'Caso ideal (académico) · 7 roles',
      total: '$52.287.584',
      horas: '2.160 horas-persona',
      nota: 'Tarifa promedio ponderada $19.875/h. Caso comercial académico para dimensionar el valor del trabajo; los 7 equipos (uno por rol) se imputan en 6 meses por depreciación (÷6 = 6 de 36 meses de vida útil). El caso real representa un ahorro de $50.205.468 (96,0 %) frente al ideal.',
      hardwareSubtotal: '$17.593.000',
      hardwareImputacion: '$2.932.167',
      categorias: [
        { categoria: 'Recursos humanos', monto: '$42.930.000', participacion: '82,1 %' },
        { categoria: 'Hardware', monto: '$2.932.167', participacion: '5,6 %' },
        { categoria: 'Otros', monto: '$1.672.000', participacion: '3,2 %' },
        { categoria: 'Software', monto: '$0', participacion: '0,0 %' },
        { categoria: 'Imprevistos (10 %)', monto: '$4.753.417', participacion: '9,1 %' },
      ],
      otros: [
        { nombre: 'Energía eléctrica (caso ideal)', monto: '$700.000' },
        { nombre: 'Internet (caso ideal)', monto: '$840.000' },
        { nombre: 'Hosting + dominio .com (plan anual, MI.COM.CO)', monto: '$132.000' },
        { nombre: 'Imprevistos (10 %)', monto: '$4.753.417' },
      ],
      hardware: [
        { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Gestión, documentación y supervisión', cantidad: 1, valor: '$2.299.000' },
        { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Análisis y modelado', cantidad: 1, valor: '$2.299.000' },
        { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Desarrollo web (frontend)', cantidad: 1, valor: '$2.799.000' },
        { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Desarrollo backend y API', cantidad: 1, valor: '$2.799.000' },
        { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Diseño de interfaces (Figma)', cantidad: 1, valor: '$2.799.000' },
        { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Pruebas funcionales y de carga', cantidad: 1, valor: '$2.299.000' },
        { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Documentación y soporte', cantidad: 1, valor: '$2.299.000' },
      ],
      rh: [
        { rol: 'Product Owner / Líder', horas: '180 h', tarifa: '$25.000', costo: '$4.500.000' },
        { rol: 'Analista de requisitos', horas: '240 h', tarifa: '$20.000', costo: '$4.800.000' },
        { rol: 'Desarrollador frontend', horas: '430 h', tarifa: '$20.000', costo: '$8.600.000' },
        { rol: 'Desarrollador backend', horas: '520 h', tarifa: '$22.000', costo: '$11.440.000' },
        { rol: 'Diseñador UX/UI', horas: '220 h', tarifa: '$18.000', costo: '$3.960.000' },
        { rol: 'QA / Tester', horas: '360 h', tarifa: '$18.000', costo: '$6.480.000' },
        { rol: 'Documentador / Soporte', horas: '210 h', tarifa: '$15.000', costo: '$3.150.000' },
        { rol: 'Subtotal', horas: '2.160 h', tarifa: 'ponderada $19.875', costo: '$42.930.000' },
      ],
    },
  ],
}

export const licencia = {
  nombre: 'Business Source License 1.1',
  tipo: 'Source-available',
  detalle:
    'Para ALMEXA se adoptó provisionalmente la Business Source License 1.1 (BSL 1.1), modelo source-available publicado por MariaDB. Los derechos de autor corresponden a los autores del proyecto y al SENA, conforme a la normativa interna de la institución. Parámetros: Licensor Grupo ALMEXA — SENA CIES; Additional Use Grant: None; Change Date: cuatro años desde la publicación (19/09/2026 → 19/09/2030); Change License: GPL v2.0 o posterior. Hasta el Change Date el código se comparte con uso restringido y, a partir de esa fecha, se publica como GPL v2.0 o posterior.',
  esquemas: [
    { esquema: 'MIT', caracteristica: 'Permisiva, sin obligación de compartir los derivados.' },
    { esquema: 'Apache 2.0', caracteristica: 'Permisiva, con concesión de patentes y cláusula de protección ante litigios.' },
    { esquema: 'BSL 1.1', caracteristica: 'Source-available: uso restringido hasta el Change Date, luego conversión a GPL v2.0 o posterior.' },
    { esquema: 'GPL', caracteristica: 'Copyleft fuerte, obliga a compartir los derivados bajo la misma licencia.' },
    { esquema: 'LGPL', caracteristica: 'Copyleft débil, pensada para bibliotecas.' },
    { esquema: 'Propietaria', caracteristica: 'Código cerrado y uso bajo contrato.' },
    { esquema: 'Freeware', caracteristica: 'Gratuita, pero sin acceso al código fuente.' },
  ],
}

export const conclusiones = [
  'El sistema cumple estructural y funcionalmente con los ocho módulos definidos en el SRS. La validación de requisitos confirmó la coherencia entre el documento normativo, los diagramas, el prototipo y la documentación técnica, una vez aplicadas las correcciones de la versión corregida: PostgreSQL como único motor, actores alineados a los roles formales, numeración ERF5.1-5.11 completa y retiro del requisito ERF2.5.',
  'El prototipo funcional recorre el panel general del inventario, las alertas de stock, los movimientos, los espacios, los proveedores, las rutas, los usuarios y roles, la bitácora de accesos y los reportes, además de las vistas de la API; su puesta en marcha demostró la viabilidad de la arquitectura de tres capas propuesta.',
  'El proyecto cierra con un presupuesto a doble escenario de 6 meses (24 semanas): $2.082.116 COP en el caso real del Grupo 1 (2.160 horas-persona, recursos humanos no remunerados) y $52.287.584 COP en el caso ideal académico (2.160 horas-persona), con un ahorro real del 96,0 %, y un licenciamiento provisional bajo BSL 1.1. Los asuntos pendientes, concentrados en los requisitos no funcionales medibles, corresponden a pruebas empíricas que se ejecutarán sobre la implementación definitiva.',
]

export const recomendaciones = [
  'Ejecutar las pruebas de carga con 50.000 registros y las pruebas de usuario de ERNF1.3 sobre la implementación final para cerrar los requisitos no funcionales pendientes.',
  'Realizar una auditoría de seguridad antes de producción, verificando el cifrado de contraseñas, la vigencia de los tokens de la API, la bitácora de accesos y el cumplimiento de la Ley 1581 de 2012.',
  'Mantener el esquema de respaldos automáticos y definir un plan B de hosting: en el caso real ALMEXA se despliega en local sin costo, y el caso ideal contempla el plan anual de MI.COM.CO.',
  'Priorizar el backlog si los plazos académicos se estrechan, de modo que el módulo de API (RF8) pueda diferirse a una segunda fase sin afectar el núcleo funcional del sistema.',
  'Completar el README y el manual de usuario para fortalecer la mantenibilidad (RNF7), y actualizar el documento de correlación ante cualquier cambio futuro de requisitos.',
]

export const versiones = [
  { version: '1.0', descripcion: 'Esquema inicial del informe con la estructura de contenidos del proyecto.', autor: 'Grupo 1', fecha: '01/09/2026' },
  { version: '1.1', descripcion: 'Primera redacción basada en el SRS original; conserva referencias al motor MySQL.', autor: 'Grupo 1', fecha: '02/09/2026' },
  { version: '2.0', descripcion: 'Informe consolidado alineado al SRS corregido (PostgreSQL, actores formales, ERF5.1-5.11) que integra validación, riesgos, costos y licenciamiento.', autor: 'Grupo 1', fecha: '03/09/2026' },
  { version: '2.1', descripcion: 'Revisión de consistencia: stack unificado a JavaScript full-stack (Node.js con Express), contexto organizacional híbrido (Pyme como marco y comunidad educativa del SENA como caso) y navegadores conforme al SRS (incluye Safari).', autor: 'Grupo 1', fecha: '04/09/2026' },
  { version: '2.2', descripcion: 'Duración ajustada al calendario académico y presupuesto recalculado: energía e internet proyectadas, imprevistos del 10 % y total de $30.004.700 COP (posteriormente superado por la v3.0).', autor: 'Grupo 1', fecha: '06/09/2026' },
  { version: '2.3', descripcion: 'Correcciones finales del trimestre: sección 5.1 renombrada a Software con aclaración de costos de licencias, incorporación de normas ISO (25010, 9001, 27001) y matriz de riesgos resumida.', autor: 'Grupo 1', fecha: '07/09/2026' },
  { version: '2.4', descripcion: 'Corrección de la tabla de anexos (rutas exactas y actualización del diagrama de dominio), incorporación del DER y del esquema físico en la sección 4.2, y ajustes de forma.', autor: 'Grupo 1', fecha: '08/09/2026' },
  { version: '2.5', descripcion: 'Sustitución de la norma ISO 9001 por la ISO/IEC/IEEE 29148 (ingeniería de requisitos) en la sección 6 y en las referencias bibliográficas, alineando la documentación con el SRS.', autor: 'Grupo 1', fecha: '09/09/2026' },
  { version: '3.0', descripcion: 'Cierre trimestral: presupuesto a doble escenario de 6 meses (24 semanas): caso real Grupo 1 (2.160 h, $2.082.116, recursos humanos no remunerados) y caso ideal académico de 7 roles (2.160 h, $52.287.584) con tarifas de mercado 2026; licenciamiento provisional BSL 1.1 (Change Date 2030, GPL v2.0 o posterior); estadística de digitalización actualizada (Montero 2025, 63 %); columna de la matriz de riesgos renombrada a "Requerimiento afectado".', autor: 'Grupo 1', fecha: '19/09/2026' },
]

export const estadoProyecto = {
  fase: 'Cierre del proyecto formativo',
  detalle:
    'Los tres documentos del expediente (SRS, informe de análisis e informe técnico) consolidan el cierre del proyecto: ocho módulos funcionales validados, presupuesto a doble escenario y licencia BSL 1.1 provisional a la espera de la aprobación del SENA.',
  items: [
    { etiqueta: 'Presupuesto real', valor: '$2.082.116 COP' },
    { etiqueta: 'Presupuesto ideal', valor: '$52.287.584 COP' },
    { etiqueta: 'Duración', valor: '6 meses (24 semanas)' },
    { etiqueta: 'Horas-persona', valor: '2.160 h' },
    { etiqueta: 'Módulos validados', valor: '8 / 8' },
    { etiqueta: 'Licencia', valor: 'BSL 1.1' },
  ],
}

export const seccionesIndex = [
  { to: '/srs', icono: 'S', descKey: 'seccionesSrs' },
  { to: '/informe-analisis', icono: 'A', descKey: 'seccionesAnalisis' },
  { to: '/informe-tecnico', icono: 'T', descKey: 'seccionesTecnico' },
]

export const analisis = {
  actividades: [
    { n: '01', actividad: 'Levantamiento de información y contexto de la bodega', descripcion: 'Caracterización del proceso de inventario y de los perfiles que intervienen (Administrador, Bodeguero, Técnico, Consultor).', entregable: 'SRS · contexto y actores' },
    { n: '02', actividad: 'Definición de requisitos funcionales y no funcionales', descripcion: 'Especificación de los ocho módulos (RF1–RF8), 53 requisitos ERF1.1 a ERF8.4 y requisitos no funcionales RNF1–RNF7.', entregable: 'SRS · capítulos de requisitos' },
    { n: '03', actividad: 'Modelado de casos de uso', descripcion: 'Casos de uso CU-01 a CU-08 más CU-04.4, correlacionados con módulos y actores.', entregable: 'Diagrama de casos de uso' },
    { n: '04', actividad: 'Modelado de diagramas de actividad', descripcion: 'Diagramas de actividad DA-01 a DA-08, uno por módulo funcional.', entregable: 'Documentación de actividades' },
    { n: '05', actividad: 'Modelado de dominio', descripcion: 'Identificación de las 12 entidades del dominio y sus relaciones.', entregable: 'Diagrama de dominio' },
    { n: '06', actividad: 'Modelo entidad-relación y esquema físico', descripcion: 'DER con 13 tablas (12 entidades más la tabla puente RutaProducto).', entregable: 'DER y esquema físico' },
    { n: '07', actividad: 'Prototipo funcional navegable', descripcion: 'Prototipo HTML de los ocho módulos para validar la experiencia de uso.', entregable: 'Prototipo navegable' },
    { n: '08', actividad: 'Validación y trazabilidad de requisitos', descripcion: 'Contraste de cada requisito con sus artefactos (CU, DA, dominio, prototipo).', entregable: 'Informe de validación' },
  ],
  der: [
    'Rol',
    'Usuario',
    'BitacoraAcceso',
    'Reporte',
    'Proveedor',
    'Producto',
    'MovimientoInventario',
    'Ruta',
    'RutaProducto',
    'EspacioAlmacenamiento',
    'EquipoBodega',
    'SistemaExterno',
    'TokenAPI',
  ],
  checklist: [
    'SRS corregido con PostgreSQL como único motor',
    '53 requisitos funcionales documentados (ERF1.1–ERF8.4)',
    'Requisitos no funcionales RNF1–RNF7 definidos',
    'Casos de uso CU-01 a CU-08 y CU-04.4 modelados',
    'Diagramas de actividad DA-01 a DA-08 documentados',
    'Modelo de dominio con 12 entidades',
    'DER con 13 tablas (12 entidades + RutaProducto)',
    'Prototipo funcional navegable',
    'Trazabilidad SRS · CU · DA · dominio · DER',
    'Validación funcional de los 8 módulos',
  ],
}
