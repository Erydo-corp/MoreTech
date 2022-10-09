import axios from "axios";

const API_URL = "https://38cf-79-172-71-109.eu.ngrok.io/api/v1/"

export const api = axios.create({
    baseURL: API_URL,
})

api.interceptors.request.use(config=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default class AuthSevice{
    static async login(username, password){
        return api.post("account/auth/token/login/",
            {username, password},
        )
    }

}