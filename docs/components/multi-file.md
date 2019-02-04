# Multi File Input Component

!> You need to add the **multipart** property to the fvl-form component in order to send files to your server!  
`<fvl-form multipart :data="form" url="/upload">`

### Template

```vue
<fvl-multi-file :files.sync="form.gallery" label="Gallery" name="gallery" />
```

### Import Name

```js
import { FvlMultiFile } from 'formvuelar'
```

### Properties

| Property   | Description           | Type    | Default | Required |
| ---------- | --------------------- | ------- | ------- | -------- |
| files.sync | Array of File Objects | Array   |         | **true** |
| name       | Input name            | String  |         | **true** |
| id         | Id                    | String  | null    |          |
| label      | Label                 | String  | null    |          |
| required   | Required              | Boolean | false   |          |
| readonly   | Readonly              | Boolean | false   |          |
| disabled   | Disabled              | Boolean | false   |          |
