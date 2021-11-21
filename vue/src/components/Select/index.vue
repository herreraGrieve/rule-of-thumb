<template>
    <select  v-model="input" @change="onChange" class="select">
        <slot></slot>
    </select>
</template>

<script>

export default {
    name: 'Select',
    props: ['value'],
    methods: {
        onChange(e){
            this.$emit("change",e.target.value);
        }
    },
    computed: {
        input: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
};
</script>

<style scoped>
    .select{
        background: white;
        padding: 0.4rem 3rem;
        border: 2px solid var(--color-darker-gray);
    }
    @media screen and (min-width:1010px) {
        .select{
            padding: 0.6rem 4rem;
        }
    }
</style>