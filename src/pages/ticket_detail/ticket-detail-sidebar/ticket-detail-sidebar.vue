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

                <div @click="createdByIsActive = !createdByIsActive" class="edit-svg-container" :class="{ 'active-background' : createdByIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : createdByIsActive}"  d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Assigned to</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="mr-lg-2">
                        <div class="d-flex flex-column text-md-center">
                            <div id="assignedTo-sync" > <b-img :src="avatarUrl" /></div>
                            <div id="assignedTo-container">
                                <b-popover v-on:show="$root.$emit('bv::hide::popover')" container="assignedTo-container"  placement="left"  :show.sync="show" target="assignedTo-sync">
                                    <div class="d-flex align-items-center assignedTo-container-top mt-lg-2 ">
                                        <div>
                                            <b-img :src="avatarUrl" class="img-fluid" />
                                        </div>
                                        <div>
                                            Staff
                                        </div>
                                    </div>
                                    <div class="assignedTo-container-mid mt-lg-2 d-flex align-items-center">
                                        <div class="dark-18-medium">Nasir uddin</div>
                                        <b-img :src="verifiedUrl" class="ml-lg-2" />

                                    </div>
                                    <div class="mb-lg-2">nasir@gluu.org</div>
                                    <div class="mt-lg-2 mb-lg-2 assignedTo-container-bottom">
                                        <badge color="green" class="mr-lg-1">Gluu</badge>
                                        <badge color="yellow">Enterprise</badge>
                                    </div>
                                </b-popover>
                            </div>
                        </div>
                    </div>
                    <div>
                        Christopher D. Blanton
                    </div>
                </div>
                    <div class="d-flex flex-column text-md-center edit-svg-container-assigned-to"  :class="{ 'active-background-assigned-to' : assignedToIsActive}">
                            <svg id="assignedToSelect-sync" class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect width="12.999" height="13" fill="none"/>
                                    </clipPath>
                                </defs>
                                <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                                    <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                        <path id="Shape" :class="{ 'active' : assignedToIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                                    </g>
                                </g>
                            </svg>
                        <div id="assignedToPopOverContainer">
                            <b-popover v-on:show="$root.$emit('bv::hide::popover')"  id="assignedToPopOver"   container="assignedToPopOverContainer" v-on:shown="assignedToIsActive = true" v-on:hidden="assignedToIsActive = false" placement="bottomleft"   :show.sync="show" target="assignedToSelect-sync">
                                <div class="popoverGlobalBorder">
                                <div class="dark-16-regular mt-lg-3 pr-lg-4 pl-lg-4 w-100">Assign up to 5 people to this issues</div>
                                <hr>
                                <div class="mb-lg-3">
                                    <multi-select
                                            id="assignedToTicketDetails"
                                            v-model="assignedToValues"
                                            class="select-tags-gluu "
                                            label="title"
                                            track-by="title"
                                            :options="assignedToOption"
                                            :multiple="true"
                                            :show-labels="false"
                                            :searchable="true"
                                            placeholder="Search name…"
                                            :custom-label="customLabel"
                                            openDirection="bottom"
                                    >
                                        <template slot="singleLabel" slot-scope="props"><img class="option__image" :src="avatarUrl" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.title }}</span></span></template>
                                        <template slot="option" slot-scope="props"><img class="option__image" :src="avatarUrl" alt="No Man’s Sky">
                                            <div class="option__desc"><span class="option__title">{{ props.option.title }}</span><span class="option__small">{{ props.option.desc }}</span></div>
                                        </template>
                                    </multi-select>
                                </div>
                                </div>
                            </b-popover>
                        </div>
                    </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Issue type</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <badge color="purple">Pre-production</badge>
                </div>

                <div @click="issueTypeIsActive = !issueTypeIsActive"  class="edit-svg-container" :class="{ 'active-background' : issueTypeIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : issueTypeIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Status</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                   <badge color="green">In progress</badge>
                </div>

                <div @click="statusIsActive = !statusIsActive"  class="edit-svg-container" :class="{ 'active-background' : statusIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : statusIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
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

                <div @click="categoryIsActive = !categoryIsActive"  class="edit-svg-container" :class="{ 'active-background' : categoryIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : categoryIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
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

                <div @click="gluuVersionIsActive = !gluuVersionIsActive"  class="edit-svg-container" :class="{ 'active-background' : gluuVersionIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : gluuVersionIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
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

                <div @click="osVersionIsActive = !osVersionIsActive"  class="edit-svg-container" :class="{ 'active-background' : osVersionIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : osVersionIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
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

                <div @click="additionalProductIsActive = !additionalProductIsActive"  class="edit-svg-container" :class="{ 'active-background' : additionalProductIsActive}">
                    <svg class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
                        <defs>
                            <clipPath id="clip-path">
                                <rect width="12.999" height="13" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="pencil-edit-button_1_copy_5" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                            <g id="pencil-edit-button_1_copy_5-2" data-name="pencil-edit-button (1) copy 5" transform="translate(0 0)">
                                <path id="Shape" :class="{ 'active' : additionalProductIsActive}" d="M.3,13a.3.3,0,0,1-.232-.113.3.3,0,0,1-.06-.256L.675,9.616l2.643,2.658-2.947.718A.3.3,0,0,1,.3,13Zm3.735-1.447h0L1.391,8.9,8.084,2.17l2.644,2.657L4.036,11.552Zm7.383-7.417h0L8.772,1.479,9.9.344a1.165,1.165,0,0,1,1.652,0l1.18,1.184a.911.911,0,0,1,0,1.283L11.418,4.135Z" fill="#b1bab6"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

        <div class="d-flex additional-product-container mt-lg-3">
            <div>
                <b-img  :src="plusSvgUrl" />
            </div>
            <div>
                <button type="button" v-b-modal.addAdditionalProductModal>Add additional product</button>
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
        <b-modal id="addAdditionalProductModal" class="card-gluu" hide-footer="true" hide-header="true" centered>

            <div class="form-control-container d-flex flex-column mb-lg-4">
                <div class="dark-22-medium">Add additional product</div>
            </div>

            <div class="form-control-container d-flex align-items-start justify-content-between mb-lg-3">
               <div class="w-100 mr-lg-4">
                   <label class="mb-lg-1">Which product</label>
                   <v-select
                           v-model="selected"
                           :options="options"
                           :searchable="false"
                           :value="selected"
                   ></v-select>
               </div>
               <div class="w-100 ml-lg-4">
                   <label  class="mb-lg-1">What Version</label>
                   <v-select
                           v-model="selected"
                           :options="options"
                           :searchable="false"
                           :value="selected"
                   ></v-select>
               </div>
            </div>

            <div class="form-control-container d-flex align-items-start justify-content-between mb-lg-3">
                <div class="w-100 mr-lg-4">
                    <label class="mb-lg-1">Which OS</label>
                    <v-select
                            v-model="selected"
                            :options="options"
                            :searchable="false"
                            :value="selected"
                    ></v-select>
                </div>
                <div class="w-100 ml-lg-4 mb-lg-4">
                    <label  class="mb-lg-1">What Version</label>
                    <v-select
                            v-model="selected"
                            :options="options"
                            :searchable="false"
                            :value="selected"
                    ></v-select>
                </div>
            </div>

            <div class="form-control-container d-flex">
                <b-button class="btn" >Add Product</b-button>
                <b-button class="btn" @click="hideAddAdditionalProduct()">Cancel</b-button>
            </div>

        </b-modal>
    </div>
