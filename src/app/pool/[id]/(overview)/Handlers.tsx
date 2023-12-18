'use client';

import { Box, Container, IconButton, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import {
  IoAppsOutline,
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoWalletOutline,
} from 'react-icons/io5';

import IconTextButton from '@/components/IconTextButton';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import Link from 'next/link';

interface PoolHandlersProps {
  pool?: SplitBaseFragmentFragment | null;
}

export default function PoolHandlers({ pool }: PoolHandlersProps) {
  const handlers = [
    {
      'aria-label': 'Withdraw',
      icon: <IoArrowUpCircleOutline />,
      href: 'withdraw',
      key: 'withdraw',
    },
    {
      'aria-label': 'Deposit',
      icon: <IoArrowDownCircleOutline />,
      href: 'deposit',
      key: 'deposit',
    },
    {
      'aria-label': 'Settings',
      icon: <IoWalletOutline />,
      href: 'settings',
      key: 'settings',
    },
    //{ 'aria-label': 'Insights', icon: <IoAppsOutline />, href: 'deposit',key: 'insights', },
  ];

  return (
    <Box as={'section'}>
      <Container
        maxW={'container.lg'}
        as={SimpleGrid}
        templateColumns={'repeat(auto-fill, minmax(4rem, 8rem))'}
        spacing={'6'}
      >
        {handlers.map(({ key, href, ...props }) => (
          <IconTextButton
            as={Link}
            href={`/pool/maticmum:${pool?.id}/${href}`}
            key={key}
            {...props}
          />
        ))}
      </Container>
    </Box>
  );
}
