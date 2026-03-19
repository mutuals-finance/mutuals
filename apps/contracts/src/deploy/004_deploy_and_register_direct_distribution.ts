import type { DeployFunction } from "hardhat-deploy/types";
import {
  deployDirectDistributionModuleContract,
  finalizeDeployments,
} from "@/utils/deploy";
import { registerModule } from "@/utils/module";

export const deploy: DeployFunction = async (environment) => {
  const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
  hre.trace("deploy-module-direct-distribution");

  const DirectDistributionModule = await deployDirectDistributionModuleContract(
    {
      hre,
    }
  );

  await finalizeDeployments({ hre, contracts: { DirectDistributionModule } });
  await registerModule({ hre, target: DirectDistributionModule.target });
};

export default deploy;
deploy.dependencies = ["preconditions", "registry"];
deploy.tags = ["all", "module", "distribution", "direct-distribution"];
