# Multi Checkbox Component

### Markup

```vue
<fvl-multi-checkbox
  label="Set your permissions"
  name="permissions"
  :checked.sync="form.permissions"
  :groups.sync="permissionsStructure"
/>
```

### Permission Structure Example

```javascript
data() {
      return {
        form: {
          permissions: {}
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
| checked.sync | Checked values | Array   |         | **true** |
| groups.sync  | Groups object  | Object  |         | **true** |
| name         | Input name     | String  |         | **true** |
| id           | Id             | String  | null    |          |
| label        | Label          | String  | null    |          |
| required     | Required       | Boolean | false   |          |
| readonly     | Readonly       | Boolean | false   |          |
| disabled     | Disabled       | Boolean | false   |          |
