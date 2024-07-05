/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PayeeManager,
  PayeeManagerInterface,
} from "../../../contracts/common/PayeeManager";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
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
  "0x608060405234801561001057600080fd5b506101d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c8062dbe109146100505780633a98ef39146100675780638b83209b1461006f578063ce7c2ac2146100a7575b600080fd5b6002545b6040519081526020015b60405180910390f35b600054610054565b61008261007d36600461011a565b6100dd565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161005e565b6100546100b5366004610133565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6000600282815481106100f2576100f2610170565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b60006020828403121561012c57600080fd5b5035919050565b60006020828403121561014557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461016957600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220798c59e133ad321e000629e4b87cee7f3338bee178c246514c406deca3f815f764736f6c63430008140033";

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

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PayeeManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PayeeManager__factory {
    return super.connect(runner) as PayeeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayeeManagerInterface {
    return new Interface(_abi) as PayeeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PayeeManager {
    return new Contract(address, _abi, runner) as unknown as PayeeManager;
  }
}
