import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Repository } from 'typeorm';
import { AddressDto } from './dto/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address) private readonly addressRepository: Repository<Address>,
        private readonly userService: UserService,
        private readonly cityService: CityService,
){}

    async createAddress(user_id: number, addressDto: AddressDto): Promise<Address>{
        
        const user = await this.userService.findUserById(user_id)

        const city = await this.cityService.findCityById(addressDto.city_id)

        const address = {
            complement: addressDto.complement,
            numberAddress: addressDto.numberAddress,
            cep: addressDto.cep,
            city_id: addressDto.city_id,
            created_at: new Date,
            updated_at: new Date
        }
        return await this.addressRepository.save({
            ...address,
            user_id
        })
    }

    async findAll(): Promise<Address[]>{
        return await this.addressRepository.find()
    }

}
