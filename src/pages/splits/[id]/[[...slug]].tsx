import { InferGetServerSidePropsType } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

import { useFragment } from '@/lib/graphql/__generated__';
import { addApolloState, initializeApollo } from '@/lib/graphql/client';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { SPLIT } from '@/lib/graphql/queries';
import { getMetadata } from '@/lib/split';
import { parsePrefixedAddress } from '@/lib/utils';
import { useRouterTemplate } from '@/hooks/useRouterTemplate';

import Seo from '@/components/Seo';

import routes from '@/templates/split/details';

import { NextPageWithLayout } from '#/app';
import { getSplitDetails } from '@/lib/split';

const SplitDetailPage: NextPageWithLayout = function ({
  split,
}: InferGetServerSidePropsType<typeof getSplitDetails>) {
  const template = useRouterTemplate(
    routes,
    ({ asPath }) => asPath.split('/')[3],
  );

  return (
    <>
      <Seo title={`${split.metaData.name} » ${template?.label}`} />
      <template.component />
    </>
  );
};

export const getServerSideProps = getSplitDetails;

SplitDetailPage.Layout = 'SplitDetails';
export default SplitDetailPage;
