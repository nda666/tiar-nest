export interface Config {
  seo: DefaultSeoConfig;
  nest: NestConfig;
  cors: CorsConfig;
}

export interface DefaultSeoConfig {
  name: string;
  url: string;
  twitter: {
    url: string;
  };
}

export interface NestConfig {
  port: number | undefined;
  // jwtSecret: string;
  fallbackLanguage: string;
}

export interface CorsConfig {
  enabled: boolean;
}
