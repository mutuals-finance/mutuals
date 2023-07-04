import { Link } from '@chakra-ui/next-js';
import {
  AspectRatio,
  Flex,
  FlexProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import { useList } from 'react-use';

import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import useExplorerLink from '@/hooks/useExplorerLink';

import ContentCard from '@/components/ContentCard';
import UserAvatar from '@/components/UserAvatar';

import { useSplit } from '@/context/SplitContext';

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
});

type ActiveShare = ShareFragmentFragment & { isActive?: boolean };

interface ShareItemProps extends FlexProps {
  share: ActiveShare;
  isActive?: boolean;
}

function ShareItem({ share, isActive, ...props }: ShareItemProps) {
  const { href, shortAddress } = useExplorerLink({ address: share.payee });

  return (
    <Tr bg={isActive ? 'gray.100' : 'white'} {...props}>
      <Td>
        <Flex gap={'3'} alignItems={'center'}>
          <UserAvatar address={share.payee} />

          <Link href={href} target={'_blank'} rel={'noopener noreferrer'}>
            {shortAddress}
          </Link>
        </Flex>
      </Td>

      <Td isNumeric>{share.value * 100} %</Td>
    </Tr>
  );
}

export function Shares() {
  const { split } = useSplit();
  const [shares, { updateAt }] = useList<ActiveShare>(
    split.shares.map((s) => ({
      ...s,
      isActive: false,
    }))
  );

  function setActive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: true });
  }

  function setInactive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: false });
  }

  return (
    <ContentCard
      title={'Shares'}
      flex='1'
      bodyProps={{ flex: '1', overflowY: 'auto' }}
    >
      <Flex gap={'6'}>
        <AspectRatio flex={'1'} maxWidth={'33%'} ratio={1}>
          <PieChart
            data={shares}
            onMouseOut={(_, i) => setInactive(i)}
            onMouseMove={(_, i) => setActive(i)}
          />
        </AspectRatio>
        <TableContainer flex={'1'}>
          <Table>
            <Tbody>
              {shares.map((share, index) => (
                <ShareItem
                  key={index}
                  onMouseOut={() => setInactive(index)}
                  onMouseMove={() => setActive(index)}
                  share={share}
                  isActive={share.isActive}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </ContentCard>
  );
}
