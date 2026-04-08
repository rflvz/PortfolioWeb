// Base JSON-LD structure expected by Next.js metadata
export interface JsonLdObject {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

// Person schema properties
export interface PersonSchema {
  '@type': 'Person';
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  sameAs: string[];
  knowsAbout?: string[];
}

// Organization schema properties
export interface OrganizationSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  sameAs?: string[];
}

// WebSite schema properties
export interface WebSiteSchema {
  '@type': 'WebSite';
  name: string;
  alternateName?: string;
  url: string;
  publisher?: {
    '@type': 'Organization';
    name: string;
  };
}

// Service schema properties
export interface ServiceSchema {
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
  };
  areaServed?: string;
  url?: string;
}

// Article/Project schema properties
export interface ArticleSchema {
  '@type': 'Article';
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': 'Person';
    name: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
  };
  keywords?: string;
  articleSection?: string;
}

// WebPage schema properties
export interface WebPageSchema {
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
  isPartOf?: {
    '@type': 'WebSite';
    name: string;
  };
}

// CollectionPage schema for services listing
export interface CollectionPageSchema {
  '@type': 'CollectionPage';
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
  about?: ServiceSchema[];
}

// Review/Testimonial schema properties
export interface ReviewSchema {
  '@type': 'Review';
  reviewBody: string;
  author: {
    '@type': 'Person' | 'Professional' | 'Organization';
    name: string;
  };
  reviewRating?: {
    '@type': 'Rating';
    ratingValue?: string;
  };
}
