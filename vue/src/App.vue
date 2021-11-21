<template>
    <div id="app">
        <BaseTemplate>
            <ContentDisplayer title="Previous Rulings" @onLayoutChange="onLayoutChange">
                <li v-for="ruling,index in rulings" v-bind:key="ruling.id">
                    <Card
                        :title="ruling.title"
                        :description="ruling.description"
                        :datePublished="ruling.datePublished"
                        :upvotes="ruling.upvotes"
                        :downvotes="ruling.downvotes"
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
            rulings: [
                {
                    id: '1',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
                {
                    id: '2',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
                {
                    id: '3',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
                {
                    id: '4',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
                {
                    id: '5',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
                {
                    id: '6',
                    title: 'Kanye west',
                    description: 'The quick brown fox jumps over the lazy dog',
                    datePublished: '2020-12-12',
                    upvotes: 12,
                    downvotes: 3,
                },
            ]
        }
    },
    methods:{
        onLayoutChange(layout){
            this.layout = layout
        },
        onSubmitVote(vote,index){
            console.log(vote,index)
        }
    }
};
</script>
