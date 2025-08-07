import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import autoImportPlugin from '@opentiny/unplugin-tiny-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    autoImportPlugin('vite'),
    Components({
      resolvers: [TinyVueSingleResolver]
    }),
    AutoImport({
      resolvers: [TinyVueSingleResolver]
    })
  ],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './packages/shared')
    }
  },
  
  build: {
    rollupOptions: {
      input: {
        front: path.resolve(__dirname, 'packages/front/index.html'),
        admin: path.resolve(__dirname, 'packages/admin/admin.html')
      },
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  }
})