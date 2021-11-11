import { Injectable } from '@nestjs/common';

import { hash, genSalt } from 'bcrypt';
import { PrismaService } from 'nest/app/providers/prisma/prisma.service';
import {
  CreateManyUserArgs,
  CreateOneUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  User,
  UserWhereInput,
} from 'nest/app/models';
import { FindUserPaginated } from './dto/find-user-paginated.args';
import { IOffsetPaginatedType } from 'nest/app/abstaction/offset-paginated';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateOneUserArgs): Promise<User> {
    const salt = await genSalt(10);

    createUserInput.data.password = await hash(
      createUserInput.data.password,
      salt,
    );
    return this.prisma.user.create(createUserInput);
  }

  async bulkCreate(createUserInput: CreateManyUserArgs) {
    return this.prisma.user.createMany(createUserInput);
  }

  async findAll(usersArgument: FindManyUserArgs) {
    const users = this.prisma.user.findMany(usersArgument);
    return users;
  }

  async countAll(usersArgument: FindManyUserArgs) {
    const users = this.prisma.user.count(usersArgument);
    return users;
  }

  async findPaginated(
    args: FindUserPaginated,
  ): Promise<IOffsetPaginatedType<User>> {
    const { distinct, orderBy, page, take, where } = args;

    const skip = ((page || 1) - 1) * (take || 10);
    const findAll = { distinct, orderBy, where };
    const findFilltered = { distinct, orderBy, skip, take: take || 10, where };
    const totalCount = await this.countAll(findAll);

    const totalPage = Math.ceil((totalCount || 0) / (take || 10));

    return {
      currentPage: page || 1,
      nodes:
        (page || 1) <= totalPage
          ? await this.prisma.user.findMany({
              ...findFilltered,
              include: {
                profile: true,
              },
            })
          : [],
      totalCount,
      totalPage,
    };
  }
  async findCursored(usersArgument: FindManyUserArgs) {
    usersArgument.take = usersArgument.take ?? 10;
    const users = await this.prisma.user.findMany(usersArgument);

    const pageEdges = users.map((result: User) => ({
      cursor: Buffer.from('saltysalt'.concat(String(result.id))).toString(
        'base64',
      ),
      node: result,
    }));
    console.log({ users, pageEdges });
    return { users, pageEdges };
  }

  async findFirst(where: UserWhereInput) {
    return this.prisma.user.findFirst({
      where,
    });
  }
  async findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(updateUserInput: UpdateOneUserArgs) {
    return this.prisma.user.update(updateUserInput);
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
