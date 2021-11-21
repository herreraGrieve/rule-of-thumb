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
import { getRulings } from '@/api';

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
            rulings: []
        }
    },
    methods:{
        onLayoutChange(layout){
            this.layout = layout
        },
        onSubmitVote(vote,index){
            if(vote===0){
                this.rulings[index].downvotes = this.rulings[index].downvotes + 1
            }
            else if(vote===1){
                this.rulings[index].upvotes = this.rulings[index].upvotes + 1
            }
        }
    },
    async mounted(){
        const rulings = await getRulings()
        this.rulings = rulings.data
    }   
};
</script>
