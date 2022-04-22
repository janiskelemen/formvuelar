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
    outDir: path.resolve(__dirname, 'example/'),
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'FormVuelar',
      fileName: (format) => `examples.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      output: {
        dir: path.resolve(__dirname, 'example/js/'),
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
            if (assetInfo.name == 'style.css')
              return 'examples.css';
            return assetInfo.name;
          },
      }
    }
  }
});