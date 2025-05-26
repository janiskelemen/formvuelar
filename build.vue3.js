const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building FormVuelar for Vue 3...');

// Create directories if they don't exist
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Create dist/vue3 directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist', 'vue3'))) {
  fs.mkdirSync(path.join(__dirname, 'dist', 'vue3'));
}

// Build for Vue 3
console.log('\nInstalling Vue 3 dependencies...');
try {
  execSync('npm install vue@3 @vitejs/plugin-vue@2 --no-save --legacy-peer-deps', { stdio: 'inherit' });
  console.log('Vue 3 dependencies installed successfully.');
} catch (error) {
  console.error('Failed to install Vue 3 dependencies:', error);
  process.exit(1);
}

console.log('\nBuilding Vue 3 version...');
try {
  execSync('vite build -c vite.config.vue3.js', { stdio: 'inherit' });
  console.log('Vue 3 build completed successfully.');
} catch (error) {
  console.error('Vue 3 build failed:', error);
  process.exit(1);
}

console.log('\nVue 3 build process completed!');