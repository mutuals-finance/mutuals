import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployDefaultAllocationContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-default-allocation`);

  const DefaultAllocation = await deployDefaultAllocationContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { DefaultAllocation } });
  await registerExtension({ hre, target: DefaultAllocation.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'allocation', 'default-allocation'];
