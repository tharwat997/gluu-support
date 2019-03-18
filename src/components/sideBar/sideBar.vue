<template>

    <div class="sideBar">

        <b-card class="card-gluu">
            <div class="card-subtitle-gluu">Team</div>
            <multi-select
                    class="select-tags-gluu single-select mt-1"
                    v-model="value"
                    :options="options"
                    label="name"
                    track-by="name"
                    placeholder="Gluu inc"
                    :show-labels="false"
            ></multi-select>
        </b-card>

        <b-card class="card-gluu mt-lg-4">
            <b-card-header class="card-title-gluu">
                Advance Filter
            </b-card-header>

            <b-card-body>

                <b-form-group>
                    <label class="card-labels-gluu">Company:</label>
                    <div>
                        <span class="multiselect__tag" v-for="item in companyFilterValue"><span>{{item.name}}</span> <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon"></i></span>
                    </div>
                    <multi-select
                            v-model="companyFilterValue"
                            class="select-tags-gluu"
                            label="name"
                            track-by="name"
                            :options="companyOptions"
                            :multiple="true"
                            :show-labels="false"
                            @close="$emit('add-tag', globalFilterValues)"
                            @select="addTag"
                            @remove="removeTag"
                    >
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Created By:</label>
                    <div>
                        <span class="multiselect__tag" v-for="item in createdByFilterValue"><span>{{item.name}}</span> <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon"></i></span>
                    </div>
                    <multi-select
                            v-model="createdByFilterValue"
                            class="select-tags-gluu"
                            label="name"
                            track-by="name"
                            :options="createdByOptions"
                            :multiple="true"
                            :show-labels="false"
                            @close="$emit('add-tag', globalFilterValues)"
                            @select="addTag"
                            @remove="removeTag"
                    >
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Assigned to:</label>
                    <div>
                        <span class="multiselect__tag" v-for="item in assignedToFilterValue"><span>{{item.name}}</span> <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon"></i></span>
                    </div>
                    <multi-select
                            v-model="assignedToFilterValue"
                            class="select-tags-gluu"
                            label="name"
                            track-by="name"
                            :options="assignedToOptions"
                            :multiple="true"
                            :show-labels="false"
                            @close="$emit('add-tag', globalFilterValues)"
                            @select="addTag"
                            @remove="removeTag"
                    >
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Category</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="categoryFilterValue"
                            :options="categoryOptions"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Product</label>
                    <div>
                        <span class="multiselect__tag" v-for="item in productFilterValue"><span>{{item.name}}</span> <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon"></i></span>
                    </div>
                    <multi-select
                            v-model="productFilterValue"
                            class="select-tags-gluu"
                            label="name"
                            track-by="name"
                            :options="productOptions"
                            :multiple="true"
                            :show-labels="false"
                            @close="$emit('add-tag', globalFilterValues)"
                            @select="addTag"
                            @remove="removeTag"
                    >
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Issues type</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="issuesTypeFilterValue"
                            :options="issuesTypeOptions"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Status</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="statusFilterValue"
                            :options="statusTypeOptions"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Created date:</label>
                    <!--<multi-select-->
                            <!--class="select-tags-gluu single-select"-->
                            <!--v-model="createdDateFilterValue"-->
                            <!--:options="createdDateOptions"-->
                            <!--label="name"-->
                            <!--track-by="name"-->
                            <!--:show-labels="false"-->
                    <!--&gt;</multi-select>-->



                    <date-picker></date-picker>

                </b-form-group>
            </b-card-body>
        </b-card>

    </div>

</template>

<script>
import datePicker from '../datepicker/datepicker';

    export default {

        props: {
        },
        components:{datePicker},
        data (){
            return {
                selectedDate: {
                    start: new Date(2019, 2, 9),
                    end: new Date(2019, 2, 18)
                },
                globalFilterValues:[],
                value:[],
                options:[
                    {name:'testing'},
                    {name:'testing'},
                    {name:'testing'}
                ],
                companyFilterValue: [],
                createdByFilterValue: [],
                assignedToFilterValue: [],
                categoryFilterValue:[],
                productFilterValue: [],
                issuesTypeFilterValue:[],
                statusFilterValue:[],
                createdDateFilterValue:[],
                companyOptions: [
                    { name: 'Gluu' },
                    { name: 'uiart agency'},
                    { name: 'uiart agency2'},
                    { name: 'uiart agency3'},
                    { name: 'uiart agency4'}
                ],
                createdByOptions: [
                    { name: 'Nasir uddin' },
                    { name: 'Sumon'},
                    { name: 'Maksud alam'}
                ],
                assignedToOptions: [
                    { name: 'William lowe' },
                    { name: 'Lowe William'}
                ],
                categoryOptions: [
                    { name: 'backend' },
                    { name: 'frontend'}
                ],
                productOptions: [
                    { name: 'orange' },
                    { name: 'banana'},
                    { name: 'apple'},
                    { name: 'grapes'},
                    { name: 'watermelon'}
                ],
               issuesTypeOptions: [
                    { name: 'annoying' },
                    { name: 'easy'}
                ],
                statusTypeOptions: [
                    { name: 'Enabled' },
                    { name: 'Disabled'}
                ],
                createdDateOptions: [
                    { name: '12/12/12' },
                    { name: '12/12/13'}
                ]

            }
        },
        methods: {
            addTag (newTag) {
                const tag = {
                    name: newTag
                };
                this.globalFilterValues.push(tag);
            },
            removeTag(newTag){
                this.globalFilterValues = this.globalFilterValues.filter(function (tag) {
                    return tag.name != newTag.name; //Not working
                })
            }
        }
    };
</script>
