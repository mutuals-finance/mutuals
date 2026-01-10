var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { encodeFunctionData, } from "viem";
import { InvalidConfigError, MissingPublicClientError, MissingWalletClientError, } from "../errors";
import { TransactionType as MutualsTransactionType } from "../constants";
class BaseClient {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        if (includeEnsNames && !publicClient && !ensPublicClient)
            throw new InvalidConfigError("Must include a mainnet public client if includeEnsNames is set to true");
        this._ensPublicClient = ensPublicClient !== null && ensPublicClient !== void 0 ? ensPublicClient : publicClient;
        this._publicClient = publicClient;
        this._chainId = chainId;
        this._walletClient = walletClient;
        this._includeEnsNames = includeEnsNames;
        this._apiConfig = apiConfig;
    }
    _requirePublicClient() {
        if (!this._publicClient)
            throw new MissingPublicClientError("Public client required to perform this action, please update your call to the constructor");
    }
    _requireWalletClient() {
        this._requirePublicClient();
        if (!this._walletClient)
            throw new MissingWalletClientError("Wallet client required to perform this action, please update your call to the constructor");
        if (!this._walletClient.account)
            throw new MissingWalletClientError("Wallet client must have an account attached to it to perform this action, please update your wallet client passed into the constructor");
    }
}
export class BaseTransactions extends BaseClient {
    constructor({ transactionType, chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        super({
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
        this._transactionType = transactionType;
        this._shouldRequireWalletClient = [
            MutualsTransactionType.GasEstimate,
            MutualsTransactionType.Transaction,
        ].includes(transactionType);
    }
    _executeContractFunction(_a) {
        return __awaiter(this, arguments, void 0, function* ({ contractAddress, contractAbi, functionName, functionArgs, transactionOverrides, value, }) {
            var _b;
            this._requirePublicClient();
            if (!this._publicClient)
                throw new Error();
            if (this._shouldRequireWalletClient) {
                this._requireWalletClient();
            }
            if (this._transactionType === MutualsTransactionType.CallData) {
                const calldata = encodeFunctionData({
                    abi: contractAbi,
                    functionName,
                    args: functionArgs !== null && functionArgs !== void 0 ? functionArgs : [],
                });
                return {
                    address: contractAddress,
                    data: calldata,
                    value,
                };
            }
            else if (this._transactionType === MutualsTransactionType.Transaction) {
                if (!((_b = this._walletClient) === null || _b === void 0 ? void 0 : _b.account))
                    throw new Error();
                const { request } = yield this._publicClient.simulateContract(Object.assign({ address: contractAddress, abi: contractAbi, functionName, account: this._walletClient.account, args: functionArgs !== null && functionArgs !== void 0 ? functionArgs : [], value }, transactionOverrides));
                const txHash = yield this._walletClient.writeContract(request);
                return txHash;
            }
            else
                throw new Error(`Unknown transaction type: ${this._transactionType}`);
        });
    }
    _isContractTransaction(txHash) {
        return typeof txHash === "string";
    }
    _isBigInt(gasEstimate) {
        return typeof gasEstimate === "bigint";
    }
    _isCallData(callData) {
        if (callData instanceof BigInt)
            return false;
        if (typeof callData === "string")
            return false;
        return true;
    }
}
export class BaseClientMixin extends BaseTransactions {
    getTransactionEvents(_a) {
        return __awaiter(this, arguments, void 0, function* ({ txHash, eventTopics, includeAll, }) {
            var _b;
            if (!this._publicClient)
                throw new Error("Public client required to get transaction events");
            const transaction = yield this._publicClient.waitForTransactionReceipt({
                hash: txHash,
            });
            if (transaction.status === "success") {
                const events = (_b = transaction.logs) === null || _b === void 0 ? void 0 : _b.filter((log) => {
                    if (includeAll)
                        return true;
                    if (log.topics[0])
                        return eventTopics === null || eventTopics === void 0 ? void 0 : eventTopics.includes(log.topics[0]);
                    return false;
                });
                return events;
            }
            return [];
        });
    }
}
