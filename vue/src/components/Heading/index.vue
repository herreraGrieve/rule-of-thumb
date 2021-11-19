<script>
export default {
    name: 'Heading',
    render(createElement) {
        return createElement('h' + this.level, this.$slots.default);
    },
    props: {
        level: {
            type: Number,
            default: 6,
            required: true,
        },
    },
};
</script>
