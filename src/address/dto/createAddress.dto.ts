import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { CityService } from "src/city/city.service";
import { PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../entity/address.entity";

export class AddressDto{    

    @IsString()
    complement: string;

    @IsNumber()
    @IsNotEmpty()
    numberAddress: number;
    
    @IsString()
    @IsNotEmpty()
    cep: string;
    
    @IsNumber()
    @IsNotEmpty()
    city_id: number;
}
export class ReturnAddressDto{
    complement: string;
    numberAddress: number;
    cep: string;

    constructor(address: Address){
        this.complement = address.complement,
        this.numberAddress = address.numberAddress,
        this.cep = address.cep
    }
}