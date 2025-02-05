import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, ReturnUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { Validate } from 'class-validator';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<ReturnUserDto> {
        return this.userService.createUser(user);
    }
    @Get()
    async findAll(): Promise<ReturnUserDto[]>{
        return (await this.userService.findAll()).map(user => new ReturnUserDto(user));
    }
}
