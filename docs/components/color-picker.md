# Input Component

### Template

```vue
<fvl-color-picker :value.sync="form.color" name="color" label="Color" />
```

### Import Name

```js
import { FvlColorPicker } from 'formvuelar'
```

### Properties

| Property    | Description                                | Type    | Default | Required |
| ----------- | ------------------------------------------ | ------- | ------- | -------- |
| value.sync  | ColorPicker value                          | String  |         | **true** |
| name        | ColorPicker name                           | String  |         | **true** |
| id          | Id                                         | String  | null    |          |
| label       | Label                                      | String  | null    |          |
| field-class | Additional class for the ColorPicker field | String  | null    |          |
| format      | Color format (hex, hex8, hsl, hsv, rgba)   | String  | 'hex'   |          |
| required    | Required                                   | Boolean | false   |          |
| disabled    | Disabled                                   | Boolean | false   |          |
