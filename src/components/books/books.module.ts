import { Module, CacheModule } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookEntity} from './entities/book.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([BookEntity]),
      CacheModule.register(),
  ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [
      TypeOrmModule,
      CacheModule.register(),
  ],
})
export class BooksModule {}
