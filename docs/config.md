## Global Config

You can change defaults globally before mounting your Vue 3 application:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$formvuelar = {
  noResultsText: 'No results found!',
  pleaseWaitText: 'Please wait...',
  addFileText: 'Add File',
  addFilesText: 'Add Files',
  filesSelectedText: 'Files Selected',
  dropFilesHereText: 'Drop files here or click to upload.',
  filesSelectedAndSizeText: 'files selected with a combined size of',
  headers: '{}',
  interceptors: {
    request: {
      before: function(config) {
        // Do something before request is sent
        return config
      },
      error: function(error) {
        // Do something with request error
        return Promise.reject(error)
      }
    },
    response: {
      success: function(response) {
        // Do something with response data
        return response
      },
      error: function(error) {
        // Do something with response error
        return Promise.reject(error)
      }
    }
  }
}

app.mount('#app')
```
