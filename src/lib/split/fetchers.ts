import { ipfsUrlFromUri, parsePrefixedAddress } from '@/lib/utils';
import { addApolloState, initializeApollo } from '@/lib/graphql/client';
import { SPLIT } from '@/lib/graphql/queries';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { AppProps } from 'next/app';

export const fetcher = <TResponse = unknown>(url: string): Promise<TResponse> =>
  fetch(url).then((res) => res.json());

export const getMetadata = (uri?: string | null) =>
  fetcher(ipfsUrlFromUri(uri || ''));

export const getSplitDetails = async ({
  params: { id },
}: {
  params: { id?: string };
}) => {
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const split = useFragment(splitDetailsFragment, data.split);

  if (!split?.id) {
    return {
      notFound: true,
    };
  }

  const metaData = await getMetadata(split?.metaDataUri);

  const pageProps: AppProps['pageProps'] = {
    props: {
      split: {
        ...split,
        metaData,
      },
    },
  };

  return addApolloState(client, pageProps);
};
