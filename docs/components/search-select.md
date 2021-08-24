# Search Select Component

### Templates

#### Search select

```vue
<fvl-search-select
  v-model:selected="form.genre"
  :options="genreOptions"
  :search-keys="['name']"
  option-key="name"
  option-value="name"
  name="genre"
  label="Choose any genre"
  placeholder="Select..."
/>
```

#### Get Options from Remote URL

```vue
<fvl-search-select
  v-model:selected="form.user"
  :search-keys="['name']"
  :lazy-load="true"
  options-url="https://jsonplaceholder.typicode.com/users"
  option-key="id"
  option-value="name"
  name="user"
  label="Select a user"
  placeholder="Select user..."
/>
```

#### Get Options from Remote and Search via API request

```vue
<fvl-search-select
  v-model:selected="form.user"
  :search-keys="['search']"
  :search-remote="true"
  :lazy-load="true"
  options-url="https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users"
  option-key="id"
  option-value="name"
  name="user"
  label="Select a user"
  placeholder="Select user..."
/>
```

### Import Name

```js
import { FvlSearchSelect } from 'formvuelar'
```

### Properties

| Property           | Description                                                                                                            | Type                        | Default | Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| selected.sync      | Selected value                                                                                                         | `String \| Number \| Array` |         | **true** |
| options            | Key value object `{'key': 'value', ...}`                                                                               | Object                      |         |          |
| name               | Input name                                                                                                             | String                      |         | **true** |
| options-url        | Optional url to load option data from                                                                                  | String                      | null    |          |
| response-data-path | Path to options in json response ie. `data.users`                                                                      | String                      | null    |          |
| option-key         | Key name ie. `id`                                                                                                      | String                      | null    |          |
| disabled-options   | Array of disabled options. Pass an array of option keys `[1,4]` or full option objects `[{id: 1, name: 'Joe'...},...]` | Array                       | null    |          |
| options-value      | Value key name ie. `name`                                                                                              | String                      | null    |          |
| search-keys        | Keys to search in ie. `['name', 'title']`                                                                              | Array                       | []      |          |
| search-remote      | If the search should be done on the server                                                                             | Boolean                     | false   |          |
| lazy-load          | Request options only when the select input is in focus                                                                 | Boolean                     | false   |          |
| select-first       | Select the first result from remote options (only if lazy load is false)                                               | Boolean                     | false   |          |
| id                 | Id                                                                                                                     | String                      | null    |          |
| label              | Label                                                                                                                  | String                      | null    |          |
| placeholder        | Placeholder                                                                                                            | String                      | null    |          |
| autocomplete       | Autocomplete                                                                                                           | String                      | null    |          |
| required           | Required                                                                                                               | Boolean                     | false   |          |
| readonly           | Readonly                                                                                                               | Boolean                     | false   |          |
| disabled           | Disabled                                                                                                               | Boolean                     | false   |          |
