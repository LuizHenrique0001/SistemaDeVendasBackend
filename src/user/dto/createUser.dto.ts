import { IsDate, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { User } from "../entity/user.entity";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    @IsNotEmpty()
    cpf: string; 

    @MinLength(8)
    password: string;
}
export class ReturnUserDto{
    id:number;
    name: string;
    email: string;
    phone: string;
    cpf: string; 
    constructor(userEntity: User){
        this.id = userEntity.id
        this.name = userEntity.name
        this.email = userEntity.email
        this.phone = userEntity.phone
        this.cpf = userEntity.cpf
    }
}