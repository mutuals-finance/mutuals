import { HttpLink, from, ApolloLink, HttpOptions } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import config from "../config";

const isLocalEnv = process.env.NODE_ENV !== "production";

const maxRetryAttempts = 5;

export interface MakeClientOpts {
  authHeaders?: Record<string, string>;
}

export const makeClient =
  (opts: MakeClientOpts = {}) =>
  () => {
    const isSSr = typeof window === "undefined";

    const retryLink = new RetryLink({
      delay: () => 1000,
      attempts: (count, operation, error) => {
        return !!error && count < maxRetryAttempts;
      },
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
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpApiLink,
          ])
        : from([retryLink, httpApiLink]);
    };

    return new NextSSRApolloClient({
      connectToDevTools: isLocalEnv,
      cache: new NextSSRInMemoryCache(),
      link: ApolloLink.split(
        (operation) => operation.getContext().clientName === "thegraph",
        //if above:
        apiLink(config.urls.thegraph),
        // else:
        apiLink(config.urls.data, { credentials: "include" }),
      ),
    });
  };
