<template>
    <div class="fvl-checkbox-wrapper" :class="hasError">
        <input
            type="checkbox"
            :name="name"
            :id="name"
            @input="$emit('update:checked', $event.target.checked)"
            class="fvl-checkbox"
            :class="{'checked': checked, fieldClass}"
        >
        <label
            v-if="label"
            class="fvl-checkbox-label"
            :class="labelClass"
            :for="name"
            v-html="label"
        />
        <slot name="hint"/>
        <slot name="errors">
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
        checked: {
            type: Boolean,
            default: false
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

