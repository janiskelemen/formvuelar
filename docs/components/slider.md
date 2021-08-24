# Input Component

### Template

```vue
<fvl-slider v-model:value="form.amount" name="amount" label="Amount" />
```

### Import Name

```js
import { FvlSlider } from 'formvuelar'
```

### Properties

| Property       | Description                           | Type    | Default | Required |
| -------------- | ------------------------------------- | ------- | ------- | -------- |
| value.sync     | Slider value                          | String  |         | **true** |
| name           | Slider name                           | String  |         | **true** |
| id             | Id                                    | String  | null    |          |
| label          | Label                                 | String  | null    |          |
| field-class    | Additional class for the Slider field | String  | null    |          |
| min            | Min value                             | Number  | null    |          |
| max            | Max value                             | Number  | null    |          |
| value-position | Position of the value (left or right) | String  | 'left'  |          |
| required       | Required                              | Boolean | false   |          |
| readonly       | Readonly                              | Boolean | false   |          |
| disabled       | Disabled                              | Boolean | false   |          |
