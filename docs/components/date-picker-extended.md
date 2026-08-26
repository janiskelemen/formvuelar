# Extended Date Picker Component

The Extended Date Picker provides predefined date range options alongside a calendar interface for easier date range selection.

### Template

```vue
<fvl-date-picker-extended v-model="form.daterange" name="daterange" label="Select Date Range" />
```

### Import Name

```js
import { FvlDatePickerExtended } from 'formvuelar'
```

### Properties

| Property    | Description                                 | Type           | Default                      | Required |
| ----------- | ------------------------------------------- | -------------- | ---------------------------- | -------- |
| v-model     | Date picker value                           | String/Object  |                              | **true** |
| name        | Date picker name                            | String         |                              | **true** |
| id          | Id                                          | String         | null                         |          |
| label       | Label                                       | String         | null                         |          |
| placeholder | Placeholder text                            | String         | null                         |          |
| field-class | Additional class for the date field         | String         | null                         |          |
| label-class | Additional class for the label              | String         | null                         |          |
| config      | Flatpickr configuration object              | Object         | {dateFormat: 'Y-m-d', mode: 'range', inline: true} |          |
| start       | Start date                                  | String         | null                         |          |
| end         | End date                                    | String         | null                         |          |
| presets     | Custom preset date ranges                   | Array          | []                           |          |
| width       | Width of the dropdown calendar              | String         | null                         |          |
| required    | Required                                    | Boolean        | false                        |          |
| readonly    | Readonly                                    | Boolean        | false                        |          |
| disabled    | Disabled                                    | Boolean        | false                        |          |

### Using with Start and End Props

```vue
<fvl-date-picker-extended 
  v-model:start="form.startDate"
  v-model:end="form.endDate"
  name="daterange"
  label="Select Date Range"
/>
```

### Customizing Preset Date Ranges

By default, the component includes these preset date ranges:
- Last 30 Days
- Last 60 Days
- Last 90 Days
- Last 365 Days

You can customize these presets by providing your own array of preset objects:

```vue
<fvl-date-picker-extended 
  v-model="form.daterange"
  name="daterange"
  label="Select Date Range"
  :presets="customPresets"
/>
```

In your component:

```js
data() {
  return {
    customPresets: [
      { name: 'Today', start: this.formatDate(new Date()), end: this.formatDate(new Date()) },
      { name: 'Last 7 Days', start: this.getDateBefore(7), end: this.formatDate(new Date()) },
      { name: 'This Month', start: this.getFirstDayOfMonth(), end: this.getLastDayOfMonth() },
      { name: 'Last Month', start: this.getFirstDayOfLastMonth(), end: this.getLastDayOfLastMonth() }
    ]
  }
},
methods: {
  formatDate(date) {
    // Format date as YYYY-MM-DD
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  },
  getDateBefore(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return this.formatDate(date);
  },
  getFirstDayOfMonth() {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth(), 1));
  },
  getLastDayOfMonth() {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  },
  getFirstDayOfLastMonth() {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  },
  getLastDayOfLastMonth() {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth(), 0));
  }
}
```

Each preset object requires:
- `name`: The label shown for the preset
- `start`: The start date in YYYY-MM-DD format
- `end`: The end date in YYYY-MM-DD format
