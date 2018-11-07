<template>
    <div class="fvl-select-wrapper" :class="{'fvl-has-error' : this.$parent.errors[this.name]}">
        <label v-if="label" class="fvl-select-label" :class="labelClass" :for="name" v-html="label"/>
        <div class="relative">
            <select 
                :name="name"
                :id="name"
                @change="$emit('update:selected', $event.target.value); $parent.dirty(name);"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :class="fieldClass"
                class="fvl-select" 
            >
                <option v-if="allowEmpty" disabled selected value v-text="placeholder"/>
                <option v-for="(option, key) in options" :key="key" :value="key" v-text="option"/>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
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
        allowEmpty: {
            type: Boolean,
            default: true
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
    }
};
</script>

