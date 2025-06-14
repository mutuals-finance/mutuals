import { isAddress } from "viem";
import { InvalidArgumentError } from "../errors";

export const validateAddress = (address: string): void => {
  if (!isAddress(address))
    throw new InvalidArgumentError(`Invalid address: ${address}`);
};
