import {Injectable} from "@nestjs/common";
import {Prisma, UserProfile} from "@prisma/client";
import {PrismaService} from "../prisma.service";

@Injectable()
export class UserProfileService {
  public constructor(private prisma: PrismaService) {}

  public async getUserProfile(
    where: Prisma.UserProfileWhereUniqueInput
  ): Promise<UserProfile> {
    return this.prisma.userProfile.findUnique({where});
  }

  public async createUserProfile(
    data: Prisma.UserProfileCreateInput
  ): Promise<UserProfile> {
    return this.prisma.userProfile.create({data});
  }

  public async updateUserProfile(
    where: Prisma.UserProfileWhereUniqueInput,
    data: Prisma.UserProfileUpdateInput
  ): Promise<UserProfile> {
    return this.prisma.userProfile.update({data, where});
  }

  public async deleteUserProfile(
    where: Prisma.UserProfileWhereUniqueInput
  ): Promise<UserProfile> {
    return this.prisma.userProfile.delete({where});
  }
}
