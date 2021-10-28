import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field({ nullable: true })
  first?: string;

  @Field({ defaultValue: 10 })
  @MinLength(3)
  limit: string;
}
