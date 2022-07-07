import { Module } from '@nestjs/common';
import { RealmService } from './realm.service';
import { RealmResolver } from './realm.resolver';

@Module({
  providers: [RealmService, RealmResolver]
})
export class RealmModule {}
