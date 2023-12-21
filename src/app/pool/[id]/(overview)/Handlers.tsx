'use client';

import {
  Box,
  Card,
  CardBody,
  Container,
  IconButton,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from 'react-icons/io5';

import IconTextButton from '@/components/IconTextButton';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import Link from 'next/link';
import KeenSliderSlide from '@/components/KeenSlider/KeenSliderSlide';
import KeenSlider from '@/components/KeenSlider/KeenSlider';

interface PoolHandlersProps {
  pool?: SplitBaseFragmentFragment | null;
}

export default function PoolHandlers({ pool }: PoolHandlersProps) {
  const handlers = [
    {
      'aria-label': 'Withdraw',
      icon: <IoPushOutline />,
      href: 'withdraw',
      key: 'withdraw',
    },
    {
      'aria-label': 'Deposit',
      icon: <IoDownloadOutline />,
      href: 'deposit',
      key: 'deposit',
    },
    {
      'aria-label': 'Settings',
      icon: <IoSettingsOutline />,
      href: 'settings',
      key: 'settings',
    },
    //{ 'aria-label': 'Insights', icon: <IoAppsOutline />, href: 'deposit',key: 'insights', },
  ];

  return (
    <Box as={'section'} w='full'>
      <Container maxW={'container.lg'} px={'0'}>
        <Stack direction={'row'} spacing={'6'}>
          {handlers.map(({ key, href, ...props }) => (
            <Card
              flexShrink='0'
              w={{ base: '24', lg: '36' }}
              key={key}
              variant={'transparent'}
            >
              <CardBody>
                <IconTextButton
                  as={Link}
                  href={`/pool/maticmum:${pool?.id}/${href}`}
                  {...props}
                />
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
