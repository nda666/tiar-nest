import { Config } from './config.interface';

export const config = (): Config => ({
  nest: {
    port: parseInt(process.env.NEST_PORT?.toString() || '') || 3000,

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
});
