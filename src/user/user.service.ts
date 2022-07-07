import {Injectable} from "@nestjs/common";
import {Prisma, User} from "@prisma/client";
import {PrismaService} from "../prisma.service";
import {ArgonService} from "./argon.service";

type UserCreateInput = Omit<Prisma.UserCreateInput, "passwordHash"> & {
  password: string;
};

@Injectable()
export class UserService {
  public constructor(
    private readonly prisma: PrismaService,
    private readonly argon: ArgonService
  ) {}

  public async getUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({where});
  }

  public async createUser(data: UserCreateInput): Promise<User> {
    const passwordHash = await this.argon.hash(data.password, data.id);

    const userData = {...data};
    delete userData.password;

    const user = await this.prisma.user.create({
      data: {...userData, passwordHash}
    });

    delete user.passwordHash;

    return user;
  }

  public async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return this.prisma.user.update({where, data});
  }

  public async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({where});
  }
}
