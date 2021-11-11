import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field({ description: 'Registered email' })
  email: string;

  @Field()
  password: string;
}
