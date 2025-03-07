import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/createAddress.dto';
import { Address } from './entity/address.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService ){}

    @UsePipes(ValidationPipe)
    @Post()
    @Roles(UserType.User || UserType.Admin)
    async createAddress(@UserId() userId: number, @Body() addressDto: AddressDto){
        console.log('userId', userId)
        return this.addressService.createAddress(userId, addressDto)
    }

    @Get()
    async findAll(): Promise<Address[]>{
        return this.addressService.findAll()
    }
}
