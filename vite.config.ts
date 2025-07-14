import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    host: '0.0.0.0',
    watch: {
      ignored: ['**/public/**', '**/json-server/**']
    }
  },

  // For docker preview

  preview: {
    host: '0.0.0.0',
    port: 8000
  }
});
