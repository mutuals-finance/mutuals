import type { ActionType } from 'hardhat/config';

import { TASK as UPGRADE_TASK } from './upgrade';
import { TASK as ACCOUNTS_TASK } from './accounts';
//import { DEFENDER_ADD_TASK } from './defender';

export interface Task {
  run: ActionType<
    {
      run: ActionType<object, never>;
    },
    never
  >;
}

export const TASKS = {
  [ACCOUNTS_TASK.name]: { ...ACCOUNTS_TASK },
  //[DEFENDER_ADD_TASK.name]: { ...DEFENDER_ADD_TASK },
  [UPGRADE_TASK.name]: { ...UPGRADE_TASK },
} as const;
