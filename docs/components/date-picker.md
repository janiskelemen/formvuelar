# Date Picker Component

### Template

```vue
<fvl-date-picker v-model="form.date" name="date" label="Select Date" />
```

### Import Name

```js
import { FvlDatePicker } from 'formvuelar'
```

### Properties

| Property    | Description                              | Type           | Default        | Required |
| ----------- | ---------------------------------------- | -------------- | -------------- | -------- |
| v-model     | Date picker value                        | String/Object  |                | **true** |
| name        | Date picker name                         | String         |                | **true** |
| id          | Id                                       | String         | null           |          |
| label       | Label                                    | String         | null           |          |
| placeholder | Placeholder text                         | String         | null           |          |
| field-class | Additional class for the date field      | String         | null           |          |
| label-class | Additional class for the label           | String         | null           |          |
| config      | Flatpickr configuration object           | Object         | {dateFormat: 'Y-m-d'} |          |
| start       | Start date (when used with range mode)   | String         | null           |          |
| end         | End date (when used with range mode)     | String         | null           |          |
| required    | Required                                 | Boolean        | false          |          |
| readonly    | Readonly                                 | Boolean        | false          |          |
| disabled    | Disabled                                 | Boolean        | false          |          |

### Range Mode Example

```vue
<fvl-date-picker 
  v-model:start="form.startDate"
  v-model:end="form.endDate"
  name="daterange"
  label="Select Date Range"
  :config="{ mode: 'range' }"
/>
```

### Flatpickr Configuration

The component uses [flatpickr](https://flatpickr.js.org/) for date selection. You can pass any valid flatpickr configuration options through the `config` prop:

```vue
<fvl-date-picker 
  v-model="form.date"
  name="date"
  label="Select Date"
  :config="{
    dateFormat: 'Y-m-d',
    minDate: 'today',
    allowInput: true
  }"
/>
```

Common flatpickr options:
- `dateFormat`: String - Determines how the date will be formatted (default: 'Y-m-d')
- `mode`: String - 'single', 'multiple', or 'range'
- `enableTime`: Boolean - Enables time picker
- `noCalendar`: Boolean - Hides the calendar and only displays time
- `minDate`: String/Date - Minimum selectable date
- `maxDate`: String/Date - Maximum selectable date
- `inline`: Boolean - Always open and embedded
