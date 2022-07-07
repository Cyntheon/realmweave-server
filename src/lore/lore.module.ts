import { Module } from '@nestjs/common';
import { LoreService } from './lore.service';
import { LoreResolver } from './lore.resolver';

@Module({
  providers: [LoreService, LoreResolver]
})
export class LoreModule {}
