<template>

    <div id="ticket-details-page-container">

        <nav-bar></nav-bar>

        <div id="breadcrumbs-container"  class="mt-lg-5">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <a href="#" class="first-page">Dashboard /</a>
                        <a href="#" class="second-page">Tickets /</a>
                        <a href="#" class="third-page">#5234</a>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div id="content-container" class="mt-lg-4">

            <b-container>

                <b-row>
                    <b-col lg="9">

                        <div id="ticket-details-content-header-container">
                            <b-row>
                                <b-col cols="9">
                                    <h1 class="ticket-details-header">502 Gateway Error - Failed to load configuration from LDAP - Gluu Docker Multi-node  <span>#5234</span></h1>
                                </b-col>
                                <b-col cols="3">
                                    <div class="ticket-details-subheader d-flex justify-content-end">
                                        <b-img v-b-tooltip.hover title="Visible to staff and colleagues" :src="padlockSvgUrl"/>
                                        <b-button v-b-modal.editTicket class="ml-lg-2 primary-btn-gluu">Edit</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <b-row class="mt-lg-4">
                            <b-col cols="2">
                                <div class="user-details-container">

                                    <div class="card-left-side-gluu d-flex justify-content-center align-items-start">
                                        <div class="d-flex flex-column align-items-start">
                                            <b-card-img :src="avatarUrl" rounded="circle" class="img-fluid " />

                                            <div class="card-left-side-info-gluu d-flex justify-content-start flex-column mt-lg-1">
                                                <b-badge class="card-left-side-info-usertype-gluu">Staff</b-badge>
                                                <div class="d-flex flex-column mt-lg-3">
                                                    <span class="card-left-side-info-name-gluu">William Lowe</span>
                                                    <span class="card-left-side-info-company-gluu">chris@gluu.org</span>
                                                </div>
                                                <div class="mt-lg-2">
                                                    <badge color="green">Gluu</badge>
                                                    <badge color="yellow">Enterprise</badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </b-col>
                            <b-col cols="10">

                                <div class="ticket-details-content-container">

                                    <div>
                                        <b-card no-body>

                                            <b-card-header class="d-flex align-items-center justify-content-between">

                                                <div>30 Aug 2018 at 2:24 PM GMT</div>
                                                <div class="d-flex align-items-center" id="ticketDetailsEdit-popover-container">
                                                    <b-button class="ticket-details-content-edit-btn-gluu">Edit</b-button>
                                                    <b-button class="ticket-details-content-copy-link-btn-gluu">Copy Link</b-button>
                                                    <div class="d-flex flex-column text-md-center">
                                                        <div id="ticketDetailsEdit-sync" >
                                                            <b-img class="ticket-details-content-ellipsis-icon-gluu" :src="ellipsisSvgUrl" />
                                                        </div>

                                                        <div>
                                                            <b-popover v-on:show="$root.$emit('bv::hide::popover')" container="ticketDetailsEdit-popover-container" placement="bottomleft"  :show.sync="show" target="ticketDetailsEdit-sync">
                                                                <b-dropdown-item>Copy Link</b-dropdown-item>
                                                                <b-dropdown-item>Open new ticket</b-dropdown-item>
                                                                <b-dropdown-item v-b-modal.deleteTicketModal>Delete</b-dropdown-item>
                                                            </b-popover>
                                                        </div>
                                                    </div>
                                                </div>

                                            </b-card-header>

                                            <b-card-body>
                                               <vue-mark-down :source="testingMarkDownString3"></vue-mark-down>
                                            </b-card-body>

                                            </b-card>
                                    </div>
                                    <div>
                                        <div class="timeline">
                                            <div class="entry">
                                                <div class="title">
                                                    <b-img  :src="ticketSvgUrl" />
                                                </div>
                                                <div class="body">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <b-card-img :src="avatarUrl" rounded="circle" class="" />
                                                        </div>
                                                        <div>
                                                            William Assigned Robi 2 hours ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="entry">
                                                <div class="title">
                                                    <b-img  :src="commentNotificationSvgUrl" />
                                                </div>
                                                <div class="body">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <b-card-img :src="avatarUrl" rounded="circle" class="" />
                                                        </div>
                                                        <div>
                                                            <a href="#">William</a> Added a comment 5 hours ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="entry">
                                                <div class="title">
                                                    <b-img  :src="ticketSvgUrl" />
                                                </div>
                                                <div class="body">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <b-card-img :src="avatarUrl" rounded="circle" class="" />
                                                        </div>
                                                        <div>
                                                            William Created this ticket
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="entry">
                                                <div class="title">
                                                    <b-img  :src="ticketSvgUrl" />
                                                </div>
                                                <div class="body">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <b-card-img :src="avatarUrl" rounded="circle" class="" />
                                                        </div>
                                                        <div>
                                                            William Assigned nasir 9 hours ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="see-more-link mt-lg-3">
                                            <a href="#">See more ...</a>
                                        </div>
                                    </div>
                                </div>

                            </b-col>

                        </b-row>

                        <b-row class="mt-lg-5 mb-lg-4">
                            <b-col cols="12">

                                <h4>3 Responses</h4>
                                <hr>

                            </b-col>
                        </b-row>

                        <b-row class="mt-lg-4">
                            <b-col cols="2">
                                <div class="user-details-container">

                                    <div class="card-left-side-gluu d-flex justify-content-center align-items-start">
                                        <div class="d-flex flex-column align-items-start">
                                            <b-card-img :src="avatarUrl" rounded="circle" class="img-fluid " />

                                            <div class="card-left-side-info-gluu d-flex justify-content-start flex-column mt-lg-1">
                                                <b-badge class="card-left-side-info-usertype-gluu">Staff</b-badge>
                                                <div class="d-flex flex-column mt-lg-3">
                                                    <span class="card-left-side-info-name-gluu">William Lowe</span>
                                                    <span class="card-left-side-info-company-gluu">chris@gluu.org</span>
                                                </div>
                                                <div class="mt-lg-2">
                                                    <badge color="green">Gluu</badge>
                                                    <badge color="yellow">Enterprise</badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </b-col>
                            <b-col cols="10">
                                <div class="ticket-details-content-container">

                                    <div>
                                        <b-card no-body>

                                            <b-card-header class="d-flex align-items-center justify-content-between">

                                                   <div>30 Aug 2018 at 2:24 PM GMT</div>
                                                   <div>
                                                       <b-button class="ticket-details-content-edit-btn-gluu">Edit</b-button>
                                                       <b-button class="ticket-details-content-copy-link-btn-gluu">Copy Link</b-button>
                                                       <b-img class="ticket-details-content-ellipsis-icon-gluu" :src="ellipsisSvgUrl" />
                                                   </div>

                                            </b-card-header>

                                            <b-card-body>

                                                <vue-mark-down :html="true" :source='testingMarkDownString'></vue-mark-down>
                                            </b-card-body>

                                        </b-card>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>

                        <b-row class="mt-lg-4">
                            <b-col cols="2">
                                <div class="user-details-container">

                                    <div class="card-left-side-gluu d-flex justify-content-center align-items-start">
                                        <div class="d-flex flex-column align-items-start">
                                            <b-card-img :src="avatarUrl" rounded="circle" class="img-fluid " />

                                            <div class="card-left-side-info-gluu d-flex justify-content-start flex-column mt-lg-1">
                                                <b-badge class="card-left-side-info-usertype-gluu">Staff</b-badge>
                                                <div class="d-flex flex-column mt-lg-3">
                                                    <span class="card-left-side-info-name-gluu">William Lowe</span>
                                                    <span class="card-left-side-info-company-gluu">chris@gluu.org</span>
                                                </div>
                                                <div class="mt-lg-2">
                                                    <badge color="green">Gluu</badge>
                                                    <badge color="yellow">Enterprise</badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </b-col>
                            <b-col cols="10">
                                <div class="ticket-details-content-container">

                                    <div>
                                        <b-card no-body>

                                            <b-card-header class="d-flex align-items-center justify-content-between">

                                                <div>30 Aug 2018 at 2:24 PM GMT</div>
                                                <div>
                                                    <b-button class="ticket-details-content-edit-btn-gluu">Edit</b-button>
                                                    <b-button class="ticket-details-content-copy-link-btn-gluu">Copy Link</b-button>
                                                    <b-img class="ticket-details-content-ellipsis-icon-gluu" :src="ellipsisSvgUrl" />
                                                </div>

                                            </b-card-header>

                                            <b-card-body>

                                                <vue-mark-down :html="true" :source='testingMarkDownString2'></vue-mark-down>


                                              <code-block>
                                                  entryPoint:'https://glusaml.pomsgai.io/idp/profile/SAML2/Redirect/SSO',
                                                  issuer: 'https://2a405fb0.ngrok.io/auth/saml/redirect', callbackUrl:
                                                  'https://2a405fb0.ngrok.io/auth/saml/redirect', issuer: 'https://2a405fb0.ngrok.io',
                                                  identifierFormat: ' urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
                                              </code-block>

                                            </b-card-body>

                                        </b-card>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>

                        <b-row class="mt-lg-5">
                            <b-col cols="12">
                                <div id="post-a-response-container">
                                    <div class="mb-lg-3 post-a-response-container-header"><div>Post a response</div></div>
                                    <div>
                                       <MarkdownEditor></MarkdownEditor>
                                    </div>
                                    <div class="mt-lg-3 d-flex">
                                        <div class="w-100 mr-lg-3">
                                            <label class="post-a-response-container-label">Assign to:</label>
                                            <multi-select
                                                    class="select-tags-gluu"
                                                    v-model="orderByValue"
                                                    :options="orderByOptions"
                                                    label="name"
                                                    track-by="name"
                                                    :show-labels="false"
                                                    placholder=""
                                                    :allowEmpty="false"
                                                    openDirection="bottom"
                                                    :searchable="true"
                                            ></multi-select>
                                        </div>
                                        <div class="w-100 ml-lg-3">
                                            <label class="post-a-response-container-label">Ticket status:</label>
                                            <multi-select
                                                    class="select-tags-gluu"
                                                    v-model="orderByValue"
                                                    :options="orderByOptions"
                                                    label="name"
                                                    track-by="name"
                                                    :show-labels="false"
                                                    placholder=""
                                                    :allowEmpty="false"
                                                    openDirection="bottom"
                                                    :searchable="false"
                                            ></multi-select>
                                        </div>
                                    </div>
                                    <div class="mt-lg-3">
                                        <b-button class="cta-btn-gluu">Comment</b-button>
                                        <b-button class="secondary-btn-gluu">Close ticket</b-button>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>

                    </b-col>

                    <b-col lg="3">
                        <ticket-detail-sidebar></ticket-detail-sidebar>
                    </b-col>

                </b-row>

            </b-container>

        </div>

        <footer-section class="mt-lg-5"></footer-section>

        <div>
            <b-modal id="editTicket" class="card-gluu" title="Edit ticket information" centered>


                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="name2" class="mb-lg-1">Subject</label>
                    <input type="text" name="name" id="name2" class="form-control" value="Installing Gluu server using kubernetes on AWS">
                </div>

                <div class="form-control-container d-flex flex-column mb-lg-4">
                    <label for="name2" class="mb-lg-1">Description</label>
                    <MarkdownEditor propValue="Hi Karsten, I think there were some reasons ( sorry, can't recall all of them ) for which we came to Oracle JDK, I am assigning Java dev to get the best answer. However.. one thing I can suggest, it's better to stick with Gluu's own components, the more your invite alien pieces... the more it will become harder to troubleshoot.">

                    </MarkdownEditor>
                </div>

                <div class="form-control-container d-flex mb-lg-4">
                    <div class="mr-lg-3">
                        Visibility:
                    </div>
                    <b-form-radio class="mr-lg-5 " value="A" v-model="radioButtonsSelected" name="card-payment">
                        Private
                    </b-form-radio>
                    <b-form-radio value="B" v-model="radioButtonsSelected" name="paypal-payment">
                        Public
                    </b-form-radio>
                </div>


                <div class="form-control-container d-flex edit-ticket-modal-button-container">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>

            </b-modal>
            <b-modal id="deleteTicketModal" class="card-gluu" hide-footer="true" hide-header="true" centered>

                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <div class="dark-18-medium">Are you sure you want to delete this ticket?</div>
                </div>
                <div class="form-control-container d-flex">
                    <b-button class="btn" @click="hideDeleteModal()">No</b-button>
                    <b-button class="btn">Delete</b-button>
                </div>

            </b-modal>
        </div>

    </div>

