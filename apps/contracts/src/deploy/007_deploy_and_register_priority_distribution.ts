import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployPriorityDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerModule } from '@/utils/module';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-priority-distribution`);

  const PriorityDistributionModule = await deployPriorityDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { PriorityDistributionModule } });
  await registerModule({ hre, target: PriorityDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'priority-distribution'];
