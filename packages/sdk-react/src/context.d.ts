import React, { PropsWithChildren } from "react";
import { MutualsClient, MutualsClientConfig } from "@mutuals/sdk";
export type MutualsReactSdkContext = {
    mutualsClient: MutualsClient;
    initClient: (config: MutualsClientConfig) => void;
};
export declare const MutualsContext: React.Context<MutualsReactSdkContext | undefined>;
export declare const MutualsProvider: ({ config, children, }: PropsWithChildren<{
    config?: MutualsClientConfig;
}>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=context.d.ts.map