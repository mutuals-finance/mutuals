import { DeployFunction } from 'hardhat-deploy/types';
import { Logger } from '@ethersproject/logger';
import { deployPoolFactoryContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
	const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
	Logger.setLogLevel(Logger.levels.DEBUG);
	hre.trace(`deploy-pool-factory`);

	const PoolFactory = await deployPoolFactoryContract({
		hre,
	});
	await finalizeDeployments({ hre, contracts: { PoolFactory } });
};

deploy.tags = ['all', 'poolFactory'];
deploy.dependencies = ['preconditions'];
deploy.skip = async (hre) =>
	Promise.resolve(
		!['mainnet', 'goerli', 'localhost', 'hardhat'].includes(hre.network.name)
	);

export default deploy;
