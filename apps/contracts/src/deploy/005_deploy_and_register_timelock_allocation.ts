import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployTimelockAllocationContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-timelock-allocation`);

  const TimelockAllocation = await deployTimelockAllocationContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { TimelockAllocation } });
  await registerExtension({ hre, target: TimelockAllocation.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'allocation', 'timelock-allocation'];
