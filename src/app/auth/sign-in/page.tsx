import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Hide,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import WalletList from '@/app/auth/sign-in/WalletList';
import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import Image from 'next/image';
import signInImage from '@/assets/images/sign-in.jpg';
import Logo from '@/app/(dashboard)/DashboardLayout/Header/Logo';
import { cookies } from 'next/headers';

type Email = { email?: string };
export default function SignInPage() {
  const cookieStore = cookies();
  const url = cookieStore.get('redirectURL');

  return (
    <Grid
      templateColumns={{ base: '100%', lg: 'var(--chakra-sizes-sm) 1fr' }}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      minH={{ base: 'unset', lg: '100vh' }}
      position={{ base: 'relative', lg: 'unset' }}
      gap={0}
    >
      <GridItem
        position={{ base: 'fixed', lg: 'sticky' }}
        top={'0'}
        left={'0'}
        w={'full'}
        h={{ base: '100%', lg: '100vh' }}
        overflow={'hidden'}
      >
        <Box
          position={'absolute'}
          zIndex={'50'}
          left={{ base: '50%', lg: '12' }}
          top={{ base: '5', lg: '12' }}
          transform={{ base: 'translateX(-50%)', lg: 'unset' }}
          w={{ base: '24', lg: '28' }}
          color={'white'}
        >
          <Logo />
        </Box>

        <Hide above={'lg'}>
          <Image
            src={signInImage}
            alt={'Connect to SplitFi'}
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </Hide>
        <Show above={'lg'}>
          <Image
            src={signInImage}
            alt={'Connect to SplitFi'}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </Show>
      </GridItem>
      <GridItem
        py={{ base: '6', lg: '12' }}
        mt={{ base: '16', lg: '0' }}
        bg={'bg.1'}
        position={'relative'}
        borderTopRadius={{ base: 'xl', lg: 'none' }}
        boxShadow={{ base: 'lg', lg: 'none' }}
      >
        <Container variant={'shell'} maxW={'3xl'}>
          <Box maxW={'md'} mx={{ base: 'auto', lg: 'unset' }}>
            <Heading as='h1' size='2xl'>
              Connect to SplitFi
            </Heading>
            <Text fontSize={'lg'} my={'6'}>
              Choose your favourite method to sign in. You can always add more
              methods later.
            </Text>

            <WalletList url={url} />

            <Box position='relative' py='8'>
              <Divider />
              <AbsoluteCenter bg='bg.1' px='6'>
                OR
              </AbsoluteCenter>
            </Box>
            <Box>
              <Text variant={'label'} fontSize={'sm'} mb={'3'}>
                Continue with Email
              </Text>
              <Form<Email>>
                <FormGroup>
                  <Input id={'email'} placeholder={'Enter your email'} />
                </FormGroup>
                <FormGroup>
                  <Button size={'md'}>Sign In</Button>
                </FormGroup>
              </Form>
            </Box>
            <Text fontWeight='400' mt='6' fontSize='xs'>
              By connecting, you agree to SplitFi’s Terms of Service and
              acknowledge that you have read and understand the SplitFi
              Disclaimer.
            </Text>
          </Box>
        </Container>
      </GridItem>
    </Grid>
  );
}
