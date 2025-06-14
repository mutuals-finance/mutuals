import { DeployFunction } from 'hardhat-deploy/types';
import { deployPoolFactoryContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-pool-factory`);

  const PoolFactory = await deployPoolFactoryContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { PoolFactory } });
};

export default deploy;
deploy.dependencies = ['preconditions', 'pool-beacon'];
deploy.tags = ['all', 'pool', 'pool-factory'];
