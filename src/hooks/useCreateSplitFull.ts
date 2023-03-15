import useCreateSplit, {
  CreateSplitProps,
  CreateSplitResult,
} from "@/hooks/useCreateSplit";
import { Metadata, useMetadata } from "@/hooks/useMetadata";
import { useUpdateEffect } from "react-use";

type CreateSplitFullProps = Omit<CreateSplitProps, "uri"> & Metadata;

type CreateSplitFullResult = {
  execute: () => void;
  isLoading: boolean;
  isStorageLoading: boolean;
  isTxLoading: boolean;
} & Omit<CreateSplitResult, "isLoading" | "write">;

export default function useCreateSplitFull(props: CreateSplitFullProps) {
  const storage = useMetadata();
  const { write, ...tx } = useCreateSplit({
    uri: storage.value,
    ...props,
  });

  useUpdateEffect(() => {
    if (write && tx.isIdle && storage.isSuccess) {
      console.log("write && isIdle", tx);
      write();
    }
  }, [write, tx.isIdle, storage.isSuccess]);

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
