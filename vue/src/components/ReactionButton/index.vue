<template>
    <button type="button" @click="onClick" :class="`reactionButton ${type} ${selected}`">
        <img class="icon" v-if="type==='upvote'" src="@/assets/img/thumbs-up.svg"/>
        <img class="icon" v-if="type==='downvote'" src="@/assets/img/thumbs-down.svg"/>
    </button>
</template>

<script>

export default {
    name: 'ReactionButton',
    props: {
        isSelected:{
            type: Boolean,
            default: false
        },
        click: {
            type: Function,
            default: ()=>{}
        },
        type: {
            type: String,
            default: 'upvote',
            validator (value) {
                return ['upvote', 'downvote'].indexOf(value) !== -1
            },
            required: true,
        }
    },
    computed:{
        selected(){
            if(this.isSelected) return `${this.type}--selected`
            return ''
        }
    },
    methods: {
        onClick(){
            this.$emit("click");
        }
    }
};
</script>

<style scoped>
    .reactionButton{
        border: 0;
        cursor: pointer;
    }
    .upvote,.downvote{
        width: 30px;
        height: 30px;
    }
    .upvote--selected,.downvote--selected{
        border: 2px solid white;
    }
    .upvote{
        background-color: var(--color-green);
    }
    .downvote{
        background-color: var(--color-yellow);
    }
    @media screen and (min-width:1010px) {
        .upvote,.downvote{
            width: 45px;
            height: 45px;
        }
        .icon{
            width: 24px;
        }
    }
</style>