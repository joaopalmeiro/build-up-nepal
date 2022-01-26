import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    json: { namedExports: false, stringify: true },
    plugins: [react()],
    server: { open: true }
});
