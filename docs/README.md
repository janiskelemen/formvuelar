## About

[![](https://img.shields.io/npm/v/formvuelar.svg?label=version)](https://www.npmjs.com/package/formvuelar)
[![](https://img.shields.io/npm/dm/formvuelar.svg)](https://npmcharts.com/compare/formvuelar?minimal=true)
[![](https://badgen.net/bundlephobia/minzip/formvuelar?label=Size&color=38A89D)](https://bundlephobia.com/result?p=formvuelar)
![](https://img.shields.io/github/forks/janiskelemen/formvuelar.svg)
![](https://img.shields.io/github/license/janiskelemen/formvuelar.svg)
[![Build Status](https://travis-ci.com/janiskelemen/formvuelar.svg?branch=master)](https://travis-ci.com/janiskelemen/formvuelar)

<p>
FormVuelar is a set of predefined vue form components which are designed to automatically display errors coming back from your backend. It works out of the box with the error message bag that is returned by Laravel when submitting an ajax form.
</p>

<h2>Examples</h2>
<a href="https://janiskelemen.github.io/formvuelar/" target="_blank">Give it a try!</a>

<h2>Features</h2>

- Works out of the box with Laravel
- Axios integration
- Select with search
- File upload support including process indicator
- Dropzone with image preview (inspired by FilePond)
- Display validation error messages from error response

<h2>Components Props & Events</h2>

| Name                   | Prop/Event             | Type                  | Default | Possible values                         | Notes |
| ---------------------- | ---------------------- | --------------------- | ------- | --------------------------------------- | ----- |
| **fvl-form**           | :method                | String                | 'post'  | `get`\|`post`\|`put`\|`patch`\|`delete` |       |
|                        | :data                  | Object                | {}      | {}                                      |
|                        | :url                   | String                | null    |                                         |
|                        | :multipart             | Boolean               | false   | `true`\|`false`                         |
|                        | :headers               | Object                | {}      | `{'your-header': 'your header value'}`  |
|                        | @success               | Function              |         | axios response                          |
|                        | @error                 | Function              |         | axios error response                    |
|                        | @upload-progress       | Function              |         | 0-100                                   |
|                        |                        |                       |         |                                         |
| **fvl-input**          | :value.sync            | Data                  | ''      | `form.name`                             |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :type                  | String                | 'text'  |                                         |
|                        | :placeholder           | String                | null    |                                         |
|                        | :autocomplete          | String                | null    |                                         |
|                        | :field-class           | String                | null    |                                         |
|                        | :min                   | Number                | null    |                                         |
|                        | :max                   | Number                | null    |                                         |
|                        | :size                  | Number                | null    |                                         |
|                        | :step                  | Number                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        | :pattern               | String                | null    | regex                                   |
|                        |                        |                       |         |                                         |
| **fvl-textarea**       | :value.sync            | Data                  | ''      | `form.about`                            |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :placeholder           | String                | null    |                                         |
|                        | :autocomplete          | String                | null    |                                         |
|                        | :field-class           | String                | null    |                                         |
|                        | :cols                  | Number                | null    |                                         |
|                        | :maxlength             | Number                | null    |                                         |
|                        | :rows                  | Number                | null    |                                         |
|                        | :wrap                  | Boolean               | null    | `hard`\|`soft`                          |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        | :pattern               | String                | null    | regex                                   |
|                        |                        |                       |         |                                         |
| **fvl-select**         | :selected.sync         | Data                  | null    | `form.favoriteColor`                    |
|                        | :options               | Object                | {}      | `{'key': 'value', ...}`                 |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :allow-empty           | Boolean               | false   | `true`\|`false`                         |
|                        | :placeholder           | String                | null    |                                         |
|                        | :autocomplete          | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-search-select**  | :selected.sync         | Data                  | null    | `form.user`                             |
|                        | :options               | Object                | {}      | `{'key': 'value', ...}`                 |
|                        | :options-url           | String                | null    | `https://api.yourdomain.com/users`      |
|                        | :options-response-path | String                | null    | `data.users`                            |
|                        | :option-key            | String                | null    | `id`                                    |
|                        | :options-value         | String                | null    | `name`                                  |
|                        | :search-keys           | Array                 | []      | `['name']`                              |
|                        | :search-remote         | Boolean               | false   | `true`\|`false`                         |
|                        | :lazy-load             | Boolean               | false   | `true`\|`false`                         |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :placeholder           | String                | null    |                                         |
|                        | :autocomplete          | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-radio**          | :checked.sync          | Data                  | null    | `form.newsletter`                       |
|                        | :options               | Object                | {}      | `{'key': 'value', ...}`                 |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
| **fvl-checkbox**       | :checked.sync          | Data                  | null    | `form.terms`                            |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-multi-checkbox** | :checked.sync          | Object                | {}      | `form.permissions`                      |
|                        | :groups.sync           | Object                | {}      |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-file**           | :file                  | Data                  | null    | `form.avatar`                           |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-multi-file**     | :files                 | Data                  | null    | `form.gallery`                          |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-dropzone**       | :files.sync            | Array of File Objects | null    | `form.media`                            |
|                        | :id                    | String                | null    |                                         |
|                        | :name                  | String                | ''      |                                         |
|                        | :label                 | String                | null    |                                         |
|                        | :required              | Boolean               | false   | `true`\|`false`                         |
|                        | :readonly              | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        |                        |                       |         |                                         |
| **fvl-submit**         | :loader                | Boolean               | false   | `true`\|`false`                         |
|                        | :disabled              | Boolean               | false   | `true`\|`false`                         |
|                        | :button-class          | String                | null    |                                         |
