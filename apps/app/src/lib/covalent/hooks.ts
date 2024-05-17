import useSWR, { SWRConfiguration } from "swr";

import {
  getBlock,
  getBlockHeights,
  getChains,
  getChainsStatus,
  getHoldersChanges,
  getLogs,
  getLogsForTopic,
  getNftMetadata,
  getNftTokenIds,
  getNftTransactions,
  getPortfolio,
  getTokenBalances,
  getTokenHolders,
  getTokenMetadata,
  getTransaction,
  getTransactions,
  getTransfers,
} from "./fetchers";

// CLASS A
export function useTokenBalances({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  return useSWR(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/`,
    () => getTokenBalances(chainId, address),
    props,
  );
}

export function usePortfolio({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/portfolio_v2/`,
    () => getPortfolio(chainId, address),
    props,
  );
  return res;
}

export function useTransfers({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/`,
    () => getTransfers(chainId, address),
    props,
  );
  return res;
}

export function useBlock({
  chainId,
  blockHeight,
  ...props
}: { chainId: number; blockHeight: string | number } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/block_v2/${blockHeight}/`,
    () => getBlock(chainId, blockHeight),
    props,
  );
  return res;
}

export function useBlockHeights({
  chainId,
  startDate,
  endDate,
  ...props
}: {
  chainId: number;
  startDate: string;
  endDate: string;
} & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/block_v2/${startDate}/${endDate}/`,
    () => getBlockHeights(chainId, startDate, endDate),
    props,
  );
  return res;
}

export function useLogs({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/events/address/${address}/`,
    () => getLogs(chainId, address),
    props,
  );
  return res;
}

export function useLogsForTopic({
  chainId,
  topic,
  ...props
}: { chainId: number; topic: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/events/topics/${topic}/`,
    () => getLogsForTopic(chainId, topic),
    props,
  );
  return res;
}

export function useNftMetadata({
  chainId,
  address,
  tokenId,
  ...props
}: { chainId: number; address: string; tokenId: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_metadata/${tokenId}/`,
    () => getNftMetadata(chainId, address, tokenId),
    props,
  );
  return res;
}

export function useNftTokenIds({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_token_ids/`,
    () => getNftTokenIds(chainId, address),
    props,
  );
  return res;
}

export function useNftTransactions({
  chainId,
  address,
  tokenId,
  ...props
}: { chainId: number; address: string; tokenId: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_transactions/${tokenId}/`,
    () => getNftTransactions(chainId, address, tokenId),
    props,
  );
  return res;
}

export function useHoldersChanges({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${address}/token_holders_changes/`,
    () => getHoldersChanges(chainId, address),
    props,
  );
  return res;
}

export function useHolders({
  chainId,
  address,
  ...props
}: { chainId: number; address: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${address}/token_holders/`,
    () => getTokenHolders(chainId, address),
    props,
  );
  return res;
}

export function useTokenMetadata({
  chainId,
  id,
  ...props
}: { chainId: number; id: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/tokens/tokenlists/${id}/`,
    () => getTokenMetadata(chainId, id),
    props,
  );
  return res;
}

export function useTransaction({
  chainId,
  txHash,
  ...props
}: { chainId: number; txHash: string } & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/transaction_v2/${txHash}/`,
    () => getTransaction(chainId, txHash),
    props,
  );
  return res;
}

export function useTransactions({
  chainId,
  address,
  page = 0,
  ...props
}: {
  chainId: number;
  address: string;
  page?: number;
} & SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v3/page/${page}/`,
    () => getTransactions(chainId, address),
    props,
  );
  return res;
}

export function useChains(props: SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/chains/status/`,
    () => getChains(),
    props,
  );
  return res;
}

export function useChainsStatus(props: SWRConfiguration) {
  const res = useSWR(
    `https://api.covalenthq.com/v1/chains/status/`,
    () => getChainsStatus(),
    props,
  );
  return res;
}

// TODO: CLASS B
