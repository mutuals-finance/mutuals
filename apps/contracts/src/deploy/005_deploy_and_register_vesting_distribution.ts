import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployVestingDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-vesting-distribution`);

  const VestingDistributionModule = await deployVestingDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { VestingDistributionModule } });
  await registerExtension({ hre, target: VestingDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'vesting-distribution'];
