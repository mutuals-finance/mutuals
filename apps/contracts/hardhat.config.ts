import 'tsconfig-paths/register';
import '@/config/environment';
import '@/plugins';

import { etherscan } from '@/config/etherscan';
import { networks } from '@/config/networks';
import { namedAccountIndices } from '@/config/accounts';
import { defender } from '@/config/defender';
import { solidity } from '@/config/solidity';
import { tracer } from '@/config/tracer';
import { typechain } from '@/config/typechain';
import { HardhatUserConfig } from 'hardhat/config';

export const getConfig = (
	environment: NodeJS.ProcessEnv = process.env
): HardhatUserConfig => {
	return {
		namedAccounts: namedAccountIndices,
		networks,
		etherscan,
		defender,
		solidity,
		paths: {
			sources: './contracts',
			cache: './cache_hardhat',
		},
		tracer,
		typechain,
		contractSizer: {
			alphaSort: true,
			disambiguatePaths: false,
			runOnCompile: true,
			strict: false,
		},
	};
};

export const config = getConfig();

export default config;