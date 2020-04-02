import Axios from 'axios'
const BASE_URL = `https://barista-users.herokuapp.com/users`

export const api = Axios.create({
    baseURL: BASE_URL
})