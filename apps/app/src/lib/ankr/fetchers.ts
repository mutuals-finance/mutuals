import {
  AnkrProvider,
  GetAccountBalanceRequest,
  GetTransfersRequest,
} from "@ankr.com/ankr.js";

const ANKR_URL = process.env["NEXT_PUBLIC_ANKR_URL"] ?? "";
export const fetcher = () => new AnkrProvider(ANKR_URL);

export const getTokenTransfers = (params: GetTransfersRequest) =>
  fetcher().getTokenTransfers({
    pageSize: 10,
    ...params,
  });

export const getAccountBalance = (params: GetAccountBalanceRequest) =>
  fetcher().getAccountBalance({
    pageSize: 10,
    ...params,
  });
