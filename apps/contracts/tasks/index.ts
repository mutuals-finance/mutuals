import type { ActionType } from 'hardhat/config';
import { TASK_VERIFY_VERIFY } from '@nomicfoundation/hardhat-verify/internal/task-names';

import { TASK as UPGRADE_TASK } from './upgrade';
import { TASK as ACCOUNTS_TASK } from './accounts';
import { DEFENDER_ADD_TASK } from '@/tasks/defender';

export interface Task {
  run: ActionType<
    {
      run: ActionType<object, never>;
    },
    never
  >;
}

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
      never
    >;
  },
  [ACCOUNTS_TASK.name]: { ...ACCOUNTS_TASK },
  [DEFENDER_ADD_TASK.name]: { ...DEFENDER_ADD_TASK },
  [UPGRADE_TASK.name]: { ...UPGRADE_TASK },
} as const;
