import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: false,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL('./src/main.js', import.meta.url)),
      name: 'FormVuelarExamples',
      cssFileName: 'examples',
      formats: ['es', 'umd'],
      fileName: (format) => `examples.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: fileURLToPath(new URL('./example/js', import.meta.url)),
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
