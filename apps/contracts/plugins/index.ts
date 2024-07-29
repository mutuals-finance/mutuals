/* eslint-disable no-param-reassign -- hre is intended to be configured via assignment in this file */

import 'tsconfig-paths/register';
import '@openzeppelin/hardhat-upgrades';
import '@nomicfoundation/hardhat-ethers';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-tracer';
import 'hardhat-contract-sizer';
import '@/config/environment';
import '@/tasks/index';
import { extendEnvironment } from 'hardhat/config';
import { BaseContract, Contract, ContractFactory, Signer } from 'ethers';
import type {
	DeployProxyOptions,
	UpgradeProxyOptions,
} from '@openzeppelin/hardhat-upgrades/dist/utils';
import { lazyFunction, lazyObject } from 'hardhat/plugins';
import type { FactoryOptions } from '@nomicfoundation/hardhat-ethers/types';
import { namedAccounts } from '@/config/accounts';
import { trace, log } from '@/utils/log';
import { getContract } from '@/utils/contracts';
import { debug } from '@/utils/debug';

const deployOrUpgradeBase = async <
	TContract extends Contract,
	TFactory extends ContractFactory,
>({
	contractName,
	upgradeFn,
	deployFn,
	args,
	options,
}: {
	contractName: keyof Contracts;
	upgradeFn: (
		maybeAddress: string,
		factory: ContractFactory<unknown[], BaseContract>,
		options?: UpgradeProxyOptions
	) => Promise<ReturnType<TContract['attach']>>;
	deployFn: (
		factory: ContractFactory<unknown[], BaseContract>,
		args: unknown[],
		options?: DeployProxyOptions
	) => Promise<ReturnType<TContract['attach']>>;
	args: unknown[];
	options?: DeployProxyOptions;
}): Promise<InstanceOfContract<TContract>> => {
	if (options === undefined) {
		options = {};
	}
	if (options.timeout === undefined) {
		options.timeout = 600e3;
	}
	const proxy = await hre.deployments.getOrNull(contractName);
	const maybeProxyAddress = proxy?.address;
	let contractCode = '0x';
	if (typeof maybeProxyAddress === 'string') {
		try {
			contractCode = await hre.ethers.provider.getCode(maybeProxyAddress);
		} catch {
			hre.trace('No existing code found');
		}
	}
	const [signer]: Signer[] = await hre.getSigners();

	hre.trace(
		`deployOrUpgrade: ${contractName} from address ${await signer.getAddress()}`
	);

	let contract: InstanceOfContract<TContract> | undefined;
	const contractFactory = (
		await hre.ethers.getContractFactory(contractName, signer)
	).connect(signer);
	const shouldDeployProxy =
		contractCode === '0x' ||
		process.env.FORCE_PROXY_DEPLOYMENT ||
		typeof maybeProxyAddress !== 'string';
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
				maybeProxyAddress,
				'attempting to upgrade instance',
				contractName
			);
			const existingImplementationAddress =
				await hre.upgrades.erc1967.getImplementationAddress(maybeProxyAddress);
			hre.trace('Existing implementation at:', existingImplementationAddress);
			const deployment = await hre.deployments.get(contractName);
			const artifact = await hre.deployments.getArtifact(contractName);
			if (deployment.bytecode === artifact.bytecode) {
				hre.trace('Implementation appears unchanged, skipped upgrade attempt.');
				const name = contractName;
				contract = (await getContract({
					contractName: name,
					hre,
					signer,
				})) as InstanceOfContract<TContract>;
			} else {
				contract = await upgradeFn(maybeProxyAddress, contractFactory, options);
				const newImplementationAddress =
					await hre.upgrades.erc1967.getImplementationAddress(
						maybeProxyAddress
					);
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

const deployOrUpgradeProxy = async <
	TContract extends Contract,
	TFactory extends ContractFactory,
>(params: {
	contractName: keyof Contracts;
	args: unknown[];
	options?: DeployProxyOptions;
}): Promise<InstanceOfContract<TContract>> => {
	return deployOrUpgradeBase<TContract, TFactory>({
		...params,
		deployFn: hre.upgrades.deployProxy,
		upgradeFn: hre.upgrades.upgradeProxy,
	});
};

const deployOrUpgradeBeacon = async <
	TContract extends Contract,
	TFactory extends ContractFactory,
>(params: {
	contractName: keyof Contracts;
	args: unknown[];
	options?: DeployProxyOptions;
}): Promise<InstanceOfContract<TContract>> => {
	return deployOrUpgradeBase<TContract, TFactory>({
		...params,
		deployFn: hre.upgrades.deployBeacon,
		upgradeFn: hre.upgrades.upgradeBeacon,
	});
};

const deployNonUpgradeable = async <
	TContract extends Contract,
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

/**
 * Note: extendEnvironment cannot take async functions
 *
 */
extendEnvironment((hre) => {
	// todo move to @/extensions/signers, @extensions/deployments
	hre.log = lazyFunction(() => log);
	hre.trace = lazyFunction(() => trace);
	hre.debug = lazyFunction(() => debug);
	if (hre.network.config.live) {
		hre.log('Using alchemy + hd wallet signer');
	} else {
		hre.namedAccounts = lazyObject(() => namedAccounts);
		hre.log('Using hardhat signer');
	}
	hre.getSigners = lazyFunction(() => hre.ethers.getSigners);
	hre.deployNonUpgradeable = lazyFunction(() => deployNonUpgradeable);
	hre.deployOrUpgradeProxy = lazyFunction(() => deployOrUpgradeProxy);
});
