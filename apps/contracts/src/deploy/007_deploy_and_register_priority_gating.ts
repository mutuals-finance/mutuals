import { DeployFunction } from 'hardhat-deploy/types';
import {
  deployPriorityGatingContract,
  finalizeDeployments,
} from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-priority-gating`);

  const PriorityGating = await deployPriorityGatingContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { PriorityGating } });
  await registerExtension({ hre, target: PriorityGating.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'gating', 'priority-gating'];
