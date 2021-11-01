import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: parseInt(process.env.NEST_PORT, 10) || 3000,
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
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
