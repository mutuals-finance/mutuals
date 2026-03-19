import {
  ApolloClient,
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  InMemoryCache,
  ServerError,
} from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import { headers } from "next/headers";
import config from "../config";
import { initServerMocks } from "../mocks/init-server";
import { NetworkErrorLink } from "./networkErrorLink";

const makeClient = async () => {
  await initServerMocks();

  const cookie = await headers().then((h) => h.get("cookie") ?? "");

  const networkErrorIgnoreLink = new NetworkErrorLink((response) => {
    console.log(`[Network error]: ${response.networkError}`);
    return { data: null, error: [{ message: "Network error ignored" }] };
  });

  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      for (const { message } of error.errors) {
        console.log(`GraphQL error: ${message}`);
      }
    } else if (ServerError.is(error)) {
      console.log(`Server error: ${error.message}`);
    } else if (error) {
      console.log(`Other error: ${error.message}`);
    }
  });

  const httpLink = new HttpLink({
    uri: config.urls.data,
    headers: { cookie },
    credentials: "include",
  });

  return new ApolloClient({
    link: ApolloLink.from([networkErrorIgnoreLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export const { getClient, query, PreloadQuery } =
  registerApolloClient(makeClient);
