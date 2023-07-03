import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

import Seo from '@/components/Seo';

import { NewSplitForm } from '@/templates/split/new';

import { NextPageWithLayout } from '#/app';

function CreateSplitHeader() {
  return (
    <Box as={'header'} pt={'12'} mb={'6'}>
      <Container maxW={'container.md'}>
        <Heading as={'h1'} size={'2xl'}>
          New Split
        </Heading>
      </Container>
    </Box>
  );
}

function CreateSplitSection() {
  return (
    <Box as={'section'}>
      <Container maxW={'container.md'}>
        <NewSplitForm />
      </Container>
    </Box>
  );
}

const SplitNewPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <CreateSplitHeader />
      <CreateSplitSection />
    </>
  );
};

export default SplitNewPage;
