import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { I18nRequestScopeService } from 'nestjs-i18n';
import { User, CreateOneUserArgs, UpdateOneUserArgs } from 'nest/app/models';
import {
  IOffsetPaginatedType,
  OffsetPaginated,
} from 'nest/app/abstaction/offset-paginated';
import { FindUserPaginated } from './dto/find-user-paginated.args';
import { UserInputError } from 'apollo-server-errors';

@ObjectType()
class UsersPaginated extends OffsetPaginated(User) {}

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly i18n: I18nRequestScopeService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args() createUserInput: CreateOneUserArgs) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => UsersPaginated, { name: 'users' })
  async users(
    @Args() args: FindUserPaginated,
  ): Promise<IOffsetPaginatedType<User>> {
    const users = await this.userService.findPaginated(args);
    if (users.totalPage < (args.page || 1))
      throw new UserInputError('common.NOT_FOUND');
    return users;
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args() updateUserInput: UpdateOneUserArgs) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
