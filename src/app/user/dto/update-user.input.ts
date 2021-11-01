import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  name?: string;
}
