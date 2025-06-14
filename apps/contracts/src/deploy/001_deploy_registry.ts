import { DeployFunction } from 'hardhat-deploy/types';
import { deployRegistryContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-registry`);

  const Registry = await deployRegistryContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { Registry } });
};

export default deploy;
deploy.dependencies = ['preconditions'];
deploy.tags = ['all', 'registry'];
