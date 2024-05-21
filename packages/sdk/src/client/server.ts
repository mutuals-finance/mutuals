import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import config from "../config";

const maxRetryAttempts = 5;

const retryLink = new RetryLink({
  delay: () => 1000,
  attempts: (count, operation, error) => {
    return !!error && count < maxRetryAttempts;
  },
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      retryLink,
      new HttpLink({
        uri: config.urls.thegraph,
      }),
    ]),
  });
});
