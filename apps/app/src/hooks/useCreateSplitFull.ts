import { useUpdateEffect } from 'react-use';

import useCreateSplit, { UseCreateSplitProps } from '@/hooks/useCreateSplit';
import { Metadata, useMetadata } from '@/hooks/useMetadata';

type CreateSplitFullProps = Omit<UseCreateSplitProps, 'uri'> & Metadata;

export default function useCreateSplitFull(props: CreateSplitFullProps) {
  const storage = useMetadata();

  const { writeContract, ...tx } = useCreateSplit({
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
