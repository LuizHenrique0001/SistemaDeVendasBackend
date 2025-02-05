import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

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
