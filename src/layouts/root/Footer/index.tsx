import { Container, Stack, StackDivider, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer() {
  const routes: Record<string, string> = {
    Home: '/',
    About: '/splits',
    App: '/splits',
    Feedback: '/splits',
    Help: '/splits',
    'Terms Of Service': '/splits',
    'Privacy Policy': '/splits',
  };
  return (
    <Container
      as='footer'
      maxW={'100%'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'flex-end'}
      p={'12'}
      mt={'12'}
    >
      <Stack
        mb={'6'}
        direction={'row'}
        divider={<StackDivider />}
        spacing={'3'}
      >
        <Text>Copyright 2023 SplitFi</Text>
        <Text>The best way to split your smart contract profits</Text>
      </Stack>

      <Stack spacing={'6'} direction={['column', 'row']}>
        {Object.keys(routes).map((name: string) => (
          <Link href={routes[name] || '/'} key={name}>
            {name}
          </Link>
        ))}
      </Stack>
    </Container>
  );
}
