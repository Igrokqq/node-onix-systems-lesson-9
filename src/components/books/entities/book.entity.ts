import {
    Entity,
    Column,
    Unique,
    ObjectIdColumn,
    ObjectID
} from 'typeorm';
import {PublishedDto} from '../dto/published.dto';

@Entity({ name: 'books' })
@Unique(['blogpost', 'title'])
export class BookEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    blogpost: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    published: PublishedDto[];
}
