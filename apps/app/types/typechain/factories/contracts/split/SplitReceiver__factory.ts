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
  SplitReceiver,
  SplitReceiverInterface,
} from "../../../contracts/split/SplitReceiver";

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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getPending",
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
    name: "getPending",
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
  {
    inputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "contract IERC20",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105b2806100206000396000f3fe6080604052600436106100b45760003560e01c80636ef6109211610069578063ce7c2ac21161004e578063ce7c2ac214610214578063d086c2541461024a578063dad132191461026a57600080fd5b80636ef61092146101a65780638b83209b146101dc57600080fd5b806314820f2f1161009a57806314820f2f1461015c5780633a98ef391461017c5780634b3197131461019157600080fd5b8062dbe109146101025780630a64143a1461012657600080fd5b366100fd577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c33604080516001600160a01b0390921682523460208301520160405180910390a1005b600080fd5b34801561010e57600080fd5b506002545b6040519081526020015b60405180910390f35b34801561013257600080fd5b50610113610141366004610469565b6001600160a01b031660009081526037602052604090205490565b34801561016857600080fd5b50610113610177366004610486565b6102b0565b34801561018857600080fd5b50600054610113565b34801561019d57600080fd5b50603554610113565b3480156101b257600080fd5b506101136101c1366004610469565b6001600160a01b031660009081526036602052604090205490565b3480156101e857600080fd5b506101fc6101f73660046104bf565b61039b565b6040516001600160a01b03909116815260200161011d565b34801561022057600080fd5b5061011361022f366004610469565b6001600160a01b031660009081526001602052604090205490565b34801561025657600080fd5b50610113610265366004610469565b6103cb565b34801561027657600080fd5b50610113610285366004610486565b6001600160a01b03918216600090815260386020908152604080832093909416825291909152205490565b6001600160a01b03821660009081526037602052604081205481906040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038616906370a0823190602401602060405180830381865afa158015610328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c91906104d8565b6103569190610507565b6001600160a01b03808616600090815260386020908152604080832093881683529290522054909150610391908490839061040e565b61040e565b9150505b92915050565b6000600282815481106103b0576103b061051a565b6000918252602090912001546001600160a01b031692915050565b6000806103d760355490565b6103e19047610507565b9050610407838261038c866001600160a01b031660009081526036602052604090205490565b9392505050565b600080546001600160a01b0385168252600160205260408220548391906104359086610530565b61043f9190610547565b6104499190610569565b949350505050565b6001600160a01b038116811461046657600080fd5b50565b60006020828403121561047b57600080fd5b813561040781610451565b6000806040838503121561049957600080fd5b82356104a481610451565b915060208301356104b481610451565b809150509250929050565b6000602082840312156104d157600080fd5b5035919050565b6000602082840312156104ea57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610395576103956104f1565b634e487b7160e01b600052603260045260246000fd5b8082028115828204841417610395576103956104f1565b60008261056457634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115610395576103956104f156fea26469706673582212202685d54172a0a5937eab93be72e264727f4accb450f9c6e0de170edf498c76f464736f6c63430008140033";

type SplitReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitReceiver__factory extends ContractFactory {
  constructor(...args: SplitReceiverConstructorParams) {
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
      SplitReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SplitReceiver__factory {
    return super.connect(runner) as SplitReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitReceiverInterface {
    return new Interface(_abi) as SplitReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SplitReceiver {
    return new Contract(address, _abi, runner) as unknown as SplitReceiver;
  }
}
