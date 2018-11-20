<template>
    <div :class="{'fvl-has-error' : this.$parent.hasErrors(name)}" class="fvl-select-wrapper">
        <label v-if="label" :class="labelClass" :for="name" class="fvl-select-label" v-html="label"/>
        <div class="relative">
            <select
                :name="name"
                :id="name"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :class="fieldClass"
                :required="required"
                class="fvl-select"
                @change="$emit('update:selected', $event.target.value); $parent.dirty(name);"
            >
                <option v-if="allowEmpty" disabled selected value="" v-text="placeholder"/>
                <option
                    v-for="(option, key) in options"
                    :key="key"
                    :value="key"
                    :selected="selected == key"
                    v-text="option"
                />
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
            </div>
        </div>
        <slot name="hint"/>
        <slot :errors="this.$parent.getErrors(name)" name="errors">
            <validation-errors :errors="this.$parent.getErrors(name)"/>
        </slot>
    </div>
</template>

<script>
    import ValidationErrors from './FvlErrors.vue'
    export default {
        components: {
            ValidationErrors
        },
        props: {
            selected: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
                default: ''
            },
            options: {
                type: Object,
                required: true,
                default: () => {}
            },
            allowEmpty: {
                type: Boolean,
                default: true
            },
            placeholder: {
                type: String,
                required: false,
                default: ''
            },
            autocomplete: {
                type: String,
                required: false,
                default: ''
            },
            fieldClass: {
                type: String,
                required: false,
                default: ''
            },
            labelClass: {
                type: String,
                required: false,
                default: ''
            },
            required: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>

