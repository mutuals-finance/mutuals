/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1822Proxiable,
  IERC1822ProxiableInterface,
} from "../../../../../@openzeppelin/contracts/interfaces/draft-IERC1822.sol/IERC1822Proxiable";

const _abi = [
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1822Proxiable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1822ProxiableInterface {
    return new Interface(_abi) as IERC1822ProxiableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1822Proxiable {
    return new Contract(address, _abi, signerOrProvider) as IERC1822Proxiable;
  }
}
