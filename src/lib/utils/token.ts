import { BigNumber, BigNumberish, utils } from 'ethers';

import {
  ETH_TOKEN,
  NATIVE_TOKEN_ADDRESS,
  NATIVE_TOKEN_LOGO_URI,
} from '@/lib/constants';
import { isAddress } from '@/lib/utils/address';

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
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return parsed === NATIVE_TOKEN_ADDRESS;
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
