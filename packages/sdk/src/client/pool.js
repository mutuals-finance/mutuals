var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { decodeEventLog, encodeEventTopics, getContract, zeroAddress, } from "viem";
import { SUPPORTED_CHAIN_IDS, TransactionType, getPoolFactoryAddress, ZERO, } from "../constants";
import { poolAbi, poolFactoryAbi } from "../constants/abi";
import { InvalidAuthError, TransactionFailedError, UnsupportedChainIdError, } from "../errors";
import { allocation as allocationUtils, buildMerkleTree } from "../utils";
import { BaseClientMixin, BaseTransactions } from "./base";
import { applyMixins } from "./mixin";
import { validateAddress } from "../utils/validation";
class PoolTransactions extends BaseTransactions {
    constructor({ transactionType, chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        super({
            transactionType,
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
    }
    _createPool(_a) {
        return __awaiter(this, arguments, void 0, function* ({ allocations, ownerAddress = zeroAddress, salt, transactionOverrides = {}, }) {
            validateAddress(ownerAddress);
            const allocationTree = buildMerkleTree(allocations);
            this._requirePublicClient();
            if (this._shouldRequireWalletClient)
                this._requireWalletClient();
            const functionName = "createPool";
            const functionArgs = [ownerAddress, allocationTree.root, salt];
            return this._executeContractFunction({
                contractAddress: getPoolFactoryAddress(this._chainId),
                contractAbi: poolFactoryAbi,
                functionName,
                functionArgs,
                transactionOverrides,
            });
        });
    }
    _transferOwnership(_a) {
        return __awaiter(this, arguments, void 0, function* ({ poolAddress, newOwner: newController, transactionOverrides = {}, }) {
            validateAddress(poolAddress);
            validateAddress(newController);
            this._requirePublicClient();
            if (this._shouldRequireWalletClient)
                this._requireWalletClient();
            yield this._requireOwner(poolAddress);
            return this._executeContractFunction({
                contractAddress: poolAddress,
                contractAbi: poolAbi,
                functionName: "transferOwnership",
                functionArgs: [newController],
                transactionOverrides,
            });
        });
    }
    _setPaused(_a) {
        return __awaiter(this, arguments, void 0, function* ({ poolAddress, paused, transactionOverrides = {}, }) {
            validateAddress(poolAddress);
            this._requirePublicClient();
            if (this._shouldRequireWalletClient)
                this._requireWalletClient();
            yield this._requireOwner(poolAddress);
            return this._executeContractFunction({
                contractAddress: poolAddress,
                contractAbi: poolAbi,
                functionName: "setPaused",
                functionArgs: [paused],
                transactionOverrides,
            });
        });
    }
    _setPoolAllocation(_a) {
        return __awaiter(this, arguments, void 0, function* ({ poolAddress, poolAllocation, transactionOverrides = {}, }) {
            const newAllocationRoot = allocationUtils.getTree(poolAllocation);
            validateAddress(poolAddress);
            this._requirePublicClient();
            if (this._shouldRequireWalletClient)
                this._requireWalletClient();
            yield this._requireOwner(poolAddress);
            return this._executeContractFunction({
                contractAddress: poolAddress,
                contractAbi: poolAbi,
                functionName: "setAllocationRoot",
                functionArgs: [newAllocationRoot],
                transactionOverrides,
            });
        });
    }
    _withdraw(_a) {
        return __awaiter(this, void 0, void 0, function* () {
            var _b;
            var { poolAddress, recipientAddress = (_b = this._walletClient) === null || _b === void 0 ? void 0 : _b.account.address, tokenAddress, poolAllocations, indices, amounts, transactionOverrides = {}, } = _a;
            validateAddress(poolAddress);
            validateAddress(recipientAddress);
            validateAddress(tokenAddress);
            this._requirePublicClient();
            if (this._shouldRequireWalletClient)
                this._requireWalletClient();
            const { allocations, proof } = allocationUtils.getConfig(poolAllocations, indices);
            return this._executeContractFunction({
                contractAddress: poolAddress,
                contractAbi: poolAbi,
                functionName: "withdraw",
                functionArgs: [
                    recipientAddress,
                    tokenAddress,
                    {
                        allocations,
                        amounts,
                        proof,
                    },
                ],
                transactionOverrides,
                value: ZERO,
            });
        });
    }
    _paused(poolAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this._requirePublicClient();
            return (yield this._getPoolContract(poolAddress).read.paused());
        });
    }
    _owner(poolAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this._requirePublicClient();
            return (yield this._getPoolContract(poolAddress).read.owner());
        });
    }
    _getPoolContract(poolAddress) {
        validateAddress(poolAddress);
        return getContract({
            address: poolAddress,
            abi: poolAbi,
            client: { public: this._publicClient, wallet: this._walletClient },
        });
    }
    _getPoolFactoryContract() {
        return getContract({
            address: getPoolFactoryAddress(this._chainId),
            abi: poolFactoryAbi,
            client: { public: this._publicClient, wallet: this._walletClient },
        });
    }
    _requireOwner(poolAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const ownerAddress = yield this._owner(poolAddress);
            const walletAddress = this._walletClient.account.address;
            if (ownerAddress.toLowerCase() !== walletAddress.toLowerCase())
                throw new InvalidAuthError(`Action only available to the pool controller. Pool id: ${poolAddress}, pool controller: ${ownerAddress}, wallet address: ${walletAddress}`);
        });
    }
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class PoolClient extends PoolTransactions {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        super({
            transactionType: TransactionType.Transaction,
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
        if (!SUPPORTED_CHAIN_IDS.includes(chainId))
            throw new UnsupportedChainIdError(chainId, SUPPORTED_CHAIN_IDS);
        this.eventTopics = {
            poolCreated: [
                encodeEventTopics({
                    abi: poolFactoryAbi,
                    eventName: "PoolCreated",
                })[0],
            ],
            allocationUpdated: [
                encodeEventTopics({
                    abi: poolAbi,
                    eventName: "AllocationUpdated",
                })[0],
            ],
            withdraw: [
                encodeEventTopics({
                    abi: poolAbi,
                    eventName: "Withdraw",
                })[0],
            ],
            ownershipTransferred: [
                encodeEventTopics({
                    abi: poolAbi,
                    eventName: "OwnershipTransferred",
                })[0],
            ],
            setPaused: [
                encodeEventTopics({
                    abi: poolAbi,
                    eventName: "Paused",
                })[0],
            ],
        };
        this.callData = new PoolCallData({
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
        this.estimateGas = new PoolGasEstimates({
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
    }
    submitCreatePoolTransaction(createPoolArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const txHash = yield this._createPool(createPoolArgs);
            if (!this._isContractTransaction(txHash))
                throw new Error("Invalid response");
            return { txHash };
        });
    }
    createPool(createPoolArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txHash } = yield this.submitCreatePoolTransaction(createPoolArgs);
            const events = yield this.getTransactionEvents({
                txHash,
                eventTopics: this.eventTopics.poolCreated,
            });
            if (events.length > 0 && !!events[0]) {
                const event = events[0];
                const log = decodeEventLog({
                    abi: poolFactoryAbi,
                    data: event.data,
                    topics: event.topics,
                });
                if (log.args) {
                    return {
                        poolAddress: log.args[0],
                        event,
                    };
                }
            }
            throw new TransactionFailedError();
        });
    }
    submitTransferOwnershipTransaction(transferOwnershipArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const txHash = yield this._transferOwnership(transferOwnershipArgs);
            if (!this._isContractTransaction(txHash))
                throw new Error("Invalid response");
            return { txHash };
        });
    }
    transferOwnership(transferOwnershipArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txHash } = yield this.submitTransferOwnershipTransaction(transferOwnershipArgs);
            const events = yield this.getTransactionEvents({
                txHash,
                eventTopics: this.eventTopics.ownershipTransferred,
            });
            const event = events.length > 0 ? events[0] : undefined;
            if (event) {
                return {
                    event,
                };
            }
            throw new TransactionFailedError();
        });
    }
    submitSetPauseTransaction(setPausedArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const txHash = yield this._setPaused(setPausedArgs);
            if (!this._isContractTransaction(txHash))
                throw new Error("Invalid response");
            return { txHash };
        });
    }
    setPause(setPausedArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txHash } = yield this.submitSetPauseTransaction(setPausedArgs);
            const events = yield this.getTransactionEvents({
                txHash,
                eventTopics: this.eventTopics.setPaused,
            });
            const event = events.length > 0 ? events[0] : undefined;
            if (event) {
                return {
                    event,
                };
            }
            throw new TransactionFailedError();
        });
    }
    submitWithdrawTransaction(withdrawArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const txHash = yield this._withdraw(withdrawArgs);
            if (!this._isContractTransaction(txHash))
                throw new Error("Invalid response");
            return { txHash };
        });
    }
    withdraw(withdrawArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txHash } = yield this.submitWithdrawTransaction(withdrawArgs);
            const events = yield this.getTransactionEvents({
                txHash,
                eventTopics: this.eventTopics.withdraw,
            });
            const event = events.length > 0 ? events[0] : undefined;
            if (event) {
                return {
                    event,
                };
            }
            throw new TransactionFailedError();
        });
    }
    submitSetPoolAllocationTransaction(setPoolAllocationArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const txHash = yield this._setPoolAllocation(setPoolAllocationArgs);
            if (!this._isContractTransaction(txHash))
                throw new Error("Invalid response");
            return { txHash };
        });
    }
    setPoolAllocation(setPoolAllocationArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txHash } = yield this.submitSetPoolAllocationTransaction(setPoolAllocationArgs);
            const events = yield this.getTransactionEvents({
                txHash,
                eventTopics: this.eventTopics.allocationUpdated,
            });
            if (events.length > 0) {
                return {
                    event: events[0],
                };
            }
            throw new TransactionFailedError();
        });
    }
    getAddress(createPoolArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!createPoolArgs.ownerAddress)
                createPoolArgs.ownerAddress = zeroAddress;
            if (!createPoolArgs.allocations)
                createPoolArgs.allocations = [];
            const allocationTree = allocationUtils.getTree(createPoolArgs.allocations);
            validateAddress(createPoolArgs.ownerAddress);
            this._requirePublicClient();
            const factory = this._getPoolFactoryContract();
            const poolAddress = (yield factory.read.getAddress([
                allocationTree.root,
                createPoolArgs.ownerAddress,
                createPoolArgs.salt,
            ]));
            return {
                poolAddress,
            };
        });
    }
    paused(_a) {
        return __awaiter(this, arguments, void 0, function* ({ poolAddress }) {
            const paused = yield this._paused(poolAddress);
            return { paused };
        });
    }
    owner(_a) {
        return __awaiter(this, arguments, void 0, function* ({ poolAddress }) {
            const ownerAddress = yield this._owner(poolAddress);
            return { ownerAddress };
        });
    }
}
applyMixins(PoolClient, [BaseClientMixin]);
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class PoolGasEstimates extends PoolTransactions {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        super({
            transactionType: TransactionType.GasEstimate,
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
    }
    createPool(createPoolArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasEstimate = yield this._createPool(createPoolArgs);
            if (!this._isBigInt(gasEstimate))
                throw new Error("Invalid response");
            return gasEstimate;
        });
    }
    transferOwnership(transferOwnershipArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasEstimate = yield this._transferOwnership(transferOwnershipArgs);
            if (!this._isBigInt(gasEstimate))
                throw new Error("Invalid response");
            return gasEstimate;
        });
    }
    setPaused(setPausedArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasEstimate = yield this._setPaused(setPausedArgs);
            if (!this._isBigInt(gasEstimate))
                throw new Error("Invalid response");
            return gasEstimate;
        });
    }
    withdraw(withdrawArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasEstimate = yield this._withdraw(withdrawArgs);
            if (!this._isBigInt(gasEstimate))
                throw new Error("Invalid response");
            return gasEstimate;
        });
    }
    setPoolAllocation(setPoolAllocationArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const gasEstimate = yield this._setPoolAllocation(setPoolAllocationArgs);
            if (!this._isBigInt(gasEstimate))
                throw new Error("Invalid response");
            return gasEstimate;
        });
    }
}
class PoolCallData extends PoolTransactions {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames = false, }) {
        super({
            transactionType: TransactionType.CallData,
            chainId,
            publicClient,
            ensPublicClient,
            walletClient,
            apiConfig,
            includeEnsNames,
        });
    }
    createPool(createPoolArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const callData = yield this._createPool(createPoolArgs);
            if (!this._isCallData(callData))
                throw new Error("Invalid response");
            return callData;
        });
    }
    transferOwnership(transferOwnershipArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const callData = yield this._transferOwnership(transferOwnershipArgs);
            if (!this._isCallData(callData))
                throw new Error("Invalid response");
            return callData;
        });
    }
    setPaused(setPausedArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const callData = yield this._setPaused(setPausedArgs);
            if (!this._isCallData(callData))
                throw new Error("Invalid response");
            return callData;
        });
    }
    withdraw(withdrawArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const callData = yield this._withdraw(withdrawArgs);
            if (!this._isCallData(callData))
                throw new Error("Invalid response");
            return callData;
        });
    }
    setPoolAllocation(setPoolAllocationArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const callData = yield this._setPoolAllocation(setPoolAllocationArgs);
            if (!this._isCallData(callData))
                throw new Error("Invalid response");
            return callData;
        });
    }
}
