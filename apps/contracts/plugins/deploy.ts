import { BaseContract, ContractFactory, Signer } from 'ethers';
import {
  DeployOrUpgradeBeaconFunction,
  DeployOrUpgradeBeaconFunctionArgs,
  DeployOrUpgradeProxyFunction,
  DeployOrUpgradeProxyFunctionArgs,
  GenericDeployFunction,
  GenericUpgradeFunction,
} from '@/types/global';
import { getContract } from '@/utils/contracts';
import type { FactoryOptions } from '@nomicfoundation/hardhat-ethers/types';

const deployOrUpgradeBase = async <TContract extends BaseContract>({
  contractName,
  upgradeFn,
  deployFn,
  args,
  options,
}: (DeployOrUpgradeProxyFunctionArgs | DeployOrUpgradeBeaconFunctionArgs) & {
  upgradeFn: GenericUpgradeFunction;
  deployFn: GenericDeployFunction;
}): Promise<InstanceOfContract<TContract>> => {
  if (options === undefined) {
    options = {};
  }
  if (options.timeout === undefined) {
    //options.timeout = 600e3;
  }
  const deployment = await hre.deployments.getOrNull(contractName);
  const maybeAddress = deployment?.address;
  let contractCode = '0x';
  if (typeof maybeAddress === 'string') {
    try {
      contractCode = await hre.ethers.provider.getCode(maybeAddress);
    } catch {
      hre.trace('No existing code found');
    }
  }
  const [signer]: Signer[] = await hre.getSigners();

  hre.trace(
    `deployOrUpgrade: ${contractName} from address ${await signer.getAddress()}`
  );

  let contract: InstanceOfContract<TContract>;
  const contractFactory = (
    await hre.ethers.getContractFactory(contractName, signer)
  ).connect(signer);
  const shouldDeployProxy =
    contractCode === '0x' ||
    process.env.FORCE_PROXY_DEPLOYMENT ||
    typeof maybeAddress !== 'string';
  if (
    shouldDeployProxy
    // &&
    // This guard was used during mainnet deployment as an extra barrier to prevent
    // accidental deployment of live contracts. It has to be removed to allow for
    // complete test environment Hardhat deployments.
    // !['bridgedpolygonmutuals', 'mutuals', 'lockedmutuals'].includes(
    //   contractName.toLowerCase()
    // )
  ) {
    hre.trace('Deploying proxy and instance', contractName);
    contract = await deployFn(contractFactory, args, options);

    await contract.waitForDeployment();
    hre.log('Deployed', contractName, 'at', await contract.getAddress());
  } else {
    try {
      hre.trace(
        'Found existing contract at:',
        maybeAddress,
        'attempting to upgrade instance',
        contractName
      );
      const existingImplementationAddress =
        await hre.upgrades.erc1967.getImplementationAddress(maybeAddress);
      hre.trace('Existing implementation at:', existingImplementationAddress);
      const deployment = await hre.deployments.get(contractName);
      const artifact = await hre.deployments.getArtifact(contractName);
      if (deployment.bytecode === artifact.bytecode) {
        hre.trace('Implementation appears unchanged, skipped upgrade attempt.');
        contract = (await getContract({
          contractName,
          hre,
          signer,
        })) as InstanceOfContract<TContract>;
      } else {
        contract = await upgradeFn(maybeAddress, contractFactory, options);
        const newImplementationAddress =
          await hre.upgrades.erc1967.getImplementationAddress(maybeAddress);
        if (existingImplementationAddress === newImplementationAddress) {
          hre.trace('Implementation unchanged');
        } else {
          hre.log('New implementation at:', newImplementationAddress);
        }
        hre.trace('...awaiting deployment transaction', contractName);
        await contract.waitForDeployment();
        hre.trace('...successful deployment transaction', contractName);
      }
    } catch (error) {
      hre.log(`Failed to upgrade ${contractName} with error:`, error);
      throw new Error(`Failed to upgrade ${contractName} with error: ${error}`);
    }
  }
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
    });
  };

export const deployOrUpgradeBeacon: DeployOrUpgradeBeaconFunction =
  async function <TContract extends BaseContract>(
    args: DeployOrUpgradeBeaconFunctionArgs
  ) {
    return deployOrUpgradeBase<TContract>({
      ...args,
      deployFn: hre.upgrades.deployBeacon,
      upgradeFn: hre.upgrades.upgradeBeacon,
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
    `deployNonUpgradeable: ${contractName} from address ${await signer.getAddress()}`
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
