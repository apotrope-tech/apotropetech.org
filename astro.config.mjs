import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // TODO: set the real URL once a host is chosen.
  // The site used to have one page per topic. Old links land on the matching section of the single page.
  redirects: {
    '/technology': '/#product',
    '/progress': '/#progress',
    '/market': '/#why',
    '/about': '/#team',
    '/contact': '/#contact',
    '/sources': '/#sources',
  },
});
