// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImportPlugin from '@opentiny/unplugin-tiny-vue';
import path from 'path';
import tailwindPlugin from '@tailwindcss/vite';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
    plugins: [
        vue(),
        autoImportPlugin('vite'),
        tailwindPlugin(),
        viteMockServe({
            mockPath: 'src/mock',
            localEnabled: true,
            logger: true
        })
    ],
    publicDir: 'src',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        host: "0.0.0.0",
        port: 3030,
        strictPort: true,
        allowedHosts:['frp-can.com','127.0.0.1','localhost']
    },
})