import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NewSplitForm } from './NewSplitForm';
import PageShell from '@/components/Shell/PageShell';

export default function NewPoolPage() {
  return (
    <PageShell breadcrumbsProps={{ overwrite: { pool: false } }}>
      <Container variant={'shell'}>
        <Box maxW={'xl'} mb={'12'}>
          <Heading as={'h1'} size={'2xl'} lineHeight={'1.2'} mb={'6'}>
            Create New Payment Pool
          </Heading>
          <Text fontSize={'lg'} color={'color.3'}>
            A payment pool smart contract automatically routes onchain payments
            to different destinations.
          </Text>
        </Box>

        <NewSplitForm />
      </Container>
    </PageShell>
  );
}
