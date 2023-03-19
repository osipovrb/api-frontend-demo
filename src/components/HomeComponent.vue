<script setup>
    import { useTokensStore } from '@/stores/tokensStore'
</script>

<template>
    <div class="container card">
        <div class="card-body">
            <h5>Добро пожаловать!</h5>
            <p class="mb-0" v-if="useTokensStore().token">Ваш токен: {{ useTokensStore().token }}</p>
            <p class="mb-0" v-else>Вы не вошли</p>
        </div>
    </div>
</template>
