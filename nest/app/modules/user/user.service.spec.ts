import { User } from 'nest/app/models';
import { Test, TestingModule } from '@nestjs/testing';
import { plainToClass } from 'class-transformer';
import { UserService } from './user.service';

const oneUser: User = plainToClass(User, { id: 1 });
const tenUser: User[] = plainToClass(User, [{ id: 1 }, { id: 2 }]);

describe('User Service', () => {
  let userService: UserService;

  const ApiServiceProvider = {
    findOne: jest.fn(() => Promise.resolve(oneUser)),
    findAll: jest.fn(() => Promise.resolve(tenUser)),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: ApiServiceProvider,
        },
      ],
    }).compile();

    userService = await app.get<UserService>(UserService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should have one user', async () => {
    const findOneSpy = jest.spyOn(ApiServiceProvider, 'findOne');
    const user = await userService.findOne(1);
    expect(findOneSpy).toBeCalledTimes(1);
    expect(user).toEqual(oneUser);
  });

  it('should have one user or more', async () => {
    const findAllSpy = jest.spyOn(ApiServiceProvider, 'findAll');
    const user = await userService.findAll({});
    expect(findAllSpy).toBeCalledTimes(1);
    expect(user).toEqual(tenUser);
  });
});
