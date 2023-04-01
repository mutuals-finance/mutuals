import { GetAccountBalanceReply } from '@ankr.com/ankr.js/dist/types';

export type AssetTableProps = Partial<
  Omit<GetAccountBalanceReply, 'totalBalanceUsd'>
>;
