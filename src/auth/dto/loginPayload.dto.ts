import { User } from "src/user/entity/user.entity"

export class LoginPayload{

    id: number
    typeUser: number

    constructor (user:User){
        this.id = user.id
        this.typeUser = user.type_user
    }
}