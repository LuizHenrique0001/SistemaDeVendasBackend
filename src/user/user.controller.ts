import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<CreateUserDto> {
        return this.userService.createUser(user);
    }
    @Get()
    async findAll(){
        return this.userService.findAll();
    }
}
