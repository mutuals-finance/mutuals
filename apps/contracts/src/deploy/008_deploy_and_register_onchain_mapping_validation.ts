import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployOnchainMappingValidationModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerModule } from '@/utils/module';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-onchain-mapping-validation`);

  const OnchainMappingValidationModule = await deployOnchainMappingValidationModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { OnchainMappingValidationModule } });
  await registerModule({ hre, target: OnchainMappingValidationModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'validation', 'onchain-mapping-validation'];
