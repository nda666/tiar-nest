import { PaginationArgs } from '../../resolvers/pagination-args/pagination-args';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';
import { OffsetPaginated } from '../../abstaction/offset-paginated';

@ObjectType()
export class Users extends OffsetPaginated(User) {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  name?: string;
}
