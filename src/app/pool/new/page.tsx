import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

import { NewSplitForm } from '@/templates/split/new';

export default function NewTreasuryPage() {
  return (
    <>
      <Box as={'header'} pt={'6'} my={'12'}>
        <Container maxW={'container.lg'}>
          <Heading as={'h1'} size={'2xl'}>
            New Split
          </Heading>
        </Container>
      </Box>
      <Box as={'section'}>
        <Container maxW={'container.lg'}>
          <NewSplitForm />
        </Container>
      </Box>
    </>
  );
}
