import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import InputSwitch from '@/components/Form/InputSwitch';
import TextArea from '@/components/Form/TextArea';

import { CreateFormData } from '@/templates/split/new/NewSplitForm';
import NewSplitModal from '@/templates/split/new/NewSplitModal';

import PayeeList from '../PayeeList';

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

      <FormGroup
        description={`Please enter a unique name for your split and define each recipient’s wallet address and split amount. The overall split amount must total 100. Fields marked with * are mandatory.`}
      >
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
    </>
  );
}
