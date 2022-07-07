import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from "@nestjs/graphql";
import {User} from "../@generated/user";
import {
  UserProfile,
  UserProfileCreateInput,
  UserProfileUpdateInput,
  UserProfileWhereUniqueInput
} from "../@generated/user-profile";
import {UserService} from "../user/user.service";
import {UserProfileService} from "./user-profile.service";

@Resolver()
export class UserProfileResolver {
  public constructor(
    private readonly userProfileService: UserProfileService,
    private readonly userService: UserService
  ) {}

  @Query(() => UserProfile)
  public async userProfile(
    @Args("where") where: UserProfileWhereUniqueInput
  ): Promise<UserProfile> {
    return this.userProfileService.getUserProfile(where);
  }

  @Mutation(() => UserProfile)
  public async createUserProfile(
    @Args("data") data: UserProfileCreateInput
  ): Promise<UserProfile> {
    return this.userProfileService.createUserProfile(data);
  }

  @Mutation(() => UserProfile)
  public async updateUserProfile(
    @Args("where") where: UserProfileWhereUniqueInput,
    @Args("data") data: UserProfileUpdateInput
  ): Promise<UserProfile> {
    return this.userProfileService.updateUserProfile(where, data);
  }

  @Mutation(() => UserProfile)
  public async deleteUserProfile(
    @Args("where") where: UserProfileWhereUniqueInput
  ): Promise<UserProfile> {
    return this.userProfileService.deleteUserProfile(where);
  }

  @ResolveField(() => User)
  public async user(@Parent() userProfile: UserProfile): Promise<User> {
    return this.userService.getUser({id: userProfile.userId});
  }
}
