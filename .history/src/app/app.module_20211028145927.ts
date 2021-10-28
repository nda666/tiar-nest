

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { join } from 'path';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import config from '../../configs/config';
import { GraphqlConfig } from '../../configs/config.interface';
import { UserModule } from './user/user.module';
import { ViewService } from './modules/view/view.service';
import { ViewController } from './modules/view/view.controller';
import { AppResolver } from './resolvers/app.resolver';
import { UserResolver } from './user/user.resolver';
import { ViewModule } from './modules/view/view.module';

const dailyRotateFile = new winston.transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  dirname: join(__dirname, './../logs/'), //path to where save lo
  level: 'error'
});

const errorStackTracerFormat = winston.format(info => {
  if (info.meta && info.meta instanceof Error) {
      info.message = `${info.message} ${info.meta.stack}`;
  }
  return info;
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true, load: [config]
    }),

    /**
     * Graphql
     */
     GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),


   

    /**
     * Client frontend
     */
    // ServeStaticModule.forRoot({
    //     rootPath: join(__dirname, '..', '../client/dist'),
    // }),

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
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        errorStackTracerFormat()
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
    UserModule
  ],
  providers: [ AppModule, AppResolver],
})
export class AppModule {}
