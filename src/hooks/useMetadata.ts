import { CIDString, NFTStorage } from "nft.storage";
import { NFT_STORAGE_TOKEN } from "@/lib/constants";
import { useCallback, useMemo, useRef, useState } from "react";

export interface Metadata {
  name?: string;
  description?: string;
  image?: File;
}

type MetadataValue = CIDString;

export function useMetadata() {
  const [value, setValue] = useState<MetadataValue>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controllerRef = useRef<AbortController | null>();

  const client = useMemo<NFTStorage>(() => {
    return new NFTStorage({ token: NFT_STORAGE_TOKEN });
  }, [NFT_STORAGE_TOKEN]);

  function onReset() {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setError(undefined);
  }

  function reset() {
    onReset();
  }

  function onSuccess(value: MetadataValue) {
    setIsSuccess(true);
    setValue(value);
  }

  function onError(e: Error) {
    setIsError(true);
    setError(e);
  }

  const save = useCallback(
    async ({ image, name = "", description = "" }: Metadata) => {
      onReset();
      controllerRef.current = new AbortController();
      try {
        let reader = null;

        if (image) {
          const imageData = new Blob([image]);
          reader = await NFTStorage.encodeBlob(imageData);
        }

        const [res] = await Promise.all([
          client.storeBlob(
            new Blob([
              JSON.stringify({
                name,
                description,
                image: !!reader?.cid
                  ? `ipfs://${reader?.cid.toString()}`
                  : null,
              }),
            ])
          ),
          !!reader?.car && (await client.storeCar(reader?.car)),
        ]);
        const uri = `ipfs://${res}`;
        onSuccess(uri);
        return uri;
      } catch (e: any) {
        onError(e);
        return null;
      } finally {
        setIsLoading(false);
        controllerRef.current = null;
      }
    },
    [client]
  );

  return {
    save,
    reset,
    value,
    error,
    isLoading,
    isError,
    isSuccess,
  };
}
