export const jwt = (): Config => ({
  jwt: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
    jwtSecret: process.env.JWT_SECRET || '',
  },
});

interface Config {
  jwt: JWTConfig;
}
export interface JWTConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
  jwtSecret: string;
}
