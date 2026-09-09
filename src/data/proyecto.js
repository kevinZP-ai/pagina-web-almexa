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
  fecha: '08/09/2026',
}

export const resumenEjecutivo = {
  parrafos: [
    'ALMEXA es una aplicación web para la gestión de inventario y bodega de una organización con recursos limitados, desarrollada por el Grupo 1 del programa ADSO del SENA CIES (ficha 3407799) como ejercicio formativo integral. El sistema organiza la operación en ocho módulos funcionales que van del registro de usuarios y el control de acceso por roles hasta la administración de proveedores, rutas, inventario con stock en tiempo real, espacios físicos de bodega, reportes exportables y una API para consultas externas; se implementa como caso piloto en la comunidad educativa del SENA, donde perfiles como el bodeguero, el técnico electricista y los técnicos en sistemas teleinformáticos y redes participan en su validación.',
    'La base técnica del proyecto es una arquitectura cliente-servidor de tres capas con patrón MVC. El backend se implementa en JavaScript con Node.js y el framework Express, el frontend es una aplicación web (HTML5, CSS3 y JavaScript) que consume una API REST documentada en OpenAPI, y la información se almacena en PostgreSQL, motor elegido como definitivo. Todo el software empleado es de código abierto, por lo que el costo de licenciamiento es cero.',
    'El presupuesto estimado asciende a $30.004.700 COP; las 810 horas-persona distribuidas entre los tres integrantes del grupo a lo largo del año y medio (18 meses) de ejecución del proyecto, acorde con el calendario formativo de la ficha 3407799, constituyen el rubro principal, al que se suman 15 horas de usuarios finales dedicadas a la validación. La validación de requisitos confirmó la coherencia entre el SRS y los artefactos de diseño, con los ocho módulos funcionales verificados y los requisitos no funcionales medibles pendientes de pruebas empíricas. El licenciamiento se definió de forma provisional bajo Apache 2.0, a la espera de la aprobación del SENA.',
  ],
  stats: [
    { valor: '8', etiqueta: 'Módulos funcionales' },
    { valor: '53', etiqueta: 'Requisitos (ERF)' },
    { valor: '12', etiqueta: 'Entidades del dominio' },
    { valor: '$30M', etiqueta: 'Presupuesto COP' },
    { valor: '810h', etiqueta: 'Horas persona' },
    { valor: '18 meses', etiqueta: 'Duración' },
  ],
}

