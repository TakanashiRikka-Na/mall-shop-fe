import axios from 'axios';



export const LocalUrl = "127.0.0.1:8080"
axios.defaults.baseURL = LocalUrl
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.put["Content-Type"] = "application/json"
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        token && (config.headers.Authorization = token)
        return config
    },
    (error: string) => {
        throw new Error(error)
    }
)
