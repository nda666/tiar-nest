export const graphql = (): Config => ({
  graphql: {
    playgroundEnabled:
      process.env.GRAPHQL_PLAYGROUND?.toLowerCase() === 'true' ? true : false,
    debug: process.env.GRAPHQL_DEBUG?.toLowerCase() === 'true' ? true : false,
    schemaDestination: './nest/schema.graphql',
    sortSchema: true,
  },
});

interface Config {
  graphql: GraphqlConfig;
}
export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}
