<template>
    <div class="profile-side-bar">
        <b-card class="card-gluu">

            <div class="d-flex flex-column justify-content-center align-items-center information-container mt-lg-4">
                <div class="mb-lg-3">
                   <div class="d-flex align-items-end justify-content-end">
                       <b-img :src="avatarUrl" class="avatar-image" />
                       <div class="edit-icon-container">
                           <b-img class="edit-icon" :src="editIconUrl" />
                       </div>
                   </div>
                </div>
                <div class="d-flex align-items-center flex-column">
                    <div>Nasir uddin <b-img :src="verifiedUrl" class="mr-lg-1" /></div>
                    <div>Gluu Inc</div>
                    <div>nasir@gluu.org</div>
                </div>
            </div>

            <hr>

            <div class="stats-container">
             <b-container>
                 <b-row>
                     <b-col cols="6">
                         <div class="d-flex flex-column justify-content-center align-items-center w-100">
                             <div class="mb-lg-1">12</div>
                             <div>Opened tickets</div>
                         </div>
                     </b-col>
                     <b-col cols="6">
                         <div class="d-flex flex-column justify-content-center align-items-center w-100">
                             <div class="mb-lg-1">170</div>
                             <div>Upvotes</div>
                         </div>
                     </b-col>
                 </b-row>
             </b-container>
            </div>

            <hr>

            <div>
                <b-tabs  vertical id="tabs-container" class="mb-lg-3">
                    <b-tab title="Notifications" class="Tab notifications" active @click="emitFunction('Notification')"></b-tab>
                    <b-tab title="Profile" class="Tab profile" @click="emitFunction('Profile')"></b-tab>
                    <b-tab title="Team" class="Tab team" @click="emitFunction('Team')"></b-tab>
                    <b-tab title="Partners" class="Tab partners" @click="emitFunction('Partners')"></b-tab>
                    <b-tab title="Billing" class="Tab billing" @click="emitFunction('Billing')"></b-tab>
                    <b-tab title="Account" class="Tab account" @click="emitFunction('Account')"></b-tab>
                    <b-tab title="Security" class="Tab security" @click="emitFunction('Security')"></b-tab>
                    <b-tab title="Admin" class="Tab admin" @click="emitFunction('Admin')"></b-tab>
                </b-tabs>
            </div>

        </b-card>
    </div>
</template>

<script>
    export default {
        name:"profile-side-bar",
        props: {
        },
        methods:{
            emitFunction(activeItem){
                this.$emit('clicked', activeItem);
            }
        },
        computed: {
            verifiedUrl () {
                return require('../../../assets/images/verified.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            avatarUrl () {
                return require('../../../assets/images/avatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            editIconUrl () {
                return require('../../../assets/images/editAvatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    };
</script>
<style lang="scss">
    @import "profile-side-bar";
</style>
