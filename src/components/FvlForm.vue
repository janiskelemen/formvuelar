<template>
  <form @submit.prevent="getErrors()">
    <slot></slot>
  </form>
</template>

<script>
export default {
    data() {
        return {
            errors: {}
        }
    },

    methods: {
        getErrors() {
            var errors = {};
            if (this.$parent.form.name === '') {
                errors.name = ['Please enter your Name!'];
            }
            if (this.$parent.form.password === '') {
                errors.password = ['Your Password cannot be blank!'];
            }
            if (this.$parent.form.agree === false) {
                errors.agree = ['Your need to accept our terms!'];
            }
            if (this.$parent.form.option === '') {
                errors.option = ['Your need to select one option!'];
            }
            if (this.$parent.form.color === '') {
                errors.color = ['Your need to select a color!'];
            }
            this.errors = errors;
        },
        dirty(name){
            this.errors[name] = false;
        }
    }
};
</script>

