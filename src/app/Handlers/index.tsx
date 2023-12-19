import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { IoAppsOutline, IoWalletOutline } from 'react-icons/io5';

import IconTextButton from '@/components/IconTextButton';
import Link from 'next/link';

const handlers = [
  {
    'aria-label': 'Add Wallet',
    icon: <IoWalletOutline />,
    as: Link,
    href: '/pool/new',
  },
  {
    'aria-label': 'New Payment Pool',
    icon: <IoAppsOutline />,
    as: Link,
    href: '/pool/new',
  },
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
