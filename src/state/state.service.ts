import { Injectable } from '@nestjs/common';
import { State } from './entity/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateDto } from './dto/state.dto';
import { create } from 'domain';

@Injectable()
export class StateService {
    constructor(@InjectRepository(State) private readonly stateRepository: Repository<State> ) {}

    async AllState() {
        return await this.stateRepository.find();
    }

    async createState(stateDto: StateDto) {
        const state = {
        name: stateDto.name,
        created_at: new Date(),
        updated_at: new Date(),
            };
        return await this.stateRepository.save(state);
    }
}
