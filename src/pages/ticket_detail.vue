<template>
    <div>
        <b-container fluid>
            <nav></nav>
            <!--Possible Slot-->
        </b-container>

        <b-container>
            <b-row>
                <b-col class="4">
                    <side-bar></side-bar>
                </b-col>
                <b-col class="8">
                    <slot/>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <footer></footer>
        </b-container>
    </div>

</template>
<script>
    export default {
        name: "ticket_detail"
    }
</script>

<style scoped>

</style>