import { Blockchain } from '@ankr.com/ankr.js/dist/types';
import { ApolloClient } from '@apollo/client';
import { useAccountBalance } from 'ankr-react';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import Seo from '@/components/Seo';

import { useFragment } from '@/graphql/__generated__';
import { initializeApollo } from '@/graphql/client';
import {
  splitDetailsFragment,
  transactionDetailsFragment,
} from '@/graphql/fragments';
import { SPLIT, TRANSACTIONS_BY_SPLIT } from '@/graphql/queries';
import {
  Activity,
  Analytics,
  Balance,
  Details,
  Header,
  Shares,
  WithdrawModal,
} from '@/templates/split/details';

import { NextPageWithLayout } from '#/app';

async function fetchSplitDetails(client: ApolloClient<unknown>, id: string) {
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

export async function getServerSideProps(context: { params: { id: string } }) {
  const client = await initializeApollo();

  const [split, transactions] = await Promise.all([
    fetchSplitDetails(client, context.params.id),
    fetchSplitTransactions(client, context.params.id),
  ]);

  // Will be passed to the page component as props
  return { props: { split, transactions } };
}

const SplitDetailPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = function (props) {
  const { pathname, query, ...router } = useRouter();

  const split = useFragment(splitDetailsFragment, props.split);
  const transactions = useFragment(
    transactionDetailsFragment,
    props.transactions
  );

  const { data: splitBalance } = useAccountBalance({
    walletAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    blockchain: ['eth' as Blockchain],
    onlyWhitelisted: true,
  });

  if (!split || !transactions) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Seo />
      <Header
        title={split.metaData.name || 'Unknown'}
        image={split.metaData.image}
        description={split.metaData.description || ''}
        address={split.address}
      />

      {/*
      <WithdrawModal
        onClose={() =>
          router.replace({ pathname, query: { id: query.id } }, undefined, {
            shallow: true,
          })
        }
        open={Boolean(query.withdraw)}
        assets={splitBalance?.assets}
      />
*/}

      <section>
        <div className={'container grid gap-3 lg:grid-cols-6 lg:gap-6'}>
          <Balance {...splitBalance} />
          <Shares shares={split.shares} />
          <Activity transactions={transactions} />
          <Details {...split} />
          <Analytics />
        </div>
      </section>
    </>
  );
};

export default SplitDetailPage;
