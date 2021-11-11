import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'nest/app/providers/prisma/prisma.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, PrismaService],
  exports: [UserResolver, UserService],
})
export class UserModule {}
