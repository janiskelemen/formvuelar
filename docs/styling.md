<h2>Styling</h2>
<p>
The styling is totally up to you. All components have their own classes so you have full control over the look and feel of every component.
</p>
<p>
Every component is wrapped with a div and the corresponding class .fvl-{type}-wrapper.
Labels have a class name of .fvl-{type}-label.
The field itself has a class name of .fvl-{type}
</p>
<h3>Example classes of the text input component (using Tailwind)</h3>

```css
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
