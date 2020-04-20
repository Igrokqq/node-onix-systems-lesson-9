import {
    Entity,
    Column,
    Unique,
    ObjectIdColumn,
    ObjectID
} from 'typeorm';

@Entity({ name: 'users' })
@Unique(['firstName', 'lastName', 'email', 'phone'])
export class UserEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    isAdmin: boolean;

    @Column()
    verified: boolean;
}
