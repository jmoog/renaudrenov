// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://renaud-renov.fr',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  // Police Inter auto-hébergée : Astro télécharge les WOFF2 au build et les sert
  // depuis le domaine — conforme RGPD/CNIL, aucune requête vers Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-base',
      weights: ['400', '500', '600', '700', '800'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
  ],
  // CSS entièrement inliné dans le HTML → zéro requête CSS bloquante.
  build: {
    inlineStylesheets: 'always',
    format: 'directory',
  },
  // Adapter Node standalone : sert le statique + la route /api/devis.
  adapter: node({ mode: 'standalone' }),
  security: { checkOrigin: false },

  // Pas d'intégration sitemap : on sert UN SEUL sitemap simple et lisible,
  // maintenu à la main dans public/sitemap.xml (référencé par robots.txt).
  // À mettre à jour lors de l'ajout/suppression d'une page.
});
