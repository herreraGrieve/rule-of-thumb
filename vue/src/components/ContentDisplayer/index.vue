<template>
    <div>
        <div class="header">
            <Heading class="title" :level="2"> {{ title }} </Heading>
            <Select aria-hidden="true" v-model="layout" @change="onLayoutChange">
                <option name="list" value="list">List</option>
                <option name="grid" value="grid">Grid</option>
            </Select>
        </div>
        <ul :class="`itemsList ${layout}`">
            <slot></slot>
        </ul>
    </div>
</template>

<script>

import Heading from '@/components/Heading';
import Select from '@/components/Select';

export default {
    name: 'ContentDisplayer',
    components: {
        Heading,
        Select
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
        height: 300px;
        grid-auto-flow: column;
        overflow: auto;
    }
    .itemsList li{
        min-width: 300px;
    }
    @media screen and (min-width:768px) {
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .itemsList{
            height: auto;
            grid-auto-flow: initial;
        }
        .itemsList li{
            min-width: initial;
        }
        .select{
            display: block;
        }
        .grid{
            grid-template-columns: 1fr 1fr;
        }
        .grid.itemsList li{
            min-height: 300px;
        }
    }
    @media screen and (min-width:1010px) {
        .header{
            margin-bottom: 3rem;
        }
        .title{
            font-size: var(--text-7);
            font-weight: 300;
        }
        .grid{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>