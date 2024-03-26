import { Box, Container, Heading } from '@chakra-ui/react';
import { NewSplitForm } from './NewSplitForm';
import SectionContainer from '@/components/Shell/SectionContainer';

export default function NewPoolPage() {
  return (
    <>
      <SectionContainer as={'header'} pt={'6'}>
        <Heading as={'h1'} size={'xl'}>
          New Payment Pool
        </Heading>
      </SectionContainer>
      <SectionContainer>
        <NewSplitForm />
      </SectionContainer>
    </>
  );
}
