import { ERC20TokenBalance } from "@/lib/moralis/types";
import { unstable_cache } from "next/cache";

const getChainName = (chainId: number): string => {
  const chainMap: Record<number, string> = {
    1: "eth",
    137: "polygon",
    56: "bsc",
    43114: "avalanche",
  };
  return chainMap[chainId] || "eth";
};

const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries: number = 3,
  delay: number = 1000,
): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) return response;

      if (response.status >= 500 && i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
        continue;
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error: any) {
      if (
        (error.name === "AbortError" || error.name === "TimeoutError") &&
        i < retries - 1
      ) {
        console.warn(`Request timeout, retrying... (${i + 1}/${retries})`);
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
};

const fetchTokenBalances = async (
  address: string,
  chainId: number,
): Promise<ERC20TokenBalance[]> => {
  return [];
  /*
  const chain = getChainName(chainId);
  const url = `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=${chain}&limit=25`;

  const response = await fetchWithRetry(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-Key": MORALIS_KEY,
    },
  });

  const data = await response.json();

  return data.result.map((asset: any) => ({
    tokenAddress: asset.token_address ?? "",
    symbol: asset.symbol ?? "",
    name: asset.name ?? "",
    logo: asset.logo ?? null,
    thumbnail: asset.thumbnail ?? null,
    decimals: parseInt(asset.decimals ?? "0"),
    balance: asset.balance ?? "0",
    possibleSpam: asset.possible_spam ?? false,
    verifiedContract: asset.verified_contract ?? false,
    totalSupply: asset.total_supply ?? null,
    totalSupplyFormatted: asset.total_supply_formatted ?? null,
    percentageRelativeToTotalSupply:
      asset.percentage_relative_to_total_supply ?? null,
    balanceFormatted: asset.balance_formatted ?? "0",
    usdPrice: asset.usd_price ?? "0",
    usdPrice24hrPercentChange: asset.usd_price_24hr_percent_change ?? "0",
    usdPrice24hrUsdChange: asset.usd_price_24hr_usd_change ?? "0",
    usdValue: asset.usd_value ?? "0",
    usdValue24hrUsdChange: asset.usd_value_24hr_usd_change ?? null,
    nativeToken: asset.native_token ?? false,
    portfolioPercentage: asset.portfolio_percentage ?? null,
  }));
*/
};

export const getTokenBalances = unstable_cache(
  fetchTokenBalances,
  ["token-balances"],
  {
    revalidate: 60, // Cache für 60 Sekunden
    tags: ["token-balances"],
  },
);
