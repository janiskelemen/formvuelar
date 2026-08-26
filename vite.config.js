import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  publicDir: command === 'build' ? false : 'public',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/formvuelar.js', import.meta.url)),
      name: 'FormVuelar',
      cssFileName: 'formvuelar',
      formats: ['es', 'umd'],
      fileName: (format) => (format === 'es' ? 'formvuelar.js' : 'formvuelar.umd.cjs'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'formvuelar.css'
          return assetInfo.name
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
}))
