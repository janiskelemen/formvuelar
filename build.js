const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building FormVuelar for Vue 2 and Vue 3...');

// Build for Vue 2
console.log('\nBuilding Vue 2 version...');
try {
  execSync('npm run build:vue2', { stdio: 'inherit' });
  console.log('Vue 2 build completed successfully.');
} catch (error) {
  console.error('Vue 2 build failed:', error);
  process.exit(1);
}

// Build for Vue 3
console.log('\nBuilding Vue 3 version...');
try {
  execSync('npm run build:vue3', { stdio: 'inherit' });
  console.log('Vue 3 build completed successfully.');
} catch (error) {
  console.error('Vue 3 build failed:', error);
  process.exit(1);
}

// Create a root index.js in dist that handles Vue version detection
console.log('\nCreating version detection helper...');
const indexContent = `
const { version } = require('vue');

// Auto detect Vue version and import the appropriate build
let FormVuelar;

if (version.startsWith('2.')) {
  FormVuelar = require('./vue2/formvuelar.umd.js');
} else {
  FormVuelar = require('./vue3/formvuelar.umd.js');
}

module.exports = FormVuelar;
`;

try {
  fs.writeFileSync(path.join(__dirname, 'dist', 'index.js'), indexContent);
  console.log('Version detection helper created successfully.');
} catch (error) {
  console.error('Failed to create version detection helper:', error);
}

console.log('\nFormVuelar build process completed!');