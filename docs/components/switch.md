# Switch Component

### Template

```vue
<fvl-switch v-model="form.feature" label="Enable that Feature" name="feature" />
```

### Import Name

```js
import { FvlSwitch } from 'formvuelar'
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
