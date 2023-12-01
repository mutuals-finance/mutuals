import { Icon } from '@chakra-ui/icon';
import {
  Button,
  HStack,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

import Form from '@/components/Form';
import Input from '@/components/Form/Input';

export function TreasurySearchAndCreate() {
  return (
    <HStack mb={'6'} spacing={'6'} alignItems={'center'}>
      <Form flex={'1'}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon
              as={IoSearch}
              color={useColorModeValue('gray.400', 'gray.600')}
            />
          </InputLeftElement>
          <Input hideWrapper={true} placeholder='Search...' pl={'10'} />
        </InputGroup>
      </Form>
    </HStack>
  );
}
