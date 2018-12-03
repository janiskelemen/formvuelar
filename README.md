<p align="center">
    <img src="https://janiskelemen.github.io/formvuelar/example/Formvuelar.svg" alt="Formvuelar" />
</p>
<h3 align="center">Vue form components with server side validation in mind</h3>

<p>
FormVuelar is a set of predefined vue form components which are designed to automatically display errors coming back from your backend. It works out of the box with the error message bag that is returned by Laravel when submitting an ajax form.
</p>

<h2>Examples</h2>
<a href="https://janiskelemen.github.io/formvuelar/" target="_blank">Give it a try!</a>

<h2>Getting Started</h2>

```bash
npm install formvuelar --save
```

<h2>Available Components</h2>

<p>
The following components are shipped with FormVuelar:
</p>

| Name               | Description           | Import Name                                |
| ------------------ | --------------------- | ------------------------------------------ |
| `<fvl-form />`     | Form wrapper element  | `import { FvlForm } from 'formvuelar'`     |
| `<fvl-input />`    | Input field           | `import { FvlInput } from 'formvuelar'`    |
| `<fvl-textarea />` | Text area field       | `import { FvlTextarea } from 'formvuelar'` |
| `<fvl-Radio />`    | Radio input field     | `import { FvlRadio } from 'formvuelar'`    |
| `<fvl-checkbox />` | Check box input field | `import { FvlCheckbox } from 'formvuelar'` |
| `<fvl-select />`   | Select input field    | `import { FvlSelect } from 'formvuelar'`   |
| `<fvl-file />`     | File input field      | `import { FvlFile } from 'formvuelar'`     |
| `<fvl-submit />`   | Submit button         | `import { FvlSubmit } from 'formvuelar'`   |

<h2>Basic Form Template</h2>
<p>
Create a form and sent it via post request to your server.
</p>

```html
<!-- form wrapper -->
<fvl-form method="post" :data="form" url="/create">

    <!-- Text input component -->
    <fvl-input
    :value.sync="form.fullname"
    label="Full Name"
    name="fullname"
    />

    <!-- Textarea component -->
    <fvl-textarea
    :value.sync="form.bio"
    label="Bio"
    name="bio"
    />

    <!-- Radio component with options -->
    <fvl-radio
    :checked.sync="form.pet"
    :options="{'cat': 'Cat', 'dog': 'Dog'}"
    label="Favorite pet"
    name="pet"
    />

    <!-- Submit button -->
    <fvl-submit>Validate</fvl-submit>

</fvl-form>
```

<p>
The form object you pass into the form component above would look like this:
</p>

```javascript
import { FvlForm, FvlInput, FvlTextarea, FvlRadio, FvlSubmit } from 'formvuelar'
...
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
        ...
```

<h2>Error Response</h2>

<p>
The response from your Backend should contain a Json error object and have a status of 422 in order to show the error messages below the input fields. This response format is default for Laravel and will work out of the box.
</p>

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

<h2>Client side validation</h2>
<p>
You can still use the default HTML5 validation rules for all input fields like 'accept' and 'required' for file inputs:
</p>

```html
    <fvl-file
        label="Avatar"
        name="avatar"
        :file.sync="form.file.avatar"
        accept="image/*"
        required
    />
```

<h2>Styling</h2>
<p>
The styling is totally up to you. All components have their own classes so you have full control over the look feel of every component.
</p>
<p>
Every component is wrapped with a div and the corresponding class .fvl-{type}-wrapper.
Labels have a class name of .fvl-{type}-label.
The field itself has a class name of .fvl-{type}
</p>
<h3>Example classes of the text input component (using Tailwind)</h3>

```CSS
.fvl-input-wrapper {
    @apply p-2;
}
.fvl-input-label {
    @apply block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2;
}
.fvl-input {
    @apply appearance-none block w-full bg-grey-lighter text-grey-darkest border border-grey-lighter rounded py-3 px-4 leading-tight;
}
```

<p>
I'm using <a href="https://tailwind.com">Tailwind CSS</a> for the demo.
Feel free to use the predefined css component classes for your own projects.
</p>
