/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, Contract, ContractFactory, Overrides, Interface } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SplitFactory,
  SplitFactoryInterface,
} from "../../contracts/SplitFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_beacon",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "CreateSplitProxy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "beacon",
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
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "bool",
        name: "metadataEditable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createSplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "bool",
        name: "metadataEditable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516115f43803806115f483398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b611508806100ec6000396000f3fe60806040523480156200001157600080fd5b50600436106200007b5760003560e01c8063715018a61162000056578063715018a614620000e05780638da5cb5b14620000ea578063f2fde38b14620000fc57600080fd5b806340a1630d146200008057806359659e9014620000b35780636eced64c14620000c7575b600080fd5b62000097620000913660046200088b565b62000113565b6040516001600160a01b03909116815260200160405180910390f35b60015462000097906001600160a01b031681565b620000de620000d83660046200088b565b620001bb565b005b620000de620003f8565b6000546001600160a01b031662000097565b620000de6200010d3660046200099b565b62000410565b6000806200012e6200012888888888620004c4565b62000550565b8051602091820120604080517fff00000000000000000000000000000000000000000000000000000000000000818501523060601b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660218201526035810187905260558082019390935281518082039093018352607501905280519101209150505b95945050505050565b6000620001d6620001cf87878787620004c4565b83620005ce565b90506000819050806001600160a01b0316632f2ff15d826001600160a01b031663a217fddf6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200022b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002519190620009c0565b6000546001600160a01b03166040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526001600160a01b03166024820152604401600060405180830381600087803b158015620002bd57600080fd5b505af1158015620002d2573d6000803e3d6000fd5b50505050806001600160a01b03166336568abe826001600160a01b031663a217fddf6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000324573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200034a9190620009c0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526004810191909152306024820152604401600060405180830381600087803b158015620003a257600080fd5b505af1158015620003b7573d6000803e3d6000fd5b50506040516001600160a01b03851692507f0caa339150a5043e7c190440c0a68cc80ad4e14dea001eba5aae68122c71bdb19150600090a250505050505050565b62000402620005fd565b6200040e600062000673565b565b6200041a620005fd565b6001600160a01b038116620004b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b620004c18162000673565b50565b606063db78f7d460e01b85858585604051602401620004e7949392919062000a2e565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091529050949350505050565b6060604051806020016200056490620006db565b601f1982820381018352601f90910116604081905260015462000598916001600160a01b0390911690859060200162000ad3565b60408051601f1981840301815290829052620005b8929160200162000aff565b6040516020818303038152906040529050919050565b600080620005dc8462000550565b9050828151602083016000f59150813b620005f657600080fd5b5092915050565b6000546001600160a01b031633146200040e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620004ad565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109a08062000b3383390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715620007445762000744620006e9565b604052919050565b600067ffffffffffffffff821115620007695762000769620006e9565b5060051b60200190565b80356001600160a01b03811681146200078b57600080fd5b919050565b600082601f830112620007a257600080fd5b81356020620007bb620007b5836200074c565b62000718565b82815260059290921b84018101918181019086841115620007db57600080fd5b8286015b84811015620007f85780358352918301918301620007df565b509695505050505050565b600082601f8301126200081557600080fd5b813567ffffffffffffffff811115620008325762000832620006e9565b620008476020601f19601f8401160162000718565b8181528460208386010111156200085d57600080fd5b816020850160208301376000918101602001919091529392505050565b803580151581146200078b57600080fd5b600080600080600060a08688031215620008a457600080fd5b853567ffffffffffffffff80821115620008bd57600080fd5b818801915088601f830112620008d257600080fd5b81356020620008e5620007b5836200074c565b82815260059290921b8401810191818101908c8411156200090557600080fd5b948201945b838610156200092e576200091e8662000773565b825294820194908201906200090a565b995050890135925050808211156200094557600080fd5b6200095389838a0162000790565b955060408801359150808211156200096a57600080fd5b50620009798882890162000803565b9350506200098a606087016200087a565b949793965091946080013592915050565b600060208284031215620009ae57600080fd5b620009b98262000773565b9392505050565b600060208284031215620009d357600080fd5b5051919050565b60005b83811015620009f7578181015183820152602001620009dd565b50506000910152565b6000815180845262000a1a816020860160208601620009da565b601f01601f19169290920160200192915050565b6080808252855190820181905260009060209060a0840190828901845b8281101562000a725781516001600160a01b03168452928401929084019060010162000a4b565b5050508381038285015286518082528783019183019060005b8181101562000aa95783518352928401929184019160010162000a8b565b5050848103604086015262000abf818862000a00565b9350505050620001b2606083018415159052565b6001600160a01b038316815260406020820152600062000af7604083018462000a00565b949350505050565b6000835162000b13818460208801620009da565b83519083019062000b29818360208801620009da565b0194935050505056fe60806040526040516109a03803806109a08339810160408190526100229161045b565b61002e82826000610035565b5050610585565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061051b565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061051b565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c88383604051806060016040528060278152602001610979602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b0316856040516102fe9190610536565b600060405180830381855af49150503d8060008114610339576040519150601f19603f3d011682016040523d82523d6000602084013e61033e565b606091505b5090925090506103508683838761035a565b9695505050505050565b606083156103c95782516000036103c2576001600160a01b0385163b6103c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610169565b50816103d3565b6103d383836103db565b949350505050565b8151156103eb5781518083602001fd5b8060405162461bcd60e51b81526004016101699190610552565b80516001600160a01b038116811461041c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561045257818101518382015260200161043a565b50506000910152565b6000806040838503121561046e57600080fd5b61047783610405565b60208401519092506001600160401b038082111561049457600080fd5b818501915085601f8301126104a857600080fd5b8151818111156104ba576104ba610421565b604051601f8201601f19908116603f011681019083821181831017156104e2576104e2610421565b816040528281528860208487010111156104fb57600080fd5b61050c836020830160208801610437565b80955050505050509250929050565b60006020828403121561052d57600080fd5b6102c882610405565b60008251610548818460208701610437565b9190910192915050565b6020815260008251806020840152610571816040850160208701610437565b601f01601f19169190910160400192915050565b6103e5806105946000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b610127565b565b606061004e83836040518060600160405280602781526020016103896027913961014b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012291906102c1565b905090565b3660008037600080366000845af43d6000803e808015610146573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051610175919061031b565b600060405180830381855af49150503d80600081146101b0576040519150601f19603f3d011682016040523d82523d6000602084013e6101b5565b606091505b50915091506101c6868383876101d0565b9695505050505050565b6060831561026b5782516000036102645773ffffffffffffffffffffffffffffffffffffffff85163b610264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610275565b610275838361027d565b949350505050565b81511561028d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025b9190610337565b6000602082840312156102d357600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461004e57600080fd5b60005b838110156103125781810151838201526020016102fa565b50506000910152565b6000825161032d8184602087016102f7565b9190910192915050565b60208152600082518060208401526103568160408501602087016102f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b70092ed8562b087edbb04df58936d6acdc5a0c5e2431a1856442f160e97e5d964736f6c63430008100033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212209b511ae5473702ed2f5ad775cd2f28e722b11c7c541ef799ee8deb230e21262c64736f6c63430008100033";

type SplitFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitFactory__factory extends ContractFactory {
  constructor(...args: SplitFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _beacon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SplitFactory> {
    return super.deploy(_beacon, overrides || {}) as Promise<SplitFactory>;
  }
  override getDeployTransaction(
    _beacon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_beacon, overrides || {});
  }
  override attach(address: string): SplitFactory {
    return super.attach(address) as SplitFactory;
  }
  override connect(signer: Signer): SplitFactory__factory {
    return super.connect(signer) as SplitFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitFactoryInterface {
    return new Interface(_abi) as SplitFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitFactory {
    return new Contract(address, _abi, signerOrProvider) as SplitFactory;
  }
}
