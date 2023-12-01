import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

export default function AddressBook() {
  return (
    <Container maxW='container.lg'>
      <Heading as={'h1'} size={'xl'} my={'12'} fontWeight={'700'}>
        Address book
      </Heading>
    </Container>
  );
}
