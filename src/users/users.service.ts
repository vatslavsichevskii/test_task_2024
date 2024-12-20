import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async addUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create(createUserDto);
        console.log('New User Added:', user);
        return user;
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.userModel.findByPk(id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }
}
