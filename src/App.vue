<script setup>
    import HeaderComponent from './components/HeaderComponent.vue'
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header-component />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>
    </router-view>
    <notifications />
</template>

<style lang="scss">
    @import 'assets/theme.scss';
    @import 'vue-loading-overlay/dist/css/index.css';

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>