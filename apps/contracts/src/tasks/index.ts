import type { NewTaskActionFunction } from 'hardhat/types/tasks';

import { TASK as UPGRADE_TASK } from './upgrade';
import { TASK as ACCOUNTS_TASK } from './accounts';

const TASK_VERIFY_VERIFY = 'verify:verify';

export const TASKS = {
  [TASK_VERIFY_VERIFY]: {} as {
    run: NewTaskActionFunction<{
      address: string;
      // constructor args given as positional params
      constructorArgsParams: string[];
      // Filename of constructor arguments module
      constructorArgs?: string;
      // Fully qualified name of the contract
      contract?: string;
      // Filename of libraries module
      libraries?: string;
    }>;
  },
  [ACCOUNTS_TASK.name]: { ...ACCOUNTS_TASK },
  [UPGRADE_TASK.name]: { ...UPGRADE_TASK },
} as const;
