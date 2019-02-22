<template>
    <div>
        <b-container fluid>
            <Nav></Nav>

        </b-container>

        <b-container>
            <b-row>
                <b-col class="4">
                    <SideBar></SideBar>
                </b-col>
                <b-col class="8">
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <Footer></Footer>
        </b-container>
    </div>

</template>

<script>
    export default {
        name: "tickets"
    }
</script>

<style scoped>

</style>