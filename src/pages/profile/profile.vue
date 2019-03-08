<template>
    <div id="profile-container">
        <nav-bar></nav-bar>
        <div id="content-container" class="mt-lg-5">
            <b-container>
               <b-row>

                   <b-col cols="4">
                       <profile-side-bar @clicked="onClickChild"></profile-side-bar>
                   </b-col>

                   <b-col :class="{'mr-auto col-5' : addNewCard , 'col-8' :!addNewCard }">
                       <div id="profile-content">
                           <div>
                               <div v-if="NotificationsActive" id="notifications-tab">
                                   <b-card class="card-gluu">

                                       <div class="d-flex align-items-center justify-content-between card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                           <div class="card-title-gluu">Notifications <span v-if="manageNotifications">Settings</span> </div>
                                           <button @click="manageNotifications = !manageNotifications">Manage notification settings</button>
                                       </div>

                                       <hr v-if="manageNotifications">

                                       <div v-if="!manageNotifications" id="inner-tabs" class=" mb-lg-4">
                                           <b-tabs content-class="mt-3">
                                               <b-tab title="All activities" active id="all-activities-tab">

                                                   <div class="ticket-created-notification mb-lg-4">
                                                       <div class="mb-lg-2">A new ticket has been opened</div>
                                                       <div class="response">
                                                           <div class="mb-lg-1">Docket single host oxtrust can not downlowd SSL certificate</div>
                                                           <div class="mb-lg-1">It is a long established fact that a reader will be distracted by the readable content of a page</div>
                                                           <div>Just now</div>
                                                       </div>
                                                   </div>

                                                   <div class="ticket-responses-notification mb-lg-4">
                                                       <div class="mb-lg-2"><span class="reply-from">William</span> replied to your ticket</div>
                                                       <div class="response">
                                                           <div class="mb-lg-1">Docket single host oxtrust can not downlowd SSL certificate</div>
                                                           <div class="mb-lg-1">It is a long established fact that a reader will be distracted by the readable content of a page</div>
                                                           <div>Just now</div>
                                                       </div>
                                                   </div>

                                                   <div class="ticket-activity-status mb-lg-4">
                                                       <div class="mb-lg-1">Your invoice of september is ready</div>
                                                       <div>Just now</div>
                                                   </div>

                                               </b-tab>

                                               <b-tab title="Your activities" id="your-activities-tab">

                                                   <div class="ticket-created-notification mb-lg-4">
                                                       <div class="mb-lg-2 d-flex justify-content-between">
                                                           <div class="notification-event">Nasir <span>Created a ticket</span></div>
                                                           <div class="notification-event-time">9 hours ago</div>
                                                       </div>
                                                       <div class="response">
                                                           <div class="response-heading mb-lg-3">Cache option not available in cluster manager V 3.1.4-06</div>
                                                           <div class="mb-lg-1">Hi Gluu support,</div>
                                                           <div class="mb-lg-1">I'm trying to get two servers clustered using the cluster manager.</div>
                                                       </div>
                                                   </div>

                                                   <div class="ticket-responses-notification mb-lg-4">
                                                       <div class="mb-lg-2 d-flex justify-content-between">
                                                           <div class="notification-event">Nasir <span>Replied to your ticket</span></div>
                                                           <div class="notification-event-time">Yestarday</div>
                                                       </div>
                                                       <div class="response">
                                                           <div class="mb-lg-1">I think we know the origin of the bug.
                                                               It has to do with a button that comes pre-selected in 3.1.4 and when you drop down to 3.1.2,
                                                               it doesn't automatically deselect it, revealing the <badge color="red">Cache Configuration</badge>  menu. A fix is coming shortly.
                                                           </div>
                                                       </div>
                                                   </div>

                                                   <div class="ticket-responses-notification-2 mb-lg-4">
                                                       <div class="mb-lg-2 d-flex justify-content-between">
                                                           <div class="notification-event">Nasir <span>Replied to your ticket</span></div>
                                                           <div class="notification-event-time">Jan18, 2018</div>
                                                       </div>
                                                       <div class="response">
                                                           <div class="mb-lg-2">Can you specify what is trying to connect to OpenDJ here?</div>
                                                           <div class="highlighted-area">dsreplication.java-args=-Xms8m -client -Dcom.sun.jndi.ldap.object.disableEndpoint Identification=true</div>
                                                       </div>
                                                   </div>

                                                   <div class="ticket-created-notification mb-lg-4">
                                                       <div class="mb-lg-2 d-flex justify-content-between">
                                                           <div class="notification-event">Nasir <span>Created a ticket</span></div>
                                                           <div class="notification-event-time">Jan 16, 2018</div>
                                                       </div>
                                                       <div class="response">
                                                           <div class="response-heading mb-lg-3">Java update - Cert Error w/OpenDJ</div>
                                                           <div class="mb-lg-1">Hi</div>
                                                           <div class="mb-lg-1">Upon a recent patch to our in-house servers (to 1.8.0_191), our servers are no longer able to …</div>
                                                       </div>
                                                   </div>

                                               </b-tab>
                                           </b-tabs>
                                       </div>

                                       <div v-if="manageNotifications" id="manage-notifications-settings">

                                           <div class="d-flex align-items-center justify-content-between card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                               <div>Notification setting for new tickets only</div>
                                           </div>

                                           <div class="d-flex mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                               <checkbox id="allNewTickets">All new tickets</checkbox>
                                           </div>

                                           <hr>

                                           <div class="d-flex align-items-center justify-content-between card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                               <div>Notification setting for new tickets and tickets update ( answer, status changes etc )</div>
                                           </div>

                                           <div class="d-flex align-items-center mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4" id="notifications-settings-checkbox-container">
                                               <div class="w-100">
                                                   <div class="notifications-settings-checkbox-column-header">
                                                       <div class="mb-lg-3">
                                                           <checkbox id="allTicketTypes" v-model="allTicketTypes">All ticket types</checkbox>
                                                       </div>
                                                   </div>
                                                   <div class="d-flex ml-lg-4 flex-column notifications-settings-checkbox-column-content">
                                                       <div>
                                                           <checkbox id="productionOutages" :checked="productionOutages">Production Outages</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="productionImpaired">Production Impaired</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="preProductionIssue">Pre-production issue</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="minorIssue">Minor Issue</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="newDevelopmentIssue">New development issue</checkbox>
                                                       </div>
                                                   </div>

                                               </div>
                                               <div class="w-100">
                                                   <div class="notifications-settings-checkbox-column-header">
                                                       <div class="mb-lg-3">
                                                           <checkbox id="allTicketCategories">All categories</checkbox>
                                                       </div>
                                                   </div>
                                                   <div class="d-flex ml-lg-4 flex-column notifications-settings-checkbox-column-content">
                                                       <div>
                                                           <checkbox id="productionOutages2">Production Outages</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="productionImpaired2">Production Impaired</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="preProductionIssue2">Pre-production issue</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="minorIssue2">Minor Issue</checkbox>
                                                       </div>
                                                       <div>
                                                           <checkbox id="newDevelopmentIssue2">New development Issue</checkbox>
                                                       </div>
                                                   </div>
                                               </div>

                                           </div>

                                       </div>

                                   </b-card>
                               </div>
                               <div v-if="profileActive"></div>
                               <div v-if="teamActive" id="team-tab">
                                   <div id="organization-information-container">

                                       <b-card class="card-gluu mb-lg-3">

                                           <div id="organization-information-container-header">
                                               <div id="organization-information-container-header-top-section" class="d-flex mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4 justify-content-between">
                                                   <div class="d-flex align-items-center">
                                                       <div class="mr-lg-3">
                                                           <b-img :src="organizationAvatarUrl" />
                                                       </div>

                                                       <div>
                                                           <div class="d-flex align-items-center">
                                                               <div class="mr-lg-2">Team orizon</div>
                                                               <div>
                                                                   <b-img :src="verifiedUrl" />
                                                               </div>
                                                           </div>
                                                           <div>A team of digital product thinker</div>
                                                           <div><a href="">Edit details</a></div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <b-button v-b-modal.editTeamProfile>Edit</b-button>
                                                   </div>
                                               </div>

                                               <hr>

                                               <div id="organization-information-container-header-bottom-section" class='d-flex mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4 align-items-center justify-content-between'>
                                                   <div class="d-flex flex-column">
                                                       <div class="mb-lg-1">Gluu Plan</div>
                                                       <div>VIP (Enterprise) <a href="">Change plan</a></div>
                                                   </div>
                                                   <div class="d-flex flex-column">
                                                       <div class="mb-lg-1">Payment cycle</div>
                                                       <div>Yearly</div>
                                                   </div>
                                                   <div class="d-flex flex-column">
                                                       <div class="mb-lg-1">Last subscription date</div>
                                                       <div>Jan 25, 2019</div>
                                                   </div>
                                                   <div class="d-flex flex-column">
                                                       <div class="mb-lg-1">Next subscription date</div>
                                                       <div>Jan 24, 2020</div>
                                                   </div>
                                               </div>
                                           </div>


                                       </b-card>

                                       <b-card class="card-gluu">

                                           <div id="organization-information-container-content">

                                               <div id="organization-information-container-content-header" class="d-flex align-items-center justify-content-between card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                                   <div class="d-flex flex-column">
                                                       <div class="card-title-gluu mb-lg-2">Team members</div>
                                                       <div>Users listed belongs to your team</div>
                                                   </div>
                                                   <button v-b-modal.inviteNewMember>Invite new</button>
                                               </div>

                                               <hr>

                                               <div id="organization-information-container-content-body" class="d-flex flex-column mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-2">

                                                   <div class="d-flex align-items-center mb-lg-4">
                                                       <div class="dark-18-medium mr-lg-1">7 Members •</div>
                                                       <div class="semi-dark-15-medium mr-lg-1">
                                                           You can add 2 more member(s) under your existing plan.
                                                       </div>
                                                       (<span class="base-15-medium">Medium</span>)
                                                   </div>

                                                   <div class="w-100">
                                                       <b-table  :items="teamMembersItems" :fields="teamMembersfields" id="team-members-table">

                                                           <span slot="Delete" slot-scope="data" v-html="data.value" />

                                                           <template slot="Name" slot-scope="data">
                                                               <div class="d-flex align-items-center">
                                                                   <b-img :src="avatarUrl" class="mr-lg-2" />
                                                                   <div class="dark-16-medium">{{data.value}}</div>
                                                               </div>
                                                           </template>

                                                           <template slot="Email" slot-scope="data">
                                                               <div class="dark-16-medium">{{data.value}}</div>
                                                           </template>

                                                           <template slot="Role" slot-scope="data">
                                                               <v-select
                                                                       v-model="selected"
                                                                       :options="options"
                                                                       :searchable="false"
                                                                       :value="selected"
                                                               ></v-select>
                                                           </template>

                                                           <template slot="Delete" slot-scope="data">
                                                               <div><b-img :src="deleteIconUrl" /></div>
                                                           </template>
                                                       </b-table>
                                                   </div>

                                               </div>
                                           </div>
                                       </b-card>

                                   </div>
                               </div>
                               <div v-if="partnersActive">PARTNER</div>
                               <div v-if="billingActive" id="billing-tab">
                                   <div v-show="!addNewCard">
                                       <b-card class="card-gluu mb-lg-3">
                                           <div id="payment-method-container" class="card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">

                                               <div class="d-flex align-items-center justify-content-between mb-lg-4">
                                                   <div class="card-title-gluu">Payment method</div>
                                                   <button @click="addNewCard = true" id="add-new-card-button">Add new card</button>
                                               </div>

                                               <div class="d-flex flex-column">
                                                   <div class="payment-method d-flex align-items-center justify-content-between">
                                                       <div class="d-flex">
                                                           <div class="d-flex">
                                                               <div class="mr-lg-1"><b-img :src="mastercardIconUrl" /></div>
                                                               <div class="mr-lg-3">
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                               </div>
                                                               <div class="mr-lg-2 dark-16-medium">6790</div>
                                                               <div class="mr-lg-2 dark-14-medium">MasterCard</div>
                                                           </div>
                                                       </div>

                                                       <div class="d-flex flex-column ">
                                                           <div class="mb-1 light-14-medium">Expiration date</div>
                                                           <div class="dark-14-medium">jan 10, 2019</div>
                                                       </div>

                                                       <div class="d-flex align-items-center">
                                                           <div class="mr-lg-3"><b-img :src="edit2IconUrl" /></div>
                                                           <div><b-img style="width: 28px;height: 28px;" :src="deleteIconUrl" /></div>

                                                       </div>
                                                   </div>
                                                   <hr>
                                                   <div class="payment-method d-flex align-items-center justify-content-between">

                                                       <div class="d-flex">
                                                           <div class="d-flex">
                                                               <div class="mr-lg-1"><b-img :src="visacardIconUrl" /></div>
                                                               <div class="mr-lg-3">
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                                   <b-img :src="dotsIconUrl" class="ml-lg-2" />
                                                               </div>
                                                               <div class="mr-lg-2 dark-16-medium">3180</div>
                                                               <div class="mr-lg-2 dark-14-medium">Visa</div>
                                                           </div>
                                                       </div>

                                                       <div class="d-flex flex-column ">
                                                           <div class="mb-1 light-14-medium">Expiration date</div>
                                                           <div class="dark-14-medium">jan 10, 2019</div>
                                                       </div>

                                                       <div class="d-flex align-items-center">
                                                           <div class="mr-lg-3"><b-img :src="edit2IconUrl" /></div>
                                                           <div><b-img style="width: 28px;height: 28px;" :src="deleteIconUrl" /></div>

                                                       </div>
                                                   </div>
                                               </div>

                                           </div>
                                       </b-card>
                                       <b-card class="card-gluu">
                                           <div id="billing-history-container" class="card-header-gluu">

                                               <div class="d-flex flex-column mb-lg-4 mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">
                                                   <div class="dark-18-medium mb-lg-2">Billing History</div>
                                                   <div class="light-14-medium">View invoices and receipts for all payments made on your gluu account.</div>
                                               </div>

                                               <div class="w-100">
                                                   <b-table  :items="billingHistoryItems" :fields="billingHistoryFields" id="billing-history-table">

                                                       <template slot="Date" slot-scope="data">
                                                           <div class="light-14-medium">{{data.value}}</div>
                                                       </template>

                                                       <template slot="Description" slot-scope="data">
                                                           <div class="light-14-medium">{{data.value}}</div>
                                                       </template>

                                                       <template slot="Amount" slot-scope="data">
                                                           <div class="light-14-medium">{{data.value}}</div>
                                                       </template>

                                                       <template slot="Link" slot-scope="data">
                                                           <div class="billing-history-table-invoice-link"><a href="">{{data.value}}</a></div>
                                                       </template>
                                                   </b-table>
                                               </div>

                                           </div>
                                       </b-card>
                                   </div>
                                   <div v-show="addNewCard">
                                       <b-card class="card-gluu">
                                           <div id="add-payment-method-container" class="card-header-gluu mb-lg-4 ml-lg-4 mr-lg-4 mt-lg-4">

                                               <div class="d-flex align-items-center justify-content-between mb-lg-4">
                                                   <div class="card-title-gluu">Add a new payment method</div>
                                               </div>

                                               <div class="d-flex mb-lg-4 mt-lg-4">
                                                   <b-form-radio class="mr-lg-5" value="A" v-model="radioButtonsSelected" name="card-payment">
                                                       <div class="d-flex align-items-center">
                                                           <b-img class="mr-lg-2" :src="creditCardSvgUrl" />
                                                           Credit/Debit card
                                                       </div>
                                                   </b-form-radio>
                                                   <b-form-radio value="B" v-model="radioButtonsSelected" name="paypal-payment">
                                                       <b-img :src="paypalSvgUrl" />
                                                   </b-form-radio>
                                               </div>

                                               <div v-show="radioButtonsSelected === 'A' ">
                                                   <div class="form-control-container d-flex flex-column mb-lg-3">
                                                       <label  class="mb-lg-1 dark-16-medium">Name on the card</label>
                                                       <input type="text" name="name"  class="form-control" >
                                                   </div>
                                                   <div class="form-control-container d-flex flex-column mb-lg-3">
                                                       <label  class="mb-lg-1 dark-16-medium">Card number <b-img class="ml-lg-1" :src="infoFormSvgUrl" /> </label>
                                                       <input type="number" name="number" class="form-control">
                                                   </div>
                                                   <div class="form-control-container d-flex mb-lg-3  justify-content-between">
                                                       <div>
                                                           <label  class="mb-lg-1 dark-16-medium">CVV <b-img class="ml-lg-1" :src="infoFormSvgUrl" /> </label>
                                                           <input type="number" name="cvv" class="form-control">
                                                           <span class="light-12-medium">3-4 digits on back of card</span>
                                                       </div>
                                                       <div class="ml-lg-3">
                                                           <label class="mb-lg-1 dark-16-medium">Expiry date</label>
                                                           <input type="date" name="expireDate" class="form-control">
                                                       </div>
                                                   </div>
                                               </div>

                                               <div v-show="radioButtonsSelected === 'B'" class="mb-lg-5 mt-lg-5">
                                                   <div class="semi-dark-16-medium">You’ll be redirected to PayPal to finish updating your billing information.</div>
                                               </div>

                                               <div>
                                                   <button class="submit-button">Submit</button>
                                                   <button @click="addNewCard = false" class="cancel-button">Cancel</button>
                                               </div>

                                           </div>
                                       </b-card>
                                   </div>

                               </div>
                               <div v-if="securityActive">SECURITy</div>
                               <div v-if="adminActive">ADMIN</div>
                               <div v-if="accountActive">ACcount</div>
                           </div>

                       </div>
                   </b-col>

               </b-row>
            </b-container>

            <b-modal id="inviteNewMember" class="card-gluu" title="Invite new member" centered>

                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="name" class="mb-lg-1">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Enter the name">
                </div>
                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="email" class="mb-lg-1">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="user@example.com">
                </div>
                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="userType" class="mb-lg-1">Role</label>
                    <v-select
                            v-model="selected"
                            :options="options"
                            :searchable="false"
                            :value="selected"
                    ></v-select>
                </div>
                <div class="form-control-container d-flex">
                    <button>Send Invite</button>
                </div>

            </b-modal>
            <b-modal id="editTeamProfile" class="card-gluu" title="Edit team profile" centered>

                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <div>
                        <b-img :src="organizationAvatarUrl" />
                        <b-img class="edit-icon" :src="editIconUrl" />
                    </div>
                </div>

                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="name2" class="mb-lg-1">Name</label>
                    <input type="text" name="name" id="name2" class="form-control" value="Team orizon">
                </div>
                <div class="form-control-container d-flex flex-column mb-lg-3">
                    <label for="email2" class="mb-lg-1">Email</label>
                    <input type="email" name="email" id="email2" class="form-control" value="A team of digital product thinker">
                    <span class="mt-lg-1">Maximum 25 words</span>
                </div>

                <div class="form-control-container d-flex">
                    <button>Save</button>
                </div>

            </b-modal>
        </div>

        <br>
        <br>
        <br>
        <br>
        <footer-section class="mt-lg-5"></footer-section>
    </div>
