import { defineStore } from 'pinia'
import { me } from '@/http/currentUser'

export const useCurrentUserStore = defineStore('currentUser', {
    state: () => ({
        id: {},
        user: JSON.parse( localStorage.getItem('user') ),
        token: JSON.parse( localStorage.getItem('token') ),
    }),
    getters: {
        isLoggedIn: (state) => !!state.token?.id,
    },
    actions: {
        logIn(id, bearer) {
            this.token = { id, bearer }
            localStorage.setItem('token', JSON.stringify(this.token))
            this.fetchCurrentUser()
        },
        logOut() {
            this.token = undefined
            localStorage.removeItem('token')
        },
        async fetchCurrentUser() {
            this.user = (await me()).data
            localStorage.setItem('user', JSON.stringify(this.user))
        }
    }
})
