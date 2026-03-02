import { Addressable } from 'ethers';
import type { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/types';

export const registerExtension = async ({
  hre,
  target,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  target: string | Addressable;
}) => {
  hre.log('registerExtension:', target);

  const from = await hre.ethers
    .getNamedSigner('mutualsStagingDeployer')
    .then((s: HardhatEthersSigner) => s.address);


  const receipt = await hre.deployments.execute(
    'ModuleRegistry',
    {
      from,
    },
    'registerModule',
    target
  );

  hre.log('Registered module', target, 'in registry', receipt.to);

  return receipt;
};
