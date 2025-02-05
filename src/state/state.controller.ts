import { Body, Controller, Get, Post } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './dto/state.dto';

@Controller('state')
export class StateController {
constructor(private readonly serviceState: StateService) {}
    
    @Get()
    async getAllState() {
        return this.serviceState.AllState();
    }
    
    @Post()
    async createState(@Body() state: StateDto) {
        return this.serviceState.createState(state);
    }
}
