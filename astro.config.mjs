import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apotropetech.org',
  redirects: {
    '/technology': '/#product',
    '/progress': '/#progress',
    '/market': '/#why',
    '/about': '/#team',
    '/contact': '/#contact',
    '/sources': '/#sources',
  },
});
