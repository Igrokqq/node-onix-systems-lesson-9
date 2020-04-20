import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BookDto} from './dto/book.dto';
import {BookEntity} from './entities/book.entity';
import {
    DeleteResult,
    ObjectID,
    Repository,
    UpdateResult
} from 'typeorm';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(BookEntity) private booksRepository: Repository<BookEntity>) {}

    findAll(): Promise<BookEntity[]> {
        return this.booksRepository.find();
    }

    create(bookDto: BookDto): Promise<BookEntity> {
        return this.booksRepository.save(bookDto);
    }

    updateById(id: ObjectID, bookDto: BookDto): Promise<UpdateResult> {
        return this.booksRepository.update(id, bookDto);
    }

    deleteById(id: ObjectID): Promise<DeleteResult> {
        return this.booksRepository.delete(id);
    }
}
