import {CacheModule, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        CacheModule.register(),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [
        TypeOrmModule,
        CacheModule.register(),
    ]
})
export class UsersModule {}
