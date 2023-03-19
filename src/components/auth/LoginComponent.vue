<script>
    import { notify } from '@kyvg/vue3-notification';
    import { useTokensStore } from '@/stores/tokensStore'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';

    export default {
        data() {
            return {
                store: useTokensStore(),
                login: '',
                password: '',
            }
        },
        components: {
            Loading,
        },
        computed: {
            isLoading() {
                return this.store.isLoading
            },
            error() {
                return this.store.error
            }
        },        
        methods: {
            clearError() {
                this.store.clearError()
            },
            async createToken() {
                const response = await this.store.create(this.login, this.password)
                if (response?.status === 201) {
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
            <form @submit.prevent="createToken" ref="createTokenForm">
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
