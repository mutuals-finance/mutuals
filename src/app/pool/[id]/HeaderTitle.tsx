import { HStack, Text } from '@chakra-ui/react';
import { ipfsResolveData } from '@/lib/utils';
import { SplitImage } from '@/components/Split/Image';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PoolHeaderProps {
  metaData: { name: string; description: string; image: string };
}

export default function PoolHeaderTitle({ metaData }: PoolHeaderProps) {
  return (
    <Breadcrumbs
      overwrite={{
        pool: false,
        id: (
          <HStack spacing='1' alignItems={'center'}>
            <SplitImage
              src={ipfsResolveData(metaData.image)}
              alt={metaData.name}
              boxSize='1.2rem'
            />
            <Text>{metaData.name}</Text>
          </HStack>
        ),
      }}
    />
  );
}
