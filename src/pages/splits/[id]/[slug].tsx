import { AnkrProvider, type GetTransfersRequest } from '@ankr.com/ankr.js';
import { useAccountBalance } from 'ankr-react';
import { InferGetServerSidePropsType } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { useAsync } from 'react-use';
import { useNetwork } from 'wagmi';

import { useFragment } from '@/lib/graphql/__generated__';
import { addApolloState, initializeApollo } from '@/lib/graphql/client';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { SPLIT } from '@/lib/graphql/queries';

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

function useTokenTransfers(params: GetTransfersRequest) {
  /*
  const { url } = ankrjsProvider;

  const body = {
    jsonrpc: '2.0',
    method: 'ankr_getTokenTransfers',
    params: {
      address,
      blockchain,
      ...params,
    },
    id: 1,
  };
*/

  const ankrjsProvider = new AnkrProvider();

  return useAsync(async () => {
    const transfers = await ankrjsProvider.getTokenTransfers(params);

    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // });
    // const result = await response.json();
    // const { transfers } = result;
    console.log('got transfers', transfers);
    return transfers;
  });

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

  const blockchain = 'eth';
  const address = '0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5';
  const { data: balance } = useAccountBalance({
    walletAddress: address,
    blockchain,
    onlyWhitelisted: true,
  });

  const { value: txRes } = useTokenTransfers({
    address: [address],
    blockchain,
    descOrder: true,
    pageSize: 20,
  });

  const path = router.asPath;
  const currentSlug = path.substring(path.lastIndexOf('/') + 1);

  const currentTab = (routes.find((route) => route.slug === currentSlug) ||
    routes[0]) as SplitTemplateTab;

  const Template = currentTab.component;

  return (
    <>
      <Seo title={`${split.metaData.name} » ${currentTab?.label}`} />
      <Template
        {...split}
        balance={balance}
        transfers={txRes?.transfers}
        address={address}
      />
    </>
  );
};

SplitDetailPage.Layout = 'SplitDetails';
export default SplitDetailPage;
