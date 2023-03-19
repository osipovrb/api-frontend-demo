import { defineStore } from 'pinia'
import { create, destroy } from '@/http/tokens'

export const useTokensStore = defineStore('tokens', {
    state: () => ({
        error: '',
        isLoading: false,
    }),
    actions: {
        clearError() {
            this.error = ''
        },
        async create(login, password) {
            this.isLoading = true
            const response = create(login, password)
                .catch(error => this.error = error.response.status === 401 
                    ? 'Неверный логин или пароль' 
                    : error.response.data.message
                ).finally(() => this.isLoading = false)
            return response
        },
        async delete(id) {
            this.isLoading = true
            const response = destroy(id)
                .catch(errors => this.error = errors.response.data.message)
                .finally(() => this.isLoading = false)
            return response
        }
    }
})
