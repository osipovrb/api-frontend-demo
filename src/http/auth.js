import httpClient from './index'

const LOGIN = 'api/tokens'

const login = (login, password) => httpClient.post(LOGIN, { login, password })

export {
    login,
}
