import type { HardhatUserConfig } from 'hardhat/types/config';

export const typechain: HardhatUserConfig['typechain'] = {
	outDir: 'types/typechain-types',
};
