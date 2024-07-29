/* eslint-disable @typescript-eslint/naming-convention -- contracts in this file match on-chain contract names which are pascal case */
import type { Pool, PoolFactory } from '@/typechain-types/index';

export interface Contracts {
	Pool: Pool;
	PoolFactory: PoolFactory;
}
