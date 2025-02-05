import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './dto/state.dto';

@Controller('state')
export class StateController {
constructor(private readonly stateService: StateService) {}
    
    @Get()
    async getAllState() {
        return this.stateService.AllState();
    }
    
    @Post()
    async createState(@Body() state: StateDto) {
        return this.stateService.createState(state);
    }

    @Get(':id')
    async findStateById(@Param('id') id: number) {
        return this.stateService.findStateById(id);
    }
}
