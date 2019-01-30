# Form Component

### Markup

```vue
<fvl-form url="/myendpoint" :data="form" method="PATCH">
    <!-- ... -->
</fvl-form>
```

### Import Name

```js
import { FvlForm } from 'formvuelar'
```

### Properties

| Property  | Description                                     | Type    | Default | Required |
| --------- | ----------------------------------------------- | ------- | ------- | -------- |
| url       | The url the form will be sent to                | String  |         | **true** |
| data      | The form object holding the data to transmit    | Object  | {}      |          |
| method    | `get`\|`post`\|`put`\|`patch`\|`delete`         | String  | POST    |          |
| multipart | Set to true if you want to upload files         | Boolean | false   |          |
| headers   | Optional headers will be added to axios request | Object  | {}      |          |

### Events

| Property         | Description                                    | Return Value                |
| ---------------- | ---------------------------------------------- | --------------------------- |
| @success         | Request was successfully                       | Axios response object       |
| @error           | Request status did not return 200              | Axios response error object |
| @upload-progress | Returns the current upload progress in percent | `0-100`                     |
