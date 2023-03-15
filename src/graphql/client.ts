import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
  from,
} from "@apollo/client";
import { subgraphByChainId } from "@/lib/constants";
import { isSSR } from "@/lib/utils";
import { useMemo } from "react";
import { mainnet } from "wagmi/chains";
import { AppProps } from "next/app";
import { isEqual, merge } from "lodash";
import { onError } from "@apollo/client/link/error";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<unknown>;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: subgraphByChainId[mainnet.id],
  credentials: "same-origin",
});

function createApolloClient() {
  let defaultOptions: DefaultOptions;
  if (isSSR()) {
    //We don't want any cache to be stored server side
    defaultOptions = {
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    };
  } else {
    //We immediately show results, but check in the background if any changes occured, and eventually update the view
    defaultOptions = {
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      },
    };
  }

  return new ApolloClient({
    ssrMode: isSSR(),
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache({}),
    defaultOptions,
  });
}

// This middleware will allow us to dynamically update the uri for the requests based off chainId
// For more information: https://www.apollographql.com/docs/react/networking/advanced-http-networking/
/*
const subgraphMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const { chain } = useNetwork();

  operation.setContext(() => ({
    uri:
      chain?.id && subgraphById[chain?.id]
        ? subgraphById[chain?.id]
        : subgraphById[mainnet.id],
  }));

  return forward(operation);
});
*/

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (dest: unknown[], src: unknown[]) => [
        ...src,
        ...dest.filter((d) => src.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (isSSR()) return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

export function addApolloState(
  client: ApolloClient<unknown>,
  pageProps: AppProps["pageProps"]
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