export const introduccion = {
  parrafos: [
    'En muchas organizaciones el inventario se controla con hojas de cálculo o registros manuales, lo que repite un patrón conocido: errores de digitación, desconocimiento de las existencias reales, faltantes que se detectan tarde y un historial de movimientos difícil de reconstruir. Esta situación, frecuente en las pequeñas y medianas empresas (más del 60 % carecen de un sistema digitalizado para el control de sus recursos), fue la que dio origen al proyecto en la comunidad educativa del SENA CIES, donde surgió la necesidad de una herramienta que centralice la información de stock, entradas y salidas y que, a la vez, sirva de ejercicio formativo integral para los aprendices del programa.',
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
  { entidad: 'TokenAPI', representa: 'Credencial de autenticación con vigencia para la API.', reqs: 'ERF8.3-8.4' },
]

export const casosUso = [
  { cu: 'CU-01', da: 'DA-01', modulo: 'RF1 - Usuarios', actores: 'Administrador, Usuario, Sistema' },
  { cu: 'CU-02', da: 'DA-02', modulo: 'RF2 - Roles y permisos', actores: 'Administrador, Usuario, Sistema' },
  { cu: 'CU-03', da: 'DA-03', modulo: 'RF3 - Proveedores', actores: 'Administrador, Consultor' },
  { cu: 'CU-04', da: 'DA-04', modulo: 'RF4 - Rutas y transporte', actores: 'Técnico, Sistema' },
  { cu: 'CU-04.4', da: 'DA-04', modulo: 'RF4 - Modificar ruta', actores: 'Técnico, Sistema' },
  { cu: 'CU-05', da: 'DA-05', modulo: 'RF5 - Inventario y productos', actores: 'Bodeguero, Administrador, Consultor' },
  { cu: 'CU-06', da: 'DA-06', modulo: 'RF6 - Espacios y bodega', actores: 'Bodeguero, Administrador, Consultor' },
  { cu: 'CU-07', da: 'DA-07', modulo: 'RF7 - Reportes', actores: 'Administrador, Consultor' },
  { cu: 'CU-08', da: 'DA-08', modulo: 'RF8 - API externa', actores: 'Sistema Externo, Administrador' },
]

export const qa = {
  normas: [
    { sigla: 'ISO/IEC 25010', proposito: 'Calidad de producto de software: define las características de un software funcional, fiable, eficiente y seguro; guía los requisitos no funcionales y las pruebas.', principal: true },
    { sigla: 'ISO 9001', proposito: 'Sistemas de gestión de la calidad: normaliza el proceso de desarrollo y documentación, garantizando trazabilidad y mejora continua.', principal: false },
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
  { id: 'T1', riesgo: 'Incumplimiento del rendimiento con 50.000 registros', requiere: 'RNF3', prob: 2, imp: 4, nivel: 'Alto', prioridad: 'Media' },
  { id: 'T2', riesgo: 'Inconsistencia del motor de base de datos en la documentación: SRS declara PostgreSQL, otros documentos usan MySQL', requiere: 'RF5, RF7, RF8', prob: 3, imp: 3, nivel: 'Alto', prioridad: 'Alta' },
  { id: 'T3', riesgo: 'Fallas de seguridad (contraseñas, accesos, inyección) y manejo indebido de datos personales', requiere: 'RNF5, RF1, RF2, Ley 1581, Decreto 1377', prob: 3, imp: 4, nivel: 'Crítico', prioridad: 'Alta' },
  { id: 'T4', riesgo: 'Pérdida de datos ante fallos o interrupciones', requiere: 'RNF4', prob: 2, imp: 4, nivel: 'Alto', prioridad: 'Alta' },
  { id: 'T5', riesgo: 'Error de interpretación de requisitos o desalineación entre prototipo, modelo y requerimientos', requiere: 'RF5, RF2 a RF6', prob: 3, imp: 3, nivel: 'Alto', prioridad: 'Alta' },
  { id: 'T6', riesgo: 'Incumplimiento de plazos del cronograma académico', requiere: 'Sección 2.3', prob: 3, imp: 4, nivel: 'Crítico', prioridad: 'Alta' },
  { id: 'T7', riesgo: 'Equipo reducido sin personal externo y falta de conocimiento técnico', requiere: 'Sección 2.3', prob: 3, imp: 3, nivel: 'Alto', prioridad: 'Media' },
  { id: 'T8', riesgo: 'Duplicación de registros sin validación de unicidad', requiere: 'RF5.2, RF3', prob: 2, imp: 2, nivel: 'Medio', prioridad: 'Alta' },
  { id: 'T9', riesgo: 'Definición de licenciamiento incompleta o conflictiva', requiere: 'Normativa SENA', prob: 2, imp: 3, nivel: 'Medio', prioridad: 'Alta' },
]

export const costos = {
  total: '$30.004.700',
  moneda: 'COP',
  categorias: [
    { categoria: 'Hardware', monto: '$7.397.000', participacion: '24,7 %' },
    { categoria: 'Software', monto: '$0', participacion: '0,0 %' },
    { categoria: 'Recursos humanos', monto: '$17.900.000', participacion: '59,7 %' },
    { categoria: 'Otros', monto: '$4.707.700', participacion: '15,7 %' },
  ],
  otros: [
    { nombre: 'Energía eléctrica', monto: '$900.000' },
    { nombre: 'Internet', monto: '$1.080.000' },
    { nombre: 'Hosting opcional', monto: '$0' },
    { nombre: 'Imprevistos (10 %)', monto: '$2.727.700' },
  ],
  hardware: [
    { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Documentación y base de datos', cantidad: 2, valor: '$2.299.000' },
    { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Desarrollo de software', cantidad: 1, valor: '$2.799.000' },
  ],
  rh: [
    { rol: 'Product Owner / Líder de proyecto', horas: '160 h', tarifa: '$25.000', costo: '$4.000.000' },
    { rol: 'Analista de requisitos', horas: '60 h', tarifa: '$20.000', costo: '$1.200.000' },
    { rol: 'DBA / Diseñador de BD', horas: '80 h', tarifa: '$25.000', costo: '$2.000.000' },
    { rol: 'Desarrollador backend', horas: '200 h', tarifa: '$22.000', costo: '$4.400.000' },
    { rol: 'Desarrollador frontend', horas: '180 h', tarifa: '$20.000', costo: '$3.600.000' },
    { rol: 'Diseñador UX/UI', horas: '40 h', tarifa: '$18.000', costo: '$720.000' },
    { rol: 'Especialista en seguridad', horas: '30 h', tarifa: '$30.000', costo: '$900.000' },
    { rol: 'QA / Tester', horas: '60 h', tarifa: '$18.000', costo: '$1.080.000' },
    { rol: 'Instructor (supervisión)', horas: '-', tarifa: 'N/A', costo: 'Sin costo' },
    { rol: 'Usuarios finales (validación)', horas: '15 h', tarifa: 'N/A', costo: 'Sin costo' },
  ],
}

export const licencia = {
  nombre: 'Apache License 2.0',
  tipo: 'Permisiva',
  detalle:
    'Para ALMEXA se adoptó provisionalmente la Apache License 2.0. Los derechos de autor corresponden a los autores del proyecto y al SENA, conforme a la normativa interna de la institución. La licencia es permisiva, compatible con otros ecosistemas abiertos y favorable a la integración con sistemas externos (RF8), sin imponer copyleft.',
  esquemas: [
    { esquema: 'MIT', caracteristica: 'Permisiva, sin obligación de compartir los derivados.' },
    { esquema: 'Apache 2.0', caracteristica: 'Permisiva, con concesión de patentes y cláusula de protección ante litigios.' },
    { esquema: 'GPL', caracteristica: 'Copyleft fuerte, obliga a compartir los derivados bajo la misma licencia.' },
    { esquema: 'LGPL', caracteristica: 'Copyleft débil, pensada para bibliotecas.' },
    { esquema: 'Propietaria', caracteristica: 'Código cerrado y uso bajo contrato.' },
    { esquema: 'Freeware', caracteristica: 'Gratuita, pero sin acceso al código fuente.' },
  ],
}

export const conclusiones = [
  'El sistema cumple estructural y funcionalmente con los ocho módulos definidos en el SRS. La validación de requisitos confirmó la coherencia entre el documento normativo, los diagramas, el prototipo y la documentación técnica, una vez aplicadas las correcciones de la versión corregida: PostgreSQL como único motor, actores alineados a los roles formales, numeración ERF5.1-5.11 completa y retiro del requisito ERF2.5.',
  'El prototipo funcional recorre el panel general del inventario, las alertas de stock, los movimientos, los espacios, los proveedores, las rutas, los usuarios y roles, la bitácora de accesos y los reportes, además de las vistas de la API; su puesta en marcha demostró la viabilidad de la arquitectura de tres capas propuesta.',
  'El proyecto cierra con un presupuesto estimado de $30.004.700 COP y un licenciamiento provisional Apache 2.0. Los asuntos pendientes, concentrados en los requisitos no funcionales medibles, corresponden a pruebas empíricas que se ejecutarán sobre la implementación definitiva.',
]

export const recomendaciones = [
  'Ejecutar las pruebas de carga con 50.000 registros y las pruebas de usuario de ERNF1.3 sobre la implementación final para cerrar los requisitos no funcionales pendientes.',
  'Realizar una auditoría de seguridad antes de producción, verificando el cifrado de contraseñas, la vigencia de los tokens de la API, la bitácora de accesos y el cumplimiento de la Ley 1581 de 2012.',
  'Mantener el esquema de respaldos automáticos y definir un plan B de hosting, ya que hoy el costo de hosting figura como opcional.',
  'Priorizar el backlog si los plazos académicos se estrechan, de modo que el módulo de API (RF8) pueda diferirse a una segunda fase sin afectar el núcleo funcional del sistema.',
  'Completar el README y el manual de usuario para fortalecer la mantenibilidad (RNF7), y actualizar el documento de correlación ante cualquier cambio futuro de requisitos.',
]

export const versiones = [
  { version: '1.0', descripcion: 'Esquema inicial del informe con la estructura de contenidos del proyecto.', autor: 'Grupo 1', fecha: '01/09/2026' },
  { version: '1.1', descripcion: 'Primera redacción basada en el SRS original; conserva referencias al motor MySQL.', autor: 'Grupo 1', fecha: '02/09/2026' },
  { version: '2.0', descripcion: 'Informe consolidado alineado al SRS corregido (PostgreSQL, actores formales, ERF5.1-5.11) que integra validación, riesgos, costos y licenciamiento.', autor: 'Grupo 1', fecha: '03/09/2026' },
  { version: '2.1', descripcion: 'Revisión de consistencia: stack unificado a JavaScript full-stack (Node.js con Express), contexto organizacional híbrido y navegadores conforme al SRS (incluye Safari).', autor: 'Grupo 1', fecha: '04/09/2026' },
  { version: '2.2', descripcion: 'Duración del proyecto ajustada al calendario académico de la ficha 3407799 (18 meses) y presupuesto recalculado: servicios proyectados a 18 meses, imprevistos del 10 % y total de $30.004.700 COP.', autor: 'Grupo 1', fecha: '06/09/2026' },
  { version: '2.3', descripcion: 'Correcciones finales del trimestre: sección 5.1 renombrada a Software con aclaración de costos de licencias, incorporación de normas ISO (25010, 9001, 27001) y matriz de riesgos resumida.', autor: 'Grupo 1', fecha: '07/09/2026' },
  { version: '2.4', descripcion: 'Cierre del proyecto: versión final con diagrama entidad-relación (DER) y esquema físico en la sección 4.2.1, tabla de riesgos con 14 riesgos T1-T14, pruebas y aseguramiento de la calidad (QA), tabla de artefactos y diagramas alineada a los archivos finales, portada actualizada a la fecha de entrega y referencias bibliográficas ampliadas (ISO 9001, ISO/IEC 27001 y DER).', autor: 'Grupo 1', fecha: '08/09/2026' },
]