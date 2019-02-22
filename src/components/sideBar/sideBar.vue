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
                    <multi-select
                            v-model="value"
                            class="select-tags-gluu"
                            label="name"
                            track-by="code"
                            :options="options"
                            :multiple="true"
                            @tag="addTag"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Created By:</label>
                    <multi-select
                            v-model="value"
                            class="select-tags-gluu"
                            label="name"
                            track-by="code"
                            :options="options"
                            :multiple="true"
                            :show-labels="false"
                            @tag="addTag"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Assigned to:</label>
                    <multi-select
                            class="select-tags-gluu"
                            v-model="value"
                            :options="options"
                             label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Category</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="value"
                            :options="options"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Product</label>
                    <multi-select
                            v-model="value"
                            class="select-tags-gluu"
                            label="name"
                            track-by="code"
                            :options="options"
                            :multiple="true"
                            @tag="addTag"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Issues type</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="value"
                            :options="options"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Status</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="value"
                            :options="options"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>

                <b-form-group>
                    <label class="card-labels-gluu">Created date:</label>
                    <multi-select
                            class="select-tags-gluu single-select"
                            v-model="value"
                            :options="options"
                            label="name"
                            track-by="name"
                            :show-labels="false"
                    ></multi-select>
                </b-form-group>
            </b-card-body>
        </b-card>

    </div>

</template>

<script>

    export default {
        props: {
        },
        data (){
            return{
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
        }
    };
</script>
