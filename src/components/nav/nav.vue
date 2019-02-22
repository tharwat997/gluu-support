<template>
    <div>
        <b-navbar toggleable="lg"  variant="faded" type="light">
            <b-navbar-brand href="#">gluu</b-navbar-brand>

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
                        <b-img :src="infoUrl" rounded="circle"></b-img>
                    </b-nav-item>

                    <b-nav-item>
                        <b-img :src="avatarUrl" rounded="circle"></b-img>
                    </b-nav-item>

                    <b-nav-item>
                        <b-img :src="gridUrl" rounded="circle"></b-img>
                    </b-nav-item>

                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
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
            }
        }
    };
</script>
<style>
</style>
