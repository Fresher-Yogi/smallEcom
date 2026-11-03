import axios from 'axios'

 let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    withCredentials: true
})

export default axiosInstance;