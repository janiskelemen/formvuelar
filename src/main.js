import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use( VueHighlightJS )

/* Load Axios Mock Adapter with mocked entpoints for demo */
require( './axiosMockEndpoints.js' )

new Vue( {
    render: h => h( App )
} ).$mount( '#app' )