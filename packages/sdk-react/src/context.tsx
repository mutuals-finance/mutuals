import { MutualsClient, type MutualsClientConfig } from "@mutuals/sdk";
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface MutualsReactSdkContext {
  initClient: (config: MutualsClientConfig) => void;
  mutualsClient: MutualsClient;
}

export const MutualsContext = createContext<MutualsReactSdkContext | undefined>(
  undefined
);

export const MutualsProvider = ({
  config = { chainId: 80_002 },
  children,
}: PropsWithChildren<{
  config?: MutualsClientConfig;
}>) => {
  const [mutualsClient, setMutualsClient] = useState<MutualsClient>(
    () => new MutualsClient(config)
  );

  const initClient = useCallback((config: MutualsClientConfig) => {
    setMutualsClient(new MutualsClient(config));
  }, []);

  const contextValue = useMemo(
    () => ({ mutualsClient, initClient }),
    [mutualsClient, initClient]
  );

  return (
    <MutualsContext.Provider value={contextValue}>
      {children}
    </MutualsContext.Provider>
  );
};
