<template>
    <div class="datepicker">
        <rangedate-picker
                @events="events"
                i18n="EN"
        ></rangedate-picker>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
<style lang="scss">
    @import "./datepicker";
</style>
