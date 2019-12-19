<!-- Advanced Selects example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Date Picker (
      <a
        class="text-blue-500"
        href="https://flatpickr.js.org/"
        target="_blank"
        rel="nofollow"
      >Flatpickr</a>)
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/datepicker/DatePicker.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form" url="/datepicker" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showDatePickerSource = !showDatePickerSource" />
      <!-- Search Select input component -->
      <fvl-date-picker
        :value.sync="form.date"
        name="datepicker"
        label="Single Date Picker"
        placeholder="Select a date"
        min="2019-12-12"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showDatePickerSource" :source="datePickerSource" />

      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showRangePickerSource = !showRangePickerSource" />
      <!-- Search Select input component -->
      <fvl-date-picker
        :value.sync="form.daterange"
        name="daterangepicker"
        label="Date Rage Picker"
        placeholder="Select a date range"
        :config="{mode: 'range'}"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showRangePickerSource" :source="rangePickerSource" />

      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showPickerExtendedSource = !showPickerExtendedSource" />
      <!-- Search Select input component -->
      <fvl-date-picker-extended
        :start.sync="form.range.start"
        :end.sync="form.range.end"
        name="daterangepicker"
        label="Extended Date Rage Picker"
        placeholder="Select a date range"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showPickerExtendedSource" :source="pickerExtendedSource" />

      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showTimePickerSource = !showTimePickerSource" />
      <fvl-date-picker
        :value.sync="form.time"
        name="timepicker"
        label="Time picker"
        placeholder="00:00"
        :config="{mode: 'time'}"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showTimePickerSource" :source="timePickerSource" />

      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showDateTimePickerSource = !showDateTimePickerSource" />
      <fvl-date-picker
        :value.sync="form.datetime"
        name="Datetimepicker"
        label="Date & Time picker"
        placeholder="YYYY-MM-DD 00:00"
        :config="{enableTime: true}"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showDateTimePickerSource" :source="dateTimePickerSource" />
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlDatePicker, FvlDatePickerExtended } from './../../formvuelar'

  import SourceToggle from './../utilities/SourceToggle.vue'
  import SourceBox from './../utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlDatePicker,
      FvlDatePickerExtended,
      SourceToggle,
      SourceBox
    },
    data() {
      return {
        form: {
          date: null,
          daterange: null,
          range: {
            start: '',
            end: ''
          },
          time: null,
          datetime: null
        },
        showDatePickerSource: false,
        datePickerSource:
          `<fvl-date-picker \n` +
          `   :value.sync="form.date" \n` +
          `   name="startdate"\n` +
          `   label="Select a date"\n` +
          `   placeholder="Select a date"\n` +
          `/>\n`,
        showRangePickerSource: false,
        rangePickerSource:
          `<fvl-date-picker \n` +
          `   :start.sync="form.start_date" \n` +
          `   :end.sync="form.end_date" \n` +
          `   name="daterange"\n` +
          `   label="Date Range Picker"\n` +
          `   placeholder="Select a range"\n` +
          `   :config="{mode: 'range'}" \n` +
          `/>\n`,
        showPickerExtendedSource: false,
        pickerExtendedSource:
          `<fvl-date-picker-extended \n` +
          `   :start.sync="form.start_date" \n` +
          `   :end.sync="form.end_date" \n` +
          `   name="daterange"\n` +
          `   label="Date Range Picker"\n` +
          `   placeholder="Select a range"\n` +
          `/>\n`,

        showTimePickerSource: false,
        timePickerSource:
          `<fvl-date-picker \n` +
          `   :value.sync="form.time" \n` +
          `   name="daterange"\n` +
          `   label="Time Picker"\n` +
          `   placeholder="00:00"\n` +
          `   :config="{mode: 'time'}" \n` +
          `/>\n`,

        showDateTimePickerSource: false,
        dateTimePickerSource:
          `<fvl-date-picker \n` +
          `   :value.sync="form.datetime" \n` +
          `   name="datetime"\n` +
          `   label="Date & Time Picker"\n` +
          `   placeholder="YYYY-MM-DD 00:00"\n` +
          `   :config="{enableTime: true}" \n` +
          `/>\n`
      }
    }
  }
</script>
