import { ObjectType, Field, Int } from '@nestjs/graphql';

// id      Int      @id @default(autoincrement())
// email   String   @unique
// phone   String   @unique
// name    String?
// role    Role     @default(USER)
// profile Profile?

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field({nullable: true})
  name?: string;
}
