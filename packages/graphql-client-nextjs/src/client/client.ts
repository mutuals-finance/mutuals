import { HttpLink, from, HttpOptions } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/client-integration-nextjs";
import config from "../config";
import { onError } from "@apollo/client/link/error";

const isLocalEnv = process.env.NODE_ENV !== "production";

export interface MakeClientOpts {
  authHeaders?: Record<string, string>;
}

export const makeClient =
  (opts: MakeClientOpts = {}) =>
  () => {
    const isSSr = typeof window === "undefined";
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const apiLink = (uri: string, options?: Omit<HttpOptions, "uri">) => {
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
        ? from([
            errorLink,
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpApiLink,
          ])
        : from([errorLink, httpApiLink]);
    };

    return new ApolloClient({
      connectToDevTools: isLocalEnv,
      cache: new InMemoryCache(),
      link: apiLink(config.urls.data, { credentials: "include" }),
    });
  };
