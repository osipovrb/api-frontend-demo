<script>
    import { notify } from '@kyvg/vue3-notification';
    import { useTokensStore } from '@/stores/tokensStore'
    import { useCurrentUserStore } from '@/stores/currentUserStore'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';

    export default {
        data() {
            return {
                tokensStore: useTokensStore(),
                currentUserStore: useCurrentUserStore(),
                login: '',
                password: '',
            }
        },
        components: {
            Loading,
        },
        computed: {
            isLoading() {
                return this.tokensStore.isLoading
            },
            error() {
                return this.tokensStore.error
            }
        },        
        methods: {
            clearError() {
                this.tokensStore.clearError()
            },
            async logIn() {
                const response = await this.tokensStore.create(this.login, this.password)
                if (response?.status === 201) {
                    this.currentUserStore.logIn(response.data.id, response.data.access_token)
                    notify({ type: 'success', text: 'Пользователь аутентифицирован' })
                    this.$refs.createTokenForm.reset()
                    this.$router.push({name: 'home'})
                }
            }
        },
        beforeMount() {
            this.clearError()
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-body vl-parent">
            <loading v-model:active="isLoading" />
            <h5 class="card-title mb-4">Войти</h5>
            <div v-if="error" class="alert alert-danger" role="alert" v-html="error" />
            <form @submit.prevent="logIn" ref="createTokenForm">
                <div class="mb-2">
                    <label for="login" class="form-label">Логин</label>
                    <input 
                        id="login" 
                        type="text" 
                        class="form-control" 
                        autocomplete="username"
                        required
                        v-model="login"
                        @input="clearError()" />
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Пароль</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="form-control" 
                        autocomplete="password"
                        required
                        v-model="password"
                        @input="clearError()" />
                </div>
                <input type="submit" class="btn btn-primary" value="Войти" />
            </form>
        </div>
    </div>
</template>
