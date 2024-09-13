import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    prerender: {
      default: true
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '' : ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;