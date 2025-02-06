import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { CityService } from "src/city/city.service";
import { PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../entity/address.entity";
import { ReturnCity } from "src/city/dto/city.dto";
import { City } from "src/city/entity/city.entity";

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
    city?: ReturnCity;

    constructor(address: Address){
        this.complement = address.complement,
        this.numberAddress = address.numberAddress,
        this.cep = address.cep
        this.city = address.city ? new ReturnCity(address.city) : undefined
    }
}