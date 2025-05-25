import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployDefaultAllocationContract,
  finalizeDeployments,
} from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-default-allocation`);

  const DefaultAllocation = await deployDefaultAllocationContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { DefaultAllocation } });

  const from = await hre.ethers
    .getNamedSigner('admin')
    .then(({ address }) => address);

  const abiEncoder = hre.ethers.AbiCoder.defaultAbiCoder();

  await hre.deployments.execute(
    'Registry',
    {
      from,
    },
    'register',
    DefaultAllocation.target,
    abiEncoder.encode([], [])
  );
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'allocation', 'default-allocation'];
