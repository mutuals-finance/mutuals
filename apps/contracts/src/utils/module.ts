import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import type { Addressable } from "ethers";

export const registerModule = async ({
  hre,
  target,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  target: string | Addressable;
}) => {
  hre.log("registerModule:", target);

  const from = await hre.ethers
    .getNamedSigner("mutualsStagingDeployer")
    .then((s: SignerWithAddress) => s.address);

  const receipt = await hre.deployments.execute(
    "ModuleRegistry",
    {
      from,
    },
    "registerModule",
    target
  );

  hre.log("Registered module", target, "in registry", receipt.to);

  return receipt;
};
