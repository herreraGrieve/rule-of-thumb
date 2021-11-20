<template>
    <div class="container" :style="barSizes">
        <div class="upBar">
            <span
                class="upBar__label"
                aria-hidden="true"
            > 
                <img alt="" src="@/assets/img/thumbs-up.svg"/> 
                {{ percent(upvotes) }}%
            </span>
            <p class="sr-only"> {{ upvoteLabel }} </p>
        </div>
        <div class="downBar">
            <span
                class="downBar__label" 
                aria-hidden="true"
            >
                {{ percent(downvotes) }}% 
                <img alt="" src="@/assets/img/thumbs-down.svg"/>
            </span>
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
    .upBar,.downBar{
        height: 36px;
        color: white;
        font-size: var(--text-3);
        display: flex;
        align-items: center;
    }
    .upBar{
        padding-left: 0.9rem;
        background-color: var(--color-green-background);
    }
    .downBar{
        padding-right: 0.9rem;
        text-align: right;
        background-color: var(--color-yellow-background);
    }
    .downBar__label{
        margin-left: auto;
    }
    .upBar__label,.downBar__label{
        white-space: nowrap;
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