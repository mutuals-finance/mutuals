import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import {
  IoAppsOutline,
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoWalletOutline,
} from 'react-icons/io5';

import IconTextButton from '@/components/IconTextButton';

const handlers = [
  { 'aria-label': 'Deposit', icon: <IoArrowDownCircleOutline /> },
  { 'aria-label': 'Withdraw', icon: <IoArrowUpCircleOutline /> },
  { 'aria-label': 'Settings', icon: <IoWalletOutline /> },
  { 'aria-label': 'Insights', icon: <IoAppsOutline /> },
];

export default function SplitHandlers() {
  return (
    <Box as={'section'} my={'12'}>
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
