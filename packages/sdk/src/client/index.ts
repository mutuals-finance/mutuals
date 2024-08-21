import { SUPPORTED_CHAIN_IDS, TransactionType } from "../constants";
import { MutualsClientConfig } from "../types";
import { BaseClientMixin, BaseTransactions } from "./base";
import { applyMixins } from "./mixin";
import { PoolClient } from "./pool";

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class MutualsClient extends BaseTransactions {
  readonly pool: PoolClient | undefined;
  readonly estimateGas: MutualsClientGasEstimates;

  constructor({
    chainId,
    publicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
    ensPublicClient,
  }: MutualsClientConfig) {
    super({
      transactionType: TransactionType.Transaction,
      chainId,
      publicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
      ensPublicClient,
    });
    if (SUPPORTED_CHAIN_IDS.includes(chainId)) {
      this.pool = new PoolClient({
        chainId,
        publicClient,
        ensPublicClient,
        walletClient,
        apiConfig,
        includeEnsNames,
      });
    }

    this.estimateGas = new MutualsClientGasEstimates({
      chainId,
      publicClient,
      walletClient,
      ensPublicClient,
      apiConfig,
      includeEnsNames,
    });
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface MutualsClient extends BaseClientMixin {}
applyMixins(MutualsClient, [BaseClientMixin]);

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class MutualsClientGasEstimates extends BaseTransactions {
  constructor({
    chainId,
    publicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
    ensPublicClient,
  }: MutualsClientConfig) {
    super({
      transactionType: TransactionType.GasEstimate,
      chainId,
      publicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
      ensPublicClient,
    });
  }
}
