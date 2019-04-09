# Tag Select Component

### Templates

#### Tag select

```vue
<fvl-tag-select
  :selected.sync="form.tags"
  :options="tagsOptions"
  :search-keys="['name']"
  :allow-new="true"
  option-key="name"
  option-value="name"
  name="tags"
  label="Choose any tags"
  placeholder="Select..."
/>
```

### Import Name

```js
import { FvlTagSelect } from 'formvuelar'
```

### Properties

| Property              | Description                                            | Type                        | Default | Required |
| --------------------- | ------------------------------------------------------ | --------------------------- | ------- | -------- |
| selected.sync         | Selected value                                         | `String \| Number \| Array` |         | **true** |
| options               | Key value object `{'key': 'value', ...}`               | Object                      |         |          |
| name                  | Input name                                             | String                      |         | **true** |
| allow-new             | Allow to add new tags                                  | Boolean                     | false   |          |
| options-url           | Optional url to load option data from                  | String                      | null    |          |
| options-response-path | Path to options in json response ie. `data.users`      | String                      | null    |          |
| option-key            | Key name ie. `id`                                      | String                      | null    |          |
| options-value         | Value key name ie. `name`                              | String                      | null    |          |
| search-keys           | Keys to search in ie. `['name', 'title']`              | Array                       | []      |          |
| search-remote         | If the search should be done on the server             | Boolean                     | false   |          |
| lazy-load             | Request options only when the select input is in focus | Boolean                     | false   |          |
| id                    | Id                                                     | String                      | null    |          |
| label                 | Label                                                  | String                      | null    |          |
| placeholder           | Placeholder                                            | String                      | null    |          |
| autocomplete          | Autocomplete                                           | String                      | null    |          |
| required              | Required                                               | Boolean                     | false   |          |
| readonly              | Readonly                                               | Boolean                     | false   |          |
| disabled              | Disabled                                               | Boolean                     | false   |          |
