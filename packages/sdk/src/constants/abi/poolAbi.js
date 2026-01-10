export const poolAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "EnforcedPause",
        type: "error",
    },
    {
        inputs: [],
        name: "ExpectedPause",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "InvalidAllocation",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "InvalidAllocationState",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidProof",
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
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "UnauthorizedRecipient",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "oldAllocationRoot",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAllocationRoot",
                type: "bytes32",
            },
        ],
        name: "AllocationUpdated",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Withdraw",
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
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                internalType: "bytes32",
                name: "_newAllocationRoot",
                type: "bytes32",
            },
        ],
        name: "setAllocation",
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
        inputs: [],
        name: "unpause",
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
                name: "token",
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
                internalType: "struct PoolLib.WithdrawRequest",
                name: "request",
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
