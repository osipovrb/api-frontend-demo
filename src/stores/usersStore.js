import { defineStore } from 'pinia'
import { create } from '@/http/users'

export const useUsersStore = defineStore('users', {
    state: () => ({
        errors: {},
        isLoading: false,
    }),
    actions: {
        clearError(...fields) {
            fields.forEach(field => delete this.errors[field])
        },
        resetErrors() {
            this.errors = {}
        },
        async create(login, password, passwordConfirmation) {
            this.isLoading = true
            const response = create(login, password, passwordConfirmation)
                .catch(errors => this.errors = errors.response.data.errors)
                .finally(() => this.isLoading = false)
            return response
        }
    }
})
