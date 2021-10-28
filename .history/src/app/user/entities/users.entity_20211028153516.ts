import { PaginationArgs } from '../../resolvers/pagination-args/pagination-args';
import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
class GetAuthorArgs extends PaginationArgs {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}