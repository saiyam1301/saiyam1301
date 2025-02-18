import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/saiyam1301/',  // Change this to your repo name or subfolder name
  plugins: [
    react(),
    tailwindcss(),
  ],
});