import type { ActionType } from 'hardhat/config';
import {
	TASK_VERIFY,
	TASK_VERIFY_GET_MINIMUM_BUILD,
	TASK_VERIFY_GET_CONSTRUCTOR_ARGUMENTS,
	TASK_VERIFY_GET_COMPILER_VERSIONS,
	TASK_VERIFY_GET_ETHERSCAN_ENDPOINT,
	TASK_VERIFY_GET_CONTRACT_INFORMATION,
	TASK_VERIFY_VERIFY_MINIMUM_BUILD,
	TASK_VERIFY_VERIFY,
	TASK_VERIFY_GET_LIBRARIES,
} from '@nomiclabs/hardhat-etherscan/dist/src/constants';

import { TASK as UPGRADE_TASK } from './upgrade';
import { TASK as ACCOUNTS_TASK } from './accounts';
import { DEFENDER_ADD_TASK } from './defender';

export interface Task {
	run: ActionType<
		{
			run: ActionType<{}, any>;
		},
		any
	>;
}

// const VESTING_TASK = GET_VESTING_TASK();  // todo make work with forked repo

export const TASKS = {
	[TASK_VERIFY_VERIFY]: {} as {
		run: ActionType<
			{
				address: string;
				// constructor args given as positional params
				constructorArgsParams: string[];
				// Filename of constructor arguments module
				constructorArgs?: string;
				// Fully qualified name of the contract
				contract?: string;
				// Filename of libraries module
				libraries?: string;
			},
			any
		>;
	},
	[TASK_VERIFY]: {} as Task,
	[TASK_VERIFY_GET_MINIMUM_BUILD]: {} as Task,
	[TASK_VERIFY_GET_CONSTRUCTOR_ARGUMENTS]: {} as Task,
	[TASK_VERIFY_GET_COMPILER_VERSIONS]: {} as Task,
	[TASK_VERIFY_GET_ETHERSCAN_ENDPOINT]: {} as Task,
	[TASK_VERIFY_GET_CONTRACT_INFORMATION]: {} as Task,
	[TASK_VERIFY_VERIFY_MINIMUM_BUILD]: {} as Task,
	[TASK_VERIFY_GET_LIBRARIES]: {} as Task,
	[ACCOUNTS_TASK.name]: { ...ACCOUNTS_TASK },
	//[DEFENDER_ADD_TASK.name]: { ...DEFENDER_ADD_TASK },
	[UPGRADE_TASK.name]: { ...UPGRADE_TASK },
} as const;
