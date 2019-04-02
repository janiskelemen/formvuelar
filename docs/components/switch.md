# Switch Component

### Template

```vue
<fvl-switch label="Enable that Feature" name="feature" :checked.sync="form.feature" />
```

### Import Name

```js
import { FvlSwitch } from 'formvuelar'
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
