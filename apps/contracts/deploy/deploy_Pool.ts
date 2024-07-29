import { DeployFunction } from 'hardhat-deploy/types';
import { Logger } from '@ethersproject/logger';
import { deployPoolContract, finalizeDeployments } from '@/utils/deploy';

export const deploy: DeployFunction = async (environment) => {
	const hre = environment as unknown as CustomHardHatRuntimeEnvironment;
	Logger.setLogLevel(Logger.levels.DEBUG);
	hre.trace(`deploy-pool`);
	const contract = await deployPoolContract({
		hre,
	});
	await finalizeDeployments({ hre, contracts: { Pool: contract } });
};

deploy.tags = ['all', 'pool'];
deploy.dependencies = ['preconditions'];
deploy.skip = async (hre) =>
	Promise.resolve(
		!['mainnet', 'goerli', 'localhost', 'hardhat'].includes(hre.network.name)
	);

export default deploy;
