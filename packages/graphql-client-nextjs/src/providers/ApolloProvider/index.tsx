"use client";

import { PropsWithChildren } from "react";
import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";

import { MakeClientOpts, makeClient } from "../../client";

export interface ApolloProviderProps {
  clientOpts?: MakeClientOpts;
}

export function ApolloProvider({
  children,
  clientOpts,
}: PropsWithChildren<ApolloProviderProps>) {
  return (
    <ApolloNextAppProvider makeClient={makeClient(clientOpts)}>
      {children}
    </ApolloNextAppProvider>
  );
}
