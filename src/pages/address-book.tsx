import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <Seo />
      <Container maxW='container.xl'>
        <Heading as={'h1'} size={'2xl'} my={'12'}>
          Address book
        </Heading>
      </Container>
    </>
  );
};

export default SettingsPage;
