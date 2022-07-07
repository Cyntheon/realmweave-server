import {Module} from "@nestjs/common";
import {UserProfileModule} from "../user-profile/user-profile.module";
import {ArgonService} from "./argon.service";
import {UserResolver} from "./user.resolver";
import {UserService} from "./user.service";

@Module({
  providers: [UserService, UserResolver, ArgonService],
  imports: [UserProfileModule],
  exports: [UserService]
})
export class UserModule {}
