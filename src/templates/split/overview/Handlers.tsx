import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import {
  IoAppsOutline,
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoWalletOutline,
} from 'react-icons/io5';

import IconTextButton from '@/components/IconTextButton';

import { useSplit } from '@/context/SplitContext';

export function Handlers() {
  const { sidebar } = useSplit();

  const handlers = [
    {
      'aria-label': 'Deposit',
      icon: <IoArrowDownCircleOutline />,
      onClick: () => sidebar.toggle('DEPOSIT'),
    },
    {
      'aria-label': 'Withdraw',
      icon: <IoArrowUpCircleOutline />,
      onClick: () => sidebar.toggle('WITHDRAW'),
    },
    { 'aria-label': 'Settings', icon: <IoWalletOutline /> },
    { 'aria-label': 'Insights', icon: <IoAppsOutline /> },
  ];

  return (
    <Box as={'section'}>
      <Container
        maxW={'container.lg'}
        as={SimpleGrid}
        templateColumns={'repeat(auto-fill, minmax(4rem, 8rem))'}
        spacing={'6'}
      >
        {handlers.map((props) => (
          <IconTextButton key={props['aria-label']} {...props} />
        ))}
      </Container>
    </Box>
  );
}
