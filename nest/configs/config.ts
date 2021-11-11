import { Config } from './config.interface';

export const config = (): Config => ({
  nest: {
    port: parseInt(process.env.NEST_PORT?.toString() || '') || 3000,
    jwtSecret: process.env.JWT_SECRET || '',
    fallbackLanguage: 'en',
  },
  seo: {
    name: process.env.APP_NAME || 'Tiar Nest',
    url: process.env.APP_URL || 'Tiar Nest',
    twitter: {
      url: process.env.APP_TWITTER_NAME || '@',
    },
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: process.env.GRAPHQL_PLAYGROUND == 'true' ? true : false,
    debug: process.env.APP_DEBUG == 'true' ? true : false,
    schemaDestination: './nest/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
});
