import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @IsEmail()
  @Field({ description: 'Registered email' })
  email: string;

  @MinLength(6)
  @Field()
  password: string;
}
