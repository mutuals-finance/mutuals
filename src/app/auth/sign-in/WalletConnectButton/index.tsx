import {
  Box,
  Button,
  ButtonProps,
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
import { Connector, useConnect } from 'wagmi';
import { ConnectResult } from '@wagmi/core';
import Form from '@/components/Form';
import { Icon } from '@chakra-ui/icon';
import { IoMenuSharp, IoSearch } from 'react-icons/io5';
import Input from '@/components/Form/Input';
import Logo from '@/app/(dashboard)/DashboardLayout/Header/Logo';
import Chain from '@/app/(dashboard)/DashboardLayout/Header/Chain';
import User from '@/app/(dashboard)/DashboardLayout/Header/User';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

interface WalletConnectButtonProps extends ButtonProps {
  connector?: Connector<any, any>;
}

export default function WalletConnectButton({
  connector,
  ...props
}: WalletConnectButtonProps) {
  return (
    <Button
      w={'100%'}
      size={'lg'}
      py={'7'}
      justifyContent={'flex-start'}
      variant='outline'
      spinnerPlacement='end'
      {...props}
    >
      {connector?.name} {!connector?.ready && '(unsupported)'}
    </Button>
  );
}
