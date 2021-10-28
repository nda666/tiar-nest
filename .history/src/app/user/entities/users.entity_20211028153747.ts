import { PaginationArgs } from '../../resolvers/pagination-args/pagination-args';
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Users extends PaginationArgs {
    @Field(type => Int)
    id: number;
  
    @Field()
    email: string;
  
    @Field()
    phone: string;
  
    @Field({nullable: true})
    name?: string;
}