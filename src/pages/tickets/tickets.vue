<template>
    <div id="tickets-page-container">
        <nav-bar></nav-bar>
<!--todo put the container tabs inside each component-->
        <div id="nav-tabs-container">
                <b-container>
                    <b-row>
                        <b-col cols="12">
                            <b-nav class="align-items-center">
                                <b-nav-item>
                                    <b-dropdown variant="link" no-caret>
                                        <template slot="button-content">My assignment<v-icon name="angle-down" class="ml-lg-2"></v-icon></template>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                    </b-dropdown>
                                </b-nav-item>
                                <b-nav-item>Unassigned</b-nav-item>
                                <b-nav-item>
                                    <b-dropdown variant="link" no-caret>
                                        <template slot="button-content">All tickets<v-icon name="angle-down" class="ml-lg-2"></v-icon></template>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                    </b-dropdown>
                                </b-nav-item>
                                <b-nav-item>
                                    <b-dropdown variant="link" no-caret>
                                        <template slot="button-content">My tickets<v-icon name="angle-down" class="ml-lg-2"></v-icon></template>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                        <b-dropdown-item>First Action</b-dropdown-item>
                                    </b-dropdown>
                                </b-nav-item>
                            </b-nav>
                        </b-col>
                    </b-row>
                </b-container>
        </div>

        <div id="content-container" class="mt-lg-5">
            <b-container>
                <b-row>
                    <b-col lg="3">
                        <div id="sidebar-container">
                            <side-bar v-on:add-tag="globalFilterValues = $event"></side-bar>
                        </div>
                    </b-col>
                    <b-col lg="9">
                        <div id="ticket-list-container">
                            <ticket-list :array-of-values="globalFilterValues"></ticket-list>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <br>
        <br>
        <br>
        <br>
        <footer-section class="mt-lg-5"></footer-section>

    </div>

</template>

<script>
    import sideBar from '../../components/sideBar/sideBar'
    import ticketList from './ticket-list/ticket-list'
    export default {
        components: {sideBar,ticketList},
        name: "tickets",
        data(){
            return{
                globalFilterValues: []
            }
        }
    }
</script>

<style module>
    body{
        background-color: #F3F5F7;
    }
</style>