import { isAddress } from 'ethers/lib/utils';

export function shortenAddress(address: string, chars = 4) {
  const parsed = isAddress(address);
  return parsed
    ? `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`
    : address;
}
