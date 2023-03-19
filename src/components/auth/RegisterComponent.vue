<script>
    import { notify } from '@kyvg/vue3-notification';
    import { useUsersStore } from '@/stores/usersStore'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';

    export default {
        data() {
            return {
                store: useUsersStore(),
                login: '',
                password: '',
                passwordConfirmation: '',
            }
        },
        components: {
            Loading,
        },
        computed: {
            isLoading() {
                return this.store.isLoading
            },
            errors() {
                return this.store.errors
            }
        },        
        methods: {
            clearError(field) {
                this.store.clearError(field)
            },
            async createUser() {
                const response = await this.store.create(this.login, this.password, this.passwordConfirmation)
                if (response?.status === 201) {
                    notify({ type: 'success', text: 'Пользователь создан' })
                    this.$refs.createUserForm.reset()
                    // TODO: редирект на аутентификацию
                }
            }
        },
        beforeMount() {
            this.store.resetErrors()
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-body vl-parent">
            <loading v-model:active="isLoading" />
            <h5 class="card-title mb-4">Регистрация</h5>
            <form @submit.prevent="createUser" ref="createUserForm">
                <div class="mb-2">
                    <label for="login" class="form-label">Логин</label>
                    <input 
                        id="login" 
                        type="text" 
                        class="form-control" 
                        autocomplete="username"
                        required
                        v-model="login"
                        :class="{ 'is-invalid': this.errors?.login }"
                        @input="clearError('login')" />
                    <div 
                        id="validationLoginFeedback" 
                        class="invalid-feedback" 
                        v-html="errors?.login?.join('<br>')" />
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Пароль</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="form-control" 
                        autocomplete="new-password"
                        required
                        v-model="password"
                        :class="{ 'is-invalid': this.errors?.password || this.errors?.passwordConfirmation }"
                        @input="clearError('password', 'passwordConfirmation')" />
                    <div 
                        id="validationPasswordFeedback" 
                        class="invalid-feedback" 
                        v-html="errors?.password?.join('<br>')" />
                </div>
                <div class="mb-4">
                    <label for="passwordConfirmation" class="form-label">Повторите пароль</label>
                    <input 
                        id="passwordConfirmation"
                        type="password" 
                        class="form-control"
                        autocomplete="new-password"
                        required
                        v-model="passwordConfirmation" 
                        :class="{ 'is-invalid': this.errors?.passwordConfirmation }"
                        @input="clearError('password', 'passwordConfirmation')" />
                    <div 
                        id="validationPasswordConfirmationFeedback"
                        class="invalid-feedback" 
                        v-html="errors?.passwordConfirmation?.join('<br>')" />
                </div>
                <input type="submit" class="btn btn-primary" value="Зарегистрироваться" />
            </form>
        </div>
    </div>
</template>
