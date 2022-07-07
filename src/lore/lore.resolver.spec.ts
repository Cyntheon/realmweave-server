import { Test, TestingModule } from '@nestjs/testing';
import { LoreResolver } from './lore.resolver';

describe('LoreResolver', () => {
  let resolver: LoreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoreResolver],
    }).compile();

    resolver = module.get<LoreResolver>(LoreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
