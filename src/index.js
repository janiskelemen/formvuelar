import { version } from 'vue'

// Auto detect Vue version and import the appropriate build
let FormVuelar

if (version.startsWith('2.')) {
  FormVuelar = require('./vue2')
} else {
  FormVuelar = require('./vue3')
}

export default FormVuelar