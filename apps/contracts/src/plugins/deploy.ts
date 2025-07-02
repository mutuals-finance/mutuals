import { BaseContract, ContractFactory, Signer } from 'ethers';
import {
  BaseDeployFunction,
  DeployFunctionArgs,
  DeployOrUpgradeBeaconFunction,
  DeployOrUpgradeBeaconFunctionArgs,
  DeployOrUpgradeProxyFunction,
  DeployOrUpgradeProxyFunctionArgs,
  GenericDeployFunction,
  GenericUpgradeFunction,
} from '#/types/global';
import type { DeployProxyOptions } from '@openzeppelin/hardhat-upgrades/src/utils';

const parseOptions = (options?: DeployProxyOptions): DeployProxyOptions => {
  if (options === undefined) {
    options = {};
  }

  if (options.timeout === undefined) {
    options.timeout = 600e3;
  }

  if (options.useDefenderDeploy === undefined) {
    options.useDefenderDeploy = false;
  }

  return options;
};

const getDeployer = async (): Promise<Signer> => {
  const deployer: Signer = await hre.ethers.getNamedSigner(
    'mutualsStagingDeployer'
  );

  if (!deployer) {
    throw new Error(`Deployer could not be found`);
  }

  return deployer;
};

const deployBase = async <TContract extends BaseContract>({
  contractName,
  deployFn,
  args = [],
  options: _options,
}: DeployFunctionArgs & {
  deployFn: BaseDeployFunction;
}): Promise<InstanceOfContract<TContract>> => {
  const options = parseOptions(_options);
  const signer = await getDeployer();

  hre.trace(
    `deploy: ${contractName} from address ${await signer.getAddress()}`
  );
  const contractFactory = await hre.ethers
    .getContractFactory(contractName, signer)
    .then((f: TContract) => f.connect(signer));

  const contract = await deployFn<TContract>(
    contractFactory,
    args,
    options,
    signer
  );

  hre.trace('...awaiting deployment transaction', contractName);
  const deployTx = contract.deploymentTransaction();
  if (deployTx) {
    await deployTx.wait(5);
  }
  await contract.waitForDeployment();

  hre.trace('...successful deployment transaction', contractName);
  return contract;
};

const deployOrUpgradeBase = async <TContract extends BaseContract>({
  contractName,
  deployFn: deployUpgradeableFn,
  upgradeFn,
  getImplementationAddressFn,
  ...argsAndOptions
}: (DeployOrUpgradeProxyFunctionArgs | DeployOrUpgradeBeaconFunctionArgs) & {
  upgradeFn: GenericUpgradeFunction;
  deployFn: GenericDeployFunction;
  getImplementationAddressFn: (proxyAddress: string) => Promise<string>;
}): Promise<InstanceOfContract<TContract>> => {
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

  const deployFn: BaseDeployFunction = async (
    contractFactory,
    args,
    options,
    signer
  ) => {
    let contract: InstanceOfContract<TContract>;

    if (shouldDeployProxy) {
      hre.trace('Deploying proxy and instance', contractName);
      contract = await deployUpgradeableFn(contractFactory, args, options);
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
          hre.trace(
            'Implementation appears unchanged, skipped upgrade attempt.'
          );
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
        throw new Error(
          `Failed to upgrade ${contractName} with error: ${error}`
        );
      }
    }
    return contract;
  };

  return deployBase({ contractName, deployFn, ...argsAndOptions });
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
>(options: {
  contractName: keyof Contracts;
  args?: unknown[];
}): Promise<InstanceOfContract<TContract>> => {
  const deployFn: BaseDeployFunction = async (
    contractFactory,
    args,
    _options,
    _signer
  ) => {
    return (await contractFactory.deploy(
      ...args
    )) as InstanceOfContract<TContract>;
  };

  return deployBase({ ...options, deployFn });
};
