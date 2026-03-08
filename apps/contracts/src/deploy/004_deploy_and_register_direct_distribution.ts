import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployDirectDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-direct-distribution`);

  const DirectDistributionModule = await deployDirectDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { DirectDistributionModule } });
  await registerExtension({ hre, target: DirectDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'direct-distribution'];
