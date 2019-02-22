<template>
    <div class="ticket-list">


        <div id="search-container">
            <b-row>
                <b-col lg="5" >
                    <div id="search-bar-container" class="d-flex align-items-center ">
                        <b-form-input v-model="text1" type="text" placeholder="Type the keyword" />
                        <span><b-img :src="searchIconUrl"></b-img></span>
                    </div>
                </b-col>

                <b-col lg="5" offset-lg="2">
                    <div id="order-by-select-container" class="d-flex align-items-center justify-content-end">
                        <label class="card-labels-gluu">Order by:</label>
                        <multi-select
                                class="select-tags-gluu single-select"
                                v-model="value"
                                :options="options"
                                label="name"
                                track-by="name"
                                :show-labels="false"
                        ></multi-select>

                    </div>
                </b-col>
            </b-row>
        </div>

        <div id="tickets-container" class="mt-lg-4">
            <ticket :badges="[
                {text:'New', color: 'lightblue'},
                {text:'Pre-production', color:'purple'},
                {text:'Installation', color:'grey'}
            ]"></ticket>
            <ticket :badges="[
                {text:'In progress', color: 'blue'},
                {text:'Minor', color:'green'},
                {text:'Single sign-on', color:'grey'}
            ]">
            </ticket>
        </div>

    </div>
</template>

<script>
    import Ticket from "./ticket/ticket";
    export default {
        components: {Ticket},

        props: {
        },
        data (){
            return{
                text1:"",
                value: [

                ],
                options: [
                    { name: 'Vue.js', code: 'vu' },
                    { name: 'Javascript', code: 'js' },
                    { name: 'Open Source', code: 'os' }
                ]
            }
        },
        methods: {
            addTag (newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                };
                this.options.push(tag);
                this.value.push(tag);
            }
        },
        computed: {
            searchIconUrl () {
                return require('../../assets/images/search.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    };
</script>
