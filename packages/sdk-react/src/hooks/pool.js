var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { decodeEventLog } from "viem";
import { useCallback, useContext, useState } from "react";
import { poolFactoryAbi } from "@mutuals/sdk/constants/abi";
import { MutualsContext } from "../context";
import { getMutualsClient } from "../utils";
export const useCreatePool = () => {
    const context = useContext(MutualsContext);
    const poolClient = getMutualsClient(context).pool;
    const [poolAddress, setPoolAddress] = useState();
    const [status, setStatus] = useState();
    const [txHash, setTxHash] = useState();
    const [error, setError] = useState();
    const createPool = useCallback((argsDict) => __awaiter(void 0, void 0, void 0, function* () {
        if (!poolClient)
            throw new Error("Invalid chain id for payment pool");
        try {
            setStatus("pendingApproval");
            setPoolAddress(undefined);
            setError(undefined);
            setTxHash(undefined);
            const { txHash: hash } = yield poolClient.submitCreatePoolTransaction(argsDict);
            setStatus("txInProgress");
            setTxHash(hash);
            const events = yield poolClient.getTransactionEvents({
                txHash: hash,
                eventTopics: poolClient.eventTopics.splitCreated,
            });
            const event = events === null || events === void 0 ? void 0 : events[0];
            const decodedLog = event
                ? decodeEventLog({
                    abi: poolFactoryAbi,
                    data: event.data,
                    topics: event.topics,
                })
                : undefined;
            const poolAddress = (decodedLog === null || decodedLog === void 0 ? void 0 : decodedLog.eventName) === "PoolCreated" && decodedLog.args
                ? decodedLog.args[0]
                : undefined;
            setPoolAddress(poolAddress);
            setStatus("complete");
            return events;
        }
        catch (e) {
            setStatus("error");
            setError(e);
        }
    }), [poolClient]);
    return { createPool, poolAddress, status, txHash, error };
};
export const useSetPoolAllocation = () => {
    const context = useContext(MutualsContext);
    const poolClient = getMutualsClient(context).pool;
    const [status, setStatus] = useState();
    const [txHash, setTxHash] = useState();
    const [error, setError] = useState();
    const updatePool = useCallback((argsDict) => __awaiter(void 0, void 0, void 0, function* () {
        if (!poolClient)
            throw new Error("Invalid chain id for payment pool");
        try {
            setStatus("pendingApproval");
            setError(undefined);
            setTxHash(undefined);
            const { event } = yield poolClient.setPoolAllocation(argsDict);
            const hash = event.transactionHash;
            setStatus("txInProgress");
            setTxHash(hash);
            const events = yield poolClient.getTransactionEvents({
                txHash: hash,
                eventTopics: poolClient.eventTopics.allocationUpdated,
            });
            setStatus("complete");
            return events;
        }
        catch (e) {
            setStatus("error");
            setError(e);
        }
    }), [poolClient]);
    return { updatePool, status, txHash, error };
};
export const useWithdraw = () => {
    const context = useContext(MutualsContext);
    const poolClient = getMutualsClient(context).pool;
    const [status, setStatus] = useState();
    const [txHash, setTxHash] = useState();
    const [error, setError] = useState();
    const withdraw = useCallback((argsDict) => __awaiter(void 0, void 0, void 0, function* () {
        if (!poolClient)
            throw new Error("Invalid chain id for payment pool");
        try {
            setStatus("pendingApproval");
            setError(undefined);
            setTxHash(undefined);
            const { txHash: hash } = yield poolClient.submitWithdrawTransaction(argsDict);
            setStatus("txInProgress");
            setTxHash(hash);
            const events = yield poolClient.getTransactionEvents({
                txHash: hash,
                eventTopics: poolClient.eventTopics.withdraw,
            });
            setStatus("complete");
            return events;
        }
        catch (e) {
            setStatus("error");
            setError(e);
        }
    }), [poolClient]);
    return { withdraw, status, txHash, error };
};
export const useTransferOwnership = () => {
    const context = useContext(MutualsContext);
    const poolClient = getMutualsClient(context).pool;
    const [status, setStatus] = useState();
    const [txHash, setTxHash] = useState();
    const [error, setError] = useState();
    const transferOwnership = useCallback((argsDict) => __awaiter(void 0, void 0, void 0, function* () {
        if (!poolClient)
            throw new Error("Invalid chain id for payment pool");
        try {
            setStatus("pendingApproval");
            setError(undefined);
            setTxHash(undefined);
            const { txHash: hash } = yield poolClient.submitTransferOwnershipTransaction(argsDict);
            setStatus("txInProgress");
            setTxHash(hash);
            const events = yield poolClient.getTransactionEvents({
                txHash: hash,
                eventTopics: poolClient.eventTopics.ownershipTransferred,
            });
            setStatus("complete");
            return events;
        }
        catch (e) {
            setStatus("error");
            setError(e);
        }
    }), [poolClient]);
    return { transferOwnership, status, txHash, error };
};
export const useSetPause = () => {
    const context = useContext(MutualsContext);
    const poolClient = getMutualsClient(context).pool;
    const [status, setStatus] = useState();
    const [txHash, setTxHash] = useState();
    const [error, setError] = useState();
    const setPause = useCallback((argsDict) => __awaiter(void 0, void 0, void 0, function* () {
        if (!poolClient)
            throw new Error("Invalid chain id for payment pool");
        try {
            setStatus("pendingApproval");
            setError(undefined);
            setTxHash(undefined);
            const { txHash: hash } = yield poolClient.submitSetPauseTransaction(argsDict);
            setStatus("txInProgress");
            setTxHash(hash);
            const events = yield poolClient.getTransactionEvents({
                txHash: hash,
                eventTopics: poolClient.eventTopics.setPaused,
            });
            setStatus("complete");
            return events;
        }
        catch (e) {
            setStatus("error");
            setError(e);
        }
    }), [poolClient]);
    return { setPause, status, txHash, error };
};
