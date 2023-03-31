import AnkrProvider from '@ankr.com/ankr.js';
import {
  Blockchain,
  GetAccountBalanceRequest,
} from '@ankr.com/ankr.js/dist/types';
import { ApolloClient } from '@apollo/client';
import { useAccountBalance } from 'ankr-react';
import { getAccountBalance } from 'ankr-react/src/api';
import { AnkrGlobalContext } from 'ankr-react/src/components';
import { InferGetServerSidePropsType } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useAccount, useNetwork } from 'wagmi';

import { useTransfers } from '@/lib/covalent';
import { useFragment } from '@/lib/graphql/__generated__';
import { addApolloState, initializeApollo } from '@/lib/graphql/client';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { SPLIT, TRANSACTIONS_BY_SPLIT } from '@/lib/graphql/queries';

import Seo from '@/components/Seo';

import routes from '@/templates/split/details';

import { NextPageWithLayout } from '#/app';
import { SplitTemplateTab } from '#/split';

async function fetchSplitDetails(id: string) {
  const client = await initializeApollo();

  const { data } = await client.query({
    query: SPLIT,
    variables: { id },
  });

  return data?.split;
}

async function fetchSplitTransactions(
  client: ApolloClient<unknown>,
  split: string
) {
  /*
  const transfers = await fetch("https://rpc.ankr.com/multichain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "ankr_getTokenTransfers",
      params: {
        address: split,
        blockchain: ["polygon_mumbai"],
        fromTimestamp: 1655197483,
        toTimestamp: 1671974699,
      },
      id: 1,
    }),
  })
    .then((res) => res.json())
    .then(({ result }) => result.transfers);
  console.log("ankr_getTokenTransfers transfers", transfers);
*/

  const { data } = await client.query({
    query: TRANSACTIONS_BY_SPLIT,
    variables: { split },
  });

  return data.transactions;
}

export async function getServerSideProps({
  params: { id, slug },
}: {
  params: { id?: string; slug?: string };
}) {
  if (!id) {
    // no split id and no tab
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }

  const client = await initializeApollo();

  const { data } = await client.query({
    query: SPLIT,
    variables: { id },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const split = useFragment(splitDetailsFragment, data.split);

  if (!split?.id) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }

  const pageProps: AppProps['pageProps'] = { props: { split } };

  if (!slug) {
    // split id and no tab -> send to overview
    pageProps.redirect = {
      permanent: false,
      destination: `splits/${id}/overview`,
    };
  }

  return addApolloState(client, pageProps);
}

const SplitDetailPage: NextPageWithLayout = function ({
  split,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { ...router } = useRouter();

  const { chain } = useNetwork();

  const address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const { data: balance } = useAccountBalance({
    walletAddress: address,
    blockchain: ['eth' as Blockchain],
    onlyWhitelisted: true,
  });

  const { data: transfers } = useTransfers({
    chainId: 1,
    address,
    onSuccess: (data) => console.log('success', data),
  });

  const path = router.asPath;
  const currentSlug = path.substring(path.lastIndexOf('/') + 1);

  const currentTab = (routes.find((route) => route.slug === currentSlug) ||
    routes[0]) as SplitTemplateTab;

  const Template = currentTab.component;

  return (
    <>
      <Seo templateTitle={`${split.metaData.name} » ${currentTab?.label}`} />
      <Template {...split} balance={balance} />
    </>
  );
};

SplitDetailPage.Layout = 'SplitDetails';
export default SplitDetailPage;
