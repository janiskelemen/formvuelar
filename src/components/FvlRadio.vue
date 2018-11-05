<template>
    <div class="fvl-radio-wrapper" :class="hasError">
        <span v-html="label" class="fvl-radio-group-label"></span>
        <div v-for="(option, key) in options" :key="key" class="fvl-radio-group">
            <input
                type="radio"
                :name="name"
                :id="key"
                :value="key"
                @change="$emit('update:option', $event.target.value)"
                class="fvl-radio"
                :class="fieldClass"
            >
            <label
                class="fvl-radio-label"
                :class="labelClass"
                :for="key"
                v-html="option"
            />
        </div>
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
        name: {
            type: String,
            required: true
        },
        label: {
            type: String
        },
        options: {
            type: Object,
            required: true,
            default: () => {}
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

