import path from 'node:path';

import { types, task } from 'hardhat/config';
import { AdminClient } from 'defender-admin-client';
import { readJsonSync } from 'fs-extra';

type DefenderContract = Parameters<AdminClient['addContract']>[0];

const isDefenderNetwork = (
  network: string
): network is DefenderContract['network'] => {
  return [
    'mainnet',
    'ropsten',
    'rinkeby',
    'kovan',
    'goerli',
    'xdai',
    'sokol',
    'fuse',
    'bsc',
    'bsctest',
    'fantom',
    'fantomtest',
    'moonbase',
    'matic',
    'amoy',
  ].includes(network);
};

const addContractsToDefender = async (
  {
    contractNames,
  }: {
    contractNames: (keyof Contracts)[];
  },
  hre: CustomHardHatRuntimeEnvironment
): Promise<void> => {
  const deployed = readJsonSync(path.join(__dirname, '../contracts.json'));
  const {
    config: { defender },
    network: { name: networkName },
    ethers,
  } = hre;
  if (defender !== undefined && isDefenderNetwork(networkName)) {
    hre.log('Adding contracts to defender');
    const contracts = await Promise.all(
      contractNames.map(async (name) => {
        const factory = await ethers.getContractFactory(name);
        const contract = factory.attach(
          deployed[networkName][name].proxyAddress
        );
        return {
          name: `${name}_new`,
          abi: JSON.stringify(contract.interface.fragments) as string,
          network: networkName,
          address: deployed[networkName][name].proxyAddress,
        };
      })
    );
    const defenderClient = new AdminClient(defender);
    const defenderContracts = new Set(
      (await defenderClient.listContracts()).map((c) =>
        c.name.concat(c.network)
      )
    );
    const contractsToAddToDefender: DefenderContract[] = contracts.filter(
      (c) => {
        return !defenderContracts.has(c.name.concat(c.network));
      }
    );
    if (contractsToAddToDefender.length === 0) {
      hre.log('No contracts to add to defender');
    } else {
      await Promise.all(
        contractsToAddToDefender.map(async (c) => defenderClient.addContract(c))
      );
      hre.log(
        'Added the following contracts to defender:',
        contractsToAddToDefender.map((c) => c.name)
      );
    }
  }
};

export const DEFENDER_ADD_TASK = {
  name: 'defender:add',
  description: 'Adds contracts to defender',
  run: addContractsToDefender,
} as const;

task(
  DEFENDER_ADD_TASK.name,
  DEFENDER_ADD_TASK.description,
  DEFENDER_ADD_TASK.run
).addVariadicPositionalParam(
  'contractNames',
  'the list of contracts to add',
  undefined,
  types.string
);
