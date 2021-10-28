import { ArgsType } from "@nestjs/graphql";

@ArgsType()
export class PaginationArgs {
    @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}
