import {Field, InputType} from "@nestjs/graphql";
import {UserCreateInput as GeneratedUserCreateInput} from "../../@generated/user";

@InputType()
export class UserCreateInput extends GeneratedUserCreateInput {
  @Field(() => String, {nullable: false})
  password!: string;
}
