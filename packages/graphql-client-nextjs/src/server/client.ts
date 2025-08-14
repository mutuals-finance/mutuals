import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import config from "../config";
import { onError } from "@apollo/client/link/error";
import { headers } from "next/headers";
import { NetworkErrorLink } from "./networkErrorLink";

const makeClient = async () => {
  const cookie = await headers().then((h) => h.get("cookie") ?? "");
  const networkErrorIgnoreLink = new NetworkErrorLink((response) => {
    console.log(`[Network error]: ${response.networkError}`);

    return { data: null, errors: [{ message: "Network error ignored" }] };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const httpLink = new HttpLink({
    uri: config.urls.data,
    headers: { cookie },
    credentials: "include",
  });

  return new ApolloClient({
    link: from([networkErrorIgnoreLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export const { getClient, query, PreloadQuery } =
  registerApolloClient(makeClient);
