"use client";

import mixpanel, { type Config } from "mixpanel-browser";
import { type ProviderProps, useMemo } from "react";
import { type MixpanelContext, mixpanelContext } from "./context";

export interface MixpanelProviderProps
  extends Omit<ProviderProps<MixpanelContext>, "value"> {
  config?: Partial<Config>;
  name?: string;
  token?: string;
}

export function MixpanelProvider({
  children,
  config: _config,
  name: _name,
  token,
}: MixpanelProviderProps) {
  const name = useMemo(
    () => _name ?? "@mutuals/analytics-nextjs/mixpanel",
    [_name],
  );

  const config = useMemo(
    () => ({
      ..._config,
    }),
    [_config],
  );

  const value = useMemo(
    () => (token ? mixpanel.init(token, config, name) : undefined),
    [config, name, token],
  );

  return (
    <mixpanelContext.Provider value={value}>
      {children}
    </mixpanelContext.Provider>
  );
}
