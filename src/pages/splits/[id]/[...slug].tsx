import { InferGetServerSidePropsType } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

import { useFragment } from '@/lib/graphql/__generated__';
import { addApolloState, initializeApollo } from '@/lib/graphql/client';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { SPLIT } from '@/lib/graphql/queries';
import { parsePrefixedAddress } from '@/lib/utils';
import { useRouterTemplate } from '@/hooks/useRouterTemplate';

import Seo from '@/components/Seo';

import routes from '@/templates/split/details';

import { NextPageWithLayout } from '#/app';

export async function getServerSideProps({
  params: { id, slug },
}: {
  params: { id?: string; slug?: string };
}) {
  if (!id) {
    // no split id and no tab
    return {
      notFound: true,
    };
  }

  const client = await initializeApollo();
  const { address } = parsePrefixedAddress(id);
  const { data } = await client.query({
    query: SPLIT,
    variables: { id: address.toLowerCase() },
  });
  console.log('data', data);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const split = useFragment(splitDetailsFragment, data.split);

  if (!split?.id) {
    return {
      notFound: true,
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
  const template = useRouterTemplate(
    routes,
    ({ asPath }) => asPath.split('/')[3]
  );

  return (
    <>
      <Seo title={`${split.metaData.name} » ${template?.label}`} />
      <template.component />
    </>
  );
};

SplitDetailPage.Layout = 'SplitDetails';
export default SplitDetailPage;
