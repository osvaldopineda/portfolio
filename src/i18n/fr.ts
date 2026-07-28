import type { LocaleBundle } from './types'

const fr: LocaleBundle = {
  cv: {
    profile: {
      role: 'Ingénieur Fullstack Senior · SaaS & Fintech pilotés par l\'IA',
      tagline: 'Je conçois et développe des plateformes web sécurisées et accessibles — du front au back.',
      summary:
        'Ingénieur Fullstack Senior, 7 ans dans le SaaS et la fintech — des systèmes bancaires PCI DSS à l\'accessibilité sur Google Search. Je prends en charge l\'architecture frontend de bout en bout, je livre avec des workflows assistés par IA, et je collabore avec fondateurs et parties prenantes — je ne fais pas que livrer du code.',
      location: 'Mexico, Mexique · GMT-6',
      availability: 'Ouvert à la collaboration à distance à l\'international, au B2B, et à la relocalisation / au sponsoring.',
    },
    stats: [
      { value: 'Google Search', label: 'accessibilité à grande échelle' },
      { value: 'PCI DSS', label: 'fintech de niveau bancaire' },
      { value: '2,3M+ utilisateurs', label: 'Stitch Fix' },
      { value: '1M$+/mois', label: 'paiements en temps réel' },
    ],
    experience: [
      {
        company: 'Google (via Qualitest)',
        role: 'Ingénieur Logiciel Senior',
        period: 'sept. 2025 — mars 2026',
        highlights: [
          'Résolution de plus de 50 défauts d\'accessibilité web hautement prioritaires (WCAG 2.1/2.2 AA, ARIA) directement sur Google Search, améliorant la conformité et l\'inclusivité de l\'un des produits les plus consultés au monde.',
          'Réalisation d\'audits d\'accessibilité et livraison de corrections d\'UI via une revue de code à grande échelle, en partenariat avec les équipes produit et design — en accélérant la livraison grâce aux assistants de code IA et à la génération de tests assistée par IA.',
          'Construction de la communication entre services backend en Java avec gRPC, en intégrant des composants frontend à l\'infrastructure interne propriétaire de Google.',
        ],
        stack: ['Accessibility (WCAG/ARIA)', 'Java', 'gRPC', 'React', 'Code Review'],
      },
      {
        company: 'Pandora’s Way',
        role: 'Lead Frontend',
        period: 'févr. 2025 — déc. 2025',
        context: 'Temps partiel · bêta d\'une startup en phase d\'amorçage',
        highlights: [
          'Seul responsable du frontend pour la bêta destinée aux investisseurs d\'une application de parentalité — en partenariat direct avec les 3 fondateurs, transformant les wireframes en un produit livré, et pilotant les décisions d\'architecture, de coût, de scalabilité et de taille de bundle sous de fortes contraintes de startup.',
          'Construction des parcours utilisateurs essentiels et d\'un système de composants UI scalable avec React, Vite, Node.js, Tailwind CSS et shadcn/ui — réduction de la taille du bundle initial d\'environ 70 % via le lazy loading, le code splitting et un build basé sur Vite.',
          'Contribution au backend Python/Django (couche de stockage/bucket) et participation à la définition des règles métier aux côtés du fondateur technique.',
          'Intégration de PostHog (feature flags + analytics), mise en place des tests Jest/Cypress et du CI/CD, et travail au plus près du produit dans une équipe agile.',
        ],
        stack: ['React', 'Vite', 'shadcn/ui', 'Python/Django', 'PostHog'],
      },
      {
        company: 'Unosquare',
        role: 'Ingénieur Frontend Senior',
        period: 'juin 2024 — août 2025',
        context: 'Clients grands comptes : Stitch Fix · Life.Church',
        highlights: [
          'Stitch Fix (2,3M+ clients actifs) : pilotage du refactor frontend avec GraphQL et migration de l\'architecture de contenu vers Contentstack (CMS Headless) — +25 % d\'engagement utilisateur.',
          'Life.Church : direction d\'une refonte complète du frontend avec Tailwind CSS et shadcn/ui, construction d\'une bibliothèque de plus de 20 composants documentée dans Storybook et livrée via Vercel.',
          'Conduite de tests A/B pilotés par les données (Amplitude) pour +15 % de conversion, optimisation des performances de rendu sur des applications Next.js à fort trafic, et maintien d\'une couverture de tests de plus de 85 % avec Jest, React Testing Library et Playwright — accéléré par le développement assisté par IA.',
        ],
        stack: ['Next.js', 'GraphQL', 'Contentstack', 'shadcn/ui', 'Storybook'],
      },
      {
        company: 'Invex Bank & Compartamos Bank',
        role: 'Consultant Fintech Senior',
        period: 'mai 2023 — mai 2024',
        highlights: [
          'Invex Bank : pilotage d\'une migration legacy vers des micro-frontends servant plus de 50 000 clients — plus de 15 widgets React/TypeScript avec une conformité PCI DSS stricte et des API sécurisées Node.js + PostgreSQL + JWT sur l\'infrastructure on-premise/hybride de la banque.',
          'Compartamos Banco (l\'une des plus grandes banques de microfinance d\'Amérique latine — 3,1M+ clients) : conception d\'une plateforme d\'inclusion financière offline-first (React Native + RealmDB chiffré) avec des backends Java à haute concurrence en architecture hexagonale, conteneurisés avec Docker.',
        ],
        stack: ['Micro-frontends', 'PCI DSS', 'Java', 'React Native', 'Docker'],
      },
      {
        company: 'Fondeadora for Business',
        role: 'Tech Lead Frontend',
        period: 'mai 2021 — mai 2023',
        highlights: [
          'Conception d\'une plateforme fintech B2B de A à Z avec React & Redux, passant à l\'échelle pour plus de 5 000 clients professionnels.',
          'Construction d\'un panneau d\'administration complet de 8 modules (React Hook Form) avec authentification RBAC, historique des transactions et gestion de cartes numériques.',
          'Mise en place d\'un système de paiement en temps réel traitant plus d\'1 M$ de transactions mensuelles via WebSockets, avec MongoDB pour un stockage flexible.',
          'Encadrement et mentorat d\'une équipe de 3 ingénieurs tout en optimisant les pipelines CI/CD Docker + GitHub Actions, réduisant le temps de déploiement de 40 %.',
        ],
        stack: ['React', 'Redux', 'WebSockets', 'MongoDB', 'GitHub Actions'],
      },
      {
        company: 'ProsperIA',
        role: 'Développeur Frontend',
        period: 'févr. 2019 — mai 2021',
        highlights: [
          'Conception et développement d\'un MVP médical propulsé par l\'IA (React + Python) pour soutenir les workflows de diagnostic des ophtalmologues.',
          'Intégration d\'API d\'IA traitant plus d\'1 Go d\'imagerie médicale, améliorant la performance et la scalabilité du pipeline de 50 %.',
        ],
        stack: ['React', 'Python', 'AI APIs'],
      },
    ],
    skills: [
      { group: 'Frontend', items: ['React.js', 'Next.js (SSR/ISR)', 'TypeScript', 'Vite', 'Redux', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'Performance Optimization', 'WCAG 2.1/2.2 AA · ARIA'] },
      { group: 'Backend & Données', items: ['Node.js', 'Java', 'Python (FastAPI · Django)', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'PostgreSQL', 'MongoDB', 'Prisma'] },
      { group: 'Cloud & Qualité', items: ['AWS (EC2, S3, RDS, Lambda)', 'GCP', 'Vercel', 'Docker', 'GitHub Actions CI/CD', 'Jest', 'React Testing Library', 'Playwright', 'A/B Testing & Feature Flags'] },
      { group: 'IA & Agentique', items: ['AI-Assisted Development', 'Multi-Agent Workflows', 'LLM / AI API Integration', 'Prompt Engineering', 'Claude Code · Cursor'] },
    ],
    projects: [
      {
        name: 'El Mundo Conocido',
        blurb: 'Carte interactive et immersive de Westeros — régions cliquables avec un lore approfondi, une frise chronologique des ères historiques, une cartographie dessinée à la main et une ambiance sonore procédurale.',
        stack: ['React', 'Leaflet', 'anime.js', 'Web Audio API', 'Zustand'],
        live: 'https://asoiaf-map.pages.dev',
        repo: 'https://github.com/osvaldopineda/asoiaf-map',
        year: '2026',
        image: '/projects/mundo-conocido.jpg',
        imageAlt: 'Carte interactive de Westeros dessinée à la main avec des régions cliquables',
      },
      {
        name: 'Lyra',
        blurb: 'Ton historique d\'écoute en galaxie 3D navigable — chaque artiste est une étoile dont la taille dépend du temps d\'écoute, les genres forment des constellations enveloppées de nébuleuses animées, alimentée par les données Spotify et Last.fm.',
        stack: ['Three.js', 'GLSL', 'TypeScript', 'Spotify API', 'Last.fm API'],
        live: 'https://lyra-313.pages.dev',
        year: '2026',
        image: '/projects/lyra.jpg',
        imageAlt: 'Galaxie 3D où chaque étoile est un artiste, regroupée en constellations de genres',
      },
      {
        name: 'FinDash',
        blurb: 'Tableau de bord de finances personnelles pensé pour le mobile — projections en temps réel, objectifs de revenus en freelance et synchronisation Supabase, conçu pour survivre à une transition de carrière.',
        stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
        live: 'https://findash-icc.pages.dev',
        year: '2026',
      },
      {
        name: 'TripSurprise',
        blurb: 'Itinéraires de voyage collaboratifs — un groupe partage un même plan en temps réel : événements jour par jour, carte, météo, budget et un portefeuille de documents comme source de vérité, plus des événements surprises révélés au fil du temps.',
        stack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
        year: '2026',
        status: 'En développement — première étape : le Japon',
      },
    ],
    education: {
      degree: 'Licence en Ingénierie Informatique',
      school: 'Universidad de América del Norte',
      certs: ['React Advanced Patterns', 'Node.js Application Security', 'UX/UI Design — DEV.F'],
      languages: ['Espagnol — Natif', 'Anglais — C1 Professionnel'],
    },
  },
  ui: {
    nav: { work: 'Parcours', approach: 'Approche', skills: 'Compétences', projects: 'Projets', contact: 'Contact', cv: 'CV', skipToContent: 'Aller au contenu', menu: 'Menu' },
    hero: {
      downloadCv: 'Télécharger le CV',
      getInTouch: 'Me contacter',
      scroll: 'Sept ans, déroulés',
      githubAria: 'GitHub',
      linkedinAria: 'LinkedIn',
    },
    experience: {
      title: { pre: 'Sept ans, ', accent: 'livrés en production.' },
      lead: 'De l\'accessibilité sur Google Search aux plateformes fintech sécurisées — un parcours fait de systèmes fiables, performants et inclusifs.',
    },
    approach: {
      title: { pre: 'Ce que je défendrai en ', accent: 'revue de code.' },
      lead: 'Des convictions acquises à la dure — et que je défendrai dans une PR.',
      opinions: [
        {
          claim: 'Je relis le code pour le prochain humain, pas pour le compilateur.',
          body: 'Une PR que personne ne peut lire, c\'est un problème que tu refiles à tes coéquipiers — « dev-first », ça veut dire qu\'on se passe des outils, pas qu\'on se met des bâtons dans les roues. Et non : ne laisse pas l\'IA tout écrire pour me l\'envoyer sans l\'avoir lue. Nomme les choses comme si quelqu\'un devait vivre avec.',
        },
        {
          claim: 'L\'accessibilité, c\'est le travail que personne ne voit — jusqu\'à ce qu\'on en ait besoin.',
          body: 'Utilisateurs daltoniens, lecteurs d\'écran, navigation au clavier : ça vit derrière le produit. On ne remarque pas que c\'est là. On remarque très bien quand ça ne l\'est pas. Je l\'ai appris en corrigeant plus de 50 défauts d\'accessibilité sur Google Search.',
        },
        {
          claim: 'Teste le cœur, pas les détails cosmétiques.',
          body: 'Le « happy path » et les cas limites qui comptent vraiment — c\'est là que les tests sont rentables. Le reste, c\'est construire de faux murs pour se rassurer.',
        },
        {
          claim: 'L\'IA, c\'est Robin. Batman, c\'est toujours moi.',
          body: 'Un copilote, pas un égal : elle rédige vite et ne fatigue jamais, mais la décision finale — et la responsabilité — me reviennent. Robin est doué ; c\'est Batman qui décide.',
        },
        {
          claim: 'Savoir quelles batailles mener en interne.',
          body: 'Le savoir-faire, ce n\'est pas tout construire de zéro, ni dégainer une librairie à chaque fois. C\'est savoir quand ta propre logique vaut la peine, et quand un service tiers est tout simplement la bonne réponse.',
        },
      ],
    },
    skills: { title: { pre: 'La ', accent: 'boîte à outils.' } },
    projects: {
      title: { pre: 'Ce que je construis ', accent: 'par passion du métier.' },
      lead: 'Des projets perso où je maîtrise toute la stack — design, ingénierie et tous les détails entre les deux.',
      liveDemo: 'Démo live',
      code: 'Code',
    },
    offclock: {
      title: { pre: 'En dehors du ', accent: 'boulot.' },
      body: 'Quand je ne livre pas de code, je joue probablement de la guitare, de la basse ou de la batterie — biberonné à The Strokes et Arctic Monkeys, assez fort pour agacer les voisins. Je sur-conçois mes projets perso pour apprendre une nouvelle chose (cette carte de Westeros là-haut a commencé exactement comme ça), et je recharge les batteries avec une bonne bière et une meilleure compagnie — ma famille.',
    },
    contact: {
      statusLine: 'Actuellement basé à Mexico — ouvert au télétravail et à la relocalisation',
      titleLine1: 'Construisons quelque chose',
      titleLine2Pre: 'qui ',
      titleAccent: 'dure.',
      emailMe: 'M\'écrire',
      education: 'Formation',
      certifications: 'Certifications',
      languages: 'Langues',
      footerSetIn: 'Composé en Fraunces · React · Vite · Tailwind',
    },
  },
}

export default fr
