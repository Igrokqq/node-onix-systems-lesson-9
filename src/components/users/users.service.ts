import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    DeleteResult,
    ObjectID,
    Repository,
    UpdateResult
} from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {
    }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    create(userDto: UserDto): Promise<UserEntity> {
        return this.usersRepository.save(userDto);
    }

    updateById(id: ObjectID, userDto: UserDto): Promise<UpdateResult> {
        return this.usersRepository.update(id, userDto);
    }

    deleteById(id: ObjectID): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }
}
