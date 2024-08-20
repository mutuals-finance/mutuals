import React, { createContext, useState, useMemo } from "react";
import { MutualsClient, MutualsClientConfig } from "@mutuals/sdk";

export type MutualsReactSdkContext = {
  mutualsClient: MutualsClient;
  initClient: (config: MutualsClientConfig) => void;
};

export const MutualsContext = createContext<MutualsReactSdkContext | undefined>(
  undefined,
);

interface Props {
  config?: MutualsClientConfig;
  children: React.ReactNode;
}

export const MutualsProvider: React.FC<Props> = ({
  config = { chainId: 1 },
  children,
}) => {
  const [mutualsClient, setMutualsClient] = useState<MutualsClient>(
    () => new MutualsClient(config),
  );
  const initClient = (config: MutualsClientConfig) => {
    setMutualsClient(new MutualsClient(config));
  };

  const contextValue = useMemo(
    () => ({ mutualsClient, initClient }),
    [mutualsClient],
  );

  return (
    <MutualsContext.Provider value={contextValue}>
      {children}
    </MutualsContext.Provider>
  );
};
