import { abi as poolAbi } from '../artifacts/contracts/Pool.sol/Pool.json';
import { abi as poolFactoryAbi } from '../artifacts/contracts/PoolFactory.sol/PoolFactory.json';

export const CONTRACT_NAME_TO_ABI = {
	Pool: poolAbi,
	PoolFactory: poolFactoryAbi,
} as const;
