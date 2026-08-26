# Migrating to FormVuelar 2

FormVuelar 2 is the Vue 3-native major release. It requires Vue `^3.2.25` and does not include Vue 2 compatibility aliases. Vue 2 applications should pin `formvuelar@1.8.15`.

## Value bindings

All primary values now use Vue 3's default `v-model`, backed by the `modelValue` prop and `update:modelValue` event.

| Component | FormVuelar 1.x | FormVuelar 2 |
| --- | --- | --- |
| Input, Textarea, Slider, Color Picker | `:value.sync="value"` | `v-model="value"` |
| Date Picker, Extended Date Picker | `:value.sync="value"` | `v-model="value"` |
| Select, Search Select, Tag Select | `:selected.sync="value"` | `v-model="value"` |
| Checkbox, Radio, Switch, Text Switch | `:checked.sync="value"` | `v-model="value"` |
| File, Image | `:file.sync="value"` | `v-model="value"` |
| Multi File, Dropzone | `:files.sync="value"` | `v-model="value"` |
| Multi Checkbox checked values | `:checked.sync="value"` | `v-model="value"` |

Date ranges and Multi Checkbox groups use named models:

```vue
<fvl-date-picker
  v-model="form.range"
  v-model:start="form.start"
  v-model:end="form.end"
  name="range"
  :config="{ mode: 'range' }"
/>

<fvl-multi-checkbox
  v-model="form.permissions"
  v-model:groups="permissionGroups"
  name="permissions"
/>
```

The Multi Checkbox value remains an array of one-key objects, such as `[{ create: true }, { update: false }]`.

## Application setup

Create the application with Vue 3's `createApp`, register any global configuration through `app.config.globalProperties`, and import the stylesheet from the package export:

```js
import { createApp } from 'vue'
import App from './App.vue'
import 'formvuelar/style.css'

const app = createApp(App)
app.config.globalProperties.$formvuelar = {
  noResultsText: 'No results found!',
}
app.mount('#app')
```

Named component exports, CSS class names, slot names, and non-model events remain available. Form controls can also be rendered outside `<fvl-form>`; validation and loading integration becomes a no-op until a form context is present.
