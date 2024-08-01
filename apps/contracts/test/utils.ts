import { deployments } from 'hardhat';
import {
  type BaseContract,
  ContractTransactionReceipt,
  EventLog,
  Log,
  Result,
  TransactionReceipt,
} from 'ethers';
import type { TypedContractEvent } from '#/types/typechain/common';

export function withSnapshot<T, O>(
  tags: string | string[] = [],
  func: (
    env: CustomHardHatRuntimeEnvironment,
    options?: O
  ) => Promise<T> = async () => {
    return <T>{};
  }
): (options?: O) => Promise<T> {
  return deployments.createFixture(
    async (env: CustomHardHatRuntimeEnvironment, options?: O) => {
      await deployments.fixture(tags, {
        fallbackToGlobal: true,
        keepExistingDeployments: false,
      });
      return func(env, options);
    }
  );
}
