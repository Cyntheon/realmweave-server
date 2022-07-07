import { Test, TestingModule } from '@nestjs/testing';
import { AuditLogEntryService } from './audit-log-entry.service';

describe('AuditLogEntryService', () => {
  let service: AuditLogEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditLogEntryService],
    }).compile();

    service = module.get<AuditLogEntryService>(AuditLogEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
