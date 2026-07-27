// Config temporaire de vérification : sort le cache Vite et le dist du dossier
// monté (les unlink y sont interdits → EPERM). Ne pas committer.
import base from './astro.config.mjs';
export default {
  ...base,
  outDir: '/tmp/rr-dist',
  cacheDir: '/tmp/rr-cache',
  vite: { ...(base.vite || {}), cacheDir: '/tmp/rr-vite' },
};
