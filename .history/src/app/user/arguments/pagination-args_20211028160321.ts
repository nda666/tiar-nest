import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field({ nullable: true })
  first?: string;

  @Field({ defaultValue: 10 })
  limit: string;
}
