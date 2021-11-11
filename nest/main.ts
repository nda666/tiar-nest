import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { AppModule } from './app/app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as helmet from 'helmet';
import { NestConfig } from './configs/config.interface';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from 'nest/app/utils/validation/validation.pipe';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  const nestConfig = configService.get<NestConfig>('nest');

  app.useGlobalPipes(new ValidationPipe());
  // app.use(helmet());
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const DocsConfig = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, DocsConfig);
  // SwaggerModule.setup('api', app, document);

  const redocOptions: RedocOptions = {
    title: 'Hello Nest',

    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    auth: {
      enabled: false,
      user: 'admin',
      password: '123',
    },
    tagGroups: [
      {
        name: 'Core resources',
        tags: ['cats'],
      },
    ],
  };
  // Instead of using SwaggerModule.setup() you call this module
  await RedocModule.setup('/docs', app, document, redocOptions);

  app.setGlobalPrefix('/');
  console.log('Running at ' + nestConfig?.port);
  await app.listen(nestConfig?.port || 8001);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
