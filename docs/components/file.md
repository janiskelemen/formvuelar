# File Input Component

### Template

```vue
<fvl-file v-model="form.avatar" label="Avatar" name="avatar" />
```

### Import Name

```js
import { FvlFile } from 'formvuelar'
```

### Properties

| Property  | Description | Type    | Default | Required |
| --------- | ----------- | ------- | ------- | -------- |
| v-model   | File object | Object  | null    | **true** |
| name      | Input name  | String  |         | **true** |
| id        | Id          | String  | null    |          |
| label     | Label       | String  | null    |          |
| required  | Required    | Boolean | false   |          |
| readonly  | Readonly    | Boolean | false   |          |
| disabled  | Disabled    | Boolean | false   |          |
