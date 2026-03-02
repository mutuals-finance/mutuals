import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployPriorityDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-priority-distribution`);

  const PriorityDistributionModule = await deployPriorityDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { PriorityDistributionModule } });
  await registerExtension({ hre, target: PriorityDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'priority-distribution'];
