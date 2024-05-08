'use client';

import {
  Box,
  Button,
  Heading,
  IconButton,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Show,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useConnect } from 'wagmi';
import { ConnectResult } from '@wagmi/core';
import Form from '@/components/Form';
import { Icon } from '@chakra-ui/icon';
import { IoMenuSharp, IoSearch } from 'react-icons/io5';
import Input from '@/components/Form/Input';
import Logo from '@/app/(dashboard)/DashboardLayout/Header/Logo';
import Chain from '@/app/(dashboard)/DashboardLayout/Header/Chain';
import User from '@/app/(dashboard)/DashboardLayout/Header/User';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

interface WalletListProps {
  onSignIn?: (result?: ConnectResult) => void;
  url?: RequestCookie;
}

export default function WalletList({ url }: WalletListProps) {
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onSuccess() {
      console.log('cookie url', { url });
    },
  });

  return (
    <Box>
      <Text variant={'label'} fontSize={'sm'} mb={'3'}>
        Continue with Wallet
      </Text>

      <VStack spacing={'3'}>
        {connectors.map((connector) => (
          <Button
            key={connector.id}
            w={'100%'}
            size={'md'}
            py={'8'}
            onClick={() => connect({ connector })}
            justifyContent={'flex-start'}
            variant='outline'
            isLoading={isLoading && connector.id === pendingConnector?.id}
            loadingText={connector.name}
            spinnerPlacement='end'
          >
            {connector.name} {!connector.ready && '(unsupported)'}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}
