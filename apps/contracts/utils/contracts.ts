import type { Contract } from 'ethers';

import type { Pool, PoolFactory } from '@/typechain-types';

export const getContract = async <TContractName extends keyof Contracts>({
	contractName,
	hre,
	signer,
}: {
	contractName: TContractName;
	hre: CustomHardHatRuntimeEnvironment;
	signer?: ConstructorParameters<typeof Contract>[2];
}): Promise<Required<Contracts>[TContractName]> => {
	const deployment = await hre.deployments.get(contractName);
	const contract = await hre.ethers.getContractAt(
		contractName,
		deployment.address
	);
	if (!contract) {
		throw new Error(`Unsupported network: ${hre.network.name}`);
	}
	return (
		signer == undefined ? contract : contract.connect(signer)
	) as Required<Contracts>[TContractName];
};

export const getPool = async ({
	hre,
	signer,
}: {
	hre: CustomHardHatRuntimeEnvironment;
	signer?: ConstructorParameters<typeof Contract>[2];
}): Promise<Pool> => {
	return getContract({
		contractName: 'Pool',
		hre,
		signer,
	});
};

export const getPoolFactory = async ({
	hre,
	signer,
}: {
	hre: CustomHardHatRuntimeEnvironment;
	signer?: ConstructorParameters<typeof Contract>[2];
}): Promise<PoolFactory> =>
	getContract({
		contractName: 'PoolFactory',
		hre,
		signer,
	});

export const getContractsFromDeployments = async (
	hre: CustomHardHatRuntimeEnvironment
): Promise<Required<Contracts>> => {
	const deployments = await hre.deployments.all();
	const contracts = {
		PoolFactory: deployments.PoolFactory?.address
			? await getPoolFactory({ hre })
			: undefined,
		Pool: deployments.Pool?.address ? await getPool({ hre }) : undefined,
	} as Required<Contracts>;
	return contracts;
};
