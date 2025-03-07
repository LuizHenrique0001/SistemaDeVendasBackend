import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entity/user.entity';
import { compareSync } from 'bcrypt';
import { ReturnUserDto } from 'src/user/dto/createUser.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnLogin } from './dto/returnLogin.dto';
import { LoginPayload } from './dto/loginPayload.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private JwtService: JwtService){

    }

    async login (loginDto: LoginDto): Promise<ReturnLogin>{
        const userExist: User | undefined = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined)

        if(!userExist || !compareSync(loginDto.password, userExist.password)){
            throw new NotFoundException(`Email Or Password Invalid`)
        }
        
        return {
            accessToken: this.JwtService.sign({ ...new LoginPayload(userExist)}),
            user: new ReturnUserDto(userExist),
        }
    }
}
