import type { HardhatUserConfig } from 'hardhat/types/config';

export const tracer: HardhatUserConfig['tracer'] = {
	enabled: process.env.TRACE,
	gasCost: true,
	// calls: true,
	// sloads: true,
	// logs: true,
	// sstores: true,
	// opcodes:[],
};
