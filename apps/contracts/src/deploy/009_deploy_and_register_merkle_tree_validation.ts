import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployMerkleTreeValidationModuleContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerModule } from '@/utils/module';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-module-merkle-tree-validation`);

  const MerkleTreeValidationModule = await deployMerkleTreeValidationModuleContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { MerkleTreeValidationModule } });
  await registerModule({ hre, target: MerkleTreeValidationModule.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'module', 'validation', 'merkle-tree-validation'];
