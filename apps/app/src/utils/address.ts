import { isAddress, getAddress } from "viem";

export function shortenAddress(address = "", chars = 4) {
  const parsed = isAddress(address);
  return parsed
    ? `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`
    : address;
}

export const checksumAddress = (address: string): string => {
  return isAddress(address) ? getAddress(address) : address;
};

export const isChecksummedAddress = (address: string): boolean => {
  if (!isAddress(address)) {
    return false;
  }

  try {
    return getAddress(address) === address;
  } catch {
    return false;
  }
};

export type PrefixedAddress = {
  prefix?: string;
  address: string;
};

/**
 * Decodes and parses a string that may/may not contain an address and returns only the decoded checksummed `address`
 * @param value (prefixed) address
 * @returns checksummed `address`
 */
export const decodePrefixedAddress = (value: string): string => {
  return parsePrefixedAddress(decodeURIComponent(value)).address.toLowerCase();
};

/**
 * Parses a string that may/may not contain an address and returns the `prefix` and checksummed `address`
 * @param value (prefixed) address
 * @returns `prefix` and checksummed `address`
 */
export const parsePrefixedAddress = (value: string): PrefixedAddress => {
  let [prefix, address] = value.split(":");

  if (!address) {
    address = value;
    prefix = "";
  }

  return {
    prefix: prefix || undefined,
    address: checksumAddress(address),
  };
};

export const formatPrefixedAddress = (
  address: string,
  prefix?: string,
): string => {
  return prefix ? `${prefix}:${address}` : address;
};

export const sameAddress = (
  firstAddress: string | undefined,
  secondAddress: string | undefined,
): boolean => {
  if (!firstAddress || !secondAddress) {
    return false;
  }

  return firstAddress.toLowerCase() === secondAddress.toLowerCase();
};
