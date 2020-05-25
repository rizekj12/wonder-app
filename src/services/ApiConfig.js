import Axios from 'axios'
const BASE_URL = `https://intense-sands-61810.herokuapp.com/users`

export const api = Axios.create({
    baseURL: BASE_URL
})