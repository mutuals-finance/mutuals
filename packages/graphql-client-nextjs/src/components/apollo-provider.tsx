"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import type { PropsWithChildren } from "react";
import { type MakeClientOpts, makeClient } from "../client";
import { MockProvider } from "./mock-provider";

export type ApolloProviderProps = PropsWithChildren<{
  clientOpts?: MakeClientOpts;
}>;

export function ApolloProvider({ children, clientOpts }: ApolloProviderProps) {
  return (
    <MockProvider>
      <ApolloNextAppProvider makeClient={makeClient(clientOpts)}>
        {children}
      </ApolloNextAppProvider>
    </MockProvider>
  );
}
