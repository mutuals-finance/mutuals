"use client";

import { PropsWithChildren } from "react";
import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import { makeClient, type MakeClientOpts } from "../client";
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
