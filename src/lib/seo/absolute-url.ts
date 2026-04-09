const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev ? 'http://localhost:3000' : 'https://rflvz.com';
const SITE_NAME = 'Rafa Alvarez Portfolio';
const ORGANIZATION_NAME = 'PORTFOLIO';

export function absoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export const env = {
  baseUrl: BASE_URL,
  siteName: SITE_NAME,
  organizationName: ORGANIZATION_NAME,
};
