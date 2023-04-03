import {
  ApolloClient,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { isEqual, merge } from 'lodash';
import { AppProps } from 'next/app';
import { useMemo } from 'react';
import { mainnet } from 'wagmi/chains';

import { subgraphByChainId } from '@/lib/constants';
import { isSSR } from '@/lib/utils';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<unknown>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isSSR(),
    link: new HttpLink({
      uri: subgraphByChainId[mainnet.id],
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache({
      // typePolicies is not required to use Apollo with Next.js - only for doing pagination.
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       posts: relayStylePagination(),
      //     },
      //   },
      // },
    }),
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

export function useApollo(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

export function addApolloState(
  client: ApolloClient<unknown>,
  pageProps: AppProps['pageProps']
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
