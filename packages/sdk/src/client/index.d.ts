import { MutualsClientConfig } from "../types";
import { BaseClientMixin, BaseTransactions } from "./base";
import { PoolClient } from "./pool";
export declare class MutualsClient extends BaseTransactions {
    readonly pool: PoolClient | undefined;
    readonly estimateGas: MutualsClientGasEstimates;
    constructor({ chainId, publicClient, walletClient, apiConfig, includeEnsNames, ensPublicClient, }: MutualsClientConfig);
}
export interface MutualsClient extends BaseClientMixin {
}
declare class MutualsClientGasEstimates extends BaseTransactions {
    constructor({ chainId, publicClient, walletClient, apiConfig, includeEnsNames, ensPublicClient, }: MutualsClientConfig);
}
export {};
//# sourceMappingURL=index.d.ts.map