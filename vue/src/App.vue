<template>
    <div id="app">
        <BaseTemplate>
            <ContentDisplayer title="Previous Rulings" @onLayoutChange="onLayoutChange">
                <li v-for="ruling,index in rulings" v-bind:key="ruling.id">
                    <Card
                        :title="ruling.name"
                        :description="ruling.description"
                        :datePublished="ruling.updated_at"
                        :upvotes="parseInt(ruling.positiveVotes)"
                        :downvotes="parseInt(ruling.negativeVotes)"
                        :picture="`${baseApi}${ruling.picture.url}`"
                        :category="ruling.category.name"
                        :layout="layout"
                        @onSubmitVote="(vote)=>{onSubmitVote(vote,index)}"
                    />
                </li>
            </ContentDisplayer>
        </BaseTemplate>
    </div>
</template>

<script>
import BaseTemplate from '@/components/BaseTemplate';
import ContentDisplayer from '@/components/ContentDisplayer';
import Card from '@/components/Card';
import { getRulings, updateRuling } from '@/api';
import config from '@/config';

export default {
    name: 'App',
    components: {
        BaseTemplate,
        ContentDisplayer,
        Card,
    },
    data() {
        return{
            layout: "list",
            rulings: [],
            baseApi: config.baseApi
        }
    },
    methods:{
        onLayoutChange(layout){
            this.layout = layout
        },
        async onSubmitVote (vote,index){
            let postobj = {
                id: this.rulings[index].id,
                fields:{}
            }
            if(vote===0){
                const negativeVotes = parseInt(this.rulings[index].negativeVotes) + 1
                postobj.fields = { negativeVotes: negativeVotes}
                this.rulings[index].negativeVotes = negativeVotes
            }
            else if(vote===1){
                const newPositiveVotes = parseInt(this.rulings[index].positiveVotes) + 1
                postobj.fields = { positiveVotes: newPositiveVotes }
                this.rulings[index].positiveVotes = newPositiveVotes
            }
            await updateRuling(postobj)
        }
    },
    async mounted(){
        const rulings = await getRulings()
        this.rulings = rulings.data
    }   
};
</script>
