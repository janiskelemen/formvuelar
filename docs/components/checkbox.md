# Checkbox Component

### Template

```vue
<fvl-checkbox v-model="form.agree" label="I agree with your terms of use" name="agree" />
```

### Import Name

```js
import { FvlCheckbox } from 'formvuelar'
```

### Properties

| Property     | Description   | Type    | Default | Required |
| ------------ | ------------- | ------- | ------- | -------- |
| v-model      | Checked value | Boolean |         | **true** |
| name         | Input name    | String  |         | **true** |
| id           | Id            | String  | null    |          |
| label        | Label         | String  | null    |          |
| required     | Required      | Boolean | false   |          |
| readonly     | Readonly      | Boolean | false   |          |
| disabled     | Disabled      | Boolean | false   |          |
