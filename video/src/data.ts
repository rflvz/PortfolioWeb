export const DATA = {
  hero: {
    label: 'AGENTIC_SOFTWARE_ARCHITECT',
    name: {line1: 'RAFAEL', line2: 'ALVAREZ'},
    tagline:
      'No programo con IA, ese enfoque es obsoleto. Dejo la autonomía a la IA mientras yo optimizo su sistema para obtener el máximo de eficiencia con la máxima autonomía',
    tags: [
      'ISSUE_DRIVEN_DEVELOPMENT',
      'SPEC_DRIVEN_DEVELOPMENT',
      'VANGUARDISMO_DEV',
      'DESARROLLO_PARALELO',
    ],
  },
  services: [
    {
      title: 'Desarrollo Web',
      description:
        'Aplicaciones full-stack construidas con Next.js, React y TypeScript. Interfaces que rinden tan bien como lucen.',
    },
    {
      title: 'Entornos IA',
      description:
        'Consultorías para actualizar los obsoletos entornos de desarrollo a entornos de IA potenciados.',
    },
    {
      title: 'Productos',
      description:
        'Desarrollo de producto end-to-end desde concepto hasta deployment. Apps, dashboards y plataformas SaaS.',
    },
    {
      title: 'Mantenimiento',
      description:
        'Mantenimiento de entornos existentes y actualización a las últimas novedades en sistemas IA.',
    },
  ],
  projects: [
    {
      id: '01',
      title: 'ChessTogether',
      summary:
        'Plataforma para organizar quedadas y torneos de ajedrez en la vida real. Sistema de Elo social y matchmaking.',
      tags: ['TypeScript', 'Next.js', 'React', 'Supabase'],
      status: 'LIVE' as const,
    },
    {
      id: '02',
      title: 'CodeOrchestrator',
      summary:
        'Sistema de orquestación de agentes IA para generación y gestión de código, desde diseño hasta despliegue.',
      tags: ['Python', 'LangGraph', 'Claude_API', 'MCP'],
      status: 'IN_DEV' as const,
    },
    {
      id: '03',
      title: 'Teamergy',
      summary:
        'Web de briefings para diseños con gestión completa de la gestión creativa y entrega de mockups.',
      tags: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL'],
      status: 'IN_DEV' as const,
    },
    {
      id: '04',
      title: 'StyleCluster',
      summary:
        'Modelo de clustering que analiza imágenes y genera grupos de estilos visuales con patrones cromáticos.',
      tags: ['Python', 'PyTorch', 'CLIP', 'scikit-learn'],
      status: 'IN_DEV' as const,
    },
  ],
  testimonials: [
    {
      name: 'Marcos García Sánchez',
      quote:
        'Liderazgo técnico sólido y decisiones de arquitectura bien justificadas. Siempre adelantado y proponiendo mejoras por iniciativa propia.',
    },
    {
      name: 'Clemente Alvarez Boix',
      quote:
        'Montó un entorno con IA que acabé integrando en mi flujo sin darme casi cuenta. Tiene mucho criterio técnico y de producto.',
    },
  ],
  techStack: [
    'NEXT.JS',
    'TYPESCRIPT',
    'REACT',
    'TAILWIND',
    'SUPABASE',
    'RUST',
    'PYTHON',
  ],
  contact: {
    title: 'ABIERTO A CONEXIONES',
    subtitle: 'Envía la señal',
    url: 'rafalvz.dev',
  },
};
