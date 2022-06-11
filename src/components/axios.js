import axios from 'axios'

const instance = axios.create({
 baseURL: "https://mern-app-dating-00.herokuapp.com/"
})
export default instance