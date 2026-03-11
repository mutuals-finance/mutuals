import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployVestingDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerModule } from '@/utils/module';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-vesting-distribution`);

  const VestingDistributionModule = await deployVestingDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { VestingDistributionModule } });
  await registerModule({ hre, target: VestingDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'vesting-distribution'];
