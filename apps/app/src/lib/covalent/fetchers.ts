import { COVALENT_KEY } from "src/constants";

import {
  AllChainInfoResponse,
  BalanceResponseType,
  ChainStatusResponse,
  EventsListResponseType,
  HistoricalPortfolioResponse,
  NftMetadataResponseType,
  NftTransactionsResponseType,
  SingleBlockResponse,
  TokenHolderDiffResponse,
  TokenHolderResponse,
  TokenIdResponse,
  TransactionResponse,
  TransferResponse,
} from "./types";
import { mainnet } from "wagmi/chains";

export const fetcher = <TResponse = any>(url: string): Promise<TResponse> =>
  fetch(`https://api.covalenthq.com/v1/${url}?key=${COVALENT_KEY}`).then(
    (res) => res.json(),
  );

export const getTokenBalances = (
  chainId: number = mainnet.id,
  address: string,
) => fetcher<BalanceResponseType>(`${chainId}/address/${address}/balances_v2/`);

export const getPortfolio = (chainId: number = mainnet.id, address: string) =>
  fetcher<HistoricalPortfolioResponse>(
    `${chainId}/address/${address}/portfolio_v2/`,
  );

export const getTransfers = (chainId: number = mainnet.id, address: string) =>
  fetcher<TransferResponse>(`${chainId}/address/${address}/transfers_v2/`);

export const getBlock = (
  chainId: number = mainnet.id,
  blockHeight: string | number,
) => fetcher<SingleBlockResponse>(`${chainId}/block_v2/${blockHeight}/`);

export const getBlockHeights = (
  chainId: number = mainnet.id,
  startDate: string,
  endDate: string,
) =>
  fetcher<SingleBlockResponse>(`${chainId}/block_v2/${startDate}/${endDate}/`);

export const getLogs = (chainId: number = mainnet.id, address: string) =>
  fetcher<EventsListResponseType>(`${chainId}/events/address/${address}/`);

export const getLogsForTopic = (chainId: number = mainnet.id, topic: string) =>
  fetcher<EventsListResponseType>(`${chainId}/events/topics/${topic}/`);

export const getNftMetadata = (
  chainId: number = mainnet.id,
  address: string,
  tokenId: string,
) =>
  fetcher<NftMetadataResponseType>(
    `${chainId}/tokens/${address}/nft_metadata/${tokenId}/`,
  );

export const getNftTokenIds = (chainId: number = mainnet.id, address: string) =>
  fetcher<NftMetadataResponseType>(
    `${chainId}/tokens/${address}/nft_token_ids/`,
  );

export const getNftTransactions = (
  chainId: number = mainnet.id,
  address: string,
  tokenId: string,
) =>
  fetcher<NftTransactionsResponseType>(
    `${chainId}/tokens/${address}/nft_transactions/${tokenId}/`,
  );

export const getHoldersChanges = (
  chainId: number = mainnet.id,
  address: string,
) =>
  fetcher<TokenHolderDiffResponse>(
    `${chainId}/tokens/${address}/token_holders_changes/`,
  );

export const getTokenHolders = (
  chainId: number = mainnet.id,
  address: string,
) =>
  fetcher<TokenHolderResponse>(`${chainId}/tokens/${address}/token_holders/`);

export const getTokenMetadata = (chainId: number = mainnet.id, id: string) =>
  fetcher<TokenIdResponse>(`${chainId}/tokens/tokenlists/${id}/`);

export const getTransaction = (chainId: number = mainnet.id, txHash: string) =>
  fetcher<TransactionResponse>(`${chainId}/transaction_v2/${txHash}/`);

export const getTransactions = (
  chainId: number = mainnet.id,
  address: string,
  page = 0,
) =>
  fetcher<TransactionResponse>(
    `${chainId}/address/${address}/transactions_v3/page/${page}/`,
  );

export const getChains = () => fetcher<AllChainInfoResponse>(`chains/`);

export const getChainsStatus = () =>
  fetcher<ChainStatusResponse>(`chains/status/`);
