<template>
    <div class="fvl-checkbox-wrapper" :class="{'fvl-has-error' : this.$parent.errors[this.name]}">
        <input
            type="checkbox"
            :name="name"
            :id="name"
            @input="$emit('update:checked', $event.target.checked); $parent.dirty(name);"
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

