<template>
    <div class="fvl-input-wrapper" :class="hasError">
        <label v-if="label" class="fvl-input-label" :class="labelClass" :for="name" v-html="label"/>
        <input
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            :name="name"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            class="fvl-input-text"
            :class="fieldClass"
        >
        <slot name="hint"/>
        <slot name="errors" v-bind:errors="errors">
            <validation-errors :errors="errors"/>
        </slot>
    </div>
</template>

<script>
import ValidationErrors from './FvlErrors.vue';
export default {
    components: {
        ValidationErrors
    },
    computed: {
        errors() {
            return this.$parent.errors[this.name]
                ? this.$parent.errors[this.name]
                : false;
        },
        hasError() {
            return this.$parent.errors[this.name] ? 'fvl-has-error' : '';
        }
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
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: false
        },
        autocomplete: {
            type: String,
            required: false
        },
        fieldClass: {
            type: String,
            required: false
        },
        labelClass: {
            type: String,
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

