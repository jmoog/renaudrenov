// ─────────────────────────────────────────────────────────────────────────
// Point d'entrée de production — renaud-renov.fr
//
// L'adapter Node d'Astro (mode standalone) ne met en cache que /_astro/.
// Tout le reste (photos de /images/, favicons) partait avec « max-age=0 » :
// le navigateur revalidait chaque image à chaque visite. Ce fichier enveloppe
// le handler d'Astro pour :
//   1. donner une vraie durée de cache aux fichiers statiques de public/ ;
//   2. envoyer les en-têtes de sécurité sur toutes les réponses.
//
// Lancé par le Dockerfile avec ASTRO_NODE_AUTOSTART=disabled (sinon Astro
// démarre son propre serveur sur le même port).
// ─────────────────────────────────────────────────────────────────────────
import http from 'node:http';

process.env.ASTRO_NODE_AUTOSTART = 'disabled';
const { handler } = await import('./dist/server/entry.mjs');

const PORT = Number(process.env.PORT ?? 4321);
const HOST = process.env.HOST ?? '0.0.0.0';

// Fichiers de public/ dont le nom ne change pas quand le contenu change :
// 30 jours de cache, puis revalidation en arrière-plan.
const CACHE_IMAGES = 'public, max-age=2592000, stale-while-revalidate=86400';
const STATIQUE = /^\/(images\/|favicon|apple-touch-icon)/;

const SECURITE = {
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const server = http.createServer((req, res) => {
  for (const [nom, valeur] of Object.entries(SECURITE)) res.setHeader(nom, valeur);

  const chemin = (req.url ?? '/').split('?')[0];
  if (STATIQUE.test(chemin)) {
    // `send` ne pose son « max-age=0 » que si Cache-Control est absent.
    res.setHeader('Cache-Control', CACHE_IMAGES);
    // Image introuvable → page 404 : elle ne doit pas hériter du cache long.
    const writeHead = res.writeHead;
    res.writeHead = function (status, ...reste) {
      if (status >= 300 && status !== 304) res.removeHeader('Cache-Control');
      return writeHead.call(this, status, ...reste);
    };
  }

  handler(req, res);
});

server.listen(PORT, HOST, () => {
  console.log(`renaud-renov.fr — serveur prêt sur http://${HOST}:${PORT}`);
});

for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
