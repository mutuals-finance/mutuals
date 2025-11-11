import { CombinedGraphQLErrors, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/client-integration-nextjs";
import config from "../config";
import { ErrorLink } from "@apollo/client/link/error";
import { ServerError } from "@apollo/client";
import { ApolloLink } from "@apollo/client/core";

const isLocalEnv = process.env.NODE_ENV !== "production";

export interface MakeClientOpts {
  authHeaders?: Record<string, string>;
}

export const makeClient =
  (opts: MakeClientOpts = {}) =>
  () => {
    const isSSr = typeof window === "undefined";
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

    const apiLink = (uri: string, options?: Omit<HttpLink.Options, "uri">) => {
      const httpApiLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri,
        // disable result caching
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: { cache: "no-store" },
        // you can override the default `fetchOptions` on a per query basis
        // via the `context` property on the options passed as a second argument
        // to an Apollo Client data fetching hook, e.g.:
        // const { data } = useSuspensheQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
        ...options,
        headers: {
          ...(opts.authHeaders ?? { ...options?.headers }),
          ...options?.headers,
        },
      });

      return isSSr
        ? ApolloLink.from([
            errorLink,
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpApiLink,
          ])
        : ApolloLink.from([errorLink, httpApiLink]);
    };

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: apiLink(config.urls.data, { credentials: "include" }),
    });
  };
