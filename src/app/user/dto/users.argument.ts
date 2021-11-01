import { ArgsType, Field } from '@nestjs/graphql';
import { OffsetPaginatedArgs } from '../../abstaction/offset-paginated';

@ArgsType()
export class UsersArgument extends OffsetPaginatedArgs() {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;
}
