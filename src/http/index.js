import axios from 'axios'
import { notify } from '@kyvg/vue3-notification';
import { useCurrentUserStore } from '@/stores/currentUserStore'

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Accept, Content-Type',
    }
})

const authInterceptor = (config) => {
    const currentUserStore = useCurrentUserStore()
    if (currentUserStore.isLoggedIn) {
        config.headers['Authorization'] = 'Bearer ' + currentUserStore.token.bearer
    }
    return config
}

const responseInterceptor = response => {
    return response
}

const errorInterceptor = error => {
    const currentUserStore = useCurrentUserStore()

    if (!error.response) {
        return Promise.reject(error)
    }

    switch (error.response.status) {
        case 401:
            notify({
                text: error.response.data.message,
                type: 'error'
            })
            currentUserStore.logOut()
            return Promise.reject(error)
        case 422:
            notify({
                text: error.response.data.message,
                type: 'error'
            })
            return Promise.reject(error)
        default:
            console.error(error.response.status, error.message)
    }
}

httpClient.interceptors.request.use(authInterceptor)
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

export default httpClient
