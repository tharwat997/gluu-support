<template>
    <div class="ticket-list">
        <div id="search-container">

            <b-row class="mb-lg-4">
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
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <div id="tags-container" class="d-flex">
                        <div> {{arrayOfValuesIndex}} Results Found</div>
                        <div class="d-flex flex-wrap">
                            <div class="ml-lg-2" v-for="(item, index) in arrayOfValues" :key="index" v-model="arrayOfValuesIndex">
                                {{arrayOfValueIndexCalc(index)}}
                                <span class="multiselect__tag tags-container-tag-gluu"><span>{{item.name.name}}</span> <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon"></i></span>
                            </div>
                        </div>
                        <div class="ml-auto clear-all-btn">Clear all</div>
                    </div>
                </b-col>
            </b-row>
        </div>

        <div id="tickets-container" class="mt-lg-2">
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

        <div id="tickets-footer">

            <b-row class="d-flex align-items-center">
                <b-col lg="5" >
                    <div id="pagination-container" class="d-flex align-items-center ">
                        <label class="card-labels-gluu">Show:</label>
                        <multi-select
                                class="select-tags-gluu"
                                v-model="showResultsValue"
                                :options="showResultsOptions"
                                label="number"
                                track-by="number"
                                :show-labels="false"
                                placeholder=""
                                :allowEmpty="false"
                                openDirection="bottom"
                                :searchable="false"
                        ></multi-select>
                        <span class="pagination-container-second-span">of 150 tickets</span>
                    </div>
                </b-col>

                <b-col lg="5" offset-lg="2">
                    <div id="show-results-container" class="d-flex align-items-center justify-content-end">
                        <b-pagination-nav  :number-of-pages="10" v-model="currentPage"
                                                  last-text="Next"
                                                  align="right"
                        />

                    </div>
                </b-col>
            </b-row>

        </div>

    </div>
</template>

<script>
    import Ticket from "./ticket/ticket";
    export default {
        components: {Ticket},

        props: {
            arrayOfValues:Array
        },
        data (){
            return{
                text1:"",
                showResultsValue: [ { number: 10}],
                showResultsOptions: [
                    { number: 10},
                    { number: 20},
                    { number: 30},
                    { number: 40}
                ],
                orderByValue: {name: 'Most recent'},
                orderByOptions: [
                    { name: 'Most recent'},
                    { name: 'Least recent'},
                    { name: 'User (a-z)'},
                    { name: 'User (z-a)'}
                ],
                currentPage: 1,
                arrayOfValuesIndex:0
            }
        },
        methods: {
            arrayOfValueIndexCalc(index){
                this.arrayOfValuesIndex = index + 1;
            }
        },
        computed: {
            searchIconUrl () {
                return require('../../../assets/images/search.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            }
        }
    };
</script>
