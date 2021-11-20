<template>
    <div class="container" :style="barSizes">
        <div class="upBar">
            <span aria-hidden="true"> {{ percent(upvotes) }}% </span>
            <p class="sr-only"> {{ upvoteLabel }} </p>
        </div>
        <div class="downBar">
            <span aria-hidden="true"> {{ percent(downvotes) }}% </span>
            <p class="sr-only"> {{ downvoteLabel }} </p>
        </div>
    </div>
</template>

<script>

import { percent } from '@/utils';

export default {
    name: 'GaugeBar',
    props: {
        upvoteLabel: {
            type: String,
            default: '',
        },
        downvoteLabel: {
            type: String,
            default: '',
        },
        upvotes: {
            type: Number,
            default: 0,
            required: true,
        },
        downvotes: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    computed:{
        barSizes(){
            return `grid-template-columns: ${this.upvotes}fr ${this.downvotes}fr`
        }
    },
    methods: {
        percent(votes){
            return percent(
                this.upvotes + this.downvotes,
                votes
            )
        }
    }
};
</script>

<style scoped>
    .container{
        display: grid;
    }
    .upBar{
        background-color: green;
    }
    .downBar{
        background-color: blue;
    }
    .sr-only {
        /* hides content for screens but not for screen-readers */
        position:absolute;
        left:-10000px;
        top:auto;
        width:1px;
        height:1px;
        overflow:hidden;
    }
</style>