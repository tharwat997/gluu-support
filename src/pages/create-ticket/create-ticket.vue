<template>
    <div id="create_ticket">
        <nav-bar></nav-bar>
        <div id="content-container" class="mt-lg-5">

            <b-container>
                <b-row class="mb-lg-4">
                    <b-col cols="12">
                        <div id="content-header">
                            <div class="dark-30-medium mb-lg-3">Create tickets</div>
                            <div>
                                Step {{currentStep}} of 9
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="10">
                        <div id="multistep-form-container">

                            <div v-if="currentStep === 1" id="multistep-form-1">
                                <div class="dark-20-medium mb-lg-4">Which organization are you creating the ticket on behalf of?</div>
                                <div>
                                    <div class="form-control-container d-flex flex-column">
                                        <v-select
                                                v-model="organizationSelected"
                                                :options="organizationOptions"
                                                :searchable="false"
                                                :value="organizationSelected"
                                        ></v-select>
                                    </div>
                                </div>
                            </div>

                            <div v-if="currentStep === 2" id="multistep-form-2">
                                <div class="dark-20-medium mb-lg-4">Who are you creating the ticket on behalf of?</div>
                                <div>
                                    <multi-select
                                            id="assignedToTicketDetails"
                                            v-model="assignedToValues"
                                            class="select-tags-gluu"
                                            label="title"
                                            track-by="title"
                                            :options="assignedToOption"
                                            :multiple="false"
                                            :show-labels="false"
                                            :searchable="true"
                                            placeholder="Search name…"
                                            :custom-label="customLabel"
                                            openDirection="bottom"
                                            :close-on-select="true"
                                            :showNoResults="false"
                                    >
                                        <template slot="option" slot-scope="props">
                                            <div class="option__desc d-flex align-items-center w-100 pr-lg-4">
                                                <b-img :src="props.option.img" />
                                                <span class="option__title">{{ props.option.title }}</span>
                                                <svg class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>

                                            </div>
                                        </template>
                                    </multi-select>
                                </div>
                            </div>

                            <div v-if="currentStep === 3" id="multistep-form-3">
                                <div class="dark-20-medium mb-lg-4">What type of ticket you are opening?</div>
                                <div class="flex-row flex-wrap d-flex align-items-center">

                                    <div @click="newDevelopmentIssue = !newDevelopmentIssue" id="new-dev-issue" class="ticket-category flex-column" :class="{'newDevelopmentIssues-createTicket-off' : newDevelopmentIssue, 'newDevelopmentIssues-createTicket-on' : !newDevelopmentIssue}">
                                        <div>
                                            <svg v-if="newDevelopmentIssue" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>New development issues</div>
                                    </div>

                                    <div @click="productionOutage = !productionOutage" id="production-outage" class="ticket-category  flex-column" :class="{'productionOutage-createTicket-off' : productionOutage, 'productionOutage-createTicket-on' : !productionOutage}">
                                        <div>
                                            <svg v-if="productionOutage" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#FF3535" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#FF3535"/></g></g></svg>

                                        </div>
                                        <div>Production outage</div>
                                    </div>

                                    <div @click="preProductionIssues = !preProductionIssues" id="pre-production-issue" class="ticket-category flex-column" :class="{'preProductionIssues-createTicket-off' : preProductionIssues, 'preProductionIssues-createTicket-on' : !preProductionIssues}">
                                        <div>
                                            <svg v-if="preProductionIssues" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#B736FF" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#B736FF"/></g></g></svg>
                                        </div>
                                        <div>
                                            Pre-production issues
                                        </div>
                                    </div>

                                    <div @click="minorIssues = !minorIssues" id="minor-issues" class="ticket-category flex-column" :class="{'minorIssues-createTicket-off' : minorIssues, 'minorIssues-createTicket-on' : !minorIssues}">
                                        <div>
                                            <svg v-if="minorIssues" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#5967FF" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#5967FF"/></g></g></svg>
                                        </div>
                                        <div>
                                            Minor issues
                                        </div>
                                    </div>

                                    <div  @click="productionImpaired = !productionImpaired" id="production-impaired" class="ticket-category flex-column" :class="{'productionImpaired-createTicket-off' : productionImpaired, 'productionImpaired-createTicket-on' : !productionImpaired}">
                                        <div>
                                            <svg v-if="productionImpaired" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#FF8336" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#FF8336"/></g></g></svg>
                                        </div>
                                        <div>
                                            Production impaired
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="currentStep === 4" id="multistep-form-4">
                                <div class="dark-20-medium mb-lg-4">Which category does your issues fall into?</div>
                                <div class="flex-row flex-wrap d-flex align-items-center">

                                    <div class="ticket-category flex-column" @click="categorySelection(1)" :class="{'base-color-background' : installation}">
                                        <div>
                                            <svg v-if="installation" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="59.96" height="41.54" viewBox="0 0 59.96 41.54"><g transform="translate(0.01 -0.23)"><path :class="{'white-fill': installation, 'white-stroke': installation}" d="M53.7,41.04H5.76A5.767,5.767,0,0,1,0,35.28V32.46a1.484,1.484,0,0,1,1.5-1.5H4.32V3.9A3.893,3.893,0,0,1,8.22,0h42.9a4.05,4.05,0,0,1,4.02,3.78V30.96h2.82a1.484,1.484,0,0,1,1.5,1.5v2.82A5.767,5.767,0,0,1,53.7,41.04ZM3,33.96v1.32a2.8,2.8,0,0,0,2.76,2.76h48a2.8,2.8,0,0,0,2.76-2.76V33.96H53.7a1.484,1.484,0,0,1-1.5-1.5V4.02A1.142,1.142,0,0,0,51.18,3H8.22a.924.924,0,0,0-.9.9V32.46a1.483,1.483,0,0,1-1.5,1.5ZM33.54,35.7H25.98a3.1,3.1,0,0,1-2.76-1.741H10.62a1.52,1.52,0,0,1-1.5-1.5,1.484,1.484,0,0,1,1.5-1.5h13.8a1.484,1.484,0,0,1,1.5,1.5V32.7h7.62V32.46a1.484,1.484,0,0,1,1.5-1.5H48.9a1.5,1.5,0,1,1,0,3H36.3A3.017,3.017,0,0,1,33.54,35.7ZM27.18,23.52A1.449,1.449,0,0,1,26.1,23.1L22.44,19.38a1.364,1.364,0,0,1-.449-.989,1.525,1.525,0,0,1,.449-1.111,1.362,1.362,0,0,1,1.028-.45,1.51,1.51,0,0,1,1.073.45l2.64,2.64,7.86-7.74a1.363,1.363,0,0,1,1.028-.45,1.512,1.512,0,0,1,1.073.45,1.364,1.364,0,0,1,.449.989,1.526,1.526,0,0,1-.449,1.112L28.26,23.1A1.528,1.528,0,0,1,27.18,23.52Z" transform="translate(0.24 0.48)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/></g></svg>
                                        </div>
                                        <div class="dark-16-semi mb-lg-3 mt-lg-3" :class="{'white-color': installation}">Installation</div>
                                        <div :class="{'white-color': installation}">Issues related to Gluu software installation or deployment.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(2)" :class="{'base-color-background' : identityManagement}">
                                        <div>
                                            <svg v-if="identityManagement" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="49.962" height="50.394" viewBox="0 0 49.962 50.394"><g transform="translate(-0.02)"><path :class="{'white-fill': identityManagement}" d="M2.038.294a1,1,0,0,0-1.42,0L.294.618a1,1,0,0,0,1.42,1.42l.324-.324A1,1,0,0,0,2.038.294Z" transform="translate(40.089 7.776)" fill="#bec1c3"/><path :class="{'white-fill': identityManagement}" d="M7.376,0H1A1,1,0,0,0,1,2.008H5.169L1.7,5.478A1,1,0,0,0,3.118,6.9L6.372,3.643V7.376a1,1,0,0,0,2.008,0V1A1,1,0,0,0,7.376,0Z" transform="translate(41.601)" fill="#bec1c3"/><path :class="{'white-fill': identityManagement}" d="M48.958,50.394H42.585a1,1,0,0,1,0-2.008H46.75L38.36,40A19.922,19.922,0,0,1,11.6,40L3.211,48.386H7.376a1,1,0,0,1,0,2.008H1a1,1,0,0,1-1-1V43.017a1,1,0,0,1,2.008,0V46.75l8.175-8.176a19.921,19.921,0,0,1,0-26.756L2.008,3.643V7.376A1,1,0,0,1,0,7.376V1A1,1,0,0,1,1,0H7.376a1,1,0,0,1,0,2.008H3.211L11.6,10.4A19.948,19.948,0,0,1,39.779,38.575l8.175,8.176V43.017a1,1,0,0,1,2.008,0V49.39A1,1,0,0,1,48.958,50.394ZM24.98,7.246A17.951,17.951,0,1,0,42.932,25.2,17.971,17.971,0,0,0,24.98,7.246Z" transform="translate(0.019)" fill="#bec1c3"/><path :class="{'white-fill': identityManagement}" d="M5.018,14.095A4.652,4.652,0,0,1,.383,9.749L.121,5.722.008,4A3.753,3.753,0,0,1,3.753,0H6.284a3.753,3.753,0,0,1,3.745,4l-.076,1.15-.3,4.6a4.652,4.652,0,0,1-4.635,4.346Zm1-9.031a7.732,7.732,0,0,1-3.827,1.5l.2,3.057a2.637,2.637,0,0,0,5.263,0l.245-3.764A7.2,7.2,0,0,1,6.5,5.36a3.845,3.845,0,0,1-.486-.3ZM3.753,2.008A1.745,1.745,0,0,0,2.012,3.866l.044.685A4.664,4.664,0,0,0,5.265,2.98l.365-.972Zm3.811.56-.337.9a1.932,1.932,0,0,0,.194.112,4,4,0,0,0,.607.228A1.734,1.734,0,0,0,7.565,2.568Z" transform="translate(19.982 11.988)" fill="#bec1c3"/><path :class="{'white-fill': identityManagement}" d="M19.158,9.252H2.967a2.968,2.968,0,0,1-2.92-3.5A7,7,0,0,1,6.94,0H8.2a1.011,1.011,0,0,1,.71.294l2.151,2.151L13.214.294A1.011,1.011,0,0,1,13.924,0h1.262a7,7,0,0,1,6.892,5.755,2.968,2.968,0,0,1-2.92,3.5ZM6.94,2.008A4.993,4.993,0,0,0,2.023,6.114a.96.96,0,0,0,.944,1.13H19.158a.96.96,0,0,0,.944-1.13,4.993,4.993,0,0,0-4.917-4.106H14.34L11.773,4.575a1.006,1.006,0,0,1-1.42,0L7.787,2.008Z" transform="translate(13.937 26.901)" fill="#bec1c3"/></g></svg>
                                        </div>
                                        <div class="dark-16-medium  mb-lg-3 mt-lg-3" :class="{'white-color': identityManagement}"><span>Identity Management</span></div>
                                        <div :class="{'white-color': identityManagement}">Issues related to create, read, update, delete (CRUD) operations.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(3)" :class="{'base-color-background' : singleSignOn}">
                                        <div>
                                            <svg v-if="singleSignOn" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><g transform="translate(1 1)"><path d="M25,50A25,25,0,1,0,7.556,42.908,25,25,0,0,0,25,50Z" fill="none" stroke="#bec1c3" :class="{'white-stroke': singleSignOn}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" stroke-dasharray="1 12"/><g transform="translate(11 11)"><path :class="{'white-fill': singleSignOn}" d="M7.125,29H3.289A3.219,3.219,0,0,1,.74,27.733,3.559,3.559,0,0,1,.07,24.85a14.9,14.9,0,0,1,4.852-8.368,13.825,13.825,0,0,1,4.541-2.609A7.768,7.768,0,0,1,6.5,7.7,7.55,7.55,0,0,1,13.872,0a7.551,7.551,0,0,1,7.37,7.7,7.765,7.765,0,0,1-2.957,6.165c.21.073.382.137.542.2a1.152,1.152,0,0,1,.634,1.459,1.092,1.092,0,0,1-1.015.735,1.038,1.038,0,0,1-.381-.073,11.432,11.432,0,0,0-3.914-.788c-.112,0-.2.006-.279.006s-.165,0-.276-.006a12.178,12.178,0,0,0-11.4,9.912,1.225,1.225,0,0,0,.229.992,1.085,1.085,0,0,0,.867.431H7.125a1.134,1.134,0,0,1,0,2.265Zm6.746-15.869.169,0h.085A5.33,5.33,0,0,0,19.074,7.7a5.33,5.33,0,0,0-5.2-5.438A5.33,5.33,0,0,0,8.67,7.7a5.33,5.33,0,0,0,4.948,5.431H13.7Z" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': singleSignOn}" d="M19.428,1.747A2.986,2.986,0,0,0,16.7,0H13.241a2.933,2.933,0,0,0-2.772,1.869c-.058.151-.129.341-.2.563H3.011a1.109,1.109,0,0,0-.795.335L.313,4.724a1.1,1.1,0,0,0,0,1.545L2.257,8.237a1.109,1.109,0,0,0,.79.331h3.6a1.106,1.106,0,1,0,0-2.211H3.511l-.855-.868.823-.846H11.1A1.107,1.107,0,0,0,12.173,3.8a9.122,9.122,0,0,1,.365-1.138.726.726,0,0,1,.706-.451H16.7a.756.756,0,0,1,.7.438,7.127,7.127,0,0,1,.655,2.818,7.337,7.337,0,0,1-.65,2.869.757.757,0,0,1-.7.453h-3.5A.789.789,0,0,1,12.5,8.3a7.337,7.337,0,0,1-.343-1.094A1.108,1.108,0,0,0,10,7.72a9.5,9.5,0,0,0,.45,1.423A2.989,2.989,0,0,0,13.212,11h3.5a2.971,2.971,0,0,0,2.725-1.78,9.552,9.552,0,0,0,.835-3.757A9.343,9.343,0,0,0,19.428,1.747Z" transform="translate(7.724 18)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/><ellipse :class="{'white-fill': singleSignOn}" cx="0.966" cy="1" rx="0.966" ry="1" transform="translate(22.207 22)" fill="#bec1c3"/></g></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color' : singleSignOn}">Single Sign-On</div>
                                        <div :class="{'white-color' : singleSignOn}">Issues related to OpenID Connect, SAML or CAS.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(4)" :class="{'base-color-background' : authentication}">
                                        <div>
                                            <svg v-if="authentication" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="47.667" viewBox="0 0 51 47.667"><g transform="translate(0.5 0.5)"><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M31.13,32.477a1.559,1.559,0,0,1-1.562-1.556v-3.3a32.573,32.573,0,0,0-4.687-16.8L23.317,8.21a10.925,10.925,0,1,0-18.75,11.2L6.13,22.024a10.852,10.852,0,0,1,1.563,5.6v3.3a1.563,1.563,0,0,1-3.125,0v-3.3a7.752,7.752,0,0,0-1.112-4l-1.562-2.61a14.046,14.046,0,0,1,24.116-14.4l1.563,2.607a35.658,35.658,0,0,1,5.122,18.4v3.3A1.559,1.559,0,0,1,31.13,32.477Z" transform="translate(7.933 3.301)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M18.634,29.369a1.559,1.559,0,0,1-1.562-1.556V21.4A26.371,26.371,0,0,0,13.287,7.8l-1.562-2.6a4.684,4.684,0,1,0-8.047,4.8L5.24,12.6A17.054,17.054,0,0,1,7.7,21.4v6.415a1.563,1.563,0,0,1-3.125,0V21.4a13.953,13.953,0,0,0-2.006-7.2L1,11.589a7.8,7.8,0,0,1,13.394-8l1.563,2.6A29.457,29.457,0,0,1,20.2,21.4v6.415A1.559,1.559,0,0,1,18.634,29.369Z" transform="translate(14.179 9.52)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M6.257,28.023a1.559,1.559,0,0,1-1.562-1.556V15.388A20.173,20.173,0,0,0,1.8,4.985L.238,2.381A1.561,1.561,0,1,1,2.916.779l1.562,2.6A23.255,23.255,0,0,1,7.819,15.388V26.467A1.559,1.559,0,0,1,6.257,28.023Z" transform="translate(20.306 15.533)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M1.563,12.444A1.559,1.559,0,0,1,0,10.889V1.556A1.559,1.559,0,0,1,1.563,0h9.375a1.556,1.556,0,1,1,0,3.111H3.125v7.778A1.559,1.559,0,0,1,1.563,12.444Z" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M10.938,12.444a1.559,1.559,0,0,1-1.562-1.556V3.111H1.563A1.556,1.556,0,1,1,1.563,0h9.375A1.559,1.559,0,0,1,12.5,1.556v9.333A1.559,1.559,0,0,1,10.938,12.444Z" transform="translate(37.5)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M10.938,12.444H1.563A1.559,1.559,0,0,1,0,10.889V1.556a1.563,1.563,0,0,1,3.125,0V9.333h7.813a1.556,1.556,0,1,1,0,3.111Z" transform="translate(0 34.222)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><path :class="{'white-fill': authentication, 'white-stroke' : authentication}" d="M10.938,12.444H1.563a1.556,1.556,0,1,1,0-3.111H9.375V1.556a1.563,1.563,0,0,1,3.125,0v9.333A1.559,1.559,0,0,1,10.938,12.444Z" transform="translate(37.5 34.222)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': authentication}">Authentication</div>
                                        <div :class="{'white-color': authentication}">Issues related to authenticating users or clients.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(5)" :class="{'base-color-background' : designCustomization}">
                                        <div>
                                            <svg v-if="designCustomization" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50.497" height="50.5" viewBox="0 0 50.497 50.5"><path :class="{'white-fill': designCustomization, 'white-stroke' : designCustomization}" d="M43.277,50A6.675,6.675,0,0,1,38.5,48.01l-9.937-9.937a.832.832,0,0,1,0-1.177l.417-.417a.934.934,0,0,0-1.321-1.321l-.417.417a.833.833,0,0,1-1.178,0l-1.91-1.91-4.367,4.367A9.99,9.99,0,1,1,10,29.988a9.8,9.8,0,0,1,1.951.2L30.19,11.948A9.957,9.957,0,0,1,42.4.307a.833.833,0,0,1,.391,1.4L37.6,6.891,38.976,11l4.114,1.371,5.185-5.181a.833.833,0,0,1,1.4.388,9.962,9.962,0,0,1-9.656,12.411h-.033a9.86,9.86,0,0,1-1.951-.2l-4.367,4.367,1.91,1.91a.835.835,0,0,1,0,1.178l-.417.417a.934.934,0,0,0,1.321,1.321l.417-.417a.832.832,0,0,1,1.177,0L48.01,38.5l.042.043A6.722,6.722,0,0,1,43.277,50ZM9.94,31.654a8.385,8.385,0,1,0,8.127,6.316.837.837,0,0,1,.22-.791l18.9-18.892h0a.829.829,0,0,1,.589-.244.837.837,0,0,1,.2.025,8.288,8.288,0,0,0,2.056.259h.042A8.288,8.288,0,0,0,48.313,10c0-.153-.005-.308-.015-.473L43.9,13.918a.832.832,0,0,1-.852.2l-5-1.666a.832.832,0,0,1-.527-.526l-1.666-5a.836.836,0,0,1,.2-.851l4.394-4.4c-.163-.01-.337-.016-.516-.016A8.288,8.288,0,0,0,31.911,12.01a.836.836,0,0,1-.219.791L12.8,31.694a.843.843,0,0,1-.792.22A8.39,8.39,0,0,0,9.94,31.654Zm38.05,9.83h0L41.484,47.99a5.045,5.045,0,0,0,1.772.323h.007a5.056,5.056,0,0,0,4.727-6.829ZM28.332,33.206a2.6,2.6,0,0,1,1.993,4.27l9.355,9.355c.092.092.2.186.318.288L47.12,40c-.1-.12-.2-.227-.289-.318l-9.347-9.355a2.6,2.6,0,0,1-3.665-3.66l-1.333-1.329-7.16,7.149,1.333,1.332A2.6,2.6,0,0,1,28.332,33.206Z" transform="translate(0.25 0.25)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': designCustomization}">Design Customization</div>
                                        <div :class="{'white-color': designCustomization}">Issues related to customizing Gluu page designs.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(6)" :class="{'base-color-background' : accessManagement}">
                                        <div>
                                            <svg v-if="accessManagement" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45.5" height="50.5" viewBox="0 0 45.5 50.5"><g transform="translate(0.25 0.25)"><path :class="{'white-fill': accessManagement, 'white-stroke' : accessManagement}" d="M18.333,26.667H0V10.833H12.5V5A3.334,3.334,0,1,0,5.833,5v.832a.833.833,0,1,1-1.666,0V5a5,5,0,1,1,10,0v5.833h4.166V26.666ZM1.667,12.5V25h15V12.5Z" transform="translate(13.333 6.667)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': accessManagement, 'white-stroke' : accessManagement}" d="M3.334,9.167A.834.834,0,0,1,2.5,8.333V6.548a3.333,3.333,0,1,1,1.667,0V8.333A.834.834,0,0,1,3.334,9.167Zm0-7.5A1.667,1.667,0,1,0,5,3.334,1.669,1.669,0,0,0,3.334,1.667Z" transform="translate(19.167 20.833)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': accessManagement, 'white-stroke' : accessManagement}" d="M22.5,0a22.5,22.5,0,0,0-1.924,44.912l-3.665,3.665a.833.833,0,1,0,1.178,1.178l5-5a.825.825,0,0,0,.181-.272.836.836,0,0,0-.181-.908l-5-5a.833.833,0,0,0-1.178,1.178l3.47,3.47A20.834,20.834,0,1,1,37.3,37.161a.834.834,0,1,0,1.184,1.173A22.5,22.5,0,0,0,22.5,0Z" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': accessManagement}">Access Management</div>
                                        <div :class="{'white-color': accessManagement}">Issues related to controlling access to resources.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(7)" :class="{'base-color-background' : maintenance}">
                                        <div>
                                            <svg v-if="maintenance" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50.497" height="50.5" viewBox="0 0 50.497 50.5"><path :class="{'white-fill': maintenance, 'white-stroke' : maintenance}" d="M43.277,50A6.675,6.675,0,0,1,38.5,48.01l-9.937-9.937a.832.832,0,0,1,0-1.177l.417-.417a.934.934,0,0,0-1.321-1.321l-.417.417a.833.833,0,0,1-1.178,0l-1.91-1.91-4.367,4.367A9.99,9.99,0,1,1,10,29.988a9.8,9.8,0,0,1,1.951.2L30.19,11.948A9.957,9.957,0,0,1,42.4.307a.833.833,0,0,1,.391,1.4L37.6,6.891,38.976,11l4.114,1.371,5.185-5.181a.833.833,0,0,1,1.4.388,9.962,9.962,0,0,1-9.656,12.411h-.033a9.86,9.86,0,0,1-1.951-.2l-4.367,4.367,1.91,1.91a.835.835,0,0,1,0,1.178l-.417.417a.934.934,0,0,0,1.321,1.321l.417-.417a.832.832,0,0,1,1.177,0L48.01,38.5l.042.043A6.722,6.722,0,0,1,43.277,50ZM9.94,31.654a8.385,8.385,0,1,0,8.127,6.316.837.837,0,0,1,.22-.791l18.9-18.892h0a.829.829,0,0,1,.589-.244.837.837,0,0,1,.2.025,8.288,8.288,0,0,0,2.056.259h.042A8.288,8.288,0,0,0,48.313,10c0-.153-.005-.308-.015-.473L43.9,13.918a.832.832,0,0,1-.852.2l-5-1.666a.832.832,0,0,1-.527-.526l-1.666-5a.836.836,0,0,1,.2-.851l4.394-4.4c-.163-.01-.337-.016-.516-.016A8.288,8.288,0,0,0,31.911,12.01a.836.836,0,0,1-.219.791L12.8,31.694a.843.843,0,0,1-.792.22A8.39,8.39,0,0,0,9.94,31.654Zm38.05,9.83h0L41.484,47.99a5.045,5.045,0,0,0,1.772.323h.007a5.056,5.056,0,0,0,4.727-6.829ZM28.332,33.206a2.6,2.6,0,0,1,1.993,4.27l9.355,9.355c.092.092.2.186.318.288L47.12,40c-.1-.12-.2-.227-.289-.318l-9.347-9.355a2.6,2.6,0,0,1-3.665-3.66l-1.333-1.329-7.16,7.149,1.333,1.332A2.6,2.6,0,0,1,28.332,33.206Z" transform="translate(0.25 0.25)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': maintenance}">Maintenance</div>
                                        <div :class="{'white-color': maintenance}">Issues related to server maintenance and operations.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(8)" :class="{'base-color-background' : upgrade}">
                                        <div>
                                            <svg v-if="upgrade" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53"><g transform="translate(1.5 1.5)"><path :class="{'white-fill': upgrade, 'base-color-stroke' : upgrade}"  d="M50,50H0V0H23.03V5.117H5.117V16.223H30.092L41.2,5.117H27.431V0H49.949V22.518H44.831V8.752L33.726,19.857V44.882H44.882V26.97H50V50ZM5.117,18.27V44.831H31.678V18.27Z" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><g :class="{'white-fill': upgrade, 'white-stroke' : upgrade}" transform="translate(2 17)" fill="#fff" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="2"><rect width="28" height="31" stroke="none"/><rect x="1" y="1" width="26" height="29" fill="none"/></g></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': upgrade}">Upgrade</div>
                                        <div :class="{'white-color': upgrade}">Issues related to Gluu software version upgrades.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(9)" :class="{'base-color-background' : featureRequest}">
                                        <div>
                                            <svg v-if="featureRequest" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50.085" height="51.59" viewBox="0 0 50.085 51.59"><g transform="translate(0.25 0.215)"><path :class="{'white-fill': featureRequest, 'white-stroke' : featureRequest}" d="M27.815,51.09H23.908c-.39,0-5.848-.118-8.907-.464-3.3-.371-4.009-.781-6.819-2.657l-.066-.047L5.3,45.539H.926a.694.694,0,1,1,0-1.389h4.64a.7.7,0,0,1,.452.167l2.991,2.56c2.745,1.83,3.21,2.076,6.171,2.412.789.089,1.771.167,3,.24a3.954,3.954,0,0,1-.269-2.153,3.185,3.185,0,0,1,1.537-2.315,1.543,1.543,0,0,1-.121-.13,3.17,3.17,0,0,1-.759-2.5l.028-.227A3.189,3.189,0,0,1,20.111,39.9l-.121-.125a3.319,3.319,0,0,1-.463-.666A4.2,4.2,0,0,1,16.565,40.7c-.018,0-.037,0-.056,0s-.037,0-.055,0-.038,0-.057,0a.7.7,0,0,1-.693-.641.695.695,0,0,1,.638-.75c1.6-.259,2.624-.648,3.551-5.176l.093-.463,15.741-3.135c.472-.1.976-.306.976-1.518a.845.845,0,0,0-.842-.838H19.422a10.674,10.674,0,0,0-5.945,1.805L8.727,33.15a3.436,3.436,0,0,1-1.922.584H.695a.695.695,0,1,1,0-1.39H6.8a2.074,2.074,0,0,0,1.158-.352l4.749-3.147a11.884,11.884,0,0,1,3.4-1.565L24.537.451A.69.69,0,0,1,25.175,0h.014a.694.694,0,0,1,.641.427l.676,1.852,2.823-.926a.681.681,0,0,1,.2-.031.7.7,0,0,1,.654.462L30.9,3.608l2.264-.976a.7.7,0,0,1,.56,0,.68.68,0,0,1,.375.417l.579,1.741,2.472-.926a.685.685,0,0,1,.244-.044.706.706,0,0,1,.64.41l.857,1.963,2.648-.95a.7.7,0,0,1,.885.4l.7,1.8,2.069-1a.693.693,0,0,1,.3-.07.694.694,0,0,1,.66.477l.537,1.653,1.851-.986a.692.692,0,0,1,.773.079.691.691,0,0,1,.218.754L39.509,40.3a.682.682,0,0,1-.342.408.656.656,0,0,1-.338.046h-.008a.622.622,0,0,1-.2-.032L34.19,39.331a2.968,2.968,0,0,1-.524.6A2.586,2.586,0,0,1,34.7,42.095v.879a.775.775,0,0,1,0,.171A3.783,3.783,0,0,1,30.912,45.8h-.356a2.77,2.77,0,0,1,.5,1.588v.463A3.245,3.245,0,0,1,27.815,51.09Zm-6.787-5.084a1.808,1.808,0,0,0-1.768,1.542,2.243,2.243,0,0,0,.334,1.686,1.106,1.106,0,0,0,.838.389h.05l4.093.106h3.24a1.854,1.854,0,0,0,1.852-1.851l.023-.481a1.391,1.391,0,0,0-1.39-1.39H21.028Zm.662-5.2a1.8,1.8,0,0,0-1.75,1.555l-.032.227A1.788,1.788,0,0,0,21.648,44.6h.265l8.94-.2a2.52,2.52,0,0,0,2.481-1.527l-.013-.76c0-1.423-1.559-1.439-1.625-1.439l-9.143.13Zm.856-5.19a.645.645,0,0,1-.231.041,1.79,1.79,0,0,0-1.759,1.58v.175a1.786,1.786,0,0,0,1.773,2h.217l9.139-.13a1.688,1.688,0,0,0,1.093-.421L22.546,35.613Zm-3.1-8.81H35.861a2.241,2.241,0,0,1,2.231,2.231,2.614,2.614,0,0,1-2.083,2.875l-12.68,2.5,15.064,4.805L47.686,9.544l-1.084.574a.69.69,0,0,1-.986-.4l-.546-1.686-2.028.982a.7.7,0,0,1-.542.007.71.71,0,0,1-.384-.382l-.731-1.852-2.607.926a.693.693,0,0,1-.87-.37L37.037,5.4l-2.518,1a.689.689,0,0,1-.558-.01.694.694,0,0,1-.368-.42l-.57-1.723L30.8,5.21a.705.705,0,0,1-.544,0,.71.71,0,0,1-.382-.389l-.731-1.889-2.839.9a.693.693,0,0,1-.866-.421l-.2-.555L17.681,26.933A12.486,12.486,0,0,1,19.445,26.8Z" transform="translate(0 0.035)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': featureRequest, 'white-stroke' : featureRequest}" d="M17.224,5.32.946.047A.694.694,0,1,0,.52,1.367L16.8,6.64a.681.681,0,0,0,.213.032.694.694,0,0,0,.213-1.352Z" transform="translate(25.475 10.05)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': featureRequest, 'white-stroke' : featureRequest}" d="M17.232,5.319.954.05A.694.694,0,1,0,.533,1.37L16.806,6.643a.681.681,0,0,0,.213.032.694.694,0,0,0,.213-1.356Z" transform="translate(23.541 14.862)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/><path :class="{'white-fill': featureRequest, 'white-stroke' : featureRequest}" d="M17.186,5.3.908.033A.7.7,0,0,0,.483,1.357L16.76,6.626a.681.681,0,0,0,.213.032A.694.694,0,0,0,17.186,5.3Z" transform="translate(21.948 19.939)" fill="#bec1c3" stroke="#bec1c3" stroke-miterlimit="10" stroke-width="0.5"/></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': featureRequest}">Feature Request</div>
                                        <div :class="{'white-color': featureRequest}">New feature suggestions and requests.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(10)" :class="{'base-color-background' : outages}">
                                        <div>
                                            <svg v-if="outages" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="59.96" height="41.54" viewBox="0 0 59.96 41.54"><g transform="translate(0.01 -0.23)"><path :class="{'white-fill': outages, 'white-stroke' : outages}" d="M53.7,41.04H5.76A5.767,5.767,0,0,1,0,35.28V32.46a1.484,1.484,0,0,1,1.5-1.5H4.32V3.9A3.893,3.893,0,0,1,8.22,0h42.9a4.05,4.05,0,0,1,4.02,3.78V30.96h2.82a1.484,1.484,0,0,1,1.5,1.5v2.82A5.767,5.767,0,0,1,53.7,41.04ZM3,33.96v1.32a2.8,2.8,0,0,0,2.76,2.76h48a2.8,2.8,0,0,0,2.76-2.76V33.96H53.7a1.484,1.484,0,0,1-1.5-1.5V4.02A1.142,1.142,0,0,0,51.18,3H8.22a.924.924,0,0,0-.9.9V32.46a1.483,1.483,0,0,1-1.5,1.5ZM33.54,35.7H25.98a3.1,3.1,0,0,1-2.76-1.741H10.62a1.52,1.52,0,0,1-1.5-1.5,1.484,1.484,0,0,1,1.5-1.5h13.8a1.484,1.484,0,0,1,1.5,1.5V32.7h7.62V32.46a1.484,1.484,0,0,1,1.5-1.5H48.9a1.5,1.5,0,1,1,0,3H36.3A3.017,3.017,0,0,1,33.54,35.7ZM27.18,23.52A1.449,1.449,0,0,1,26.1,23.1L22.44,19.38a1.364,1.364,0,0,1-.449-.989,1.525,1.525,0,0,1,.449-1.111,1.362,1.362,0,0,1,1.028-.45,1.51,1.51,0,0,1,1.073.45l2.64,2.64,7.86-7.74a1.363,1.363,0,0,1,1.028-.45,1.512,1.512,0,0,1,1.073.45,1.364,1.364,0,0,1,.449.989,1.526,1.526,0,0,1-.449,1.112L28.26,23.1A1.528,1.528,0,0,1,27.18,23.52Z" transform="translate(0.24 0.48)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/></g></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': outages}">Outages</div>
                                        <div :class="{'white-color': outages}">Issues resulting in downtime of your Gluu service.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(11)" :class="{'base-color-background' : logOut}">
                                        <div>
                                            <svg v-if="logOut" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="49.999" height="53.334" viewBox="0 0 49.999 53.334"><path :class="{'white-fill': logOut, 'white-stroke' : logOut}" d="M17.182,53.334a1.552,1.552,0,0,1-.8-.224L.759,43.735A1.57,1.57,0,0,1,0,42.4V1.562A1.567,1.567,0,0,1,1.543,0H32.811a1.565,1.565,0,0,1,1.563,1.562V18.854H37.5V17.292a1.563,1.563,0,0,1,2.429-1.3l9.374,6.25a1.563,1.563,0,0,1,0,2.6l-9.374,6.25a1.562,1.562,0,0,1-2.429-1.3V28.229H34.375V42.4a1.564,1.564,0,0,1-1.563,1.562H18.75V51.77A1.568,1.568,0,0,1,17.182,53.334ZM3.125,4.322V41.51l12.5,7.5V11.822ZM7.2,3.125,17.991,9.6a1.57,1.57,0,0,1,.759,1.339v29.9h12.5v-12.6H23.437a1.564,1.564,0,0,1-1.562-1.562v-6.25a1.564,1.564,0,0,1,1.562-1.562h7.812V3.125ZM25,21.979V25.1H39.062a1.564,1.564,0,0,1,1.562,1.562v.205l5-3.33-5-3.331v.206a1.564,1.564,0,0,1-1.562,1.562Z" fill="#bec1c3"/></svg>
                                        </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': logOut}">Log Out</div>
                                        <div :class="{'white-color': logOut}">Issues related to session management and logout.</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="categorySelection(12)" :class="{'base-color-background' : other}">
                                        <div>
                                            <svg v-if="other" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="49.999" height="43.056" viewBox="0 0 49.999 43.056"><path :class="{'white-fill': other, 'white-stroke' : other}" d="M48.21,43.056H3.749a.978.978,0,0,1-.977-.977V23.447c0-.01,0-.019,0-.029V23.4L.048,15.009A.975.975,0,0,1,.675,13.78L42.959.048A.978.978,0,0,1,44.19.674L49.952,18.4a.98.98,0,0,1-.626,1.23l-8.763,2.846H48.21a.977.977,0,0,1,.976.976V42.079A.978.978,0,0,1,48.21,43.056ZM4.726,24.422V41.1H47.234V24.422H12.089V35.3a.977.977,0,0,1-1.953,0V24.422ZM7.355,13.663,2.208,15.334l2.32,7.137H34.242l13.55-4.4L42.634,2.206,9.212,13.06l1.967,5.973a.976.976,0,0,1-1.855.61Z" fill="#bec1c3"/></svg>                                </div>
                                        <div class="dark-16-medium mb-lg-3 mt-lg-3" :class="{'white-color': other}">Other</div>
                                        <div :class="{'white-color': other}">Anything not covered in one of the topics above..</div>
                                    </div>

                                </div>
                            </div>
                            <div v-if="currentStep === 5" id="multistep-form-5">
                                <div class="dark-20-medium mb-lg-4">Which version of gluu server do you use?</div>
                                <div class="flex-row flex-wrap d-flex align-items-center">

                                    <div class="ticket-category flex-column" @click="versionSelection(1)" :class="{'base-color-background' : version4_0}">
                                        <div>
                                            <svg v-if="version4_0" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version4_0}">4.0</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(2)" :class="{'base-color-background' : version3_1_5}">
                                        <div>
                                            <svg v-if="version3_1_5" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_1_5}">3.1.5</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(3)" :class="{'base-color-background' : version3_1_4}">
                                        <div>
                                            <svg v-if="version3_1_4" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_1_4}">3.1.4</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(4)" :class="{'base-color-background' : version3_1_3}">
                                        <div>
                                            <svg v-if="version3_1_3" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_1_3}">3.1.3</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(5)" :class="{'base-color-background' : version3_1_2}">
                                        <div>
                                            <svg v-if="version3_1_2" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_1_2}">3.1.2</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(6)" :class="{'base-color-background' : version3_1_1}">
                                        <div>
                                            <svg v-if="version3_1_1" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_1_1}">3.1.1</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(7)" :class="{'base-color-background' : version3_0_1}">
                                        <div>
                                            <svg v-if="version3_0_1" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version3_0_1}">3.01</div>
                                    </div>

                                    <div class="ticket-category flex-column" @click="versionSelection(8)" :class="{'base-color-background' : version2_4_4}">
                                        <div>
                                            <svg v-if="version2_4_4" class="create-ticket-issue-category-tick" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g transform="translate(0.5 0.5)"><circle cx="10" cy="10" r="10" fill="#fff" stroke="#00B372" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(5 6.25)"><path d="M.115,3.929A.372.372,0,0,1,0,3.679a.372.372,0,0,1,.115-.25l.538-.5a.392.392,0,0,1,.538,0l.038.036L3.346,5.071a.2.2,0,0,0,.269,0L8.769.107h.038a.392.392,0,0,1,.538,0l.538.5a.329.329,0,0,1,0,.5h0L3.731,7.036a.392.392,0,0,1-.538,0l-3-3Z" fill="#00B372"/></g></g></svg>
                                        </div>
                                        <div class="dark-18-semi" :class="{'white-color': version2_4_4}">2.4.4</div>
                                    </div>

                                </div>
                            </div>

                            <div v-if="currentStep === 6" id="multistep-form-6">
                                <div class="dark-20-medium mb-lg-4">Select an operating system</div>
                                <div>
                                    <div class="form-control-container d-flex align-items-start justify-content-between w-100">
                                        <div class="w-100 mr-lg-4">
                                            <label class="mb-lg-1 dark-16-semi">OS name</label>
                                            <v-select
                                                    v-model="selectedOs"
                                                    :options="osNameOption"
                                                    :searchable="false"
                                                    :value="selected"
                                            ></v-select>
                                        </div>
                                        <div class="w-100">
                                            <label class="mb-lg-1 dark-16-semi">OS version</label>
                                            <v-select
                                                    v-model="selectOsVersion"
                                                    :options="osVersion"
                                                    :searchable="false"
                                                    :value="selected"
                                            ></v-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="currentStep === 7" id="multistep-form-7">
                                <div class="dark-20-medium mb-lg-4">Select an operating system</div>
                                <div>
                                    <div class="form-control-container">
                                        <div class="d-flex flex-column flex mb-lg-3">
                                            <b-row>
                                                <b-col cols="6">
                                                    <label class="mb-lg-1 dark-16-semi">OS name</label>
                                                    <v-select
                                                            v-model="selectedOs"
                                                            :options="osNameOption"
                                                            :searchable="false"
                                                            :value="selected"
                                                    ></v-select>
                                                </b-col>
                                                <b-col cols="6">

                                                </b-col>
                                            </b-row>
                                        </div>
                                        <div class="w-100 d-flex align-items-center">
                                                <div class="mr-lg-4 w-100">
                                                    <label class="mb-lg-1 dark-16-semi">Name</label>
                                                    <input type="text" name="name" id="name" class="form-control" value="">
                                                </div>
                                                <div class="w-100">
                                                    <label class="mb-lg-1 dark-16-semi">Version</label>
                                                    <input type="text" name="name" id="version" class="form-control" value="">
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-button @click="previousStep()" class="back-button mt-lg-4">Back</b-button>
                        <b-button @click="nextStep()" class="next-button mt-lg-4">Next</b-button>
                    </b-col>
                    <b-col cols="2">
                        <create-ticket-sidebar ref="createTicketSidebar"></create-ticket-sidebar>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <footer-section class="mt-lg-5"></footer-section>
    </div>
