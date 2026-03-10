import { defineConfig } from 'vite';

export default defineConfig({
  base: '/layout_landing-page/',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
