import type { LocaleBundle } from './types'

const es: LocaleBundle = {
  cv: {
    profile: {
      role: 'Ingeniero Fullstack Senior · SaaS y Fintech con IA',
      tagline: 'Diseño y construyo plataformas web seguras y accesibles, del front al back.',
      summary:
        'Siete años en SaaS y fintech, de sistemas bancarios PCI DSS a accesibilidad en Google Search. Soy dueño de la arquitectura frontend de punta a punta y trabajo cerca de producto.',
      location: 'Ciudad de México, México · GMT-6',
      availability: 'Abierto a colaboración remota global, B2B, y reubicación / patrocinio.',
    },
    experience: [
      {
        company: 'Google (via Qualitest)',
        url: 'https://www.qualitestgroup.com',
        role: 'Ingeniero de Software Senior',
        period: 'sep 2025 - mar 2026',
        highlights: [
          'Resolví 50+ defectos de Accesibilidad Web (WCAG 2.1/2.2 AA, ARIA) de alta prioridad directamente en Google Search, mejorando el cumplimiento y la inclusividad de uno de los productos con más tráfico del mundo.',
          'Realicé auditorías de accesibilidad y entregué correcciones de UI mediante revisión de código a gran escala, haciendo equipo con producto y diseño, acelerando la entrega con asistentes de código de IA y generación de pruebas asistida por IA.',
          'Construí la comunicación entre servicios backend en Java con gRPC, integrando componentes de frontend dentro de la infraestructura interna propietaria de Google.',
        ],
        stack: ['Accessibility (WCAG/ARIA)', 'Java', 'gRPC', 'React', 'Code Review'],
      },
      {
        company: 'Pandora’s Way',
        url: 'https://pandorasway.com',
        role: 'Líder de Frontend / Desarrollador Fullstack',
        period: 'feb 2025 - dic 2025',
        context: 'Medio tiempo · beta de startup en etapa temprana',
        highlights: [
          'Único dueño del frontend para la beta orientada a inversionistas de una app de crianza. Colaboré directamente con los 3 fundadores, convertí wireframes en un producto entregado, e impulsé las decisiones de arquitectura, costo, escalabilidad y tamaño del bundle bajo restricciones apretadas de startup.',
          'Construí los flujos de usuario centrales y un sistema escalable de componentes de UI con React, Vite, Node.js, Tailwind CSS y shadcn/ui, reduciendo el tamaño inicial del bundle ~70% mediante lazy loading, code splitting y un build basado en Vite.',
          'Contribuí al backend en Python/Django (capa de almacenamiento/buckets) y ayudé a moldear las reglas de negocio junto al fundador técnico.',
          'Integré PostHog (feature flags + analítica), configuré pruebas con Jest/Cypress y CI/CD, y trabajé hands-on con producto en un equipo ágil.',
        ],
        stack: ['React', 'Vite', 'shadcn/ui', 'Python/Django', 'PostHog'],
      },
      {
        company: 'Unosquare',
        url: 'https://www.unosquare.com',
        role: 'Ingeniero de Frontend Senior',
        period: 'jun 2024 - ago 2025',
        context: 'Clientes enterprise',
        clients: [
          { name: 'Stitch Fix', url: 'https://www.stitchfix.com' },
          { name: 'Life.Church', url: 'https://www.life.church' },
        ],
        highlights: [
          'Stitch Fix (2.3M+ clientes activos): lideré el refactor del frontend con GraphQL y migré la arquitectura de contenido a Contentstack (Headless CMS), logrando un 25% más de engagement de usuarios.',
          'Life.Church: dirigí un rediseño completo del frontend en Tailwind CSS y shadcn/ui, construyendo una librería de 20+ componentes documentada en Storybook y entregada vía Vercel.',
          'Ejecuté pruebas A/B basadas en datos (Amplitude) para +15% de conversión, optimicé el rendimiento de renderizado en apps Next.js de alto tráfico, y mantuve 85%+ de cobertura con Jest, React Testing Library y Playwright, acelerado por desarrollo asistido por IA.',
        ],
        stack: ['Next.js', 'GraphQL', 'Contentstack', 'shadcn/ui', 'Storybook'],
      },
      {
        company: 'Invex Bank & Compartamos Bank',
        role: 'Consultor Fintech Senior',
        period: 'may 2023 - may 2024',
        clients: [
          { name: 'Invex', url: 'https://www.invex.com' },
          { name: 'Compartamos Banco', url: 'https://www.compartamos.com.mx' },
        ],
        highlights: [
          'Invex Bank: lideré una migración de legacy a micro-frontends atendiendo a 50k+ clientes: 15+ widgets en React/TypeScript con estricto cumplimiento PCI DSS y APIs seguras en Node.js + PostgreSQL + JWT sobre la infraestructura on-premise/híbrida del banco.',
          'Compartamos Banco (uno de los bancos de microfinanzas más grandes de Latinoamérica, con 3.1M+ clientes): construí una plataforma de inclusión financiera offline-first (React Native + RealmDB cifrado) con backends en Java de alta concurrencia en arquitectura hexagonal, contenerizados con Docker.',
        ],
        stack: ['Micro-frontends', 'PCI DSS', 'Java', 'React Native', 'Docker'],
      },
      {
        company: 'Fondeadora for Business',
        url: 'https://fondeadora.com',
        role: 'Tech Lead de Frontend',
        period: 'may 2021 - may 2023',
        highlights: [
          'Construí una plataforma fintech B2B desde cero con React y Redux, escalando a 5k+ clientes empresariales.',
          'Construí un panel de administración completo de 8 módulos (React Hook Form) con autenticación RBAC, historial de transacciones y gestión de tarjetas digitales.',
          'Implementé un sistema de pagos en tiempo real que maneja $1M+ en transacciones mensuales vía WebSockets, con MongoDB para almacenamiento flexible.',
          'Lideré y mentoré a un equipo de 3 ingenieros mientras optimizaba pipelines de CI/CD con Docker + GitHub Actions que recortaron el tiempo de despliegue en 40%.',
        ],
        stack: ['React', 'Redux', 'WebSockets', 'MongoDB', 'GitHub Actions'],
      },
      {
        company: 'ProsperIA',
        url: 'https://prosperia.ai',
        role: 'Desarrollador de Frontend',
        period: 'feb 2019 - may 2021',
        highlights: [
          'Diseñé y construí un MVP médico potenciado por IA (React + Python) para apoyar los flujos de diagnóstico de oftalmólogos.',
          'Integré APIs de IA que procesaban 1GB+ de imágenes médicas, mejorando el rendimiento y la escalabilidad del pipeline en un 50%.',
        ],
        stack: ['React', 'Python', 'AI APIs'],
      },
    ],
    skills: [
      { group: 'Frontend', items: ['React.js', 'Next.js (SSR/ISR)', 'TypeScript', 'Vite', 'Redux', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'Performance Optimization', 'WCAG 2.1/2.2 AA · ARIA'] },
      { group: 'Backend y Datos', items: ['Node.js', 'Java', 'Python (FastAPI · Django)', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'PostgreSQL', 'MongoDB', 'Prisma'] },
      { group: 'Cloud y Calidad', items: ['AWS (EC2, S3, RDS, Lambda)', 'GCP', 'Vercel', 'Docker', 'GitHub Actions CI/CD', 'Jest', 'React Testing Library', 'Playwright', 'A/B Testing & Feature Flags'] },
      { group: 'IA y Agentes', items: ['AI-Assisted Development', 'Multi-Agent Workflows', 'LLM / AI API Integration', 'Prompt Engineering', 'Claude Code · Cursor'] },
    ],
    projects: [
      {
        name: 'EXSIX',
        blurb: 'Un santuario web gótico para EXSIX, colectivo de música y moda: shaders de niebla en WebGL crudo, marcos ornamentales calcados de su propio arte, y rituales de la web vieja (libro de visitas funcional, contador de visitas honesto) construido con Astro.',
        stack: ['Astro', 'WebGL/GLSL', 'CSS Masks', 'SVG'],
        live: 'https://exsix-web.pages.dev',
        repo: 'https://github.com/osvaldopineda/exsix-web',
        year: '2026',
        image: '/projects/exsix.jpg',
        imageAlt: 'El sigilo de EXSIX, un monograma XG espinado dentro de un hexagrama, sobre un fondo de niebla roja ditherizada',
      },
      {
        name: 'La Casa',
        blurb: 'La arquitectura emocional de Luis Barragán reconstruida en CSS: muros de color, luz que sigue tu reloj local (la ventana ámbar se enciende de noche) y HTML semántico como cimientos.',
        stack: ['TypeScript', 'Vite', 'CSS custom properties', 'HTML semántico'],
        repo: 'https://github.com/osvaldopineda/la-casa',
        year: '2026',
        image: '/projects/la-casa.jpg',
        imageAlt: 'Vista dividida de La Casa: un muro magenta con ventana ámbar junto al zaguán, iluminado como a mediodía',
      },
      {
        name: 'Lyra',
        blurb: 'Tu historial musical como una galaxia 3D navegable: cada artista es una estrella con tamaño según cuánto lo escuchas, los géneros forman constelaciones envueltas en nebulosas animadas, alimentada con datos de Spotify y Last.fm.',
        stack: ['Three.js', 'GLSL', 'TypeScript', 'Spotify API', 'Last.fm API'],
        live: 'https://lyra-313.pages.dev',
        year: '2026',
        image: '/projects/lyra.jpg',
        imageAlt: 'Galaxia 3D donde cada estrella es un artista, agrupada en constelaciones de géneros',
      },
      {
        name: 'FinDash',
        blurb: 'Dashboard de finanzas personales mobile-first: proyecciones en tiempo real, metas de ingreso freelance y sincronización con Supabase, hecho para sobrevivir una transición de carrera.',
        stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
        live: 'https://findash-icc.pages.dev',
        year: '2026',
        image: '/projects/findash.jpg',
        imageAlt: 'Dos pantallas de teléfono: dashboard de ahorro en verde con proyecciones mensuales, y desglose de gastos por categoría',
      },
      {
        name: 'TripSurprise',
        blurb: 'Itinerarios de viaje colaborativos: un grupo comparte un mismo plan en tiempo real con eventos por día, mapa, clima, presupuesto y un wallet de documentos como fuente de la verdad, más eventos sorpresa que se revelan con el tiempo.',
        stack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
        year: '2026',
        status: 'En desarrollo. Primera parada: Japón',
        image: '/projects/tripsurprise.jpg',
        imageAlt: 'Dos pantallas de teléfono de un viaje a Japón: itinerario por día con cuenta regresiva y reloj dual, y presupuesto en dos monedas',
      },
      {
        name: 'El Mundo Conocido',
        blurb: 'Mapa interactivo e inmersivo de Poniente: regiones clicables con lore profundo, una línea de tiempo de eras históricas, cartografía dibujada a mano y sonido ambiental procedural.',
        stack: ['React', 'Leaflet', 'anime.js', 'Web Audio API', 'Zustand'],
        live: 'https://asoiaf-map.pages.dev',
        repo: 'https://github.com/osvaldopineda/asoiaf-map',
        year: '2026',
        image: '/projects/mundo-conocido.jpg',
        imageAlt: 'Mapa interactivo de Poniente dibujado a mano con regiones clicables',
      },
    ],
    education: {
      degree: 'Ingeniería en Computación',
      school: 'Universidad de América del Norte',
      certs: ['React Advanced Patterns', 'Node.js Application Security', 'UX/UI Design (DEV.F)'],
      languages: ['Español, nativo', 'Inglés, C1 profesional'],
    },
  },
  ui: {
    nav: { work: 'Experiencia', approach: 'Enfoque', skills: 'Skills', projects: 'Proyectos', contact: 'Contacto', cv: 'CV', skipToContent: 'Saltar al contenido', menu: 'Menú', editionAria: 'Cambiar edición de diseño. Actual:', editionEditorial: 'Editorial', editionRiso: 'Impresión riso', editionTerminal: 'Terminal', editionNudgeTitle: 'Un sitio, tres diseños', editionNudgeBody: 'Este botón cambia todo el sistema de diseño al instante.', editionNudgeCta: 'Quiero ver la magia' },
    hero: {
      downloadCv: 'Descargar CV',
      getInTouch: 'Escríbeme',
      githubAria: 'GitHub',
      linkedinAria: 'LinkedIn',
    },
    experience: {
      title: { pre: 'Siete años, ', accent: 'en producción.' },
      lead: 'El camino hasta ahora va de la accesibilidad en Google Search a plataformas seguras para bancos y startups.',
    },
    approach: {
      title: { pre: 'Cosas que defiendo en un ', accent: 'code review.' },
      lead: 'Opiniones que me gané a la mala, y que voy a defender en un PR.',
      opinions: [
        {
          claim: 'Reviso código pensando en el siguiente humano, no en el compilador.',
          body: 'Un PR que nadie puede leer es un problema que les estás enviando a tus compañeros. Dev-first significa que nos pasamos herramientas, no que nos ponemos el pie. Y no: no dejes que la IA escriba todo y me lo mandes sin leer. Nombra las cosas como si alguien más tuviera que vivir con ellas.',
        },
        {
          claim: 'La accesibilidad es el trabajo que nadie ve, hasta que lo necesita.',
          body: 'Vive detrás del producto, en los lectores de pantalla, la navegación con teclado y el contraste de color. Nadie la nota mientras funciona, y todos la notan el día que falla. Lo aprendí resolviendo 50+ defectos de accesibilidad en Google Search.',
        },
        {
          claim: 'Prueba el núcleo, no los adornos.',
          body: 'Las pruebas valen la pena en el happy path y en los edge cases que de verdad importan. Todo lo demás es levantar paredes falsas para sentirte seguro.',
        },
        {
          claim: 'La IA es Robin. Batman sigo siendo yo.',
          body: 'Un copiloto, no un igual: redacta rápido y no se cansa, pero la decisión final (y la responsabilidad) son mías. Robin es muy hábil; Batman sigue decidiendo.',
        },
        {
          claim: 'Saber qué batallas pelear en casa.',
          body: 'La habilidad no es construir todo desde cero, ni meter una librería para cada cosa. Es saber cuándo tu propia lógica vale la pelea, y cuándo un servicio de terceros simplemente es la respuesta.',
        },
      ],
    },
    skills: { title: { pre: 'El ', accent: 'toolkit.' } },
    projects: {
      title: { pre: 'Side ', accent: 'quests.' },
      lead: 'Proyectos personales donde soy dueño de todo el stack, del diseño a la ingeniería y los detalles que van en medio.',
      liveDemo: 'Demo en vivo',
      code: 'Código',
    },
    offclock: {
      title: { pre: 'Fuera de ', accent: 'horario.' },
      body: 'Cuando no estoy entregando código, probablemente ando tocando guitarra, bajo o batería. Crecí con The Strokes y Arctic Monkeys, a un volumen que molesta a los vecinos. Sobre-ingenierizo proyectos personales para aprender una cosa nueva (ese mapa de Poniente de allá arriba empezó exactamente así), y recargo pilas con una buena cerveza y mejor compañía: mi familia.',
    },
    contact: {
      statusLine: 'Construyendo desde la Ciudad de México, abierto a remoto y reubicación',
      titleLine1: 'Cuéntame qué',
      titleLine2Pre: 'estás ',
      titleAccent: 'construyendo.',
      emailMe: 'Escríbeme',
      education: 'Educación',
      certifications: 'Certificaciones',
      languages: 'Idiomas',
      footerSetIn: 'Compuesto en Bricolage Grotesque y Archivo · React · Vite · Tailwind',
    },
  },
}

export default es
