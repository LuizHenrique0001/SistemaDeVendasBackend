import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Repository } from 'typeorm';
import { AddressDto } from './dto/createAddress.dto';

@Injectable()
export class AddressService {
    constructor(@InjectRepository(Address) private readonly addressRepository: Repository<Address>){}

    async createAddress(user_id: number, addressDto: AddressDto): Promise<Address>{
        const address = {
            user_id: user_id,
            complement: addressDto.complement,
            numberAddress: addressDto.numberAddress,
            cep: addressDto.cep,
            city_id: addressDto.city_id,
            created_at: new Date,
            updated_at: new Date
        }

        return await this.addressRepository.create(address)
    }

    async findAll(): Promise<Address[]>{
        return await this.addressRepository.find()
    }

}
