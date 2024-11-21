import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/gholder513.github.io/', // Adjust based on your repository name
  plugins: [react()],
});
