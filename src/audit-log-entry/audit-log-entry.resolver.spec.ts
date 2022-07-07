import { Test, TestingModule } from '@nestjs/testing';
import { AuditLogEntryResolver } from './audit-log-entry.resolver';

describe('AuditLogEntryResolver', () => {
  let resolver: AuditLogEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditLogEntryResolver],
    }).compile();

    resolver = module.get<AuditLogEntryResolver>(AuditLogEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
