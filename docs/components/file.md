# File Input Component

### Template

```vue
<fvl-file label="Avatar" name="avatar" :file.sync="form.avatar" />
```

### Import Name

```js
import { FvlFile } from 'formvuelar'
```

### Properties

| Property  | Description | Type    | Default | Required |
| --------- | ----------- | ------- | ------- | -------- |
| file.sync | File Object | Object  |         | **true** |
| name      | Input name  | String  |         | **true** |
| id        | Id          | String  | null    |          |
| label     | Label       | String  | null    |          |
| required  | Required    | Boolean | false   |          |
| readonly  | Readonly    | Boolean | false   |          |
| disabled  | Disabled    | Boolean | false   |          |
