<template>
    <div :class="`gaugeBar gaugeBar--${size}`" :style="barSizes">
        <div v-if="hasVotes" class="upBar">
            <span
                class="upBar__label"
                aria-hidden="true"
            >
                <img class="icon" alt="" src="@/assets/img/thumbs-up.svg"/>
                {{ percent(upvotes) }}%
            </span>
            <p class="sr-only"> {{ upvoteLabel }} </p>
        </div>
        <div v-if="hasVotes" class="downBar">
            <span
                class="downBar__label" 
                aria-hidden="true"
            >
                {{ percent(downvotes) }}%
                <img class="icon" alt="" src="@/assets/img/thumbs-down.svg"/>
            </span>
            <p class="sr-only"> {{ downvoteLabel }} </p>
        </div>
        <p v-else class="empty">No votes yet. Be the first one!</p>
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
        size:{
            type: String,
            default: 'medium',
            validator (value) {
                return ['medium', 'small'].indexOf(value) !== -1
            },
        }
    },
    computed:{
        barSizes(){
            return `grid-template-columns: ${this.upvotes}fr ${this.downvotes}fr`
        },
        hasVotes(){
            if(this.upvotes > 0 || this.downvotes > 0){
                return true
            }
            else{
                return false
            }
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
    .empty{
        position: absolute;
        right: 3rem;
        bottom: 1rem;
    }
    .gaugeBar{
        position: relative;
        display: grid;
        height: 36px;
    }
    .upBar,.downBar{
        color: white;
        font-size: var(--text-3);
    }
    .upBar{
        background-color: var(--color-green-background);
    }
    .downBar{
        background-color: var(--color-yellow-background);
    }
    .upBar__label{
        left: 1rem;
    }
    .downBar__label{
        right: 1rem;
    }
    .upBar__label,.downBar__label{
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        gap: 5px;
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
    @media screen and (min-width:1010px) {
        .icon{
            width: 22px;
        }
        .gaugeBar{
            height: 54px;
        }
        .upBar,.downBar{
            font-size: var(--text-5);
        }
        .gaugeBar--small{
            height: 36px;
        }
        .gaugeBar--small .upBar,.gaugeBar--small .downBar{
            font-size: var(--text-3);
        }
        .gaugeBar--small .icon{
            width: 15px;
        }
    }
</style>