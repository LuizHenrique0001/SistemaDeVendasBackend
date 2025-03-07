import { IsNotEmpty, IsString } from "class-validator";
import { ReturnUserDto } from "src/user/dto/createUser.dto";

export class LoginDto{
    
    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password: string
}