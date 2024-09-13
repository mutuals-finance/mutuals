import { Address, Log, decodeEventLog } from "viem";
import { useCallback, useContext, useState } from "react";
import {
  CreatePoolConfig,
  TransferOwnershipConfig,
  SetPausedConfig,
  WithdrawConfig,
  SetPoolAllocationConfig,
} from "@mutuals/sdk";
import { poolFactoryAbi } from "@mutuals/sdk/constants/abi";

import { MutualsContext } from "../context";
import { ContractExecutionStatus, RequestError } from "../types";
import { getMutualsClient } from "../utils";

export const useCreatePool = (): {
  createPool: (arg0: CreatePoolConfig) => Promise<Log[] | undefined>;
  poolAddress?: Address;
  status?: ContractExecutionStatus;
  txHash?: string;
  error?: RequestError;
} => {
  const context = useContext(MutualsContext);
  const poolClient = getMutualsClient(context).pool;

  const [poolAddress, setPoolAddress] = useState<Address>();
  const [status, setStatus] = useState<ContractExecutionStatus>();
  const [txHash, setTxHash] = useState<string>();
  const [error, setError] = useState<RequestError>();

  const createPool = useCallback(
    async (argsDict: CreatePoolConfig) => {
      if (!poolClient) throw new Error("Invalid chain id for payment pool");

      try {
        setStatus("pendingApproval");
        setPoolAddress(undefined);
        setError(undefined);
        setTxHash(undefined);

        const { txHash: hash } =
          await poolClient.submitCreatePoolTransaction(argsDict);

        setStatus("txInProgress");
        setTxHash(hash);

        const events = await poolClient.getTransactionEvents({
          txHash: hash,
          eventTopics: poolClient.eventTopics.splitCreated,
        });

        const event = events?.[0];
        const decodedLog = event
          ? decodeEventLog({
              abi: poolFactoryAbi,
              data: event.data,
              topics: event.topics,
            })
          : undefined;
        const poolAddress =
          decodedLog?.eventName === "PoolCreated" && decodedLog.args
            ? (decodedLog.args[0] as Address)
            : undefined;

        setPoolAddress(poolAddress);
        setStatus("complete");

        return events;
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    },
    [poolClient],
  );

  return { createPool, poolAddress, status, txHash, error };
};

export const useSetPoolAllocation = (): {
  updatePool: (arg0: SetPoolAllocationConfig) => Promise<Log[] | undefined>;
  status?: ContractExecutionStatus;
  txHash?: string;
  error?: RequestError;
} => {
  const context = useContext(MutualsContext);
  const poolClient = getMutualsClient(context).pool;

  const [status, setStatus] = useState<ContractExecutionStatus>();
  const [txHash, setTxHash] = useState<string>();
  const [error, setError] = useState<RequestError>();

  const updatePool = useCallback(
    async (argsDict: SetPoolAllocationConfig) => {
      if (!poolClient) throw new Error("Invalid chain id for payment pool");

      try {
        setStatus("pendingApproval");
        setError(undefined);
        setTxHash(undefined);

        const { event } = await poolClient.setPoolAllocation(argsDict);
        const hash = event.transactionHash;
        setStatus("txInProgress");
        setTxHash(hash as string);

        const events = await poolClient.getTransactionEvents({
          txHash: hash!,
          eventTopics: poolClient.eventTopics.allocationUpdated,
        });

        setStatus("complete");

        return events;
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    },
    [poolClient],
  );

  return { updatePool, status, txHash, error };
};

export const useWithdraw = (): {
  withdraw: (arg0: WithdrawConfig) => Promise<Log[] | undefined>;
  status?: ContractExecutionStatus;
  txHash?: string;
  error?: RequestError;
} => {
  const context = useContext(MutualsContext);
  const poolClient = getMutualsClient(context).pool;

  const [status, setStatus] = useState<ContractExecutionStatus>();
  const [txHash, setTxHash] = useState<string>();
  const [error, setError] = useState<RequestError>();

  const withdraw = useCallback(
    async (argsDict: WithdrawConfig) => {
      if (!poolClient) throw new Error("Invalid chain id for payment pool");

      try {
        setStatus("pendingApproval");
        setError(undefined);
        setTxHash(undefined);

        const { txHash: hash } =
          await poolClient.submitWithdrawTransaction(argsDict);

        setStatus("txInProgress");
        setTxHash(hash);

        const events = await poolClient.getTransactionEvents({
          txHash: hash,
          eventTopics: poolClient.eventTopics.withdraw,
        });

        setStatus("complete");

        return events;
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    },
    [poolClient],
  );

  return { withdraw, status, txHash, error };
};

export const useTransferOwnership = (): {
  transferOwnership: (
    arg0: TransferOwnershipConfig,
  ) => Promise<Log[] | undefined>;
  status?: ContractExecutionStatus;
  txHash?: string;
  error?: RequestError;
} => {
  const context = useContext(MutualsContext);
  const poolClient = getMutualsClient(context).pool;

  const [status, setStatus] = useState<ContractExecutionStatus>();
  const [txHash, setTxHash] = useState<string>();
  const [error, setError] = useState<RequestError>();

  const transferOwnership = useCallback(
    async (argsDict: TransferOwnershipConfig) => {
      if (!poolClient) throw new Error("Invalid chain id for payment pool");

      try {
        setStatus("pendingApproval");
        setError(undefined);
        setTxHash(undefined);

        const { txHash: hash } =
          await poolClient.submitTransferOwnershipTransaction(argsDict);

        setStatus("txInProgress");
        setTxHash(hash);

        const events = await poolClient.getTransactionEvents({
          txHash: hash,
          eventTopics: poolClient.eventTopics.ownershipTransferred,
        });

        setStatus("complete");

        return events;
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    },
    [poolClient],
  );

  return { transferOwnership, status, txHash, error };
};

export const useSetPause = (): {
  setPause: (arg0: SetPausedConfig) => Promise<Log[] | undefined>;
  status?: ContractExecutionStatus;
  txHash?: string;
  error?: RequestError;
} => {
  const context = useContext(MutualsContext);
  const poolClient = getMutualsClient(context).pool;

  const [status, setStatus] = useState<ContractExecutionStatus>();
  const [txHash, setTxHash] = useState<string>();
  const [error, setError] = useState<RequestError>();

  const setPause = useCallback(
    async (argsDict: SetPausedConfig) => {
      if (!poolClient) throw new Error("Invalid chain id for payment pool");

      try {
        setStatus("pendingApproval");
        setError(undefined);
        setTxHash(undefined);

        const { txHash: hash } =
          await poolClient.submitSetPauseTransaction(argsDict);

        setStatus("txInProgress");
        setTxHash(hash);

        const events = await poolClient.getTransactionEvents({
          txHash: hash,
          eventTopics: poolClient.eventTopics.setPaused,
        });

        setStatus("complete");

        return events;
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    },
    [poolClient],
  );

  return { setPause, status, txHash, error };
};
