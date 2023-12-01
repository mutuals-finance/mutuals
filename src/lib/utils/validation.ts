import {
  isChecksummedAddress,
  parsePrefixedAddress,
  sameAddress,
} from './address';

export const validateAddress = (address: string) => {
  const ADDRESS_RE = /^0x[0-9a-f]{40}$/i;

  if (!ADDRESS_RE.test(address)) {
    return 'Invalid address format';
  }

  if (!isChecksummedAddress(address)) {
    return 'Invalid address checksum';
  }

  return null;
};

export const isValidAddress = (address: string): boolean =>
  validateAddress(address) === undefined;

export const validatePrefixedAddress =
  (chainShortName?: string) =>
  (value: string): string | null => {
    const { prefix, address } = parsePrefixedAddress(value);

    if (prefix) {
      if (prefix !== chainShortName) {
        return `"${prefix}" doesn't match the current chain`;
      }
    }

    return validateAddress(address);
  };

export const uniqueAddress =
  (addresses: string[] = []) =>
  (address: string): string | undefined => {
    const ADDRESS_REPEATED_ERROR = 'Address already added';
    const addressExists = addresses.some((addressFromList) =>
      sameAddress(addressFromList, address),
    );
    return addressExists ? ADDRESS_REPEATED_ERROR : undefined;
  };

export const addressIsNotCurrentSplit =
  (splitAddress: string) =>
  (address: string): string | undefined => {
    const OWNER_ADDRESS_IS_SPLIT_ADDRESS_ERROR =
      'Cannot use Split itself as owner.';
    return sameAddress(splitAddress, address)
      ? OWNER_ADDRESS_IS_SPLIT_ADDRESS_ERROR
      : undefined;
  };
