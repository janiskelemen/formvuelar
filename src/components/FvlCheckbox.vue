<template>
    <div :class="{'fvl-has-error' : this.$parent.hasErrors(name)}" class="fvl-checkbox-wrapper">
        <input
            :name="name"
            :id="name"
            :class="{'checked': checked, fieldClass}"
            :required="required"
            type="checkbox"
            class="fvl-checkbox"
            @input="$emit('update:checked', $event.target.checked); $parent.dirty(name);"
        >
        <label v-if="label" :class="labelClass" :for="name" class="fvl-checkbox-label" v-html="label"/>
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
            label: {
                type: String,
                required: false,
                default: ''
            },
            name: {
                type: String,
                required: true
            },
            checked: {
                type: Boolean,
                default: false
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
        },
        data() {
            return {}
        }
    }
</script>

