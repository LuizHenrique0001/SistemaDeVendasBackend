import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/createAddress.dto';
import { Address } from './entity/address.entity';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService ){}

    @UsePipes(ValidationPipe)
    @Post(':userId')
    async createAddress(@Param('userId') userId: number, @Body() addressDto: AddressDto){

        console.log(addressDto)

        return this.addressService.createAddress(userId, addressDto)
    }

    @Get()
    async findAll(): Promise<Address[]>{
        return this.addressService.findAll()
    }
}
