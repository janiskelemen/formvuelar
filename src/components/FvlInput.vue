<template>
    <div :class="{'fvl-has-error' : this.$parent.hasErrors(name)}" class="fvl-input-wrapper">
        <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label" v-html="label"/>
        <input
            :value="value"
            :name="name"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :class="fieldClass"
            :required="required"
            class="fvl-input"
            @change="$parent.dirty(name)"
            @input="$emit('update:value', $event.target.value)"
        >
        <slot name="hint"/>
        <slot :errors="this.$parent.getErrors(name)" name="errors">
            <validation-errors :errors="this.$parent.getErrors(name)"/>
        </slot>
    </div>
</template>8

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
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
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

