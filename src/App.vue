<script setup>
    import HeaderComponent from './components/HeaderComponent.vue'
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <HeaderComponent />

    <RouterView />

    <notifications />
</template>

<style lang="scss">
    @import 'assets/theme.scss';
    @import 'vue-loading-overlay/dist/css/index.css';
</style>