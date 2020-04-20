import { env } from '../../config/env';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from '../books/books.module';
import {UsersModule} from '../users/users.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
  imports: [
    BooksModule,
    UsersModule,
    TypeOrmModule.forRoot(env.databases.mongodb),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
