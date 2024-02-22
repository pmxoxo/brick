import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Adjust the path according to your project structure
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/_variables.scss')}";`
      }
    }
  }
});
