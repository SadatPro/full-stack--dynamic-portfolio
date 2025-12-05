import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const resourcesPath = path.resolve(__dirname, 'resources');
const reactOutDir = path.resolve(__dirname, 'public', 'react');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resourcesPath, '');
  return {
    root: resourcesPath,
    build: {
      outDir: reactOutDir,
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': resourcesPath,
      },
    },
  };
});
