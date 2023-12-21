import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { decodePrefixedAddress, ipfsResolveData } from '@/lib/utils';
import { FileWithPreview } from '@/components/Form/types';
import PoolMetadataForm from '@/app/pool/[id]/settings/MetadataForm';
import ContentCard from '@/components/ContentCard';
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

interface PoolSettingsPageProps {
  params: { id: string };
}

export default async function PoolSettingsPage({
  params,
}: PoolSettingsPageProps) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const defaultValues = {
    ...metaData,
    image: (metaData.image
      ? { preview: ipfsResolveData(metaData.image) }
      : undefined) as unknown as FileWithPreview,
  };

  return (
    <Stack spacing={'6'}>
      <ContentCard title={'Modify Metadata'}>
        <PoolMetadataForm defaultValues={defaultValues} />
      </ContentCard>

      <ContentCard title={'Danger Zone'} borderColor={'red.500'}>
        <Stack direction={{ base: 'column', md: 'row' }} flex={'1'}>
          <Box flex={'1'}>
            <Heading size={'sm'}>Delete this Payment Pool</Heading>
            <Text>
              Once deleted, it will be gone forever. Please be certain.
            </Text>
          </Box>
          <Box>
            <Button colorScheme={'red'}>Delete this Payment Pool</Button>
          </Box>
        </Stack>
      </ContentCard>
    </Stack>
  );
}