</template>

<script>

    import createTicketSidebar from './create-ticket-sidebar/create-ticket-sidebar.vue'
    export default {
        components:{createTicketSidebar},
        props: {
        },
        data(){
            return{
                currentStep: 1,
                organizationSelected:{label: 'Gluu'},
                organizationOptions:[
                    {label: 'Gluu'}
                ],
                assignedToValues: [],
                assignedToOption: [
                    { title: 'William', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Nasser', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'John', desc: '', img: 'static/img/avatar.9a53d1c.svg' },
                    { title: 'Karim', desc: '', img: 'static/img/avatar.9a53d1c.svg' }
                ],
                newDevelopmentIssue: false,
                productionOutage:false,
                preProductionIssues:false,
                minorIssues:false,
                productionImpaired:false,
                installation:false,
                identityManagement:false,
                singleSignOn:false,
                authentication:false,
                designCustomization:false,
                accessManagement:false,
                maintenance:false,
                upgrade:false,
                featureRequest:false,
                outages:false,
                logOut:false,
                other:false,
                version4_0:false,
                version3_1_5:false,
                version3_1_4:false,
                version3_1_3:false,
                version3_1_2:false,
                version3_1_1:false,
                version3_0_1:false,
                version2_4_4:false,
                selectedOs:'CentOs',
                selectOsVersion: '3.1.2',
                osNameOption: ['CentOs', 'Windows 10'],
                osVersion : ['3.1.2', '3.1.3', '3.1.3']


            }
        },
        methods:{
            nextStep: function() {
                if (this.currentStep <= 8){
                    this.currentStep ++;
                    this.ref.createTicketSidebar.currentStep = this.currentStep;
                }
            },
            previousStep: function() {
                if (this.currentStep >= 2){
                    this.currentStep --;
                    this.ref.createTicketSidebar.currentStep = this.currentStep;
                }
            },
            categorySelection: function(category){
                if(category == 1){
                    this.installation = !this.installation;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 2){
                    this.installation = false;
                    this.identityManagement = !this.identityManagement;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 3){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn= !this.singleSignOn,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 4){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication= !this.authentication,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if( category == 5 ){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization= !this.designCustomization,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 6){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement= !this.accessManagement,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 7){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance= !this.maintenance,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 8){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade= !this.upgrade,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 9){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest= !this.featureRequest,
                        this.outages=false,
                        this.logOut=false,
                        this.other=false
                } else if (category == 10){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages= !this.outages,
                        this.logOut=false,
                        this.other=false
                } else if (category == 11){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=  !this.logOut,
                        this.other=false
                } else if (category == 12){
                    this.installation = false;
                    this.identityManagement = false;
                    this.singleSignOn=false,
                        this.authentication=false,
                        this.designCustomization=false,
                        this.accessManagement=false,
                        this.maintenance=false,
                        this.upgrade=false,
                        this.featureRequest=false,
                        this.outages=false,
                        this.logOut=false,
                        this.other= !this.other
                }
            },
            versionSelection: function (version) {
                if(version == 1){
                    this.version4_0 = !this.version4_0;
                    this.version3_1_5=false;
                        this.version3_1_4=false;
                        this.version3_1_3=false;
                        this.version3_1_2=false;
                        this.version3_1_1=false;
                        this.version3_0_1=false;
                        this.version2_4_4=false;
                } else if (version == 2){
                    this.version4_0 = false;
                    this.version3_1_5= !this.version3_1_5;
                    this.version3_1_4=false;
                    this.version3_1_3=false;
                    this.version3_1_2=false;
                    this.version3_1_1=false;
                    this.version3_0_1=false;
                    this.version2_4_4=false;
                } else if (version == 3){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= !this.version3_1_4;
                    this.version3_1_3=false;
                    this.version3_1_2=false;
                    this.version3_1_1=false;
                    this.version3_0_1=false;
                    this.version2_4_4=false;
                } else if (version == 4){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= false;
                    this.version3_1_3= !this.version3_1_3;
                    this.version3_1_2=false;
                    this.version3_1_1=false;
                    this.version3_0_1=false;
                    this.version2_4_4=false;
                } else if (version == 5 ){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= false;
                    this.version3_1_3= false;
                    this.version3_1_2= !this.version3_1_2;
                    this.version3_1_1=false;
                    this.version3_0_1=false;
                    this.version2_4_4=false;
                } else if (version == 6){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= false;
                    this.version3_1_3= false;
                    this.version3_1_2= false;
                    this.version3_1_1= !this.version3_1_1;
                    this.version3_0_1=false;
                    this.version2_4_4=false;
                } else if (version == 7){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= false;
                    this.version3_1_3= false;
                    this.version3_1_2= false;
                    this.version3_1_1= false;
                    this.version3_0_1= !this.version3_0_1;
                    this.version2_4_4=false;
                } else if (version == 8){
                    this.version4_0 = false;
                    this.version3_1_5= false;
                    this.version3_1_4= false;
                    this.version3_1_3= false;
                    this.version3_1_2= false;
                    this.version3_1_1= false;
                    this.version3_0_1= false;
                    this.version2_4_4= !this.version2_4_4;
                }
            }
        }
    };
</script>
<style>
    .newDevelopmentIssues-createTicket-off{
        border-color:transparent;
        background-color: #00B372;
        color:white;
    }
    .newDevelopmentIssues-createTicket-on{
        border: 1px solid #c7f4bd;
        background-color: white;
        color:#00B372
    }
    .productionOutage-createTicket-off{
        border-color:transparent;
        background-color: #FF3535;
        color:white;
    }
    .productionOutage-createTicket-on{
        border: 1px solid #FADFDF;
        background-color: white;
        color:#FF3535;
    }
    .preProductionIssues-createTicket-off{
        border-color:transparent;
        background-color: #B736FF;
        color:white;
    }
    .preProductionIssues-createTicket-on{
        border: 1px solid #E8DCEF;
        background-color: white;
        color:#B736FF;
    }
    .minorIssues-createTicket-off{
        border-color:transparent;
        background-color: #5967FF;
        color:white;
    }
    .minorIssues-createTicket-on{
        border: 1px solid #E7E9FF;
        background-color: white;
        color:#5967FF;
    }
    .productionImpaired-createTicket-off{
        border-color:transparent;
        background-color: #FF8336;
        color:white;
    }
    .productionImpaired-createTicket-on{
        border: 1px solid #FFEDE1;
        background-color: white;
        color:#FF8336;
    }
    .white-stroke{
        stroke: white;
        transition: 0.5s !important;
    }
    .white-fill{
        fill: white;
        transition: 0.5s !important;
    }
    .white-color{
        color: white !important;
        transition: 0.5s;
    }
    .base-color-background{
        border: 2px solid #00B372;
        background-color: #00B372 !important;
        transition: 0.5s !important;
    }
    .base-color-stroke{
        stroke: #00b372;
        transition: 0.5s !important;
    }
</style>
