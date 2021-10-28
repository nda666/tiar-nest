import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PaginationArgs } from './arguments/pagination-args';
import { Users } from './entities/users.entity';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll(paginationArgs: PaginationArgs) {
    const count = await this.prisma.user.count();
    const user = await this.prisma.user.findMany({
      skip: paginationArgs.first * (paginationArgs.page - 1),
      take: paginationArgs.first,
    });
    const users: Users = {
      currentPage: 1,
      hasNextPage: true,
      hasPrevPage: false,
      nextPage: 2,
      prevPage: null,
      totalCount: count,
      nodes: [...user],
    };

    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
