import {
  AnkrProvider,
  GetAccountBalanceRequest,
  GetTransfersRequest,
} from '@ankr.com/ankr.js';

export const ANKR_API_KEY =
  //process.env['NEXT_PUBLIC_ANKR_API_KEY'] ??
  '05474888d4660bccc6c3514f0e5860003a4453a8940b2be27c7b015dc7810497';

export const fetcher = () => new AnkrProvider(ANKR_API_KEY);

export const getTokenTransfers = (params: GetTransfersRequest) =>
  fetcher()
    .getTokenTransfers({
      pageSize: 10,
      ...params,
    })
    .catch((e) => console.error('error fetching token transfers', e));

export const getAccountBalance = (params: GetAccountBalanceRequest) =>
  fetcher()
    .getAccountBalance({
      pageSize: 10,
      ...params,
    })
    .catch((e) => console.error('error fetching account balance', e));
