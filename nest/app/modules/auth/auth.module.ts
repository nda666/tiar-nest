import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'nest/app/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { NestConfig } from 'nest/configs/config.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'nest/app/modules/user/user.service';
import { PrismaService } from 'nest/app/providers/prisma/prisma.service';

@Module({
  imports: [
    UserModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('jwt')?.jwtSecret,
        signOptions: { expiresIn: '120s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthResolver, AuthService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
