import { UserService } from 'nest/app/modules/user/user.service';
import { Injectable, Logger } from '@nestjs/common';
import { UserSeed } from './user-seed/user-seed';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private userService: UserService,
  ) {}
  async seed() {
    //   this.userRepository.
    await this.userService
      .bulkCreate(UserSeed)
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
}
