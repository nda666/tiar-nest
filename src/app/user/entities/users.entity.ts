import { ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';
import { OffsetPaginated } from '../../abstaction/offset-paginated';

@ObjectType()
export class Users extends OffsetPaginated(User) {}
