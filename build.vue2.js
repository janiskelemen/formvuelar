const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building FormVuelar for Vue 2...');

// Create directories if they don't exist
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Create dist/vue2 directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist', 'vue2'))) {
  fs.mkdirSync(path.join(__dirname, 'dist', 'vue2'));
}

// Build for Vue 2
console.log('\nInstalling Vue 2 dependencies...');
try {
  execSync('npm install vue@2 vue-template-compiler@2 --no-save --legacy-peer-deps', { stdio: 'inherit' });
  console.log('Vue 2 dependencies installed successfully.');
} catch (error) {
  console.error('Failed to install Vue 2 dependencies:', error);
  process.exit(1);
}

console.log('\nBuilding Vue 2 version...');
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('Vue 2 build completed successfully.');
} catch (error) {
  console.error('Vue 2 build failed:', error);
  process.exit(1);
}

console.log('\nVue 2 build process completed!');