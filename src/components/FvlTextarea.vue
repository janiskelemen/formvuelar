<template>
    <div class="fvl-textarea-wrapper" :class="{'fvl-has-error' : this.$parent.errors[this.name]}">
        <label v-if="label" class="fvl-textarea-label" :class="labelClass" :for="name" v-html="label"/>
        <textarea
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            @change="$parent.dirty(name)"
            :name="name"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            class="fvl-textarea"
            :class="fieldClass"
            :required="required"
        />
        <slot name="hint"/>
        <slot name="errors" :errors="this.$parent.errors[this.name]">
            <validation-errors :errors="this.$parent.errors[this.name]"/>
        </slot>
    </div>
</template>8

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
        },
        required: {
            type: Boolean,
            required: false
        }
    }
};
</script>

