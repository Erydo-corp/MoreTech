import {api} from "./AuthSevice";

export default class UserService{
    load = false

    setLoad(bool){
        this.load = bool
    }

    static async getUsers(){
        this.load = api.get("account/users/")
        this.setLoad(false)
        return this.load
    }
}