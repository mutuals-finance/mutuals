import ContentCard from '@/components/ContentCard';
import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import SharesContent from '@/app/treasuries/[id]/Shares/SharesContent';
import { Stack } from '@chakra-ui/react';
import { shareFragment } from '@/lib/graphql/fragments';

interface SharesProps {
  shares: FragmentType<typeof shareFragment>[];
}

export default function Shares({ shares }: SharesProps) {
  return (
    <ContentCard
      title={'Shares'}
      flex='1'
      bodyProps={{ flex: '1', overflowY: 'auto', p: '0' }}
    >
      <Stack direction={{ base: 'column', md: 'row' }}>
        <SharesContent shares={shares} />
      </Stack>
    </ContentCard>
  );
}
