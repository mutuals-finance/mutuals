import {
  configureDeploymentSettings,
  validateDeploymentSettings,
} from '@/utils/deploy';

export const deploy: CustomHardhatDeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace(`preconditions`);
  validateDeploymentSettings({ hre });
  await configureDeploymentSettings({ hre });
};

export default deploy;
deploy.tags = ['preconditions'];
