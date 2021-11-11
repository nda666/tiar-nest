import { Logger, Module } from '@nestjs/common';
import { UserSeedService } from './user-seed/user-seed.service';
import { UserSeedModule } from './user-seed/user-seed.module';
import { Seeder } from './seeder';
import { UserService } from 'nest/app/modules/user/user.service';
import { UserModule } from 'nest/app/modules/user/user.module';

@Module({
  exports: [UserSeedService],
  providers: [UserSeedService, UserService, Logger, Seeder],
  imports: [UserSeedModule, UserModule],
})
export class SeederModule {}
