<template>
    <div class="code-block-container-gluu">
        {

            <div class="code-block-gluu">
                <slot></slot>
            </div>
        }
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>

<style lang="sass">
    @import "code-block"
</style>