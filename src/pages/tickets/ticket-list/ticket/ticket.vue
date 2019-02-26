<template>
    <b-row class="mt-lg-2">
        <b-col cols="12">
            <b-card class="card-gluu">

                <div class="card-left-side-gluu d-flex justify-content-center align-items-center">
                    <div class="d-flex flex-column align-items-start">
                        <b-card-img :src="avatarUrl" rounded="circle" class="img-fluid " />

                        <div class="card-left-side-info-gluu d-flex justify-content-center flex-column mt-lg-2">
                            <span class="card-left-side-info-name-gluu">William Lowe</span>
                            <span class="card-left-side-info-company-gluu">Gluu org</span>
                            <span class="card-left-side-info-type-gluu">Enterprise</span>
                        </div>
                    </div>
                </div>


                <div class="card-right-side-gluu d-flex justify-content-between">

                    <div>

                        <div class="card-right-side-badge-container">
                            <badge v-for="badge in badges" :key="badge.color" :color="badge.color" >{{badge.text}}</badge>
                        </div>

                        <div class="card-right-side-issue-title-gluu">
                            Admin account locked out
                        </div>

                        <div class="card-right-side-issue-details-gluu">
                            <span class="card-right-side-issue-details-number-gluu">#6462</span>
                            <span class="card-right-side-issue-details-date-gluu"><strong>Created</strong> : Jan 12, 2019</span>
                            <span class="card-right-side-issue-details-time-gluu"><strong>Last updated</strong>  : 12 min ago by muhib zico</span>
                        </div>
                    </div>

                    <div class="card-right-right-side-gluu d-flex flex-column justify-content-center ml-lg-2">
                        <label><b-img :src="commentSvgUrl" /> 12 responses</label>
                        <label><b-img :src="clapSvgUrl" /> 50 upvotes</label>
                        <label> <b-img :src="userSvgUrl" /> <span>Asim zaka</span> <b-img :src="arrowDownUrl" /> </label>
                    </div>

                </div>

            </b-card>
        </b-col>
    </b-row>

</template>
<script>
    import Badge from '../../../../components/includes/badge/badge'
    export default {
        components: {Badge},
        props:{
          badges: Array
        },
        computed: {
            avatarUrl() {
                return require('../../../../assets/images/avatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            commentSvgUrl() {
                return require('../../../../assets/images/comment.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            clapSvgUrl() {
                return require('../../../../assets/images/clap.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            userSvgUrl() {
                return require('../../../../assets/images/user.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            arrowDownUrl() {
                return require('../../../../assets/images/arrow_down.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    };
</script>

