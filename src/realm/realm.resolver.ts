import {Resolver} from "@nestjs/graphql";
import {RealmService} from "./realm.service";

@Resolver()
export class RealmResolver {
  constructor(private readonly realms: RealmService) {}
}
