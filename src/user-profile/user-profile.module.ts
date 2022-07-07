import {Module} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {UserProfileResolver} from "./user-profile.resolver";
import {UserProfileService} from "./user-profile.service";

@Module({
  providers: [UserProfileService, UserProfileResolver],
  imports: [UserService],
  exports: [UserProfileService]
})
export class UserProfileModule {}
