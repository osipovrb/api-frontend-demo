import httpClient from './index'

const CREATE = 'api/tokens'

const create = (login, password) => httpClient.post(CREATE, { login, password })

export {
    create,
}