</template>

<script>
    import Badge from "../../../components/includes/badge/badge";
    export default {
        name: "ticket_detail_sidebar",
        components: {Badge},
        data(){
            return{
                assignedToValues: [],
                assignedToOption: [
                    { title: 'William', desc: '', img: 'static/posters/fleet.png' },
                    { title: 'Nasser', desc: '', img: 'static/posters/trading_post.png' },
                    { title: 'John', desc: '', img: 'static/posters/creatures.png' },
                    { title: 'Karim', desc: '', img: 'static/posters/resource_lab.png' }
                ],
                createdByIsActive:false,
                assignedToIsActive:false,
                issueTypeIsActive:false,
                statusIsActive:false,
                categoryIsActive:false,
                gluuVersionIsActive:false,
                osVersionIsActive:false,
                additionalProductIsActive:false,
                selected: {id: 1, label: 'Admin'},
                options: [
                    {id: 1, label: 'Admin'},
                    {id: 2, label: 'User'},
                ]
            }
        },
        computed:{
            avatarUrl() {
                return require('../../../assets/images/avatar.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            editActiveSvgUrl() {
                return require('../../../assets/images/editActive.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            plusSvgUrl() {
                return require('../../../assets/images/plus.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            verifiedUrl () {
                return require('../../../assets/images/verified.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        },
        methods: {
            customLabel ({ title, desc }) {
                return `${title} – ${desc}`
            },
            hideAddAdditionalProduct() {
                this.$root.$emit('bv::hide::modal','addAdditionalProductModal', '#btnShow');
            }
        }
    }
</script>

<style lang="scss">
@import "ticket-detail-sidebar";
    .active-background-assigned-to{
        background: #F1F5F9;
        padding: 0.5em;
        border-radius: 20px;
    }
    .edit-svg-container-assigned-to{
        padding: 0.5em;
    }
    .edit-svg-container{
        padding: 0.17em 0.5em;
    }
    .active-background{
        background: #F1F5F9;
        padding: 0.17em 0.5em;
        border-radius: 20px;
    }
    .active{
        fill: #00b372;
    }
</style>