<template>
    <div class="fvl-input-wrapper" :class="hasError">
        <label v-if="label" class="fvl-input-label" :class="labelClass" :for="name" v-html="label"/>
        <input
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            class="fvl-input-text"
            :class="fieldClass"
        >
        <transition name="slide-down" appear>
            <div v-if="error" class="fvl-input-error-message" v-html="error"></div>
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        hasError() {
            return this.error ? 'fvl-has-error' : '';
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
        },
        error: {
            type: String,
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

