import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 10 })
  first?: number;

  @Field(() => Int, { defaultValue: 1 })
  page: number;
}
