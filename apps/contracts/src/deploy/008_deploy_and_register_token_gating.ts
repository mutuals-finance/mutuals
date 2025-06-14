import { DeployFunction } from 'hardhat-deploy/types';
import { deployTokenGatingContract, finalizeDeployments } from '@/utils/deploy';
import { registerExtension } from '@/utils/extension';

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`deploy-extension-token-gating`);

  const TokenGating = await deployTokenGatingContract({
    hre,
  });

  await finalizeDeployments({ hre, contracts: { TokenGating } });
  await registerExtension({ hre, target: TokenGating.target });
};

export default deploy;
deploy.dependencies = ['preconditions', 'registry'];
deploy.tags = ['all', 'extension', 'gating', 'token-gating'];
