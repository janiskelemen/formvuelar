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
        <transition name="slide-down" appear>
            <div v-if="errors[0]" class="fvl-checkbox-error-message" v-html="errors[0]"></div>
        </transition>
    </div>
</template>

<script>
export default {
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

