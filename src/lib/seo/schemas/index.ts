import { absoluteUrl, env } from '../absolute-url';
import { content } from '@/content';
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
// Person
// ---------------------------------------------------------------------------
export function buildPersonSchema(): PersonSchema {
  return {
    '@type': 'Person',
    name: content.meta.author.name,
    jobTitle: content.meta.author.jobTitle,
    description: content.meta.author.description,
    url: absoluteUrl('/'),
    sameAs: [
      content.meta.author.socials.github,
      content.meta.author.socials.linkedin,
    ],
    knowsAbout: [
      ...content.meta.author.skills.languages,
      ...content.meta.author.skills.aiAgents,
      ...content.meta.author.skills.frontend,
      ...content.meta.author.skills.backend,
    ],
  };
}

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------
export function buildOrganizationSchema(): OrganizationSchema {
  return {
    '@type': 'Organization',
    name: content.meta.organizationName,
    url: absoluteUrl('/'),
    sameAs: [
      content.meta.author.socials.github,
      content.meta.author.socials.linkedin,
    ],
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
// Services
// ---------------------------------------------------------------------------
const SERVICES_DATA = content.services;

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------
export function buildServiceSchema(
  service: (typeof SERVICES_DATA)[number],
): ServiceSchema {
  return {
    '@type': 'Service',
    name: service.title,
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
// Projects
// ---------------------------------------------------------------------------
const PROJECTS_DATA = content.projects;

// ---------------------------------------------------------------------------
// Article (Project)
// ---------------------------------------------------------------------------
export function buildArticleSchema(
  project: (typeof PROJECTS_DATA)[number],
): ArticleSchema {
  const url =
    project.externalUrl ??
    project.repositoryUrl ??
    absoluteUrl('/#projects');

  return {
    '@type': 'Article',
    name: project.title,
    description: project.summary,
    url,
    datePublished: project.datePublished,
    author: { '@type': 'Person', name: content.meta.author.name },
    publisher: { '@type': 'Organization', name: env.organizationName },
    keywords: project.tags.join(', '),
    articleSection: 'Projects',
  };
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
const TESTIMONIALS_DATA = content.testimonials;

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
      '@type': 'Person',
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
    description: content.meta.author.description,
    url: absoluteUrl('/'),
    inLanguage: 'es',
    isPartOf: { '@type': 'WebSite', name: env.siteName },
    author: { '@type': 'Person', name: content.meta.author.name },
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

// Re-export for convenience
export { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA };
