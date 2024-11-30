import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  ApolloLink,
  HttpOptions,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import config from "../config";
import { headers } from "next/headers";
import { onError } from "@apollo/client/link/error";

const maxRetryAttempts = 5;

const linkWithRetry = (uri: string, options?: Omit<HttpOptions, "uri">) =>
  from([
    new RetryLink({
      delay: () => 1000,
      attempts: (count, operation, error) => {
        return !!error && count < maxRetryAttempts;
      },
    }),
    new HttpLink({ uri, ...options }),
  ]);

const errorLink = () =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

type LinkConfig = { uri: string; options?: Omit<HttpOptions, "uri"> };

const httpLink = (clientName: string, left: LinkConfig, right: LinkConfig) => {
  return ApolloLink.split(
    (operation) => operation.getContext().clientName === clientName,
    //if above:
    linkWithRetry(left.uri, left.options),
    // else:
    linkWithRetry(right.uri, right.options),
  );
};

export const { getClient } = registerApolloClient(() => {
  const cookie = headers().get("cookie") ?? "";

  return new ApolloClient({
    link: httpLink(
      "thegraph",
      { uri: config.urls.thegraph },
      {
        uri: config.urls.data,
        options: {
          headers: { cookie },
          credentials: "include",
        },
      },
    ),
    cache: new InMemoryCache(),
  });
});
