import path from 'node:path';

import { readJsonSync, writeJsonSync } from 'fs-extra';

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
  const isLocalNetwork = ['localhost', 'hardhat'].includes(hre.network.name);
  if (isLocalNetwork) {
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
    if (!reason.message.toLowerCase().includes('already verified')) {
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
  if (hre.network.name === 'hardhat' || hre.network.name === 'localhost') {
    //await hre.run('deploy:erc1820');
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

export const deployPoolFactoryContract = async ({
  hre,
}: {
  hre: CustomHardHatRuntimeEnvironment;
}) => {
  return hre.deployOrUpgradeProxy({
    contractName: 'PoolFactory',
    args: await Promise.all([
      hre.ethers.getNamedSigner('admin').then(({ address }) => address),
      hre.deployments.get('Pool').then(({ address }) => address),
    ]),
    options: {
      initializer: '__PoolFactory_init',
      kind: 'uups',
    },
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
