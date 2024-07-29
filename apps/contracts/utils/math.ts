import { BigNumberish } from 'ethers';

import { Zero } from '@/constants/units';

/** Calculates the sum of an array of BigNumberish */
export const sum = (numbers: BigNumberish[]): BigNumberish => {
	return numbers.reduce((total, removal) => total.add(removal), Zero);
};
