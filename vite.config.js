import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/custom.css',
            ],
            refresh: true,
        }),
    ],
    build: {
        manifest: true, // Asegura que se genere el archivo manifest.json
        outDir: 'public/build', // Especifica la carpeta de salida
    },
});
