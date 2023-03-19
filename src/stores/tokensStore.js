import { defineStore } from 'pinia'
import { create } from '@/http/tokens'

export const useTokensStore = defineStore('tokens', {
    state: () => ({
        token: localStorage.getItem('token'),
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
                .then(response => {
                    localStorage.setItem('token', response.data.access_token)
                    this.token = response.data.access_token
                    return response
                })
                .catch(errors => this.error = errors.response.data.message)
                .finally(() => this.isLoading = false)
            return response
        }
    }
})
