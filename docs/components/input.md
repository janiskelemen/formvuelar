# Input Component

### Template

```vue
<fvl-input :value.sync="form.lastname" name="lastname" label="Last name" />
```

### Import Name

```js
import { FvlInput } from 'formvuelar'
```

### Properties

| Property     | Description                          | Type    | Default | Required |
| ------------ | ------------------------------------ | ------- | ------- | -------- |
| value.sync   | Input value                          | String  |         | **true** |
| name         | Input name                           | String  |         | **true** |
| id           | Id                                   | String  | null    |          |
| label        | Label                                | String  | null    |          |
| type         | HTML Type                            | String  | 'text'  |          |
| placeholder  | Placeholder                          | String  | null    |          |
| autocomplete | Autocomplete                         | String  | null    |          |
| field-class  | Additional class for the input field | String  | null    |          |
| min          | Min value                            | Number  | null    |          |
| max          | Max value                            | Number  | null    |          |
| size         | Input Character length               | Number  | null    |          |
| step         | Stepper value                        | Number  | null    |          |
| required     | Required                             | Boolean | false   |          |
| readonly     | Readonly                             | Boolean | false   |          |
| disabled     | Disabled                             | Boolean | false   |          |
| pattern      | Custom regex valdation pattern       | String  | null    |          |
