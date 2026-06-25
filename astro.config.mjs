// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
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

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci/'),
      serialize(item) {
        const u = new URL(item.url);
        let path = u.pathname;
        if (!path.endsWith('/')) path += '/';
        if (path === '/') item.priority = 1.0;
        else if (path === '/devis-gratuit/') item.priority = 0.9;
        else if (path === '/a-propos/') item.priority = 0.7;
        else if (['/mentions-legales/'].includes(path)) item.priority = 0.3;
        else item.priority = 0.6;
        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
});
