'use client';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  FormControl,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import Form from '@/components/Form';
import UserAvatar from '@/components/UserAvatar';
import BaseLabel from '@/components/Form/InputBase/BaseLabel';
import InputBase from '@/components/Form/InputBase';

type WalletData = {
  name: string;
  address: string;
};

interface WalletDrawerProps
  extends Omit<
    DrawerProps,
    'isOpen' | 'onClose' | 'onCloseComplete' | 'children'
  > {
  title?: string;
  defaultValues?: WalletData;
}
export default function WalletDrawer({
  title,
  children,
  defaultValues,
  ...props
}: PropsWithChildren<WalletDrawerProps>) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const router = useRouter();

  return (
    <Form<WalletData> defaultValues={defaultValues}>
      <Drawer
        placement='right'
        size={'sm'}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => router.push(`/`, { scroll: false })}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>{title}</DrawerHeader>

          <DrawerBody as={VStack} gap={'6'} py={'6'} alignItems={'stretch'}>
            {children}
            <FormGroup>
              <FormControl>
                <BaseLabel label={'Icon'} />
                <UserAvatar
                  address={'0xd231120Eea6201B142b4048cf6C86BaC2A0655D2'}
                  size={'sm'}
                />
              </FormControl>
            </FormGroup>

            <FormGroup>
              <Input
                label='Name'
                id='name'
                validation={{ required: 'Please enter a name' }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label='Address or ENS'
                id='address'
                validation={{
                  required: 'Please enter an address or ENS name',
                }}
              />
            </FormGroup>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={() => onClose()}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Form>
  );
}
