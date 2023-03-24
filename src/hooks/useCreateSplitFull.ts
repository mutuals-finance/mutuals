import { useMemo } from 'react';
import { useUpdateEffect } from 'react-use';

import useCreateSplit, { CreateSplitProps } from '@/hooks/useCreateSplit';
import { Metadata, useMetadata } from '@/hooks/useMetadata';

type CreateSplitFullProps = Omit<CreateSplitProps, 'uri'> & Metadata;

export default function useCreateSplitFull(props: CreateSplitFullProps) {
  const storage = useMetadata();

  const { write, ...tx } = useCreateSplit({
    uri: storage.value,
    ...props,
  });

  useUpdateEffect(() => {
    if (tx.isIdle && storage.isSuccess) {
      console.log('write createSplit', tx);
      write?.();
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
