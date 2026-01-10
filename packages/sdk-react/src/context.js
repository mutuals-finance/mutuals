import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useMemo, } from "react";
import { MutualsClient } from "@mutuals/sdk";
export const MutualsContext = createContext(undefined);
export const MutualsProvider = ({ config = { chainId: 80002 }, children, }) => {
    const [mutualsClient, setMutualsClient] = useState(() => new MutualsClient(config));
    const initClient = (config) => {
        setMutualsClient(new MutualsClient(config));
    };
    const contextValue = useMemo(() => ({ mutualsClient, initClient }), [mutualsClient]);
    return (_jsx(MutualsContext.Provider, { value: contextValue, children: children }));
};
