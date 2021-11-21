<template>
    <div>
        <div class="header">
            <Heading class="title" :level="headingLevel"> {{ title }} </Heading>
            <select class="select" v-model="layout" @change="onLayoutChange">
                <option name="list" value="list">List</option>
                <option name="grid" value="grid">Grid</option>
            </select>
        </div>
        <ul :class="`itemsList ${layout}`">
            <slot></slot>
        </ul>
    </div>
</template>

<script>

import Heading from '@/components/Heading';

export default {
    name: 'ContentDisplayer',
    components: {
        Heading,
    },
    props: {
        title: {
            type: String,
            default: 'list'
        }
    },
    data() {
        return{
            layout: "list",
            voteIsSubmited: false
        }
    },
    methods: {
        onLayoutChange(){
            this.$emit("onLayoutChange",this.layout);
        }
    }
};
</script>

<style scoped>
    .header{
        margin-bottom: 2rem;
    }
    .title{
        font-size: var(--text-5);
        font-weight: 300;
    }
    .select{
        display: none;
    }
    .itemsList{
        display: grid;
        gap: 27px;
        grid-auto-flow: column;
        overflow: auto;
    }
    @media screen and (min-width:768px) {
        .itemsList{
            grid-auto-flow: initial;
        }
        .select{
            display: block;
        }
        .grid{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (min-width:1010px) {
        .grid{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>