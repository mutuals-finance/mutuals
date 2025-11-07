import { useContext, useEffect, useMemo } from "react";
import { MutualsClient, MutualsClientConfig } from "@mutuals/sdk";
import { MutualsContext } from "../context";

export const useMutualsClient = (
  config?: MutualsClientConfig,
): MutualsClient => {
  const context = useContext(MutualsContext);
  if (context === undefined) {
    throw new Error("Make sure to include <MutualsProvider>");
  }

  // Since apiConfig is an object, if it gets set directly it'll be considered "new" on each render
  const apiKey =
    config && "apiConfig" in config
      ? config.apiConfig!.apiKey
      : context.mutualsClient._apiConfig?.apiKey;
  const serverURL =
    config && "apiConfig" in config
      ? config.apiConfig!.serverURL
      : context.mutualsClient._apiConfig?.serverURL;
  const apiConfig = useMemo(() => {
    if (!apiKey) return;

    return {
      apiKey,
      serverURL,
    };
  }, [apiKey, serverURL]);

  const chainId =
    config && "chainId" in config
      ? config.chainId
      : context.mutualsClient._chainId;
  const publicClient =
    config && "publicClient" in config
      ? config.publicClient
      : context.mutualsClient._publicClient;
  const walletClient =
    config && "walletClient" in config
      ? config.walletClient
      : context.mutualsClient._walletClient;
  const includeEnsNames =
    config && "includeEnsNames" in config
      ? config.includeEnsNames
      : context.mutualsClient._includeEnsNames;
  const ensPublicClient =
    config && "ensPublicClient" in config
      ? config.ensPublicClient
      : context.mutualsClient._ensPublicClient;
  useEffect(() => {
    context.initClient({
      chainId,
      publicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
      ensPublicClient,
    });
  }, [
    chainId,
    publicClient,
    walletClient,
    apiConfig,
    includeEnsNames,
    ensPublicClient,
  ]);

  return context.mutualsClient as MutualsClient;
};
