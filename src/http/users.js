import httpClient from './index'

const CREATE = 'api/users'

const create = (login, password, password_confirmation) => httpClient.post(CREATE, { 
    login, 
    password, 
    password_confirmation 
})

export {
    create,
}
