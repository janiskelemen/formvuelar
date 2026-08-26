<p align="center">
    <img src="https://janiskelemen.github.io/formvuelar/example/Formvuelar.svg" alt="Formvuelar" />
</p>
<h3 align="center">Vue form components with server side validation in mind</h3>

<p align="center">
    <a href="https://janiskelemen.github.io/formvuelar/example" target="_blank">
        <img src="https://janiskelemen.github.io/formvuelar/example/formvuelar_basic_form.png" alt="Formvuelar basic form" />
    </a>
</p>

<h2>About</h2>

[![](https://img.shields.io/npm/v/formvuelar.svg?label=version)](https://www.npmjs.com/package/formvuelar)
[![](https://img.shields.io/npm/dm/formvuelar.svg)](https://npmcharts.com/compare/formvuelar?minimal=true)
[![](https://badgen.net/bundlephobia/minzip/formvuelar?label=Size&color=38A89D)](https://bundlephobia.com/result?p=formvuelar)
![](https://img.shields.io/github/forks/janiskelemen/formvuelar.svg)
![](https://img.shields.io/github/license/janiskelemen/formvuelar.svg)

<p>
FormVuelar is a set of Vue 3 form components designed to automatically display errors coming back from your backend. It works out of the box with the error message bag Laravel returns when submitting an AJAX form.
</p>

<h2>Examples</h2>
<a href="https://janiskelemen.github.io/formvuelar/example" target="_blank">Give it a try!</a>

## Documentation

[Full Documentation](https://formvuelar.netlify.com)

<h2>Features</h2>

- Works out of the box with Laravel
- Axios integration
- Select with search and remote source option
- Nested Checkboxes
- File upload support including progress indication
- Image upload with image preview
- Dropzone with image preview (inspired by FilePond)
- Display validation error messages from error response
- Supports Tree Shaking (adds only used components to your js bundle)

<h2>Getting Started</h2>

```bash
npm install formvuelar --save
```

FormVuelar 2 targets Vue 3. Vue 2 projects should stay on the maintained 1.x release:

```bash
npm install formvuelar@1.8.15 --save
```

Import components and the bundled styles:

```js
import { FvlForm, FvlInput, FvlSubmit } from 'formvuelar'
import 'formvuelar/style.css'
```

All primary control values use Vue 3's default `v-model`:

```vue
<fvl-form :data="form" url="/users">
  <fvl-input v-model="form.name" name="name" label="Name" />
  <fvl-submit>Save</fvl-submit>
</fvl-form>
```

See the [Vue 3 migration guide](docs/vue-3-migration.md) for the complete binding map.

## Credits

- [Janis Kelemen](https://twitter.com/janiskelemen)
- [Helpspace.com](https://helpspace.com)


<a href="https://helpspace.com/#formvuelar" target="_blank" title="HelpSpace">
  <img src="https://cdn.helpspace.com/brand/2021/og_card.png" width="400px" alt="HelpSpace.com">
</a>

<h2>License</h2>
<p>Released under the MIT License.</p>
