<template>
    <div id="create-ticket-sidebar-container">

        <div v-if="currentStep === 2" class="sidebar-item">

            <div class="header-text">Category</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        Installation
                    </div>
                </div>

                <div @click="categoryIsActive = !categoryIsActive;" class="d-flex flex-column text-md-center edit-svg-container-assigned-to"  :class="{ 'active-background-assigned-to' : categoryIsActive}">
                    <svg id="categorySelect-sync" class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
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

        <div v-if="currentStep === 3"  class="sidebar-item">

            <div class="header-text">Created by</div>

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

        <div v-if="currentStep === 4"  class="sidebar-item">

            <div class="header-text">Issue type</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <badge color="purple">Pre-production</badge>
                </div>

                <div class="d-flex flex-column text-md-center edit-svg-container-assigned-to" :class="{'active-background-assigned-to' : issueTypeIsActive}">
                    <svg id="issueTypeSelect-sync" class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
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
                    <div id="issueTypePopoverContainer">
                        <b-popover v-on:show="$root.$emit('bv::hide::popover')" container="issueTypePopoverContainer" v-on:shown="issueTypeIsActive = true" v-on:hidden="issueTypeIsActive = false" placement="bottomleft"   target="issueTypeSelect-sync">
                            <b-dropdown-item @click="newDevelopmentIssues = !newDevelopmentIssues">
                                <div id="issueTypePopoverContainer-greenbox"></div>
                                <div :class="{'green-color' : newDevelopmentIssues}">New development issues</div>
                                <svg v-show="newDevelopmentIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                            </b-dropdown-item>
                            <b-dropdown-item @click="productionOutage = !productionOutage">
                                <div id="issueTypePopoverContainer-redbox"></div>
                                <div :class="{'red-color' : productionOutage}">Production outage</div>
                                <svg v-show="productionOutage" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                            </b-dropdown-item>
                            <b-dropdown-item @click="preProductionIssues = !preProductionIssues">
                                <div id="issueTypePopoverContainer-purplebox"></div>
                                <div :class="{'purple-color': preProductionIssues}">Pre-production issues</div>
                                <svg v-show="preProductionIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                            </b-dropdown-item>
                            <b-dropdown-item @click="minorIssues = !minorIssues">
                                <div id="issueTypePopoverContainer-bluebox"></div>
                                <div :class="{'blue-color' : minorIssues}">Minor issues</div>
                                <svg v-show="minorIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                            </b-dropdown-item>
                            <b-dropdown-item @click="productionImpaired = !productionImpaired">
                                <div id="issueTypePopoverContainer-orangebox"></div>
                                <div :class="{'orange-color' : productionImpaired}">Production impaired</div>
                                <svg v-show="productionImpaired" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                            </b-dropdown-item>
                        </b-popover>
                    </div>
                </div>

            </div>
        </div>

        <div v-if="currentStep === 5"  class="sidebar-item">

            <div class="header-text">Gluu version</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        Gluu 3.1.4
                    </div>
                </div>

                <div  class="edit-svg-container" :class="{ 'active-background' : gluuVersionIsActive}">
                    <svg id="gluuVersionSelect-sync" class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
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
                    <div id="gluuVersionPopoverContainer">
                        <b-popover v-on:show="$root.$emit('bv::hide::popover')"  container="gluuVersionPopoverContainer" v-on:shown="gluuVersionIsActive = true" v-on:hidden="gluuVersionIsActive = false" placement="bottomleft"   target="gluuVersionSelect-sync">
                            <div class="popoverGlobalBorder">
                                <div class="dark-16-regular mt-lg-3 pr-lg-4 pl-lg-4 w-100"></div>

                                <div class="mb-lg-3">
                                    <multi-select
                                            id="gluuVersionMultiSelect"
                                            v-model="gluuVersionValues"
                                            class="select-tags-gluu"
                                            label="title"
                                            track-by="title"
                                            :options="gluuVersionOptions"
                                            :multiple="false"
                                            :show-labels="false"
                                            :searchable="true"
                                            placeholder="Search..."
                                            :custom-label="customLabel"
                                            openDirection="bottom"
                                            :close-on-select="false"
                                            :showNoResults="false"
                                    >
                                        <template slot="option" slot-scope="props">
                                            <div class="option__desc d-flex align-items-center w-100 pr-lg-4  pl-lg-4">
                                                <span class="option__title">{{ props.option.title }}</span>
                                                <svg class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                                            </div>
                                        </template>
                                    </multi-select>
                                </div>
                            </div>
                        </b-popover>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="currentStep === 6"  class="sidebar-item">

            <div class="header-text">OS Version</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                    <div class="inner-text">
                        CentOS 7
                    </div>
                </div>

                <div v-b-modal.editOsVersion  @click="osVersionIsActive = !osVersionIsActive"  class="edit-svg-container" :class="{ 'active-background' : osVersionIsActive}">
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

    </div>
</template>

<script>
    import Badge from "../../../components/includes/badge/badge";
    export default {
        name: "ticket_detail_sidebar",
        components: {Badge},
        data(){
            return{
                osVersionSelected:  {label:'CentOS'},
                osVersionsOptions:[
                    {label:'CentOS'},
                    {label:'Windows'}
                ],
                gluuVersionValues: [],
                gluuVersionOptions: [
                    { title: 'Gluu 4.0'},
                    { title: 'Gluu 3.1.5'},
                    { title: 'Gluu 3.1.4'},
                    { title: 'Gluu 3.1.3'},
                    { title: 'Gluu 3.1.2'},
                    { title: 'Gluu 3.1.1'},
                    { title: 'Gluu 3.0.1'},
                    { title: 'Gluu 2.4.4'}
                ],
                categoryValues: [],
                categoryOptions: [
                    { title: 'Installation', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Identity Management', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Single Sign-on', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Authentication', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Design Customization', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Access Management', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Maintenance', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Upgrade', desc: '', img: 'static/img/avatar.9a53d1c.svg '}
                ],
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
                ],
                newDevelopmentIssues: false,
                productionOutage:false,
                preProductionIssues:false,
                minorIssues:false,
                productionImpaired:false,
                newStatus: false,
                assignedStatus:false,
                inProgressStatus:false,
                pendingStatus:false,
                closedStatus:false,
                currentStep: 1
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
            },
            statusPopover(){

                this.assignedStatus = false,
                    this.inProgressStatus = false,
                    this.pendingStatus = false,
                    this.closedStatus  = false
            },
            hideEditOsVersionModal() {
                this.$root.$emit('bv::hide::modal','editOsVersion', '#btnShow');
            }

        }
    }
</script>

<style lang="scss">
    @import "create-ticket-sidebar.scss";
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