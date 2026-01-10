export const defaultAllocationAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "BaseExtension_AlreadyInitialized",
        type: "error",
    },
    {
        inputs: [],
        name: "BaseExtension_InvalidFactory",
        type: "error",
    },
    {
        inputs: [],
        name: "BaseExtension_UnknownPool",
        type: "error",
    },
    {
        inputs: [],
        name: "BaseExtension_UnsupportedHook",
        type: "error",
    },
    {
        inputs: [],
        name: "DefaultAllocation_InsufficientBalance",
        type: "error",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim[]",
                name: "claims",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams[]",
                name: "params",
                type: "tuple[]",
            },
        ],
        name: "afterBatchWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "afterInitialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "afterInitializePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim",
                name: "claim",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "afterWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim[]",
                name: "claim",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams[]",
                name: "params",
                type: "tuple[]",
            },
        ],
        name: "beforeBatchWithdraw",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "beforeInitialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "beforeInitializePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim",
                name: "claim",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "beforeWithdraw",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim[]",
                name: "claims",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams[]",
                name: "params",
                type: "tuple[]",
            },
        ],
        name: "checkBatchState",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim",
                name: "claim",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "checkState",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "extensionId",
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
    {
        inputs: [],
        name: "extensionName",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "__factory",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "parentId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "stateId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "strategyId",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Claim",
                name: "claim",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "Token",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "strategyData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "stateData",
                        type: "bytes",
                    },
                ],
                internalType: "struct WithdrawParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "releasable",
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
];
