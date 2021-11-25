import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: join(__dirname, 'client'),
  // resolve: {
  //   alias: {
  //     '@render': join(__dirname, 'src/render'),
  //     '@main': join(__dirname, 'src/main'),
  //     '@common': join(__dirname, 'src/common'),
  //   },
  // },
  base: './',
  build: {
    outDir: join(__dirname, 'dist/client'),
    emptyOutDir: true,
  },
  server: {
    port: +process.env.PORT,
  },
});
