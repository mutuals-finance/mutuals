import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployTokenAllocationContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-token-allocation`);

  const TokenAllocation = await deployTokenAllocationContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { TokenAllocation } });
  await registerExtension({ hre, target: TokenAllocation.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'allocation', 'token-allocation'];
