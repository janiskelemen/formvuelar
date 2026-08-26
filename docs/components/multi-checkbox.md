# Multi Checkbox Component

### Template

```vue
<fvl-multi-checkbox
  label="Set your permissions"
  name="permissions"
  v-model="form.permissions"
  v-model:groups="permissionsStructure"
/>
```

### Checkbox Structure Example

```javascript
data() {
      return {
        form: {
          permissions: []
        },
        permissionsStructure: [
          {
            name: 'all',
            label: 'User permissions',
            checked: false,
            options: [
              {
                name: 'create',
                label: 'Create',
                checked: false
              },
              {
                name: 'update',
                label: 'Update',
                checked: false
              },
              {
                name: 'delete',
                label: 'Delete',
                checked: false
              }
            ]
          }
        ]
    }
}
```

### Import Name

```js
import { FvlMultiCheckbox } from 'formvuelar'
```

### Properties

| Property     | Description    | Type    | Default | Required |
| ------------ | -------------- | ------- | ------- | -------- |
| v-model      | Checked values | Array   | `[]`    | **true** |
| v-model:groups | Groups array | Array   | `[]`    | **true** |
| name         | Input name     | String  |         | **true** |
| id           | Id             | String  | null    |          |
| label        | Label          | String  | null    |          |
| required     | Required       | Boolean | false   |          |
| readonly     | Readonly       | Boolean | false   |          |
| disabled     | Disabled       | Boolean | false   |          |
