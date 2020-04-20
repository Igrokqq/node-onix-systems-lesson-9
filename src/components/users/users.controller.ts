import {
    Body,
    CacheInterceptor,
    Controller,
    Param,
    Delete,
    Get,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import {
    DeleteResult,
    ObjectID,
    UpdateResult
} from 'typeorm';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }

    @Post()
    async create(@Body() userDto: UserDto): Promise<UserEntity> {
        return await this.usersService.create(userDto);
    }

    @Put(':id')
    async updateById(@Param('id') id: ObjectID, @Body() userDto: UserDto): Promise<UpdateResult> {
        return await this.usersService.updateById(id, userDto);
    }

    @Delete(':id')
    async deleteById(@Param('id') id: ObjectID): Promise<DeleteResult> {
        return await this.usersService.deleteById(id);
    }
}
