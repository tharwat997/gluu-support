<template>
    <b-form-checkbox :id="id">
        <slot></slot>
    </b-form-checkbox>
</template>

<script>
    export default {
        name:'checkbox',
        props: {
            id:String,
        }
    };
</script>
<style lang="scss">
    @import "checkbox";
</style>