</template>

<script>
    import ProfileSideBar from  './profile-side-bar/profile-side-bar'
    import Badge from "../../components/includes/badge/badge";
    import Checkbox from "../../components/includes/checkbox/checkbox.vue";
    export default {
        name: "profile",
        components:{Checkbox, Badge, ProfileSideBar},
        data(){
            return{
                addNewCard:false,
                billingHistoryFields: ['Date', 'Description', 'Amount', 'Link'],
                billingHistoryItems: [
                    {
                        Date: 'Jan 10, 2018',
                        Description: 'Enterprise membership (team orizon) - 1 year',
                        Amount: '$290.99',
                        Link:'Invoice'
                    },
                    {
                        Date: 'Jan 10, 2018',
                        Description: 'Enterprise membership (team orizon) - 1 year',
                        Amount: '$290.99',
                        Link:'Invoice'
                    },
                    {
                        Date: 'Jan 10, 2018',
                        Description: 'Enterprise membership (team orizon) - 1 year',
                        Amount: '$290.99',
                        Link:'Invoice'
                    }
                ],
                teamMembersfields: ['Name', 'Email', 'Role', 'Delete'],
                teamMembersItems: [
                    {
                        Name: 'Nasir uddin',
                        Email: 'iamnasir360@gmail.com',
                        Role: ['Admin', 'User'],
                        Delete:this.deleteIconUrl
                    },
                    {
                        Name: 'Willaim lowe',
                        Email: 'will@gluu.org',
                        Role: [
                            { value: 'Admin', text: 'Admin' },
                            { value: 'User', text: 'User' }
                        ],
                        Delete:this.deleteIconUrl
                    },
                    {
                        Name: 'Muhib zico',
                        Email: 'zico@gluu.org',
                        Role: [
                            { value: 'Admin', text: 'Admin' },
                            { value: 'User', text: 'User' }
                        ],
                        Delete:this.deleteIconUrl
                    }
                ],
                NotificationsActive :true,
                profileActive:false,
                teamActive:false,
                partnersActive:false,
                billingActive:false,
                accountActive:false,
                securityActive:false,
                adminActive:false,
                manageNotifications:false,
                options: [
                    {id: 1, label: 'Admin'},
                    {id: 2, label: 'User'},
                ],
                selected: {id: 1, label: 'Admin'},
                radioButtonsSelected:'A'
            }
        },
        methods:{
            onClickChild(value){
                switch (value) {
                    case "Notification":
                        this.NotificationsActive = true;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Profile":
                        this.NotificationsActive = false;
                        this.profileActive = true;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Team":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = true;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Partners":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = true;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Billing":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = true;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Security":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = true;
                        this.accountActive = false;
                        this.adminActive = false;
                        break;
                    case "Admin":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = false;
                        this.adminActive = true;
                        break;
                    case "Account":
                        this.NotificationsActive = false;
                        this.profileActive = false;
                        this.teamActive = false;
                        this.partnersActive = false;
                        this.billingActive = false;
                        this.securityActive = false;
                        this.accountActive = true;
                        this.adminActive = false;
                        break;
                }
            }
        },
        computed:{
            organizationAvatarUrl () {
                return require('../../assets/images/organizationAvatar.png')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            verifiedUrl () {
                return require('../../assets/images/verified.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            avatarUrl () {
                return require('../../assets/images/avatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            deleteIconUrl () {
                return require('../../assets/images/delete.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            editIconUrl () {
                return require('../../assets/images/editAvatar.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            mastercardIconUrl () {
                return require('../../assets/images/mastercard.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            visacardIconUrl () {
                return require('../../assets/images/visacard.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            dotsIconUrl () {
                return require('../../assets/images/dots.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            edit2IconUrl () {
                return require('../../assets/images/editActive.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            creditCardSvgUrl () {
                return require('../../assets/images/credit-card.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            paypalSvgUrl () {
                return require('../../assets/images/paypal.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },
            infoFormSvgUrl () {
                return require('../../assets/images/infoForm.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    }
</script>

<style module lang="scss">
    body{
        background-color: #F3F5F7;
    }
</style>