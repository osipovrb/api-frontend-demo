<script setup>
    import { useCurrentUserStore } from '@/stores/currentUserStore'
    const currentUserStore = useCurrentUserStore()
</script>

<template>
    <div class="container card">
        <div class="card-body">
            <h5>Добро пожаловать!</h5>
            <p class="mb-0" v-if="currentUserStore.isLoggedIn">Ваш логин: {{ currentUserStore.user?.login }}</p>
            <p class="mb-0" v-else>Вы не аутентифицированы</p>
        </div>
    </div>
</template>
