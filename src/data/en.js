export const en = {
  proyecto: {
    nombre: 'ALMEXA',
    subtitulo: 'Inventory and Warehouse Management System',
    documento: 'Formative project close-out document',
    programa: 'Training program: Systems Analysis and Software Development (ADSO)',
    centro: 'Training Center: CIES - SENA',
    ficha: 'Cohort: 3407799',
    instructor: 'Instructor: José de Jesús Motta Vargas',
    grupo: 'Group 1',
    integrantes: [
      'Juan José Narváez González',
      'Beimar Alejandro Rocha Suarez',
      'Kevin Santiago Vega Perez',
    ],
    fecha: '19/09/2026',
  },

  resumenEjecutivo: {
    parrafos: [
      'ALMEXA is a web application for inventory and warehouse management in an organization with limited resources, developed by Group 1 of the ADSO program at SENA CIES (cohort 3407799) as a comprehensive formative exercise. The system organizes operations into eight functional modules ranging from user registration and role-based access control to supplier management, routes, inventory with real-time stock, physical warehouse spaces, exportable reports and an API for external queries; it is implemented as a pilot case in the SENA educational community, where profiles such as the warehouse keeper, the electrical technician and the teleinformatic and network systems technicians take part in its validation.',
      'The technical foundation of the project is a three-tier client-server architecture with the MVC pattern. The backend is implemented in JavaScript with Node.js and the Express framework, the frontend is a web application (HTML5, CSS3 and JavaScript) that consumes a REST API documented in OpenAPI, and data is stored in PostgreSQL, the engine chosen as the definitive one. All the software used is open source, so licensing cost is zero.',
      'The budget is estimated at $52,287,584 COP for the academic ideal scenario (team of seven roles, 2,160 person-hours) and at $2,082,116 COP for the real scenario (the three members of Group 1, 2,160 person-hours with unpaid academic work: human resources = $0), with a 6-month (24-week) execution; in the real scenario the imputed hardware and operational services are the main items. The requirements validation confirmed consistency between the SRS and the design artifacts, with the eight functional modules verified and the measurable non-functional requirements pending empirical testing. Licensing was defined provisionally under the Business Source License 1.1 (BSL 1.1), pending SENA approval.',
    ],
    stats: [
      { valor: '8', etiqueta: 'Functional modules' },
      { valor: '53', etiqueta: 'Requirements (ERF)' },
      { valor: '12', etiqueta: 'Domain entities' },
      { valor: '$2M', etiqueta: 'Real budget COP' },
      { valor: '2.160h', etiqueta: 'Person-hours (real)' },
      { valor: '6 months', etiqueta: 'Duration' },
    ],
  },

  introduccion: {
    parrafos: [
      'In many organizations inventory is managed with spreadsheets or manual records, repeating a well-known pattern: typing errors, unawareness of actual stock, shortages detected too late and a movements history that is hard to reconstruct. This situation, common among small and medium enterprises (more than 63% of SMEs in Latin America lack a digitalized system to control their resources, Montero, 2025), is what gave rise to the project in the SENA CIES educational community, where the need emerged for a tool that centralizes stock, entries and exits information and, at the same time, serves as a comprehensive formative exercise for the program apprentices.',
      'The rationale for the development rests on two fronts. On the practical side, a system that records, consults and updates products in real time, alerts about minimum stock and expiry and generates reports reduces errors and speeds up operational decision-making. On the academic side, the project enables applying requirements analysis, relational modeling, interface design and business logic in an environment close to the real one, in line with the learning outcomes of the ADSO program.',
    ],
    alcance: [
      'Authentication with role-based access control',
      'Stock entries and exits with date and responsible user',
      'Categories and suppliers',
      'Minimum stock alerts',
      'Exportable inventory status report',
      'Filterable movements history',
      'Responsive interface',
      'Routes and transportation management',
      'Expiry alerts',
    ],
    restricciones: [
      'Executed only by the members of Group 1, with no external staff.',
      'PostgreSQL is the final database engine.',
      'Personal data processing must comply with Law 1581 of 2012 and Decree 1377 of 2013.',
    ],
  },

  objetivos: {
    general:
      'Develop an inventory management web application that allows recording products, controlling stock entries and exits, consulting real-time availability and generating movement reports, so as to support operational decision-making in an organization and become an intelligent management system for physical storage spaces.',
    especificos: [
      'Gather and document the functional and non-functional requirements of the system through interviews and use case analysis.',
      'Design the relational database model that supports products, categories, suppliers and inventory movements.',
      'Implement the authentication and role-based access control module (administrator, warehouse keeper, consultant and technician).',
      'Implement the inventory entries and exits module.',
      'Develop a reports module that shows the current inventory status and the movements history by date range.',
      'Validate the system through functional testing and user testing with the group apprentices.',
      'Implement an intelligent physical spaces management system for storage.',
      'Develop the routes and product arrivals module.',
    ],
  },

  arquitectura: {
    enfoque:
      'The system adopts a three-tier client-server architecture. The presentation layer is a web application that consumes the backend services; the business layer implements the logic of each module under the MVC pattern; and the data layer corresponds to PostgreSQL. Communication with external systems is done through a REST API defined in OpenAPI, and each request validates the role permission before being processed, in accordance with ERF2.3.',
    capas: [
      {
        nombre: 'Presentation',
        detalle: 'Responsive SPA web application (HTML5, CSS3 and JavaScript)',
        icono: '◈',
      },
      {
        nombre: 'Business',
        detalle: 'Logic of each module under MVC pattern in Node.js + Express',
        icono: '◈',
      },
      {
        nombre: 'Data',
        detalle: 'PostgreSQL 16 as the definitive relational engine',
        icono: '◈',
      },
    ],
    stack: [
      { tecnologia: 'Ubuntu Server LTS', componente: 'Server', rol: 'Server operating system' },
      { tecnologia: 'Node.js + Express', componente: 'Backend', rol: 'Business logic and REST API' },
      { tecnologia: 'HTML5, CSS3 and JavaScript', componente: 'Frontend', rol: 'Responsive web interface' },
      { tecnologia: 'PostgreSQL 16', componente: 'Database', rol: 'Definitive relational engine' },
      { tecnologia: 'API REST/JSON + OpenAPI', componente: 'Integration', rol: 'Secure exposure for external systems (RF8)' },
      { tecnologia: 'PDF and Excel export', componente: 'Reports', rol: 'Compliance with ERF7.10' },
      { tecnologia: 'Git and GitHub', componente: 'Version control', rol: 'Code repository and versioning' },
    ],
  },

  modulos: [
    { id: 'RF1', nombre: 'User management', reqs: 'ERF1.1 – ERF1.6', descripcion: 'Registration, authentication, password recovery, modification, deactivation, listing and search.' },
    { id: 'RF2', nombre: 'Roles and permissions', reqs: 'ERF2.1 – ERF2.4', descripcion: 'Role definition, assignment to users, role-based access control and audit log.' },
    { id: 'RF3', nombre: 'Suppliers', reqs: 'ERF3.1 – ERF3.5', descripcion: 'Registration, query, modification, deactivation and association with products.' },
    { id: 'RF4', nombre: 'Routes and transportation', reqs: 'ERF4.1 – ERF4.6', descripcion: 'Route registration, estimated dates, associated products, modification, deletion and delay alerts.' },
    { id: 'RF5', nombre: 'Inventory and products', reqs: 'ERF5.1 – ERF5.11', descripcion: 'Products, duplicate validation, entries and exits, expiry, stock alerts, query, manual adjustment, real-time stock and dashboard.' },
    { id: 'RF6', nombre: 'Spaces and warehouse', reqs: 'ERF6.1 – ERF6.6', descripcion: 'Storage spaces, product assignment, equipment and occupancy control.' },
    { id: 'RF7', nombre: 'Reports and documents', reqs: 'ERF7.1 – ERF7.11', descripcion: 'Reports on movements, stock, routes, suppliers and inconsistencies, with PDF or Excel export.' },
    { id: 'RF8', nombre: 'External integration API', reqs: 'ERF8.1 – ERF8.4', descripcion: 'Product, stock and price queries, token authentication and OpenAPI documentation.' },
  ],

  noFuncionales: [
    { id: 'RNF1', categoria: 'Usability', criterio: 'Clean, clutter-free interface; navigation to the main module in at most two clicks; product registration in under three minutes.' },
    { id: 'RNF2', categoria: 'Compatibility', criterio: 'Responsive design visible in modern browsers (Chrome, Firefox, Safari and Edge) and on mobile devices.' },
    { id: 'RNF3', categoria: 'Performance', criterio: 'CRUD operations under one second and searches under two seconds with up to 50,000 records.' },
    { id: 'RNF4', categoria: 'Reliability', criterio: 'Consistent (ACID) transactions, recording of adjustments and inconsistencies and resilience to failures.' },
    { id: 'RNF5', categoria: 'Security', criterio: 'Passwords with secure hashing, JWT authentication, access audit log of at least six months and compliance with Law 1581 of 2012.' },
    { id: 'RNF6', categoria: 'Scalability', criterio: 'Layered architecture and decoupled API that allow the system to be extended.' },
    { id: 'RNF7', categoria: 'Maintainability', criterio: 'MVC architecture, technical documentation and requirement-deliverable traceability.' },
  ],

  entidades: [
    { entidad: 'Usuario', representa: 'Person with an access account; roles: Administrator, Warehouse keeper, Technician, Consultant.', reqs: 'ERF1.1-1.6, ERF2.2' },
    { entidad: 'Rol', representa: 'Set of permissions that determines the access level.', reqs: 'ERF2.1-2.3' },
    { entidad: 'BitacoraAcceso', representa: 'Record of successful or failed access attempts for audit purposes.', reqs: 'ERF2.3-2.4' },
    { entidad: 'Proveedor', representa: 'Company or person that supplies the managed products.', reqs: 'ERF3.1-3.5' },
    { entidad: 'Producto', representa: 'Inventory item; includes code, description, price and stock.', reqs: 'ERF5.1-5.11' },
    { entidad: 'MovimientoInventario', representa: 'Entry, exit or adjustment, with date, time, user and justification.', reqs: 'ERF5.3-5.5, ERF5.9' },
    { entidad: 'Ruta', representa: 'Product transportation route.', reqs: 'ERF4.1-4.6' },
    { entidad: 'EspacioAlmacenamiento', representa: 'Physical warehouse location with capacity and occupancy.', reqs: 'ERF6.1-6.6' },
    { entidad: 'EquipoBodega', representa: 'Physical warehouse equipment.', reqs: 'ERF6.3, ERF6.5' },
    { entidad: 'Reporte', representa: 'Generated report with PDF or Excel export.', reqs: 'ERF7.1-7.11' },
    { entidad: 'SistemaExterno', representa: 'External application that consumes the API.', reqs: 'ERF8.1-8.2' },
    { entidad: 'TokenAPI', representa: 'Authentication credential with validity period for the API.', reqs: 'ERF8.3' },
  ],

  casosUso: [
    { cu: 'CU-01', da: 'DA-01', modulo: 'RF1 - Users', actores: 'Administrator, User, System' },
    { cu: 'CU-02', da: 'DA-02', modulo: 'RF2 - Roles and permissions', actores: 'Administrator, User, System' },
    { cu: 'CU-03', da: 'DA-03', modulo: 'RF3 - Suppliers', actores: 'Administrator, Consultant' },
    { cu: 'CU-04', da: 'DA-04', modulo: 'RF4 - Routes and transport', actores: 'Technician, System' },
    { cu: 'CU-04.4', da: 'DA-04', modulo: 'RF4 - Modify route', actores: 'Technician, System' },
    { cu: 'CU-05', da: 'DA-05', modulo: 'RF5 - Inventory and products', actores: 'Warehouse keeper, Administrator, Consultant' },
    { cu: 'CU-06', da: 'DA-06', modulo: 'RF6 - Spaces and warehouse', actores: 'Administrator, Consultant' },
    { cu: 'CU-07', da: 'DA-07', modulo: 'RF7 - Reports', actores: 'Administrator, Consultant' },
    { cu: 'CU-08', da: 'DA-08', modulo: 'RF8 - External API', actores: 'External System, Administrator' },
  ],

  qa: {
    normas: [
      { sigla: 'ISO/IEC 25010', proposito: 'Software product quality: defines the characteristics of functional, reliable, efficient and secure software; guides non-functional requirements and testing.', principal: true },
      { sigla: 'ISO/IEC/IEEE 29148', proposito: 'Requirements engineering: standardizes the specification from elicitation to validation, ensuring requirement-design-test traceability.', principal: false },
      { sigla: 'ISO/IEC 27001', proposito: 'Information security: establishes controls to protect personal data and the information processed by the system, aligned with Law 1581 of 2012.', principal: false },
    ],
    estrategia: [
      'Unit testing over the business logic',
      'Integration testing between modules and services',
      'Functional testing of each use case',
      'User testing with the group apprentices to verify usability',
      'Load testing with 50,000 records and a security audit (final phase)',
    ],
    validacion: [
      { modulo: 'RF1 - Users', reqs: 'ERF1.1-1.6', estado: 'Validated', evidencia: 'CU-01, DA-01, prototype' },
      { modulo: 'RF2 - Roles and permissions', reqs: 'ERF2.1-2.4', estado: 'Validated', evidencia: 'CU-02, DA-02' },
      { modulo: 'RF3 - Suppliers', reqs: 'ERF3.1-3.5', estado: 'Validated', evidencia: 'CU-03, DA-03' },
      { modulo: 'RF4 - Routes and transport', reqs: 'ERF4.1-4.6', estado: 'Validated', evidencia: 'CU-04 and CU-04.4, DA-04' },
      { modulo: 'RF5 - Inventory and products', reqs: 'ERF5.1-5.11', estado: 'Validated', evidencia: 'CU-05, DA-05 (ERF5.9 and ERF5.11)' },
      { modulo: 'RF6 - Spaces and warehouse', reqs: 'ERF6.1-6.6', estado: 'Validated', evidencia: 'CU-06, DA-06' },
      { modulo: 'RF7 - Reports', reqs: 'ERF7.1-7.11', estado: 'Validated', evidencia: 'CU-07, DA-07, PDF/Excel export' },
      { modulo: 'RF8 - External API', reqs: 'ERF8.1-8.4', estado: 'Validated', evidencia: 'CU-08, DA-08, OpenAPI' },
    ],
  },

  riesgos: [
    { id: 'T1', riesgo: 'Failure to meet performance with 50,000 records', requiere: 'RNF3', prob: 2, imp: 4, nivel: 'Medium', prioridad: 'Medium' },
    { id: 'T2', riesgo: 'Database engine inconsistency in the documentation: the SRS declares PostgreSQL, other documents use MySQL', requiere: 'RF5, RF7, RF8', prob: 3, imp: 3, nivel: 'Medium', prioridad: 'Medium' },
    { id: 'T3', riesgo: 'Security failures (passwords, access, injection) and improper handling of personal data', requiere: 'RNF5, RF1, RF2, Law 1581, Decree 1377', prob: 3, imp: 4, nivel: 'High', prioridad: 'High' },
    { id: 'T4', riesgo: 'Data loss against failures or interruptions', requiere: 'RNF4', prob: 2, imp: 4, nivel: 'Medium', prioridad: 'Medium' },
    { id: 'T5', riesgo: 'Misinterpretation of requirements or misalignment between prototype, model and requirements', requiere: 'RF5, RF2 to RF6', prob: 3, imp: 3, nivel: 'Medium', prioridad: 'Medium' },
    { id: 'T6', riesgo: 'Failure to meet academic schedule deadlines', requiere: 'Section 2.3', prob: 3, imp: 4, nivel: 'High', prioridad: 'High' },
    { id: 'T7', riesgo: 'Reduced team with no external staff and lack of technical knowledge', requiere: 'Section 2.3', prob: 3, imp: 3, nivel: 'Medium', prioridad: 'Medium' },
    { id: 'T8', riesgo: 'Duplicate records without uniqueness validation', requiere: 'ERF5.2, RF3', prob: 2, imp: 2, nivel: 'Low', prioridad: 'Low' },
    { id: 'T9', riesgo: 'Incomplete or conflicting licensing definition', requiere: 'SENA regulations', prob: 2, imp: 3, nivel: 'Medium', prioridad: 'Medium' },
  ],

  costos: {
    moneda: 'COP',
    duracion: '6 months (24 weeks)',
    escenarios: [
      {
        nombre: 'Real scenario (official) · Group 1',
        total: '$2.082.116',
        horas: '2.160 person-hours',
        nota: 'Unpaid formative workload (human resources = $0); market rates are documented only as reference (weighted $19.333/h). Equipment purchase ($7.397.000) charged over 6 months by straight-line depreciation (÷6 = 6 of 36 months of useful life). Local hosting at no cost.',
        hardwareSubtotal: '$7.397.000',
        hardwareImputacion: '$1.232.833',
        categorias: [
          { categoria: 'Human resources', monto: '$0', participacion: '0,0 %' },
          { categoria: 'Hardware', monto: '$1.232.833', participacion: '59,2 %' },
          { categoria: 'Other', monto: '$660.000', participacion: '31,7 %' },
          { categoria: 'Software', monto: '$0', participacion: '0,0 %' },
          { categoria: 'Contingency (10%)', monto: '$189.283', participacion: '9,1 %' },
        ],
        otros: [
          { nombre: 'Electricity (real scenario)', monto: '$300.000' },
          { nombre: 'Internet (real scenario)', monto: '$360.000' },
          { nombre: 'Hosting (local)', monto: '$0' },
          { nombre: 'Contingency (10%)', monto: '$189.283' },
        ],
        hardware: [
          { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Documentation and database', cantidad: 2, valor: '$2.299.000' },
          { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Software development', cantidad: 1, valor: '$2.799.000' },
        ],
        rh: [
          { rol: 'P1 — Leader / Product Owner + management', horas: '720 h', tarifa: '$21.000', costo: '$15.120.000' },
          { rol: 'P2 — Analyst / DBA / Backend', horas: '720 h', tarifa: '$21.000', costo: '$15.120.000' },
          { rol: 'P3 — Frontend / Documentation / QA', horas: '720 h', tarifa: '$16.000', costo: '$11.520.000' },
          { rol: 'Instructor (supervision)', horas: '—', tarifa: 'N/A', costo: 'No cost' },
          { rol: 'End users (validation)', horas: '—', tarifa: 'N/A', costo: 'No cost' },
          { rol: 'Subtotal', horas: '2.160 h', tarifa: 'weighted $19.333 (ref.)', costo: '$41.760.000 (reference)' },
        ],
      },
      {
        nombre: 'Ideal scenario (academic) · 7 roles',
        total: '$52.287.584',
        horas: '2.160 person-hours',
        nota: 'Weighted average rate $19.875/h. Academic commercial case to size the work value; the 7 pieces of equipment (one per role) are charged over 6 months by depreciation (÷6 = 6 of 36 months of useful life). The real scenario represents a saving of $50.205.468 (96.0%) versus the ideal one.',
        hardwareSubtotal: '$17.593.000',
        hardwareImputacion: '$2.932.167',
        categorias: [
          { categoria: 'Human resources', monto: '$42.930.000', participacion: '82,1 %' },
          { categoria: 'Hardware', monto: '$2.932.167', participacion: '5,6 %' },
          { categoria: 'Other', monto: '$1.672.000', participacion: '3,2 %' },
          { categoria: 'Software', monto: '$0', participacion: '0,0 %' },
          { categoria: 'Contingency (10%)', monto: '$4.753.417', participacion: '9,1 %' },
        ],
        otros: [
          { nombre: 'Electricity (ideal scenario)', monto: '$700.000' },
          { nombre: 'Internet (ideal scenario)', monto: '$840.000' },
          { nombre: 'Hosting + .com domain (annual plan, MI.COM.CO)', monto: '$132.000' },
          { nombre: 'Contingency (10%)', monto: '$4.753.417' },
        ],
        hardware: [
          { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Management, documentation and supervision', cantidad: 1, valor: '$2.299.000' },
          { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Analysis and modeling', cantidad: 1, valor: '$2.299.000' },
          { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Web development (frontend)', cantidad: 1, valor: '$2.799.000' },
          { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Backend development and API', cantidad: 1, valor: '$2.799.000' },
          { equipo: 'HP Pavilion Ryzen 7 7730U, 24 GB', uso: 'Interface design (Figma)', cantidad: 1, valor: '$2.799.000' },
          { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Functional and load testing', cantidad: 1, valor: '$2.299.000' },
          { equipo: 'HP Pavilion Ryzen 7 5700U, 16 GB', uso: 'Documentation and support', cantidad: 1, valor: '$2.299.000' },
        ],
        rh: [
          { rol: 'Product Owner / Lead', horas: '180 h', tarifa: '$25.000', costo: '$4.500.000' },
          { rol: 'Requirements analyst', horas: '240 h', tarifa: '$20.000', costo: '$4.800.000' },
          { rol: 'Frontend developer', horas: '430 h', tarifa: '$20.000', costo: '$8.600.000' },
          { rol: 'Backend developer', horas: '520 h', tarifa: '$22.000', costo: '$11.440.000' },
          { rol: 'UX/UI designer', horas: '220 h', tarifa: '$18.000', costo: '$3.960.000' },
          { rol: 'QA / Tester', horas: '360 h', tarifa: '$18.000', costo: '$6.480.000' },
          { rol: 'Documentation / Support', horas: '210 h', tarifa: '$15.000', costo: '$3.150.000' },
          { rol: 'Subtotal', horas: '2.160 h', tarifa: 'weighted $19.875', costo: '$42.930.000' },
        ],
      },
    ],
  },

  licencia: {
    nombre: 'Business Source License 1.1',
    tipo: 'Source-available',
    detalle:
      'For ALMEXA, the Business Source License 1.1 (BSL 1.1), a source-available model published by MariaDB, was provisionally adopted. The copyright belongs to the project authors and to SENA, in accordance with the institution’s internal regulations. Parameters: Licensor Grupo ALMEXA — SENA CIES; Additional Use Grant: None; Change Date: four years from publication (19/09/2026 → 19/09/2030); Change License: GPL v2.0 or later. Until the Change Date the code is shared with restricted use and, from that date onward, it is published under GPL v2.0 or later.',
    esquemas: [
      { esquema: 'MIT', caracteristica: 'Permissive, without any obligation to share derivatives.' },
      { esquema: 'Apache 2.0', caracteristica: 'Permissive, with patent grant and litigation protection clause.' },
      { esquema: 'BSL 1.1', caracteristica: 'Source-available: restricted use until the Change Date, then conversion to GPL v2.0 or later.' },
      { esquema: 'GPL', caracteristica: 'Strong copyleft, requires sharing derivatives under the same license.' },
      { esquema: 'LGPL', caracteristica: 'Weak copyleft, designed for libraries.' },
      { esquema: 'Proprietary', caracteristica: 'Closed code and use under contract.' },
      { esquema: 'Freeware', caracteristica: 'Free of charge, but without access to the source code.' },
    ],
  },

  conclusiones: [
    'The system structurally and functionally meets the eight modules defined in the SRS. The requirements validation confirmed consistency between the normative document, the diagrams, the prototype and the technical documentation, once the corrections of the corrected version were applied: PostgreSQL as the only engine, actors aligned with the formal roles, complete ERF5.1-5.11 numbering and removal of requirement ERF2.5.',
    'The functional prototype covers the general inventory dashboard, stock alerts, movements, spaces, suppliers, routes, users and roles, the access audit log and the reports, plus the API views; its implementation demonstrated the viability of the proposed three-tier architecture.',
    'The project closes with a 6-month (24-week) dual-scenario budget: $2,082,116 COP in the real Group 1 scenario (2,160 person-hours, unpaid human resources) and $52,287,584 COP in the academic ideal scenario (2,160 person-hours), with a real saving of 96.0%, and provisional licensing under BSL 1.1. The pending matters, focused on the measurable non-functional requirements, correspond to empirical testing to be run on the final implementation.',
  ],

  recomendaciones: [
    'Run the load tests with 50,000 records and the ERNF1.3 user tests on the final implementation to close the pending non-functional requirements.',
    'Perform a security audit before production, verifying password encryption, API token validity, the access audit log and compliance with Law 1581 of 2012.',
    'Keep the automated backup scheme and define a hosting plan B: in the real scenario ALMEXA is deployed locally at no cost, and the ideal scenario includes the annual MI.COM.CO plan.',
    'Prioritize the backlog if academic deadlines tighten, so the API module (RF8) can be deferred to a second phase without affecting the functional core of the system.',
    'Complete the README and the user manual to strengthen maintainability (RNF7), and update the correlation document upon any future requirements change.',
  ],

  versiones: [
    { version: '1.0', descripcion: 'Initial report outline with the project content structure.', autor: 'Group 1', fecha: '01/09/2026' },
    { version: '1.1', descripcion: 'First draft based on the original SRS; keeps references to the MySQL engine.', autor: 'Group 1', fecha: '02/09/2026' },
    { version: '2.0', descripcion: 'Consolidated report aligned with the corrected SRS (PostgreSQL, formal actors, ERF5.1-5.11) integrating validation, risks, costs and licensing.', autor: 'Group 1', fecha: '03/09/2026' },
    { version: '2.1', descripcion: 'Consistency review: unified stack to full-stack JavaScript (Node.js with Express), hybrid organizational context (Pyme as framework and SENA educational community as case) and browsers per the SRS (includes Safari).', autor: 'Group 1', fecha: '04/09/2026' },
    { version: '2.2', descripcion: 'Duration adjusted to the academic calendar and budget recalculated: electricity and internet projected, 10% contingency and total of $30,004,700 COP (later superseded by v3.0).', autor: 'Group 1', fecha: '06/09/2026' },
    { version: '2.3', descripcion: 'Final corrections of the quarter: section 5.1 renamed to Software with license cost clarification, incorporation of ISO standards (25010, 9001, 27001) and summarized risk matrix.', autor: 'Group 1', fecha: '07/09/2026' },
    { version: '2.4', descripcion: 'Annex table correction (exact paths and domain diagram update), ERD and physical schema included in section 4.2, and formatting adjustments.', autor: 'Group 1', fecha: '08/09/2026' },
    { version: '2.5', descripcion: 'Replacement of ISO 9001 with ISO/IEC/IEEE 29148 (requirements engineering) in section 6 and in the bibliographic references, aligning the documentation with the SRS.', autor: 'Group 1', fecha: '09/09/2026' },
    { version: '3.0', descripcion: 'Quarterly close-out: 6-month (24-week) dual-scenario budget: real Group 1 scenario (2,160 h, $2,082,116, unpaid human resources) and academic ideal scenario of 7 roles (2,160 h, $52,287,584) with 2026 market rates; provisional BSL 1.1 licensing (Change Date 2030, GPL v2.0 or later); updated digitalization statistic (Montero 2025, 63%); risk matrix column renamed to "Affected requirement".', autor: 'Group 1', fecha: '19/09/2026' },
  ],

  estadoProyecto: {
    fase: 'Formative project close-out',
    detalle:
      'The three dossier documents (SRS, analysis report and technical report) consolidate the project close-out: eight validated functional modules, dual-scenario budget and provisional BSL 1.1 license pending SENA approval.',
    items: [
      { etiqueta: 'Real budget', valor: '$2,082,116 COP' },
      { etiqueta: 'Ideal budget', valor: '$52,287,584 COP' },
      { etiqueta: 'Duration', valor: '6 months (24 weeks)' },
      { etiqueta: 'Person-hours', valor: '2,160 h' },
      { etiqueta: 'Modules validated', valor: '8 / 8' },
      { etiqueta: 'License', valor: 'BSL 1.1' },
    ],
  },

  seccionesIndex: [
    { to: '/srs', icono: 'S', descKey: 'seccionesSrs' },
    { to: '/informe-analisis', icono: 'A', descKey: 'seccionesAnalisis' },
    { to: '/informe-tecnico', icono: 'T', descKey: 'seccionesTecnico' },
  ],

  analisis: {
    actividades: [
      { n: '01', actividad: 'Information gathering and warehouse context', descripcion: 'Characterization of the inventory process and the profiles involved (Administrator, Warehouse keeper, Technician, Consultant).', entregable: 'SRS · context and actors' },
      { n: '02', actividad: 'Functional and non-functional requirements definition', descripcion: 'Specification of the eight modules (RF1–RF8), 53 requirements ERF1.1 to ERF8.4 and non-functional requirements RNF1–RNF7.', entregable: 'SRS · requirements chapters' },
      { n: '03', actividad: 'Use case modeling', descripcion: 'Use cases CU-01 to CU-08 plus CU-04.4, correlated with modules and actors.', entregable: 'Use case diagram' },
      { n: '04', actividad: 'Activity diagram modeling', descripcion: 'Activity diagrams DA-01 to DA-08, one per functional module.', entregable: 'Activities documentation' },
      { n: '05', actividad: 'Domain modeling', descripcion: 'Identification of the 12 domain entities and their relationships.', entregable: 'Domain diagram' },
      { n: '06', actividad: 'Entity-relationship model and physical schema', descripcion: 'ERD with 13 tables (12 entities plus the RutaProducto bridge table).', entregable: 'ERD and physical schema' },
      { n: '07', actividad: 'Navigable functional prototype', descripcion: 'HTML prototype of the eight modules to validate the user experience.', entregable: 'Navigable prototype' },
      { n: '08', actividad: 'Requirements validation and traceability', descripcion: 'Contrast of each requirement with its artifacts (UC, AD, domain, prototype).', entregable: 'Validation report' },
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
      'Corrected SRS with PostgreSQL as the only engine',
      '53 functional requirements documented (ERF1.1–ERF8.4)',
      'Non-functional requirements RNF1–RNF7 defined',
      'Use cases CU-01 to CU-08 and CU-04.4 modeled',
      'Activity diagrams DA-01 to DA-08 documented',
      'Domain model with 12 entities',
      'ERD with 13 tables (12 entities + RutaProducto)',
      'Navigable functional prototype',
      'Traceability SRS · UC · AD · domain · ERD',
      'Functional validation of the 8 modules',
    ],
  },


}