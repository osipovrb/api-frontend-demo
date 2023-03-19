import axios from 'axios'
import { notify } from '@kyvg/vue3-notification';

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
    /*if (store.getters['login/getIsLoggedIn']) {
        config.headers['Authorization'] = 'Bearer ' + store.getters['login/getToken']
    }*/
    return config
}

const responseInterceptor = response => {
    return response
}

const errorInterceptor = error => {
    if (!error.response) {
        return Promise.reject(error)
    }

    switch (error.response.status) {
        case 401:
            notify({
                text: error.response.data.message,
                type: 'error'
            })
            //store.commit('login/clearToken')
            break
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
