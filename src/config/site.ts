import { publicEnv } from './env';

/** Identité du site et liens vers le reste de l'écosystème KSP. */
export const siteConfig = {
  id: 'print',
  name: 'KSP Print',
  domain: 'print.ksp.bj',
  tagline: 'Impression numérique et communication par l’objet',
  description:
    'Configurez votre produit, envoyez ou créez votre maquette, payez en ligne : notre équipe vérifie votre fichier avant l’impression.',
  url: publicEnv.siteUrl,
  locale: 'fr_BJ',
  ecosystem: [
    { id: 'portail', label: 'KSP', href: publicEnv.portailUrl },
    { id: 'shop', label: 'KSP Shop', href: publicEnv.shopUrl },
    { id: 'print', label: 'KSP Print', href: publicEnv.printUrl },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Conditions générales', href: '/conditions-generales' },
    { label: 'Confidentialité', href: '/confidentialite' },
  ],
} as const;

export type SiteId = 'portail' | 'shop' | 'print';
