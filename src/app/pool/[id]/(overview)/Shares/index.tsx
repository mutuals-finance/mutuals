import ContentCard from '@/components/ContentCard';
import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import SharesContent from '@/app/pool/[id]/(overview)/Shares/SharesContent';
import { Stack } from '@chakra-ui/react';
import { shareFragment } from '@/lib/graphql/fragments';
import SectionContainer from '@/components/Shell/SectionContainer';

interface SharesProps {
  shares?: FragmentType<typeof shareFragment>[];
}

export default function Shares({ shares }: SharesProps) {
  return (
    <ContentCard title={'Shares'}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <SharesContent shares={shares} />
      </Stack>
    </ContentCard>
  );
}
