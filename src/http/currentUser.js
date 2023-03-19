import httpClient from './index'

const ME = 'api/users/me'
const TOKENS = (id) => `api/users/${id}/tokens`

const me = () => httpClient.get(ME)
const tokens = (id) => httpClient.get(TOKENS(id))

export {
    me,
    tokens,
}
