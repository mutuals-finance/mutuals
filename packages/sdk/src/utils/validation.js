import { isAddress } from "viem";
import { InvalidArgumentError } from "../errors";
export const validateAddress = (address) => {
    if (!isAddress(address))
        throw new InvalidArgumentError(`Invalid address: ${address}`);
};
