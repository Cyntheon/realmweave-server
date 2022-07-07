import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import * as depthLimit from "graphql-depth-limit";
import {join} from "path";
import {ApolloServerPluginLandingPageLocalDefault} from "apollo-server-core";
import {GlobalModule} from "./global.module";
import {UserModule} from "./user/user.module";
import { RealmModule } from './realm/realm.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { LoreModule } from './lore/lore.module';
import { AuditLogEntryModule } from './audit-log-entry/audit-log-entry.module';

@Module({
  imports: [
    GlobalModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "schema.gql"),
      sortSchema: true,
      introspection: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      csrfPrevention: true,
      cache: "bounded",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      validationRules: [depthLimit(7)]
    }),
    RealmModule,
    UserProfileModule,
    LoreModule,
    AuditLogEntryModule
  ]
})
export class AppModule {}
