export const poolAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleProofInvalidMultiproof",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
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
    inputs: [
      {
        internalType: "address",
        name: "_initialOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_allocationRoot",
        type: "bytes32",
      },
    ],
    name: "__Pool_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_receivers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "batchDeposit",
    outputs: [],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint160",
                name: "id",
                type: "uint160",
              },
              {
                internalType: "uint32",
                name: "version",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "allocationType",
                type: "uint8",
              },
              {
                internalType: "uint160",
                name: "target",
                type: "uint160",
              },
              {
                internalType: "uint160",
                name: "recipient",
                type: "uint160",
              },
              {
                internalType: "uint256",
                name: "amountOrShare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "position",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "timespan",
                type: "uint256",
              },
            ],
            internalType: "struct Allocation.Data[][]",
            name: "allocations",
            type: "tuple[][]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct Allocation.BatchRequest",
        name: "request",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "value",
            type: "bytes32[]",
          },
          {
            internalType: "bool[]",
            name: "flags",
            type: "bool[]",
          },
        ],
        internalType: "struct MerkleTree.MultiProof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
