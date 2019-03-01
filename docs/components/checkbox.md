# Checkbox Component

### Template

```vue
<fvl-checkbox label="I agree with your terms of use" name="agree" :checked.sync="form.agree" />
```

### Import Name

```js
import { FvlCheckbox } from 'formvuelar'
```

### Properties

| Property     | Description   | Type    | Default | Required |
| ------------ | ------------- | ------- | ------- | -------- |
| checked.sync | Checked value | String  |         | **true** |
| name         | Input name    | String  |         | **true** |
| id           | Id            | String  | null    |          |
| label        | Label         | String  | null    |          |
| required     | Required      | Boolean | false   |          |
| readonly     | Readonly      | Boolean | false   |          |
| disabled     | Disabled      | Boolean | false   |          |
