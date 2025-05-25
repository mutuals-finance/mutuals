import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployOnchainStateContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-onchain-state`);

  const OnchainState = await deployOnchainStateContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { OnchainState } });
  await registerExtension({ hre, target: OnchainState.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'state', 'onchain-state'];
