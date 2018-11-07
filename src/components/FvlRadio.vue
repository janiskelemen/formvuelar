<template>
    <div class="fvl-radio-wrapper" :class="{'fvl-has-error' : this.$parent.errors[this.name]}">
        <span v-html="label" class="fvl-radio-group-label"></span>
        <div v-for="(option, key) in options" :key="key" class="fvl-radio-group">
            <input
                type="radio"
                :name="name"
                :id="key"
                :value="key"
                @change="$emit('update:checked', $event.target.value); $parent.dirty(name);"
                class="fvl-radio"
                :checked="checked == key"
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
        <slot name="errors" :errors="this.$parent.errors[this.name]">
            <validation-errors :errors="this.$parent.errors[this.name]"/>
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
        checked: {
            type: String
        },
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
    }
};
</script>

