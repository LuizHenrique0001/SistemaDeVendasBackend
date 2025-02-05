import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entity/city.entity';
import { CityDto } from './dto/city.dto';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City) private readonly cityRepository: Repository<City>,
        private readonly cacheService: CacheService,
    ) {}

    async create(CityDto: CityDto) {
       
        const city = {
            name: CityDto.name,
            state_id: CityDto.state_id,
            created_at: new Date(),
            updated_at: new Date(),
        };
       
        return await this.cityRepository.save(city);
    }
    async findCityByStateId(stateId: number): Promise<City[]> {
        return this.cacheService.getCache<City[]>(`state_${stateId}`, 
         () => this.cityRepository.find({where: { state_id: stateId }}))
        
    }
    async findCityById(cityId: number): Promise<City>{
       const city = await this.cityRepository.findOne({ where: { id: cityId }})

        if(!city){
            throw new NotFoundException(`CityId Not Found`)
        }
        
        return city
    }
}
