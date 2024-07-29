import type { LogDescription } from 'ethers';

export type UntypedLog = Omit<LogDescription, 'args' | 'name'>;
