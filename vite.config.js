import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue' // only for vue 3
import { createVuePlugin as vue } from "vite-plugin-vue2";

const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/formvuelar.js'),
      name: 'FormVuelar',
      fileName: (format) => `formvuelar.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
            if (assetInfo.name == 'style.css')
              return 'formvuelar.css';
            return assetInfo.name;
          },
      }
    }
  }
});