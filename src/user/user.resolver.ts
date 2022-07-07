import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User, UserUpdateInput, UserWhereUniqueInput} from "src/@generated/user";
import {UserCreateInput} from "./input/user-create.input";
import {UserService} from "./user.service";

@Resolver(() => User)
export class UserResolver {
  public constructor(private readonly userService: UserService) {}

  @Query(() => User)
  public async getUser(
    @Args("where") where: UserWhereUniqueInput
  ): Promise<User> {
    return this.userService.getUser(where);
  }

  @Mutation(() => User)
  public async createUser(@Args("data") data: UserCreateInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Mutation(() => User)
  public async updateUser(
    @Args("where") where: UserWhereUniqueInput,
    @Args("data") data: UserUpdateInput
  ): Promise<User> {
    return this.userService.updateUser(where, data);
  }

  @Mutation(() => User)
  public async deleteUser(
    @Args("where") where: UserWhereUniqueInput
  ): Promise<User> {
    return this.userService.deleteUser(where);
  }
}
