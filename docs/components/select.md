# Select Component

### Template

```vue
<fvl-select
  label="Select your favorite color"
  name="color"
  placeholder="-- Select any color --"
  :allowEmpty="true"
  :options="{ '#ffffff': 'White', '#000000': 'Black', blue: 'Blue', red: 'Red' }"
  v-model:selected="form.color"
/>
```

### Import Name

```js
import { FvlSelect } from 'formvuelar'
```

### Properties

| Property      | Description                              | Type                        | Default | Required |
| ------------- | ---------------------------------------- | --------------------------- | ------- | -------- |
| selected.sync | Selected value                           | `String \| Number \| Array` |         | **true** |
| options       | Key value object `{'key': 'value', ...}` | Object                      |         | **true** |
| name          | Input name                               | String                      |         | **true** |
| allow-empty   | Allow selection to be empty              | Boolean                     | false   |          |
| id            | Id                                       | String                      | null    |          |
| label         | Label                                    | String                      | null    |          |
| placeholder   | Placeholder                              | String                      | null    |          |
| autocomplete  | Autocomplete                             | String                      | null    |          |
| required      | Required                                 | Boolean                     | false   |          |
| readonly      | Readonly                                 | Boolean                     | false   |          |
| disabled      | Disabled                                 | Boolean                     | false   |          |
