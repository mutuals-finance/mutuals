import React from "react";
import { SPLIT, TRANSACTIONS_BY_SPLIT } from "@/graphql/queries";
import { useFragment } from "@/lib/graphql/__generated__";
import {
  Balance,
  Analytics,
  Activity,
  Shares,
  Details,
  Header,
  WithdrawModal,
} from "@/templates/split/details";
import {
  splitDetailsFragment,
  transactionDetailsFragment,
} from "@/graphql/fragments";
import { NextPageWithLayout } from "#/app";
import { ApolloClient } from "@apollo/client";
import { initializeApollo } from "@/graphql/client";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useAccountBalance } from "ankr-react";
import { Blockchain } from "@ankr.com/ankr.js/dist/types";

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
  const client = initializeApollo();

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
    walletAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    blockchain: ["eth" as Blockchain],
    onlyWhitelisted: true,
  });

  if (!split || !transactions) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Header
        title={split.metaData.name || "Unknown"}
        image={split.metaData.image}
        description={split.metaData.description || ""}
        address={split.address}
      />

      <WithdrawModal
        onClose={() =>
          router.replace({ pathname, query: { id: query.id } }, undefined, {
            shallow: true,
          })
        }
        open={Boolean(query.withdraw)}
        assets={splitBalance?.assets}
      />

      <section>
        <div className={"container grid lg:grid-cols-6 gap-3 lg:gap-6"}>
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

SplitDetailPage.Layout = "App";

export default SplitDetailPage;
