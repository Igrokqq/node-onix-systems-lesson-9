import {
    Controller,
    Body,
    Param,
    UseInterceptors,
    CacheInterceptor,
    Post,
    Get,
    Put,
    Delete,
} from '@nestjs/common';
import {
    DeleteResult,
    ObjectID,
    UpdateResult
} from 'typeorm';
import { BooksService } from './books.service';
import {BookDto} from './dto/book.dto';
import {BookEntity} from './entities/book.entity';

@Controller('books')
@UseInterceptors(CacheInterceptor)
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async findAll(): Promise<BookEntity[]> {
        return await this.booksService.findAll();
    }

    @Post()
    async create(@Body() bookDto: BookDto): Promise<BookEntity> {
        return await this.booksService.create(bookDto);
    }

    @Put(':id')
    async updateById(@Param('id') id: ObjectID, @Body() bookDto: BookDto): Promise<UpdateResult> {
        return await this.booksService.updateById(id, bookDto);
    }

    @Delete(':id')
    async deleteById(@Param('id') id: ObjectID): Promise<DeleteResult> {
        return await this.booksService.deleteById(id);
    }
}

