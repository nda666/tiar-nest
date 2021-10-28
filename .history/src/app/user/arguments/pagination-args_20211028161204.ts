import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => Int, { defaultValue: 10 })
  page: number;
}
