/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WithdrawManager,
  WithdrawManagerInterface,
} from "../../../contracts/common/WithdrawManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
    ],
    name: "totalWithdrawn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWithdrawn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "withdrawn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "withdrawn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630a64143a146100515780634b319713146100995780636ef61092146100a1578063dad13219146100d7575b600080fd5b61008761005f366004610142565b73ffffffffffffffffffffffffffffffffffffffff1660009081526035602052604090205490565b60405190815260200160405180910390f35b603354610087565b6100876100af366004610142565b73ffffffffffffffffffffffffffffffffffffffff1660009081526034602052604090205490565b6100876100e5366004610166565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260366020908152604080832093909416825291909152205490565b73ffffffffffffffffffffffffffffffffffffffff8116811461013f57600080fd5b50565b60006020828403121561015457600080fd5b813561015f8161011d565b9392505050565b6000806040838503121561017957600080fd5b82356101848161011d565b915060208301356101948161011d565b80915050925092905056fea264697066735822122060579d214699bd624cf6cc66c0237b18c189389fc9137303091bb6cd7911614964736f6c63430008100033";

type WithdrawManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawManager__factory extends ContractFactory {
  constructor(...args: WithdrawManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawManager> {
    return super.deploy(overrides || {}) as Promise<WithdrawManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WithdrawManager {
    return super.attach(address) as WithdrawManager;
  }
  override connect(signer: Signer): WithdrawManager__factory {
    return super.connect(signer) as WithdrawManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawManagerInterface {
    return new utils.Interface(_abi) as WithdrawManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawManager {
    return new Contract(address, _abi, signerOrProvider) as WithdrawManager;
  }
}
