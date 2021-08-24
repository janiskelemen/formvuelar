import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import BasicForm from './examples/BasicForm.vue'
import PrefilledForm from './examples/PrefilledForm'
import AdvancedSelectsForm from './examples/AdvancedSelects'
import DateTimePickersForm from './examples/DateTimePickers'
import UploadForm from './examples/FileUpload.vue'
import MultiUploadForm from './examples/MultiFileUpload.vue'
import DropzoneForm from './examples/Dropzone.vue'
import NestedCheckboxForm from './examples/NestedCheckbox'
import TagForm from './examples/TagForm'

import App from './App.vue'
import '@/assets/scss/tailwind.scss'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: BasicForm,
    },
    {
      path: '/prefilled',
      component: PrefilledForm,
      props: {
        initFullname: 'John Doe',
        initBio: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        initPet: 'dog',
      },
    },
    {
      path: '/advancedselects',
      component: AdvancedSelectsForm,
    },
    {
      path: '/tags',
      component: TagForm,
    },
    {
      path: '/nestedcheckbox',
      component: NestedCheckboxForm,
    },
    {
      path: '/upload',
      component: UploadForm,
    },
    {
      path: '/multiupload',
      component: MultiUploadForm,
    },
    {
      path: '/dropzone',
      component: DropzoneForm,
    },
    {
      path: '/datepicker',
      component: DateTimePickersForm,
    },
  ],
})

const app = createApp({
  ...App,
})

app.use(router)

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
app.use(VueHighlightJS)

/* Load Axios Mock Adapter with mocked entpoints for demo */
require('./axiosMockEndpoints.js')

app.mount('#app')
