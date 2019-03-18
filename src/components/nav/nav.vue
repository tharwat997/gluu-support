<template>
    <div id="nav-container">
        <b-container fluid>
            <b-navbar toggleable="lg"  variant="faded" type="light">
                <b-navbar-brand href="#"><b-img :src="logoSvgUrl" /></b-navbar-brand>

                <b-navbar-toggle target="nav_collapse" />

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav>
                        <b-nav-item href="#" class="nav-item-gluu">Dashboard</b-nav-item>
                        <b-nav-item href="#" class="nav-item-gluu">Tickets</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item>
                            <b-button class="btn">+Add new ticket</b-button>
                        </b-nav-item>

                        <b-nav-item>
                            <div class="d-flex flex-column text-md-center">
                                <div>
                                    <b-img  id="questions-sync" :src="infoUrl" rounded="circle" />
                                </div>

                                <div>
                                    <b-popover v-on:show="$root.$emit('bv::hide::popover')" placement="bottomleft"  :show.sync="show" target="questions-sync"  id="support-nav-dropdown">
                                        <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="supportSvgUrl" /> Support Call</div></b-dropdown-item>
                                        <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="notificationSvgUrl" />Consultation</div></b-dropdown-item>
                                    </b-popover>
                                </div>
                            </div>
                        </b-nav-item>

                        <b-nav-item>
                                <div class="d-flex flex-column text-md-center">
                                    <div>
                                        <b-img id="avatar-sync" :src="avatarUrl" rounded="circle" />
                                    </div>

                                    <div>
                                        <b-popover v-on:show="$root.$emit('bv::hide::popover')" placement="bottomleft"  :show.sync="show" target="avatar-sync">
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="dashboardSvgUrl" /> Dashboard</div></b-dropdown-item>
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="notificationSvgUrl" /> Alerts</div></b-dropdown-item>
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="userSvgUrl" /> My Profile</div></b-dropdown-item>
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="usersSvgUrl" /> Team</div></b-dropdown-item>
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="creditCardSvgUrl" /> Billing</div></b-dropdown-item>
                                            <b-dropdown-item class="mb-lg-2"> <div class="d-flex align-items-center"><b-img class="mr-lg-4" :src="userAdminSvgUrl" /> Admin </div></b-dropdown-item>
                                        </b-popover>
                                    </div>
                                </div>
                        </b-nav-item>

                        <b-nav-item>
                            <b-img :src="gridUrl" rounded="circle"></b-img>
                        </b-nav-item>

                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>
        </b-container>
    </div>
</template>

<script>
    export default {
        props: {
        },
        computed: {
            avatarUrl () {
                return require('../../assets/images/avatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            infoUrl () {
                return require('../../assets/images/info.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            gridUrl () {
                return require('../../assets/images/grid.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            logoSvgUrl() {
                return require('../../assets/images/logo.png')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            dashboardSvgUrl() {
                return require('../../assets/images/dashboard.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            notificationSvgUrl() {
                return require('../../assets/images/notification.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            userSvgUrl() {
                return require('../../assets/images/user-dropdown.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            usersSvgUrl() {
                return require('../../assets/images/users.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            creditCardSvgUrl() {
                return require('../../assets/images/credit-card.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            userAdminSvgUrl() {
                return require('../../assets/images/user-admin-dropdown.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            supportSvgUrl() {
                return require('../../assets/images/support.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    };
</script>
<style>
</style>
