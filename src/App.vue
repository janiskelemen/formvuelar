<template>
  <div id="app">
    <h1 class="text-center">FormVuelar</h1>
    <fvl-form :errors="errors">
      <fvl-input
        label="Name"
        name="name"
        type="text"
        :value.sync="name"
        placeholder="Type your name"
        :error="errors.name"
      />
      <fvl-input
        label="Password"
        name="password"
        type="passowrd"
        :value.sync="password"
        placeholder="Type password"
        field-class="w-1/2"
        :error="errors.password"
      />
    </fvl-form>
  </div>
</template>

<script>
import FvlForm from './components/FvlForm.vue';
import FvlInput from './components/FvlInput.vue';

export default {
    name: 'app',
    components: {
        FvlForm,
        FvlInput
    },
    data() {
        return {
            name: '',
            password: '',
            errors: {
                name: 'Please enter your Name!',
                password: 'Your Password cannot be blank!'
            }
        };
    },
    methods: {
        blur(event) {
            alert(event);
        }
    }
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 600px;
    margin: 60px auto;
}
</style>
