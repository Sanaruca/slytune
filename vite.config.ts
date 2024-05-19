import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/acme',

  plugins: [nxViteTsPaths(), svelte()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  server: {
    port: 4200,
    host: 'localhost',
  },

  test: {
    globals: true,
    cache: { dir: './node_modules/.vitest/acme' },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: { reportsDirectory: './coverage/acme', provider: 'v8' },
  },
});
