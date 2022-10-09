import {makeAutoObservable} from "mobx";
import AuthSevice from "../service/AuthSevice";
import UserService from "../service/UserService";

export default class Store{
    isAuth = false
    user = {}
    usersList = {}
    load = false

    constructor() {
        makeAutoObservable(this)
    }

    setLoad(bool){
        this.load = bool
    }

    setAuth(bool){
        this.isAuth = bool
    }
    setUser(user){
        this.user = user
    }

    setUsersList(users){
        this.usersList = users
    }

    async login(username, password){
        try {
            const response = await AuthSevice.login(username, password)
            localStorage.getItem("token", response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data)
        }catch (e) {
            console.log(e.response)
        }
    }

    async getUsers(){
        try {
            this.setLoad(true)
            const response = await UserService.getUsers()
            this.setLoad(false)
            this.setUsersList(response)
            return response
        }catch (e){
            console.log(e.response)
        }
    }

}