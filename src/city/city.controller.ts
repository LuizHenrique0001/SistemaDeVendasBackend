import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    async create(city: CityDto) {
        return await this.cityService.create(city);
    }

    @Get(':stateId')
    async findCityByStateId(@Param('stateId') stateId: number) {
        return await this.cityService.findCityByStateId(stateId);
    }
}
