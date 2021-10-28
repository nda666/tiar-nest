import { Test, TestingModule } from '@nestjs/testing';
import { AppResolverResolver } from './app-resolver.resolver';

describe('AppResolverResolver', () => {
  let resolver: AppResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppResolverResolver],
    }).compile();

    resolver = module.get<AppResolverResolver>(AppResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
