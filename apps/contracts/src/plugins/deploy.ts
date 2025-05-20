import { BaseContract, ContractFactory, Signer } from 'ethers';
import {
  DeployOrUpgradeBeaconFunction,
  DeployOrUpgradeBeaconFunctionArgs,
  DeployOrUpgradeProxyFunction,
  DeployOrUpgradeProxyFunctionArgs,
  GenericDeployFunction,
  GenericUpgradeFunction,
} from '#/types/global';
import type { FactoryOptions } from '@nomicfoundation/hardhat-ethers/types';

const deployOrUpgradeBase = async <TContract extends BaseContract>({
  contractName,
  deployFn,
  upgradeFn,
  getImplementationAddressFn,
  args,
  options,
}: (DeployOrUpgradeProxyFunctionArgs | DeployOrUpgradeBeaconFunctionArgs) & {
  upgradeFn: GenericUpgradeFunction;
  deployFn: GenericDeployFunction;
  getImplementationAddressFn: (proxyAddress: string) => Promise<string>;
}): Promise<InstanceOfContract<TContract>> => {
  if (options === undefined) {
    options = {};
  }
  if (options.timeout === undefined) {
    options.timeout = 600e3;
  }
  if (options.useDefenderDeploy === undefined) {
    options.useDefenderDeploy = false;
  }

  const deployment = await hre.deployments.getOrNull(contractName);
  const maybeDeployedAddress = deployment?.address;
  let contractCode = '0x';
  if (typeof maybeDeployedAddress === 'string') {
    try {
      contractCode = await hre.ethers.provider.getCode(maybeDeployedAddress);
    } catch {
      hre.trace('No existing code found');
    }
  }
  const shouldDeployProxy =
    contractCode === '0x' ||
    process.env.FORCE_PROXY_DEPLOYMENT ||
    typeof maybeDeployedAddress !== 'string';

  const signer: Signer = await hre.ethers.getNamedSigner(
    'mutualsStagingDeployer'
  );

  if (!signer) {
    throw new Error(`Signer could not be found`);
  }

  hre.trace(
    `deployOrUpgrade: ${contractName} from address ${await signer.getAddress()}`
  );

  let contract: InstanceOfContract<TContract>;
  const contractFactory = await hre.ethers
    .getContractFactory(contractName, signer)
    .then((f) => f.connect(signer));

  if (shouldDeployProxy) {
    hre.trace('Deploying proxy and instance', contractName);
    contract = await deployFn(contractFactory, args, options);
  } else {
    try {
      hre.trace(
        'Found existing deployment at:',
        maybeDeployedAddress,
        'attempting to upgrade instance',
        contractName
      );
      const existingImplAddress =
        await getImplementationAddressFn(maybeDeployedAddress);
      hre.trace('Existing implementation at:', existingImplAddress);
      const artifact = await hre.deployments.getArtifact(contractName);
      if (deployment?.bytecode === artifact.bytecode) {
        hre.trace('Implementation appears unchanged, skipped upgrade attempt.');
        contract = await hre.ethers.getContract(contractName, signer);
      } else {
        contract = await upgradeFn<TContract>(
          maybeDeployedAddress,
          contractFactory,
          { ...options }
        );
        const newImplAddress =
          await hre.upgrades.erc1967.getImplementationAddress(
            maybeDeployedAddress
          );
        if (existingImplAddress === newImplAddress) {
          hre.trace('Implementation unchanged');
        } else {
          hre.log('New implementation at:', newImplAddress);
        }
      }
    } catch (error) {
      hre.log(`Failed to upgrade ${contractName} with error:`, error);
      throw new Error(`Failed to upgrade ${contractName} with error: ${error}`);
    }
  }

  hre.trace('...awaiting deployment transaction', contractName);
  await contract.waitForDeployment();
  hre.trace('...successful deployment transaction', contractName);
  return contract;
};

export const deployOrUpgradeProxy: DeployOrUpgradeProxyFunction =
  async function <TContract extends BaseContract>(
    args: DeployOrUpgradeProxyFunctionArgs
  ) {
    return deployOrUpgradeBase<TContract>({
      ...args,
      deployFn: hre.upgrades.deployProxy,
      upgradeFn: hre.upgrades.upgradeProxy,
      getImplementationAddressFn: hre.upgrades.erc1967.getImplementationAddress,
    });
  };

export const deployOrUpgradeBeacon: DeployOrUpgradeBeaconFunction =
  async function <TContract extends BaseContract>(
    args: DeployOrUpgradeBeaconFunctionArgs
  ) {
    return deployOrUpgradeBase<TContract>({
      ...args,
      upgradeFn: hre.upgrades.upgradeBeacon,
      deployFn: hre.upgrades.deployBeacon,
      getImplementationAddressFn: hre.upgrades.beacon.getImplementationAddress,
    });
  };

export const deployNonUpgradeable = async <
  TContract extends BaseContract,
  TFactory extends ContractFactory,
>({
  contractName,
  args,
  options,
}: {
  contractName: keyof Contracts;
  args: unknown[];
  options?: FactoryOptions;
}): Promise<InstanceOfContract<TContract>> => {
  const [signer] = await hre.getSigners();
  hre.log(
    `deployNonUpgradeable: ${contractName} from address ${await signer?.getAddress()}`
  );
  const contractFactory = await hre.ethers.getContractFactory<TFactory>(
    contractName,
    { ...options, signer }
  );
  const contract = (await contractFactory.deploy(
    ...args
  )) as InstanceOfContract<TContract>;
  hre.log(
    'Deployed non upgradeable contract',
    contractName,
    await contract.getAddress()
  );
  return contract;
};
