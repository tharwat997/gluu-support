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
                                <b-popover v-on:show="$root.$emit('bv::hide::popover')" container="assignedTo-container"  placement="left"  target="assignedTo-sync">
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
                            <b-popover v-on:show="$root.$emit('bv::hide::popover')"  id="assignedToPopOver"   container="assignedToPopOverContainer" v-on:shown="assignedToIsActive = true" v-on:hidden="assignedToIsActive = false" placement="bottomleft"   target="assignedToSelect-sync">
                                <div class="popoverGlobalBorder">
                                <div class="dark-16-regular mt-lg-3 pr-lg-4 pl-lg-4 w-100">Assign up to 5 people to this issues</div>
                                <hr>
                                <div class="mb-lg-3">
                                    <multi-select
                                            id="assignedToTicketDetails"
                                            v-model="assignedToValues"
                                            class="select-tags-gluu"
                                            label="title"
                                            track-by="title"
                                            :options="assignedToOption"
                                            :multiple="true"
                                            :show-labels="false"
                                            :searchable="true"
                                            placeholder="Search name…"
                                            :custom-label="customLabel"
                                            openDirection="bottom"
                                            :close-on-select="false"
                                            :showNoResults="false"
                                    >
                                        <template slot="singleLabel" slot-scope="props"><img class="option__image" :src="avatarUrl" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.title }}</span></span></template>
                                        <template slot="option" slot-scope="props"><img class="option__image" :src="avatarUrl" alt="No Man’s Sky">
                                            <div class="option__desc d-flex align-items-center w-100 pr-lg-4"><span class="option__title">{{ props.option.title }}</span><svg class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg><span class="option__small">{{ props.option.desc }}</span></div>
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

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Status</div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-row align-items-center">
                   <badge color="green">In progress</badge>
                </div>

                <div class="edit-svg-container ml-auto" :class="{ 'active-background' : statusIsActive}">
                    <svg id="statusSelect-sync" class="penSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.999" height="13" viewBox="0 0 12.999 13">
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

                <div id="statusPopoverContainer">
                    <b-popover v-on:show="$root.$emit('bv::hide::popover');" container="statusPopoverContainer" v-on:shown="statusIsActive = true" v-on:hidden="statusIsActive = false" placement="bottomleft"   target="statusSelect-sync">
                        <b-dropdown-item @click="newDevelopmentIssues = !newDevelopmentIssues">
                            <div id="statusPopoverContainer-lightBluebox"></div>
                            <div :class="{'lightblue-color' : newDevelopmentIssues}">New</div>
                            <svg v-show="newDevelopmentIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                        </b-dropdown-item>
                        <b-dropdown-item @click="productionOutage = !productionOutage">
                            <div id="statusPopoverContainer-blackbox"></div>
                            <div :class="{'black-color' : productionOutage}">Assigned</div>
                            <svg v-show="productionOutage" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                        </b-dropdown-item>
                        <b-dropdown-item @click="preProductionIssues = !preProductionIssues">
                            <div id="statusPopoverContainer-lightgreenbox"></div>
                            <div :class="{'lightgreen-color': preProductionIssues}">In progress</div>
                            <svg v-show="preProductionIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                        </b-dropdown-item>
                        <b-dropdown-item @click="minorIssues = !minorIssues">
                            <div id="statusPopoverContainer-yellowbox"></div>
                            <div :class="{'yellow-color' : minorIssues}">Pending</div>
                            <svg v-show="minorIssues" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                        </b-dropdown-item>
                        <b-dropdown-item @click="productionImpaired = !productionImpaired">
                            <div id="statusPopoverContainer-lightredbox"></div>
                            <div :class="{'lightred-color' : productionImpaired}">Closed</div>
                            <svg v-show="productionImpaired" class="ml-auto greenTickSvg" xmlns="http://www.w3.org/2000/svg" width="14" height="10.769" viewBox="0 0 14 10.769"><path d="M.162,5.923a.521.521,0,0,1,0-.754l.754-.754a.521.521,0,0,1,.754,0l.054.054L4.685,7.646a.26.26,0,0,0,.377,0L12.277.162h.054a.521.521,0,0,1,.754,0l.754.754a.521.521,0,0,1,0,.754h0L5.223,10.608a.521.521,0,0,1-.754,0L.269,6.085Z" transform="translate(0 0)" fill="#09b476"/></svg>
                        </b-dropdown-item>
                    </b-popover>
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

                <div class="d-flex flex-column text-md-center edit-svg-container-assigned-to"  :class="{ 'active-background-assigned-to' : categoryIsActive}">
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
                    <div id="categoryPopoverContainer">
                        <b-popover v-on:show="$root.$emit('bv::hide::popover')"  container="categoryPopoverContainer" v-on:shown="categoryIsActive = true" v-on:hidden="categoryIsActive = false" placement="bottomleft"   target="categorySelect-sync">
                            <div class="popoverGlobalBorder">
                                <div class="dark-16-regular mt-lg-3 pr-lg-4 pl-lg-4 w-100"></div>

                                <div class="mb-lg-3">
                                    <multi-select
                                            id="categoryMultiSelect"
                                            v-model="categoryValues"
                                            class="select-tags-gluu "
                                            label="title"
                                            track-by="title"
                                            :options="categoryOptions"
                                            :multiple="true"
                                            :show-labels="false"
                                            :searchable="true"
                                            placeholder="Search category"
                                            :custom-label="customLabel"
                                            openDirection="bottom"
                                            :close-on-select="false"
                                            :showNoResults="false"
                                    >
                                        <template slot="option" slot-scope="props">
                                            <div class="option__desc d-flex align-items-center w-100 pr-lg-4">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="59.96" height="41.54" viewBox="0 0 59.96 41.54"><g transform="translate(0.01 -0.23)"><path d="M53.7,41.04H5.76A5.767,5.767,0,0,1,0,35.28V32.46a1.484,1.484,0,0,1,1.5-1.5H4.32V3.9A3.893,3.893,0,0,1,8.22,0h42.9a4.05,4.05,0,0,1,4.02,3.78V30.96h2.82a1.484,1.484,0,0,1,1.5,1.5v2.82A5.767,5.767,0,0,1,53.7,41.04ZM3,33.96v1.32a2.8,2.8,0,0,0,2.76,2.76h48a2.8,2.8,0,0,0,2.76-2.76V33.96H53.7a1.484,1.484,0,0,1-1.5-1.5V4.02A1.142,1.142,0,0,0,51.18,3H8.22a.924.924,0,0,0-.9.9V32.46a1.483,1.483,0,0,1-1.5,1.5ZM33.54,35.7H25.98a3.1,3.1,0,0,1-2.76-1.741H10.62a1.52,1.52,0,0,1-1.5-1.5,1.484,1.484,0,0,1,1.5-1.5h13.8a1.484,1.484,0,0,1,1.5,1.5V32.7h7.62V32.46a1.484,1.484,0,0,1,1.5-1.5H48.9a1.5,1.5,0,1,1,0,3H36.3A3.017,3.017,0,0,1,33.54,35.7ZM27.18,23.52A1.449,1.449,0,0,1,26.1,23.1L22.44,19.38a1.364,1.364,0,0,1-.449-.989,1.525,1.525,0,0,1,.449-1.111,1.362,1.362,0,0,1,1.028-.45,1.51,1.51,0,0,1,1.073.45l2.64,2.64,7.86-7.74a1.363,1.363,0,0,1,1.028-.45,1.512,1.512,0,0,1,1.073.45,1.364,1.364,0,0,1,.449.989,1.526,1.526,0,0,1-.449,1.112L28.26,23.1A1.528,1.528,0,0,1,27.18,23.52Z" transform="translate(0.24 0.48)" fill="#bec1c3" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/></g></svg>
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

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">Gluu version</div>

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

        <div class="sidebar-item">

            <div class="mb-lg-2 header-text">OS Version</div>

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
        <b-modal id="editOsVersion" class="card-gluu" hide-footer="true" hide-header="true" centered>

            <div class="dark-22-medium mb-lg-3">Edit OS Version</div>

            <div class="form-control-container d-flex flex-column mb-lg-3">
                <label for="email" class="mb-lg-1 dark-16-semi">Which OS</label>
                <v-select
                        v-model="osVersionSelected"
                        :options="osVersionsOptions"
                        :searchable="false"
                        :value="osVersionSelected"
                ></v-select>
            </div>
            <div class="form-control-container d-flex flex-column mb-lg-3">
                <label for="osversion" class="mb-lg-1 dark-16-semi">What Version</label>
                <input type="email" name="osversion" id="osversion" class="form-control" placeholder="3">
            </div>
            <div class="form-control-container d-flex">
                <button>Save</button>
                <button @click="hideEditOsVersionModal()">Cancel</button>
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
                closedStatus:false
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