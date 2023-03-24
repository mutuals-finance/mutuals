/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PayeeManager,
  PayeeManagerInterface,
} from "../../../contracts/common/PayeeManager";

const _abi = [
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payeeCount",
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
    name: "shares",
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
    name: "totalShares",
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
  "0x608060405234801561001057600080fd5b506101d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c8062dbe109146100505780633a98ef39146100675780638b83209b1461006f578063ce7c2ac2146100a7575b600080fd5b6035545b6040519081526020015b60405180910390f35b603354610054565b61008261007d36600461011a565b6100dd565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161005e565b6100546100b5366004610133565b73ffffffffffffffffffffffffffffffffffffffff1660009081526034602052604090205490565b6000603582815481106100f2576100f2610170565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b60006020828403121561012c57600080fd5b5035919050565b60006020828403121561014557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461016957600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220063b8c5ca44c4322b325eb26153b53ae6a697e1ed669c42101dabc70fb5e24f464736f6c63430008100033";

type PayeeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayeeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayeeManager__factory extends ContractFactory {
  constructor(...args: PayeeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PayeeManager> {
    return super.deploy(overrides || {}) as Promise<PayeeManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PayeeManager {
    return super.attach(address) as PayeeManager;
  }
  override connect(signer: Signer): PayeeManager__factory {
    return super.connect(signer) as PayeeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayeeManagerInterface {
    return new utils.Interface(_abi) as PayeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayeeManager {
    return new Contract(address, _abi, signerOrProvider) as PayeeManager;
  }
}
