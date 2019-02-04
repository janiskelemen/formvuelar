## Global Config

You might want to change some defaults globally for all your forms, to do this you just can overwrite them as a global property before registering your main vue instance:

```javascript
/* Register optional global FormVuelar config */
Vue.prototype.$formvuelar = {
  noResultsText: 'No results found!',
  pleaseWaitText: 'Please wait...',
  addFileText: 'Add File',
  addFilesText: 'Add Files',
  filesSelectedText: 'Files Selected',
  dropFilesHereText: 'Drop files here or click to upload.',
  filesSelectedAndSizeText: 'files selected with a combined size of',
  headers: '{}'
}
```
