<template>
    <button type="button" @click="click" :class="`button button--${size}`">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        click: {
            type: Function,
        },
        size:{
            type: String,
            default: 'medium',
            validator (value) {
                return ['medium', 'small'].indexOf(value) !== -1
            },
        }
  }
};
</script>

<style scoped>
    .button{
        background: var(--color-darker-background);
        border: 1px solid white;
        color: white;
        padding: 1rem 2rem;
        font-size: var(--text-2);
        cursor: pointer;
    }
    .button:disabled{
        background: var(--color-darker-gray-background);
        cursor: auto;
    }
    @media screen and (min-width:1010px) {
        .button{
            font-size: var(--text-3);
        }
        .button.button--small{
            font-size: var(--text-2);
        }
    }
</style>