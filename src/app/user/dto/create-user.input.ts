import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  password: string;
}
