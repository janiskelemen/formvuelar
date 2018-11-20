<p align="center">
    <img  src="https://janiskelemen.github.io/formvuelar/example/Formvuelar.svg" alt="Formvuelar" />
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

| Name               | Description          |
| ------------------ | -------------------- |
| `<fvl-form />`     | Form wrapper element |
| `<fvl-input />`    | Input field          |
| `<fvl-textarea />` | Text Area field      |
| `<fvl-Radio />`    | Radio input field    |
| `<fvl-checkbox />` | Checkbox input field |
| `<fvl-select />`   | Select input field   |
| `<fvl-file />`     | File input field     |
| `<fvl-submit />`   | Submit button        |

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
The styling is totally up to you. All components have their own classes so you have full controll over the look feel of every component.
</p>
<p>
Every component is wrapped with a div and the coresponding class .fvl-{type}-wrapper. 
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
