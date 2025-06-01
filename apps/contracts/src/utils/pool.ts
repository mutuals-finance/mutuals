import { Pool, PoolFactory } from '#/types/typechain';

type FromPartial<T extends (...args: any) => any> = (
  ...args: Partial<Parameters<T>>
) => Parameters<T>;

type GeneratePoolArgs = {
  init: FromPartial<Pool['__Pool_init']>;
  create: FromPartial<PoolFactory['createPool']>;
};

export const generatePoolArgs: GeneratePoolArgs = {
  init: (...args) => [
    args[0] ?? '',
    args[1] ?? '',
    args[2] ?? [],
    args[3] ?? [],
  ],

  create: (...args) =>
    [
      ...generatePoolArgs.init(
        ...(args.slice(0, 4) as Parameters<GeneratePoolArgs['init']>)
      ),
      args[4] ?? hre.ethers.toBigInt(hre.ethers.randomBytes(16)),
    ] as ReturnType<GeneratePoolArgs['create']>,
};
