import { task } from 'hardhat/config';

/**
 * Interact with the upgradeable proxy contracts.
 *
 * @param taskArguments - The upgradeable contract names
 * @param hre - The hardhat runtime environment.
 */
export const TASK = {
  name: 'upgrade',
  description: 'Interact with upgradeable contracts',
  run: async (
    taskArgs: { contractNames: (keyof Contracts)[]; validate: boolean },
    hre: CustomHardHatRuntimeEnvironment
  ): Promise<void> => {
    if (taskArgs.validate) {
      const [signer] = await hre.getSigners();
      for (const name of taskArgs.contractNames) {
        const origImplementation = await hre.ethers.getContractFactory(name);
        const newImplementation = await hre.ethers.getContractFactory(
          name,
          signer
        );
        await hre.upgrades.validateUpgrade(
          origImplementation,
          newImplementation,
          {
            unsafeAllow: ['delegatecall'],
          }
        );
      }
    } else {
      hre.log('Skipping validation. No other options available yet.');
    }
  },
} as const;

task(TASK.name, TASK.description, TASK.run)
  .addFlag('validate')
  .addVariadicPositionalParam(
    'contractNames',
    'The upgradeable contract names',
    undefined,
    undefined,
    false
  );
