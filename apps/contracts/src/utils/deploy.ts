import path from 'node:path';

import { readJsonSync, writeJsonSync } from 'fs-extra';
import type { Deployment } from 'hardhat-deploy/types';
import {SignerWithAddress} from "@nomicfoundation/hardhat-ethers/signers";

type ContractConfig = Record<string, { proxyAddress: string }>;

export const readContractsConfig = (): Record<string, ContractConfig> => {
  return readJsonSync(path.join(__dirname, '../contracts.json'));
};

export const updateContractsConfig = ({
  networkName,
  contractName,
  proxyAddress,
}: {
  networkName: string;
  contractName: string;
  proxyAddress: string;
}): void => {
  const config = readContractsConfig();
  hre.trace('updateContractsConfig', networkName, contractName, proxyAddress);
  return writeJsonSync(
    path.join(__dirname, '../contracts.json'),
    {
      ...config,
      [networkName]: {
        ...config[networkName],
        [contractName]: { proxyAddress },
      },
    },
    { spaces: 2 }
  );
};

export const verifyContracts = async ({
  hre,
  contracts,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  contracts: Contracts;
}): Promise<void> => {
  const taskName = 'verify:verify';
  if (hre.isNetworkLocal()) {
    hre.trace(`not executing task ${taskName} for network ${hre.network.name}`);
    return;
  }

  hre.trace(`executing task ${taskName} for network ${hre.network.name}`);

  const results = await Promise.allSettled(
    Object.entries(contracts)
      .filter((_, value) => value !== undefined)
      .map(async ([_name, contract]) =>
        hre.run(taskName, {
          address: contract.target,
          constructorArgsParams: [],
        })
      )
  );
  for (const { reason } of results.filter(
    ({ status }) => status === 'rejected'
  ) as PromiseRejectedResult[]) {
    const whitelist = [
      'already verified',
      'proxy was recently deployed, the transaction may not be available',
    ];
    const message = reason.message.toLowerCase();
    const isWhitelisted = whitelist.some((item) => message.includes(item));

    if (!isWhitelisted) {
      throw new Error(reason);
    }
  }
  hre.trace('Verified contracts');
};

export const writeContractsConfig = ({
  contracts,
}: {
  contracts: Contracts;
}): void => {
  hre.trace('Writing contracts.json config', hre.network.name);
  for (const [name, contract] of Object.entries(contracts).filter(
    (_, value) => value !== undefined
  )) {
    updateContractsConfig({
      networkName: hre.network.name,
      contractName: name,
      proxyAddress: contract.target,
    });
  }
};

export const configureDeploymentSettings = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}): Promise<void> => {
  if (hre.isNetworkLocal()) {
    // currently, it's a noop (there might be somewhat in the future)
  }
};

export const validateDeploymentSettings = ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}): void => {
  if (hre.network.live && process.env.SOLC_PROFILE !== 'production') {
    throw new Error(
      'Please use the production solc profile (by setting the environment variable "SOLC_PROFILE" to "production") for production networks'
    );
  }
};

export const deployRegistryContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployOrUpgradeProxy({
    contractName: 'ModuleRegistry',
    args: await Promise.all([
      hre.ethers
        .getNamedSigner('mutualsStagingDeployer')
        .then((signer: SignerWithAddress) => signer.address),
    ]),
    options: {
      initializer: 'initialize',
      kind: 'uups',
    },
  });
};

export const deployPoolFactoryContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  const poolImplementation = await hre.deployments.get('Pool').then((deployment: Deployment) => deployment.address);

  return hre.deployNonUpgradeable({
    contractName: 'PoolFactory',
    args: [
      poolImplementation,
      await hre.ethers
        .getNamedSigner('mutualsStagingDeployer')
        .then((signer: SignerWithAddress) => signer.address),
    ],
  });
};

export const deployPoolBeaconContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployOrUpgradeBeacon({
    contractName: 'Pool',
  });
};

export const deployDirectDistributionModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'DirectDistributionModule',
  });
};

export const deployVestingDistributionModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'VestingDistributionModule',
  });
};

export const deployTokenLimitDistributionModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'TokenLimitDistributionModule',
  });
};

export const deployPriorityDistributionModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'PriorityDistributionModule',
  });
};

export const deployOnchainMappingValidationModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'OnchainMappingValidationModule',
  });
};

export const deployMerkleTreeValidationModuleContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployNonUpgradeable({
    contractName: 'MerkleTreeValidationModule',
  });
};

export const saveDeployments = async ({
  hre,
  contracts,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  contracts: Contracts;
}): Promise<void> => {
  hre.trace('saving deployments');
  await Promise.all(
    Object.entries(contracts)
      .filter(([_, value]) => value !== undefined)
      .map(async ([name, contract]) => {
        const { abi, bytecode, deployedBytecode } =
          await hre.artifacts.readArtifact(name);

        return hre.deployments.save(name, {
          abi,
          address: contract.target,
          bytecode,
          deployedBytecode,
        });
      })
  );
  hre.trace('saved deployments');
};

export const finalizeDeployments = async ({
  hre,
  contracts,
}: {
  hre: CustomHardHatRuntimeEnvironment;
  contracts: Contracts;
}): Promise<void> => {
  writeContractsConfig({ contracts });
  await verifyContracts({ hre, contracts });
  await saveDeployments({
    hre,
    contracts,
  });
};
