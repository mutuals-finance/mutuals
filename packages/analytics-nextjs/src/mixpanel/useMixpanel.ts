import { useContext } from "react";
import { type MixpanelContext, mixpanelContext } from "./context";

export const useMixpanel = (): MixpanelContext => useContext(mixpanelContext);
