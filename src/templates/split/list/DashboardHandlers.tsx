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
  { 'aria-label': 'Add Wallet', icon: <IoWalletOutline /> },
  { 'aria-label': 'Create Treasury', icon: <IoAppsOutline /> },
];

export default function DashboardHandlers() {
  return (
    <Box as={'section'} my={'12'}>
      <Container
        maxW={'container.lg'}
        as={SimpleGrid}
        templateColumns={'repeat(auto-fill, minmax(8rem, 1fr))'}
        spacing={'6'}
      >
        {handlers.map((props) => (
          <IconTextButton key={props['aria-label']} {...props} />
        ))}
      </Container>
    </Box>
  );
}
