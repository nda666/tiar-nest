import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { join } from 'path';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlConfig, NestConfig } from '../configs/config.interface';
import { UserModule } from './modules/user/user.module';
import { StorageModule, DriverType } from '@codebrew/nestjs-storage';
import { TranslatedExceptionsFilter } from 'nest/app/utils/language/translated-exceptions.filter';
import {
  I18nModule,
  I18nJsonParser,
  HeaderResolver,
  AcceptLanguageResolver,
} from 'nestjs-i18n';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

import { AuthModule } from 'nest/app/modules/auth/auth.module';
import { QueryResolver } from 'nest/app/utils/language/query.resolver';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { config } from 'nest/configs';
import { PrismaModule } from './providers/prisma/prisma.module';
import { ValidationPipe } from 'nest/app/utils/validation/validation.pipe';

const dailyRotateFile = new winston.transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: false,
  maxSize: '20m',
  maxFiles: '14d',
  auditFile: 'audit.json',
  dirname:
    process.env.NODE_ENV === 'production'
      ? join(__dirname, '../../logs/')
      : join(__dirname, '../../../logs/'), //path to where save lo
  level: 'error',
});

const errorStackTracerFormat = winston.format((info) => {
  if (info.meta && info.meta instanceof Error) {
    info.message = `${info.message} ${info.meta.stack}`;
  }
  return info;
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '../../.env', '.env.development'],
      isGlobal: true,
      load: [config],
      cache: false,
    }),

    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage:
          configService.get<NestConfig>('nest')?.fallbackLanguage || 'en', // e.g., 'en'
        // parser: I18nJsonParser,
        parserOptions: {
          path: join(__dirname, '../i18n/'),
        },
      }),

      parser: I18nJsonParser,
      resolvers: [AcceptLanguageResolver],
      inject: [ConfigService],
    }),
    /**
     * Graphql
     */
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          subscriptions: {
            'graphql-ws': true,
          },
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig?.sortSchema,
          autoSchemaFile:
            graphqlConfig?.schemaDestination || './nest/schema.graphql',

          debug: graphqlConfig?.debug,
          playground: graphqlConfig?.playgroundEnabled,
          context: ({ req, connection }) =>
            connection ? { req: connection.context } : { req },
        };
      },

      inject: [ConfigService],
    }),

    /**
     * Storage Module
     */
    StorageModule.forRoot({
      default: 'local',
      disks: {
        local: {
          driver: DriverType.LOCAL,
          config: {
            root: process.cwd() + '/storage',
          },
        },
      },
    }),

    /**
     * Client frontend
     */
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../backend-client'),
    }),

    /**
     * Admin frontend
     */
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'data'),
    //   serveRoot: '/backend',
    // }),

    /**
     * Logger
     */
    WinstonModule.forRoot({
      format: winston.format.combine(
        // format: combine(
        //   errors({ stack: true }), // <-- use errors format
        //   colorize(),
        //   timestamp(),
        //   prettyPrint()
        // ),
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        errorStackTracerFormat(),
      ),
      transports: [dailyRotateFile, new winston.transports.Console()],
    }),

    /**
     * Queue Worker
     */
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      prefix: 'myapp_',
    }),
    PrismaModule,
    UserModule,
    // AuthModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: TranslatedExceptionsFilter,
    // },
    AppModule,
  ],
})
export class AppModule {}
