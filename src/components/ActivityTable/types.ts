import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';

import { SplitDetailsFragmentFragment } from '@/lib/graphql/thegraph/__generated__/graphql';

export enum EventType {
  Deposit = 'Deposit',
  Withdrawal = 'Withdrawal',
}

export interface SplitEvent {
  event: EventType;
  price: string;
  by: string;
  to: string;
  timestamp: string;
}

export interface ActivityTableProps
  extends Pick<SplitDetailsFragmentFragment, 'address'> {
  transfers?: TokenTransfer[];
}
