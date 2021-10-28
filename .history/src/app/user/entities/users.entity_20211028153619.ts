import { PaginationArgs } from '../../resolvers/pagination-args/pagination-args';
import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
class Users extends PaginationArgs {
    @Field(type => Int)
    id: number;
  
    @Field()
    email: string;
  
    @Field()
    phone: string;
  
    @Field({nullable: true})
    name?: string;
}