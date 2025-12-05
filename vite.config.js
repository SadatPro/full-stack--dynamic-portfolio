import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resourcesPath = path.resolve(__dirname, 'resources');

export default defineConfig({
    root: resourcesPath,
    build: {
        outDir: path.resolve(__dirname, 'public', 'react'),
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(resourcesPath, 'index.tsx'),
        },
    },
    server: {
        port: 5173,
        host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': resourcesPath,
        },
    },
});
