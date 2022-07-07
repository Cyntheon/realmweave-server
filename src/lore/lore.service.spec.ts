import { Test, TestingModule } from '@nestjs/testing';
import { LoreService } from './lore.service';

describe('LoreService', () => {
  let service: LoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoreService],
    }).compile();

    service = module.get<LoreService>(LoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
