# Dropzone Component

!> You need to add the **multipart** property to the fvl-form component in order to send files to your server!  
`<fvl-form multipart :data="form" url="/upload">`

### Template

```vue
<fvl-dropzone v-model="form.media" label="Media" name="media" />
```

### Import Name

```js
import { FvlDropzone } from 'formvuelar'
```

### Properties

| Property   | Description           | Type    | Default | Required |
| ---------- | --------------------- | ------- | ------- | -------- |
| v-model    | Array of File objects | Array   | `[]`    | **true** |
| name       | Input name            | String  |         | **true** |
| id         | Id                    | String  | null    |          |
| label      | Label                 | String  | null    |          |
| required   | Required              | Boolean | false   |          |
| readonly   | Readonly              | Boolean | false   |          |
| disabled   | Disabled              | Boolean | false   |          |
