import { Box, Container, Heading } from '@chakra-ui/react';
import { NewSplitForm } from './NewSplitForm';

export default function NewPoolPage() {
  return (
    <>
      <Box as={'header'} pt={'6'} my={'12'}>
        <Container maxW={'container.lg'}>
          <Heading as={'h1'} size={'2xl'}>
            New Payment Pool
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
