<template>
    <span :class="color">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: {
            color: String
        },
    };
</script>
<style lang="sass">
    @import "./badge"
</style>