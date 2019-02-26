<template>
    <div id="sidebar-container">

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Created by</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="mr-lg-2">
                        <b-img :src="avatarUrl" />
                    </div>
                    <div>
                        Nasir uddin
                    </div>
                </div>

                <div>
                    <b-img :src="editActiveSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Assigned to</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="mr-lg-2">
                        <b-img :src="avatarUrl" />
                    </div>
                    <div>
                        Christopher D. Blanton
                    </div>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Issue type</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <badge color="purple">Pre-production</badge>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Status</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                   <badge color="green">In progress</badge>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Category</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        Installation
                    </div>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Gluu version</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        Gluu 3.1.4
                    </div>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">OS Version</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        CentOS 7
                    </div>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Additional Products</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        OXD 3.1.4
                    </div>
                </div>

                <div>
                    <b-img :src="editSvgUrl" class="edit-svg-img" />
                </div>
            </div>
        </div>

        <div class="d-flex additional-product-container mt-lg-3">
            <div>
                <b-img  :src="plusSvgUrl" />
            </div>
            <div>
                <button type="button">Add additional product</button>
            </div>
        </div>

        <div class="notification-container  mt-lg-3">
            <div class="d-flex flex-column">
                <div class="notification-container-title mb-lg-2">Notification</div>
                <b-button class="mb-lg-2 notification-container-subscribe-button">Subscribe</b-button>
                <div class="notification-container-subtitle mb-lg-3">You are receiving notification because you’re rewatching this ticket</div>
            </div>
            <div>
                <div class="title-subscribers mb-lg-2">5 subscribers</div>
                <div class="d-flex align-items-center flex-wrap">
                    <b-img :src="avatarUrl"></b-img>
                    <b-img :src="avatarUrl"></b-img>
                    <b-img :src="avatarUrl"></b-img>
                    <b-img :src="avatarUrl"></b-img>
                    <b-img :src="avatarUrl"></b-img>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Badge from "../../../components/includes/badge/badge";
    export default {
        name: "ticket_detail_sidebar",
        components: {Badge},
        computed:{
            avatarUrl() {
                return require('../../../assets/images/avatar.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            editActiveSvgUrl() {
                return require('../../../assets/images/editActive.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            editSvgUrl() {
                return require('../../../assets/images/edit.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            plusSvgUrl() {
                return require('../../../assets/images/plus.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    }
</script>

<style lang="scss">
@import "ticket-detail-sidebar";
</style>