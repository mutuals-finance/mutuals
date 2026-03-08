import { Pool, PoolFactory } from '#/types/typechain';

type FromPartial<T extends (...args: any) => any> = (
  ...args: Partial<Parameters<T>>
) => Parameters<T>;

type GeneratePoolArgs = {
  init: FromPartial<Pool['initialize']>;
  create: FromPartial<PoolFactory['createPool']>;
};

export const generatePoolArgs: GeneratePoolArgs = {
  init: (...args) => [
    args[0] ?? '', // _registry
    args[1] ?? '', // initialOwner
    args[2] ?? [], // initialModules
    args[3] ?? [], // initialModuleData
    args[4] ?? [], // _trustedAttesters
  ],

  create: (...args) =>
    [
      ...generatePoolArgs.init(
        ...(args.slice(0, 5) as Parameters<GeneratePoolArgs['init']>)
      ),
      args[5] ?? hre.ethers.toBigInt(hre.ethers.randomBytes(16)),
    ] as ReturnType<GeneratePoolArgs['create']>,
};
