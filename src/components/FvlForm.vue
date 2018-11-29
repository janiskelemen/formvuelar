<template>
    <form @submit.prevent="submit()" 
          @dragover="isDragging=true" 
          @dragend="isDragging=false"
          @dragleave="isDragging=false" 
          :class="{'fvl-form-drag-over': isDragging}"
    >
        <slot></slot>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        method: {
            type: String,
            default: 'post',
            validator: function(value) {
                // The value must match one of the axios methods
                return (
                    ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].indexOf(value.toUpperCase()) !==
                    -1
                );
            }
        },
        url: {
            type: String,
            required: true
        },
        multipart: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            errors: {},
            uploadPercentage: 0,
            isLoading: false,
            isDragging: false
        };
    },

    methods: {
        prepareData(){
            let rawData = this.data;
            let formData = new FormData();
            //formData.append('avatar', this.avatarFile, this.avatarFile.name);
            
            // Append files of each single file input
            if(typeof rawData.file !== 'undefined'){
                Object.keys(rawData.file).forEach(function (key) {
                    formData.append(key, rawData.file[key]);
                });
            }

            // Append files of each single file input
            if(typeof rawData.files !== 'undefined'){
                Object.keys(rawData.files).forEach(function (fileField) {
                    /*
                    Iteate over any file sent over appending the files
                    to the form data.
                    */
                    for( var i = 0; i < fileField.length; i++ ){
                        let file = fileField[i];
                        formData.append(fileField+'[' + i + ']', file);
                    }
                });
            }
            
            
            // Map remaining data into formData
            // Object.keys(rawData.file).map(file => {
            //     formData.append('file', file);
            //     /*
            //     Iteate over any file sent over appending the files
            //     to the form data.
            //     */
            //     // for( var i = 0; i < files.length; i++ ){
            //     // let file = files[i];

            //     // formData.append('files[' + i + ']', file);
            //     // }
            // });

            //delete rawData['files'];
            // Map remaining data into formData
            Object.keys(rawData).map(e => {
                formData.append(e, rawData[e])
            });

// for (var pair of formData.entries()) {
//     console.log(pair[0]+ ', ' + pair[1]); 
// }
            return formData;
        },

        submit() {
            let $this = this;
            this.isLoading = true;
            axios({
                method: this.method,
                url: this.url,
                data: this.multipart ? this.prepareData() : this.data,
                // only set params if request is get or delete
                params:
                    this.method == 'get' || this.method == 'delete'
                        ? this.data
                        : {},
                headers: this.multipart ? {
                    'Content-Type': 'multipart/form-data'
                } : {},

                // `onUploadProgress` allows handling of progress events for uploads
                onUploadProgress: function(progressEvent) {
                    var percentage = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                    $this.uploadPercentage = percentage;
                    $this.$emit(
                        'uploadProgress',
                        percentage
                    );
                }

            })
                .then(function(response) {
                    $this.$emit('response', response);
                })
                .catch(function(error) {
                    $this.$emit('error', error);
                })
                .then(function(){
                    $this.isLoading = false;
                    $this.uploadPercentage = 0;
                    $this.$emit('uploadProgress', 0);
                });

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
            if (this.$parent.form.text === '') {
                errors.text = ['Please type something!'];
            }
            this.errors = errors;
        },

        dirty(name) {
            this.errors[name] = false;
        },
    }
};
</script>

