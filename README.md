<p align="center">
    <img  src="https://janiskelemen.github.io/formvuelar/example/Formvuelar.svg" alt="Formvuelar" />
</p>
<h3 align="center">Vue form components with server side validation in mind</h3>

<p>
FormVuelar is a set of predefined vue form components which are designed to automatically display errors coming back from your backend. It works out of the box with the error message bag that is returned by Laravel when submitting an ajax form.
</p>

<h2>Demo</h2>
<a href="https://janiskelemen.github.io/formvuelar/" target="_blank">Try the example!</a>

<h2>Getting Started</h2>

```bash
npm install formvuelar --save
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