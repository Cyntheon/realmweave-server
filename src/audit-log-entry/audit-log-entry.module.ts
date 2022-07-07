import { Module } from '@nestjs/common';
import { AuditLogEntryService } from './audit-log-entry.service';
import { AuditLogEntryResolver } from './audit-log-entry.resolver';

@Module({
  providers: [AuditLogEntryService, AuditLogEntryResolver]
})
export class AuditLogEntryModule {}
