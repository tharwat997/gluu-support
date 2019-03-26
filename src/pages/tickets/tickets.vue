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

                                    <div class="d-flex flex-column text-md-center">
                                        <div id="myAssignment-sync" >
                                            My assignment <v-icon name="angle-down" class="ml-lg-2"></v-icon>
                                        </div>

                                        <div>
                                            <b-popover v-on:show="$root.$emit('bv::hide::popover')" placement="bottomleft"  :show.sync="show" target="myAssignment-sync">
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                            </b-popover>
                                        </div>
                                    </div>

                                </b-nav-item>

                                <b-nav-item><a href="#" >Unassigned</a></b-nav-item>

                                <b-nav-item>
                                    <div class="d-flex flex-column text-md-center">
                                        <div id="allTickets-sync" >
                                            All tickets <v-icon name="angle-down" class="ml-lg-2"></v-icon>
                                        </div>

                                        <div>
                                            <b-popover v-on:show="$root.$emit('bv::hide::popover')" placement="bottomleft"  :show.sync="show" target="allTickets-sync">
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                            </b-popover>
                                        </div>
                                    </div>
                                </b-nav-item>

                                <b-nav-item>
                                    <div class="d-flex flex-column text-md-center">
                                        <div id="myTickets-sync" >
                                            My tickets <v-icon name="angle-down" class="ml-lg-2"></v-icon>
                                        </div>

                                        <div>
                                            <b-popover v-on:show="$root.$emit('bv::hide::popover')" placement="bottomleft"  :show.sync="show" target="myTickets-sync">
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                                <b-dropdown-item>First Action</b-dropdown-item>
                                            </b-popover>
                                        </div>
                                    </div>
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

</style>