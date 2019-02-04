# Dropzone Component

!> You need to add the **multipart** property to the fvl-form component in order to send files to your server!  
`<fvl-form multipart :data="form" url="/upload">`

### Template

```vue
<fvl-dropzone label="Media" name="media" :files.sync="form.media" />
```

### Import Name

```js
import { FvlDropzone } from 'formvuelar'
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
