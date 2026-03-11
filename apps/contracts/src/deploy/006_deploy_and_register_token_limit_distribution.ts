import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployTokenLimitDistributionModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerModule } from '@/utils/module';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-token-limit-distribution`);

  const TokenLimitDistributionModule = await deployTokenLimitDistributionModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { TokenLimitDistributionModule } });
  await registerModule({ hre, target: TokenLimitDistributionModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'distribution', 'token-limit-distribution'];
