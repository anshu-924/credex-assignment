import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure base is set to '/' for Netlify deployments
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
