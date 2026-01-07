import { useContext, useEffect, useMemo } from "react";
import { MutualsContext } from "../context";
export const useMutualsClient = (config) => {
    var _a, _b;
    const context = useContext(MutualsContext);
    if (context === undefined) {
        throw new Error("Make sure to include <MutualsProvider>");
    }
    // Since apiConfig is an object, if it gets set directly it'll be considered "new" on each render
    const apiKey = config && "apiConfig" in config
        ? config.apiConfig.apiKey
        : (_a = context.mutualsClient._apiConfig) === null || _a === void 0 ? void 0 : _a.apiKey;
    const serverURL = config && "apiConfig" in config
        ? config.apiConfig.serverURL
        : (_b = context.mutualsClient._apiConfig) === null || _b === void 0 ? void 0 : _b.serverURL;
    const apiConfig = useMemo(() => {
        if (!apiKey)
            return;
        return {
            apiKey,
            serverURL,
        };
    }, [apiKey, serverURL]);
    const chainId = config && "chainId" in config
        ? config.chainId
        : context.mutualsClient._chainId;
    const publicClient = config && "publicClient" in config
        ? config.publicClient
        : context.mutualsClient._publicClient;
    const walletClient = config && "walletClient" in config
        ? config.walletClient
        : context.mutualsClient._walletClient;
    const includeEnsNames = config && "includeEnsNames" in config
        ? config.includeEnsNames
        : context.mutualsClient._includeEnsNames;
    const ensPublicClient = config && "ensPublicClient" in config
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
    return context.mutualsClient;
};
