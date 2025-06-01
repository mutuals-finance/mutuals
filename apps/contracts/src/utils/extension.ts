import { Addressable, ParamType } from 'ethers';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';

export const registerExtension = async ({
  hre,
  target,
  encode = { types: [], values: [] },
}: {
  hre: CustomHardHatRuntimeEnvironment;
  target: string | Addressable;
  encode?: { types: readonly (string | ParamType)[]; values: readonly any[] };
}) => {
  hre.log('registerExtension:', target);

  const from = await hre.ethers
    .getNamedSigner('admin')
    .then((s: SignerWithAddress) => s.address);

  const abiEncoder = hre.ethers.AbiCoder.defaultAbiCoder();

  const receipt = await hre.deployments.execute(
    'Registry',
    {
      from,
    },
    'register',
    target,
    abiEncoder.encode(encode.types, encode.values)
  );

  hre.log('Registered extension', target, 'in registry', receipt.to);

  return receipt;
};
