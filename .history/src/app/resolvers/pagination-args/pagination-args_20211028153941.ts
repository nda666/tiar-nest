import { ArgsType, Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaginationArgs {
    @Field((type) => Int)
    offset: number;
  
    @Field((type) => Int)
    limit: number;
}
