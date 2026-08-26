import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'
import App from './App.vue'
import AdvancedSelectsForm from './examples/AdvancedSelects.vue'
import BasicForm from './examples/BasicForm.vue'
import DateTimePickersForm from './examples/DateTimePickers.vue'
import DropzoneForm from './examples/Dropzone.vue'
import MultiUploadForm from './examples/MultiFileUpload.vue'
import NestedCheckboxForm from './examples/NestedCheckbox.vue'
import PrefilledForm from './examples/PrefilledForm.vue'
import TagForm from './examples/TagForm.vue'
import UploadForm from './examples/FileUpload.vue'
import '@/assets/scss/tailwind.scss'
import './axiosMockEndpoints.js'

hljs.registerLanguage('html', xml)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: BasicForm },
    {
      path: '/prefilled',
      component: PrefilledForm,
      props: {
        initFullname: 'John Doe',
        initBio: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        initPet: 'dog',
      },
    },
    { path: '/advancedselects', component: AdvancedSelectsForm },
    { path: '/tags', component: TagForm },
    { path: '/nestedcheckbox', component: NestedCheckboxForm },
    { path: '/upload', component: UploadForm },
    { path: '/multiupload', component: MultiUploadForm },
    { path: '/dropzone', component: DropzoneForm },
    { path: '/datepicker', component: DateTimePickersForm },
  ],
})

const highlight = (element, binding) => {
  const code = element.querySelector('code')
  if (!code) return
  code.textContent = binding.value
  code.removeAttribute('data-highlighted')
  hljs.highlightElement(code)
}

createApp(App)
  .use(router)
  .directive('highlightjs', {
    mounted: highlight,
    updated: highlight,
  })
  .mount('#app')
