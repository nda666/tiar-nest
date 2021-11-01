import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/users.entity';
import { UsersArgument } from './dto/users.argument';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll(usersArgument: UsersArgument) {
    const where: Prisma.UserWhereInput = {
      email: {
        contains: usersArgument.email,
      },
      name: {
        contains: usersArgument.name,
      },
    };
    const user = await this.prisma.user.findMany({
      skip: usersArgument.first * (usersArgument.page - 1),
      take: usersArgument.first,
      where: {},
    });
    const count = await this.prisma.user.count({ where });
    const totalPage = Math.ceil(count / usersArgument.first);

    const users: Users = {
      currentPage: usersArgument.page,
      totalPage: totalPage,
      totalCount: count,
      nodes: [...user],
    };

    return users;
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserInput,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
