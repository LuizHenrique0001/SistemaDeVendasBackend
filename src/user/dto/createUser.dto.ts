import { IsDate, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { User } from "../entity/user.entity";
import { ReturnAddressDto } from "src/address/dto/createAddress.dto";

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
    address?: ReturnAddressDto[];
    constructor(userEntity: User){
        this.id = userEntity.id
        this.name = userEntity.name
        this.email = userEntity.email
        this.phone = userEntity.phone
        this.cpf = userEntity.cpf

        this.address = userEntity.address ? userEntity.address.map((address) => new ReturnAddressDto(address)) : undefined
    }
}