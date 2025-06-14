import { useUpdateEffect } from "react-use";

import { useCreatePool } from "@mutuals/sdk-react";
import { Metadata, useMetadata } from "@/hooks/useMetadata";

type CreatePoolFullProps = Metadata;

export default function useCreatePoolFull(props: CreatePoolFullProps) {
  const storage = useMetadata();

  const { writeContract, ...tx } = useCreatePool({
    uri: storage.value,
    ...props,
  });

  useUpdateEffect(() => {
    if (tx.isIdle && storage.isSuccess) {
      writeContract?.();
    }
  }, [writeContract, tx.isIdle, storage.isSuccess]);

  const isStorageSettled = storage.isSuccess || storage.isError;
  const isTxSettled = tx.isSuccess || tx.isError;

  const isLoading =
    (isStorageSettled && !isTxSettled) || storage.isLoading || tx.isLoading;

  return {
    execute: () => {
      void storage.save(props);
    },
    tx,
    storage,
    isStorageSettled,
    isTxSettled,
    isLoading,
  };
}
