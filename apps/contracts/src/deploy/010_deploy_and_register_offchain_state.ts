import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployOffchainStateContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-offchain-state`);

  const OffchainState = await deployOffchainStateContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { OffchainState } });
  await registerExtension({ hre, target: OffchainState.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'state', 'offchain-state'];
