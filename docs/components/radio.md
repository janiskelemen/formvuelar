# Radio Component

### Markup

```vue
<fvl-radio
  label="Select any option"
  name="option"
  :options="{ opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3' }"
  :checked.sync="form.option"
/>
```

### Import Name

```js
import { FvlRadio } from 'formvuelar'
```

### Properties

| Property     | Description                            | Type    | Default | Required |
| ------------ | -------------------------------------- | ------- | ------- | -------- |
| checked.sync | Checked value                          | String  |         | **true** |
| options      | Options object `{'key': 'value', ...}` | Object  |         | **true** |
| name         | Input name                             | String  |         | **true** |
| id           | Id                                     | String  | null    |          |
| label        | Label                                  | String  | null    |          |
| required     | Required                               | Boolean | false   |          |
| readonly     | Readonly                               | Boolean | false   |          |
| disabled     | Disabled                               | Boolean | false   |          |
