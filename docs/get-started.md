## Install via NPM

```bash
npm install formvuelar --save
```

## Styling

I'm using <a href="https://tailwindcss.com">Tailwind CSS</a> for the examples.
Feel free to use the predefined css component classes for your own projects.
You can import them like this:

```css
@import '~formvuelar/dist/formvuelar.css';
```

## Available Components

The following components are shipped with FormVuelar:

| Name                     | Description                 | Import Name                                     |
| ------------------------ | --------------------------- | ----------------------------------------------- |
| `<fvl-form />`           | Form wrapper element        | `import { FvlForm } from 'formvuelar'`          |
| `<fvl-input />`          | Input field                 | `import { FvlInput } from 'formvuelar'`         |
| `<fvl-textarea />`       | Text area field             | `import { FvlTextarea } from 'formvuelar'`      |
| `<fvl-radio />`          | Radio input field           | `import { FvlRadio } from 'formvuelar'`         |
| `<fvl-checkbox />`       | Checkbox input field        | `import { FvlCheckbox } from 'formvuelar'`      |
| `<fvl-multi-checkbox />` | Nested checkbox input field | `import { FvlMultiCheckbox } from 'formvuelar'` |
| `<fvl-select />`         | Select input field          | `import { FvlSelect } from 'formvuelar'`        |
| `<fvl-search-select />`  | Select with search          | `import { FvlSearchSelect } from 'formvuelar'`  |
| `<fvl-file />`           | File input field            | `import { FvlFile } from 'formvuelar'`          |
| `<fvl-slider />`         | Slider input field          | `import { FvlSlider } from 'formvuelar'`        |
| `<fvl-multi-file />`     | Multi file input field      | `import { FvlMultiFile } from 'formvuelar'`     |
| `<fvl-dropzone />`       | Dropzone field              | `import { FvlDropzone } from 'formvuelar'`      |
| `<fvl-submit />`         | Submit button               | `import { FvlSubmit } from 'formvuelar'`        |

## Basic Form Template

Create a form and sent it via post request to your server.

```html
<!-- form wrapper -->
<fvl-form method="post" :data="form" url="/create">
  <!-- Text input component -->
  <fvl-input :value.sync="form.fullname" label="Full Name" name="fullname" />

  <!-- Textarea component -->
  <fvl-textarea :value.sync="form.bio" label="Bio" name="bio" />

  <!-- Radio component with options -->
  <fvl-radio :checked.sync="form.pet" :options="{'cat': 'Cat', 'dog': 'Dog'}" label="Favorite pet" name="pet" />

  <!-- Submit button -->
  <fvl-submit>Validate</fvl-submit>
</fvl-form>
```

The form object you pass into the form component above would look like this:

```javascript
import { FvlForm, FvlInput, FvlTextarea, FvlRadio, FvlSubmit } from 'formvuelar'
//...
    components: {
        FvlForm,
        FvlInput,
        FvlTextarea,
        FvlRadio,
        FvlSubmit,
    },
    data() {
        return {
            form: {
                fullname: '',
                bio: '',
                pet: ''
            },
        //...
```

## Error Response

The response from your Backend should contain a Json error object and have a status of 422 in order to show the error messages below the input fields. This response format is default for Laravel and will work out of the box.

```javascript
{
  "message": "The given data was invalid.",
  "errors": {
    "field-1": [
      "Error 1",
      "Error 2"
    ],
    "field-2": [
      "Error 1",
      "Error 2"
    ]
  }
}
```

## Client side validation

You can still use the default HTML5 validation rules for all input fields like 'accept' and 'required' for file inputs:

```html
<fvl-file label="Avatar" name="avatar" :file.sync="form.avatar" accept="image/*" required />
```
