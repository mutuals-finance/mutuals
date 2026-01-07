import { PublicClient, WalletClient, Address, Abi, Hash, Log, Hex, Transport, Chain, Account, TransactionType } from "viem";
import type { ApiConfig, CallData, MutualsClientConfig, TransactionConfig, TransactionFormat, TransactionOverrides } from "../types";
declare class BaseClient {
    readonly _chainId: number;
    readonly _ensPublicClient: PublicClient<Transport, Chain> | undefined;
    readonly _walletClient: WalletClient<Transport, Chain, Account> | undefined;
    readonly _publicClient: PublicClient<Transport, Chain> | undefined;
    readonly _apiConfig: ApiConfig | undefined;
    readonly _includeEnsNames: boolean;
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig);
    protected _requirePublicClient(): void;
    protected _requireWalletClient(): void;
}
export declare class BaseTransactions extends BaseClient {
    protected readonly _transactionType: TransactionType;
    protected readonly _shouldRequireWalletClient: boolean;
    constructor({ transactionType, chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig & TransactionConfig);
    protected _executeContractFunction({ contractAddress, contractAbi, functionName, functionArgs, transactionOverrides, value, }: {
        contractAddress: Address;
        contractAbi: Abi;
        functionName: string;
        functionArgs?: unknown[];
        transactionOverrides: TransactionOverrides;
        value?: bigint;
    }): Promise<`0x${string}` | {
        address: `0x${string}`;
        data: `0x${string}`;
        value: bigint | undefined;
    }>;
    protected _isContractTransaction(txHash: TransactionFormat): txHash is Hash;
    protected _isBigInt(gasEstimate: TransactionFormat): gasEstimate is bigint;
    protected _isCallData(callData: TransactionFormat): callData is CallData;
}
export declare class BaseClientMixin extends BaseTransactions {
    getTransactionEvents({ txHash, eventTopics, includeAll, }: {
        txHash: Hash;
        eventTopics: Hex[] | undefined;
        includeAll?: boolean;
    }): Promise<Log[]>;
}
export {};
//# sourceMappingURL=base.d.ts.map