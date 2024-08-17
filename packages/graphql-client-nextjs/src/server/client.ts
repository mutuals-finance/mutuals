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

export const { getClient } = registerApolloClient(() => {
  const cookie = headers().get("cookie") ?? "";

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.split(
      (operation) => operation.getContext().clientName === "thegraph",
      //if above:
      linkWithRetry(config.urls.thegraph),
      // else:
      linkWithRetry(config.urls.data, {
        headers: { cookie },
        credentials: "include",
      }),
    ),
  });
});
