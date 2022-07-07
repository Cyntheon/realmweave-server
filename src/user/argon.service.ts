import {Injectable} from "@nestjs/common";
import argon2, {argon2d, argon2i, argon2id} from "argon2";

@Injectable()
export class ArgonService {
  public constructor() {}

  public async hash(plain: string, salt: string) {
    return argon2.hash(plain, {
      type: argon2id,
      hashLength: 32,
      saltLength: 128,
      parallelism: 2,
      timeCost: 8,
      memoryCost: 4096,
      salt: Buffer.from(salt, "utf-8"),
      secret: Buffer.from(process.env.RANDOM_QUOTE, "utf-8")
    });
  }

  public async verify(hash: string, plain: string) {
    const [type, version, options, salt] = hash.split("$");

    const typeStringToNumber = {
      argon2i,
      argon2d,
      argon2id
    };

    return argon2.verify(hash, plain, {
      type: typeStringToNumber[type as keyof typeof typeStringToNumber],
      version: Number.parseInt(version.split("v=")[0], 10),
      hashLength: 32,
      saltLength: 128,
      parallelism: Number.parseInt(options.match(/p=?(\d*)/)?.[1] || "2", 10),
      timeCost: Number.parseInt(options.match(/t=?(\d*)/)?.[1] || "8", 10),
      memoryCost: Number.parseInt(options.match(/m=?(\d*)/)?.[1] || "4096", 10),
      salt: Buffer.from(salt, "utf-8"),
      secret: Buffer.from(process.env.ARGON_SECRET, "utf-8")
    });
  }
}
