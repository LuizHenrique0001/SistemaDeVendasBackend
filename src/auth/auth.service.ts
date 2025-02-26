import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entity/user.entity';
import { compareSync } from 'bcrypt';
import { ReturnUserDto } from 'src/user/dto/createUser.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){

    }

    async login (loginDto: LoginDto): Promise<User>{
        const userExist: User | undefined = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined)

        if(!userExist || !compareSync(loginDto.password, userExist.password)){
            throw new NotFoundException(`Email Or Password Invalid`)
        }
        
        return userExist
    }
}
