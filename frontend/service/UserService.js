import {api} from "./AuthSevice";

export default class UserService{
    static async getUsers(){
        return api.get("account/users/").then(res => res.data)
    }
}