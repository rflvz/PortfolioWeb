import { absoluteUrl, env } from '../absolute-url';
import { AUTHOR_SOCIALS, TESTIMONIALS } from '@/content/site-content';
import type {
  PersonSchema,
  OrganizationSchema,
  WebSiteSchema,
  ServiceSchema,
  ArticleSchema,
  WebPageSchema,
  CollectionPageSchema,
  ReviewSchema,
} from './types';

// ---------------------------------------------------------------------------
// Services Data
// ---------------------------------------------------------------------------
export const SERVICES_DATA = [
  {
    type: 'Desarrollo Web',
    description:
      'Aplicaciones full-stack construidas con Next.js, React y TypeScript. Interfaces que rinden tan bien como lucen.',
  },
  {
    type: 'Sistemas IA',
    description:
      'Features potenciadas por LLMs, arquitecturas de agentes e integraciones MCP que llevan inteligencia a cada capa del stack.',
  },
  {
    type: 'Productos',
    description:
      'Desarrollo de producto end-to-end desde concepto hasta lanzamiento. Apps Electron, dashboards y plataformas SaaS con IA en su núcleo.',
  },
  {
    type: 'Arquitectura',
    description:
      'Diseño de sistemas y consultoría técnica. Arquitecturas de API, esquemas de base de datos e infraestructura que escala con tus ambiciones.',
  },
];

// ---------------------------------------------------------------------------
// Projects Data
// ---------------------------------------------------------------------------
export const PROJECTS_DATA = [
  {
    uid: 'chesstogether',
    title: 'ChessTogether',
    summary:
      'Plataforma para organizar quedadas y torneos de ajedrez en la vida real. Sistema de Elo social y matchmaking para emparejar jugadores según nivel.',
    tags: ['TypeScript', 'Next.js', 'React', 'Supabase'],
    status: 'LIVE',
    externalUrl: 'https://chesstogether.app',
    datePublished: '2024-01-15',
  },
  {
    uid: 'codeorchestrator',
    title: 'CodeOrchestrator',
    summary:
      'Sistema de orquestación de agentes IA para generación y gestión de código, desde diseño hasta despliegue de funcionalidades completas.',
    tags: ['Python', 'TypeScript', 'LangGraph', 'Claude API', 'MCP'],
    status: 'IN_DEVELOPMENT',
    repositoryUrl: 'https://github.com/rflvz/codeOrchestrator',
    datePublished: '2024-06-01',
  },
  {
    uid: 'teamergy',
    title: 'Teamergy',
    summary:
      'Web de briefings para diseños NT con gestión completa del pipeline creativo, desde recepción de briefs hasta entrega de activos.',
    tags: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL'],
    status: 'IN_DEVELOPMENT',
    datePublished: '2024-09-01',
  },
  {
    uid: 'stylecluster',
    title: 'StyleCluster',
    summary:
      'Modelo de clustering que analiza imágenes de referencia y genera grupos de estilos visuales con patrones formales y cromáticos.',
    tags: ['Python', 'PyTorch', 'CLIP', 'scikit-learn'],
    status: 'IN_DEVELOPMENT',
    datePublished: '2024-11-01',
  },
];

// ---------------------------------------------------------------------------
// Testimonials Data
// ---------------------------------------------------------------------------
export const TESTIMONIALS_DATA = [
  ...TESTIMONIALS.map((testimonial) => ({
    id: testimonial.id,
    name: testimonial.name,
    description: testimonial.description,
  })),
];

// ---------------------------------------------------------------------------
// Person
// ---------------------------------------------------------------------------
export function buildPersonSchema(): PersonSchema {
  return {
    '@type': 'Person',
    name: 'Rafa Alvarez',
    jobTitle: 'AI Architecture Developer',
    description:
      'Desarrollador especializado en arquitectura IA, construyendo el futuro con inteligencia artificial.',
    url: absoluteUrl('/'),
    sameAs: [AUTHOR_SOCIALS.github, AUTHOR_SOCIALS.linkedin],
    knowsAbout: [
      'TypeScript',
      'Python',
      'Rust',
      'LLM Orchestration',
      'MCP',
      'Prompt Engineering',
      'Agent Architecture',
      'React',
      'Next.js',
      'Tailwind',
      'Node.js',
      'FastAPI',
      'PostgreSQL',
    ],
  };
}

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------
export function buildOrganizationSchema(): OrganizationSchema {
  return {
    '@type': 'Organization',
    name: 'THE_ARTIFACT',
    url: absoluteUrl('/'),
    sameAs: [AUTHOR_SOCIALS.github, AUTHOR_SOCIALS.linkedin],
  };
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------
export function buildWebSiteSchema(): WebSiteSchema {
  return {
    '@type': 'WebSite',
    name: env.siteName,
    alternateName: env.organizationName,
    url: absoluteUrl('/'),
    publisher: { '@type': 'Organization', name: env.organizationName },
  };
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------
export function buildServiceSchema(
  service: (typeof SERVICES_DATA)[number],
): ServiceSchema {
  return {
    '@type': 'Service',
    name: service.type,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: env.organizationName,
    },
    areaServed: 'Worldwide',
    url: absoluteUrl('/#services'),
  };
}

// ---------------------------------------------------------------------------
// Article (Project)
// ---------------------------------------------------------------------------
export function buildArticleSchema(
  project: (typeof PROJECTS_DATA)[number],
): ArticleSchema {
  const url =
    project.externalUrl ??
    ('repositoryUrl' in project
      ? (project as { repositoryUrl?: string }).repositoryUrl
      : undefined) ??
    absoluteUrl('/#projects');

  return {
    '@type': 'Article',
    name: project.title,
    description: project.summary,
    url,
    datePublished: project.datePublished,
    author: { '@type': 'Person', name: 'Rafa Alvarez' },
    publisher: { '@type': 'Organization', name: env.organizationName },
    keywords: project.tags.join(', '),
    articleSection: 'Projects',
  };
}

// ---------------------------------------------------------------------------
// Review (Testimonial)
// ---------------------------------------------------------------------------
export function buildReviewSchema(
  testimonial: (typeof TESTIMONIALS_DATA)[number],
): ReviewSchema {
  return {
    '@type': 'Review',
    reviewBody: testimonial.description,
    author: {
      '@type': 'Professional',
      name: testimonial.name,
    },
  };
}

// ---------------------------------------------------------------------------
// WebPage
// ---------------------------------------------------------------------------
export function buildWebPageSchema(): WebPageSchema {
  return {
    '@type': 'WebPage',
    name: 'Rafa Alvarez | AI Architecture Developer',
    description:
      'Desarrollador especializado en arquitectura IA, construyendo el futuro con inteligencia artificial.',
    url: absoluteUrl('/'),
    inLanguage: 'es',
    isPartOf: { '@type': 'WebSite', name: env.siteName },
  };
}

// ---------------------------------------------------------------------------
// CollectionPage
// ---------------------------------------------------------------------------
export function buildCollectionPageSchema(): CollectionPageSchema {
  return {
    '@type': 'CollectionPage',
    name: 'Servicios de Desarrollo y Arquitectura IA',
    description:
      'Desarrollo Web, Sistemas IA, Productos y Arquitectura — servicios de construcción de software inteligente.',
    url: absoluteUrl('/#services'),
    inLanguage: 'es',
    about: SERVICES_DATA.map(buildServiceSchema),
  };
}
