import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field((type) => Int, { defaultValue: 1 })
  page: number;

  @Field((type) => Int, { defaultValue: 10 })
  first: number;
}
