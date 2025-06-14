import { DeployFunction } from 'hardhat-deploy/types';
import { deployPoolBeaconContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-pool`);
  const Pool = await deployPoolBeaconContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { Pool } });
};

export default deploy;
deploy.dependencies = ['preconditions'];
deploy.tags = ['all', 'pool', 'pool-beacon', 'pool-factory'];
