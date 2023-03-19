import httpClient from './index'

const CREATE = 'api/tokens'
const DESTROY = 'api/tokens'

const create = (login, password) => httpClient.post(CREATE, { login, password })
const destroy = (id) => httpClient.delete(DESTROY, { id })

export {
    create,
    destroy,
}
