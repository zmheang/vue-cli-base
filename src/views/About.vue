<template>
    <div>
        <h1>about</h1>
        <button v-permission="['admin']">admin</button>
        <button v-permission="['editor']">editor</button>
        <button v-permission="['admin', 'editor']">admin & editor</button>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>