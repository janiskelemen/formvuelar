const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building FormVuelar for Vue 2 and Vue 3...');

// Create directories if they don't exist
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Build for Vue 2
console.log('\nRunning Vue 2 build...');
try {
  execSync('node build.vue2.js', { stdio: 'inherit' });
} catch (error) {
  console.error('Vue 2 build process failed:', error);
  process.exit(1);
}

// Build for Vue 3
console.log('\nRunning Vue 3 build...');
try {
  execSync('node build.vue3.js', { stdio: 'inherit' });
} catch (error) {
  console.error('Vue 3 build process failed:', error);
  process.exit(1);
}

// Create a root index.js in dist that handles Vue version detection
console.log('\nCreating version detection helpers...');

// CommonJS version
const cjsIndexContent = `
try {
  const vue = require('vue');
  const version = vue.version || vue.default.version;

  // Auto detect Vue version and import the appropriate build
  if (version && version.startsWith('2.')) {
    module.exports = require('./vue2/formvuelar.umd.js');
  } else {
    module.exports = require('./vue3/formvuelar.umd.js');
  }
} catch (e) {
  // Default to Vue 2 if detection fails
  module.exports = require('./vue2/formvuelar.umd.js');
}
`;

// ES module version
const esIndexContent = `
import * as Vue from 'vue';

const version = Vue.version || (Vue.default && Vue.default.version);

// Auto detect Vue version and import the appropriate build
let FormVuelar;

if (version && version.startsWith('2.')) {
  FormVuelar = await import('./vue2/formvuelar.es.js');
} else {
  FormVuelar = await import('./vue3/formvuelar.es.js');
}

export default FormVuelar.default;
export * from './vue2/formvuelar.es.js';
`;

try {
  fs.writeFileSync(path.join(__dirname, 'dist', 'index.js'), cjsIndexContent);
  fs.writeFileSync(path.join(__dirname, 'dist', 'index.mjs'), esIndexContent);
  console.log('Version detection helpers created successfully.');
} catch (error) {
  console.error('Failed to create version detection helpers:', error);
}

console.log('\nFormVuelar build process completed!');