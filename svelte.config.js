import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // For SPA-style routing
      precompress: false,
      strict: true
    }),
    
    // Path configuration for GitHub Pages
    paths: {
      base: process.argv.includes('dev') ? '' : '/',
    },
  

    // Prerendering configuration
    prerender: {
      entries: ['*'] // Prerender all pages
    },

    // Alias configuration (if needed)
    alias: {
      $lib: './src/lib',
    }
  }
};

export default config;