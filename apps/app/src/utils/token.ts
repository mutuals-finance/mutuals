import { Address, formatUnits, isAddress } from "viem";

import {
  ETH_TOKEN,
  NATIVE_TOKEN_ADDRESS,
  NATIVE_TOKEN_LOGO_URI,
} from "src/constants";

export function formatAmount(
  amount: string | bigint | number,
  decimals: number,
) {
  return parseFloat(formatUnits(BigInt(amount), decimals));
}

export function getDefaultTokenLogoURI(chainId = 1) {
  return (
    NATIVE_TOKEN_LOGO_URI?.[chainId as keyof typeof NATIVE_TOKEN_LOGO_URI] ||
    ETH_TOKEN
  );
}

export function isNativeTokenAddress(address: string): address is Address {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase();
}

export function formatBalance(balance: string | number | bigint) {
  const formatCurrency = new Intl.NumberFormat(undefined!, {
    maximumFractionDigits: 2,
  });

  return formatCurrency.format(Number(balance));
}

export function formatCurrency(value: string | number | bigint) {
  const formatCurrency = new Intl.NumberFormat(undefined!, {
    style: "currency",
    currency: "USD",
  });
  return formatCurrency.format(Number(value));
}
