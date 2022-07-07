import {Injectable} from "@nestjs/common";
import {Prisma, Realm} from "@prisma/client";
import {PrismaService} from "../prisma.service";

@Injectable()
export class RealmService {
  public constructor(private readonly prisma: PrismaService) {}

  public async getRealm(where: Prisma.RealmWhereUniqueInput): Promise<Realm> {
    return this.prisma.realm.findUnique({where});
  }

  public async createRealm(data: Prisma.RealmCreateInput): Promise<Realm> {
    return this.prisma.realm.create({data});
  }

  public async updateRealm(
    where: Prisma.RealmWhereUniqueInput,
    data: Prisma.RealmUpdateInput
  ): Promise<Realm> {
    return this.prisma.realm.update({where, data});
  }

  public async deleteRealm(
    where: Prisma.RealmWhereUniqueInput
  ): Promise<Realm> {
    return this.prisma.realm.delete({where});
  }
}
