import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  ApolloLink,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import config from "../config";

const maxRetryAttempts = 5;

const retryFrom = (uri: string) =>
  from([
    new RetryLink({
      delay: () => 1000,
      attempts: (count, operation, error) => {
        return !!error && count < maxRetryAttempts;
      },
    }),
    new HttpLink({
      uri,
    }),
  ]);

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.split(
      (operation) => operation.getContext().clientName === "thegraph",
      //if above:
      retryFrom(config.urls.thegraph),
      // else:
      retryFrom(config.urls.data),
    ),
  });
});
