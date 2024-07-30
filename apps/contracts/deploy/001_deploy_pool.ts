import { DeployFunction } from 'hardhat-deploy/types';
import { deployPoolContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-pool`);

  const Pool = await deployPoolContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { Pool } });
};

export default deploy;
