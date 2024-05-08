import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import InputSwitch from '@/components/Form/InputSwitch';
import TextArea from '@/components/Form/TextArea';

import PayeeList from '../PayeeList';
import NewSplitModal from '@/app/(dashboard)/pool/new/NewSplitModal';
import { CreateFormData } from '@/app/(dashboard)/pool/new/NewSplitForm';
import SplitCard from '@/components/Split/Card';
import InputBase from '@/components/Form/InputBase';

interface NewSplitFormInnerProps extends UseFormReturn<CreateFormData, never> {
  onModalClose: () => void;
  isModalOpen: boolean;
}

export default function NewSplitFormInner({
  getValues,
  isModalOpen,
  onModalClose,
}: NewSplitFormInnerProps) {
  const data = getValues();

  return (
    <>
      <NewSplitModal data={data} open={isModalOpen} onClose={onModalClose} />
      <Grid templateColumns={'1fr 24rem'} gap={{ base: '6', lg: '12' }}>
        <GridItem as={Stack} gap={'6'}>
          <FormGroup>
            <InputImage id='image' label='Image' />

            <Input
              label='Name'
              id='name'
              validation={{ required: 'Please enter a name' }}
            />

            <TextArea label='Description' id='description' />

            <InputSwitch label={'Metadata Locked'} id={'metadataLocked'} />
          </FormGroup>

          <FormGroup
            title={`Payees`}
            description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
          >
            <PayeeList id={'payees'} />
          </FormGroup>

          <Box>
            <Button colorScheme={'teal'} type='submit'>
              Create
            </Button>
          </Box>
        </GridItem>

        <GridItem>
          <Box position={'sticky'} top={'20'}>
            <InputBase label={`Preview`}>
              <SplitCard metaData={data} />
            </InputBase>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