</template>


<script>
    import ticketDetailSidebar from './ticket-detail-sidebar/ticket-detail-sidebar'
    import Badge from "../../components/includes/badge/badge";
    import CodeBlock from "./code-block/code-block";
    import MarkdownEditor from "../../components/includes/markdown-editor/MarkdownEditor";
    import VueMarkDown from 'vue-markdown'

    export default {
        components: {MarkdownEditor, CodeBlock, Badge, ticketDetailSidebar, VueMarkDown},
        name: "ticket-detail",
        data(){
            return{
                testingMarkDownString:"Kesavan,\n" +
                    "\n" +
                    "There will have to be some legwork done on your part, but you of course can run a multi-host example not using Digital Ocean. You'll have to fully understand docker-machine and docker swarm. A place to start is looking how the manager and workers are configured initially:\n" +
                    "\n" +
                    "[https://github.com/GluuFederation/gluu-docker/blob/3.1.3/examples/multi-hosts/nodes.sh#L20](#)\n" +
                    "\n" +
                    "Then continue through that script to understand how to launch everything.\n" +
                    "\n" +
                    "Paragraph file [Resource.txt](#)",
                testingMarkDownString2:"It turns out this feature isn't working properly in 3.1.3 or 3.1.4. Please remove the entry you created in web UI, for now. If you need a custom nameid, you'll have to use manual approach as described in section \"Configure NameID - Manual configuration\" in this doc.",
                testingMarkDownString3:"Hi Team,\n" +
                    "\n" +
                    "Reference link : [\"https://github.com/GluuFederation/gluu-docker/tree/3.1.3/examples/multi-hosts\"](#)\n" +
                    "\n" +
                    "Above github link refer the multi host setup for digital ocean, but we need without digitail ocean, so we did manual docker setup in our server and followed the script which is return in github.\n" +
                    "\n" +
                    "After installation of multi host gluu docker and container we facing the issue in nginx, it is return 502 Bad Gateway error.\n" +
                    "\n" +
                    "then, when we debug the oxtrust container log it shows the below issue.\n" +
                    "\n" +
                    "ERROR \\[main\\] \\[org.gluu.oxtrust.config.ConfigurationFactory\\] (ConfigurationFactory.java:298) Failed to load application configuration from file: /etc/gluu/conf/oxtrust-config.json ERROR \\[main\\] \\[org.gluu.oxtrust.config.ConfigurationFactory\\] (ConfigurationFactory.java:153) - Failed to load configuration from LDAP. Please fix it!!!.\n" +
                    "\n" +
                    "Paragraph file [Resource.txt](#)\n" +
                    "\n" +
                    "Website file [Logo.pdf](#)\n" +
                    "\n" +
                    "[Website.jpg](#)",
                orderByValue: {name: 'Most recent'},
                orderByOptions: [
                    { name: 'Most recent'},
                    { name: 'Least recent'},
                    { name: 'User (a-z)'},
                    { name: 'User (z-a)'}
                ],
                radioButtonsSelected:'A'
            }
        },
        methods: {
            hideDeleteModal() {
                this.$root.$emit('bv::hide::modal','deleteTicketModal', '#btnShow');
            }
        },
        computed:{
            padlockSvgUrl(){
                return require("../../assets/images/padlock.svg");
            },
            avatarUrl() {
                return require('../../assets/images/avatar.svg');
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            ticketDetailImage(){
                return require('../../assets/images/ticket_detail_image.svg');
            },
            ellipsisSvgUrl(){
                return require('../../assets/images/ellipsis.svg');
            },
            commentNotificationSvgUrl(){
                return require('../../assets/images/commentNotification.svg');
            },
            ticketSvgUrl(){
                return require('../../assets/images/ticket.svg');
            }
        }
    }
</script>

<style module>
    body{
        background-color: #ffffff;
    }
</style>