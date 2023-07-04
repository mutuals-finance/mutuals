import { BigNumber, BigNumberish, utils } from 'ethers';
import { isAddress } from 'ethers/lib/utils';

import {
  ETH_TOKEN,
  NATIVE_TOKEN_ADDRESS,
  NATIVE_TOKEN_LOGO_URI,
} from '@/lib/constants';

export function formatAmount(
  amount: string | BigNumber,
  decimals: string | BigNumberish
) {
  return parseFloat(utils.formatUnits(amount, decimals));
}

export function getDefaultTokenLogoURI(chainId = 1) {
  return (
    NATIVE_TOKEN_LOGO_URI?.[chainId as keyof typeof NATIVE_TOKEN_LOGO_URI] ||
    ETH_TOKEN
  );
}

export function isNativeTokenAddress(address: string) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase();
}

export function formatBalance(balance: string | number) {
  const formatCurrency = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
  });

  return formatCurrency.format(Number(balance));
}

export function formatCurrency(value: string | number) {
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });
  return formatCurrency.format(Number(value));
}
