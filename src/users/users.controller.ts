import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    UseGuards,
    ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('api/v1')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Post('add-user')
    async addUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.addUser(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-user/:id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }
}
