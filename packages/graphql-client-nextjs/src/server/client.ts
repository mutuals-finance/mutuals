import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  CombinedGraphQLErrors,
  ServerError,
  ApolloLink,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import config from "../config";
import { ErrorLink } from "@apollo/client/link/error";
import { headers } from "next/headers";
import { NetworkErrorLink } from "./networkErrorLink";

const makeClient = async () => {
  const cookie = await headers().then((h) => h.get("cookie") ?? "");
  const networkErrorIgnoreLink = new NetworkErrorLink((response) => {
    console.log(`[Network error]: ${response.networkError}`);
    return { data: null, error: [{ message: "Network error ignored" }] };
  });

  const errorLink = new ErrorLink(({ error, result }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ message }) =>
        console.log(`GraphQL error: ${message}`),
      );
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
