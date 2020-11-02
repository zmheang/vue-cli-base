<template>
    <div></div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Item from "./Item";
    export default {
        name: "index",
        components: {
            Item
        },
        computed: {
            ...mapGetters(['permission_routes'])
        }

    }
</script>

<style scoped>

</style>