import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { randomInt, randomUUID } from 'crypto';
import { hashSync } from 'bcrypt';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        createUserDto.password = await hashSync(createUserDto.password, 10);
        const user = {
            ...createUserDto,
            type_user: 1,
            status: true,
        };
        return this.userRepository.save(user);
    }
    async findAll(){
        return this.userRepository.find();
    }

    async findUserById(userId: number): Promise<User>{
        const user = await this.userRepository.findOne({ where: { id: userId }})

        if(!user){
            throw new NotFoundException(`UserId Not Found`)
        }
        return user
    }
}
