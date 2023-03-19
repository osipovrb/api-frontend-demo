import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersCreateView from '@/views/users/CreateView.vue'
import TokensCreateView from '@/views/tokens/CreateView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/users/create',
            name: 'users_create',
            component: UsersCreateView,
        },
        {
            path: '/tokens/create',
            name: 'tokens_create',
            component: TokensCreateView,
        }
    ]
})

export default router
