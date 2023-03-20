import React from 'react';
import { useToggle } from 'react-use';

import { ButtonPrimary } from '@/components/Button';
import CreateSplitModal from '@/components/CreateSplitModal';
import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import InputSwitch from '@/components/Form/InputSwitch';
import TextArea from '@/components/Form/TextArea';
import { FileWithPreview } from '@/components/Form/types';

import PayeeList, { defaultPayee, Payee } from './PayeeList';

export interface CreateFormData {
  image: FileWithPreview[];
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: Payee[];
}

export function NewSplitForm() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<CreateFormData>
      className={'max-w-2xl space-y-8'}
      onSubmit={() => toggleIsModalOpen()}
      defaultValues={{
        payees: [defaultPayee, defaultPayee],
      }}
    >
      {({ watch }) => (
        <>
          <CreateSplitModal
            data={watch()}
            open={isModalOpen}
            onClose={() => toggleIsModalOpen()}
          />

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

          <FormGroup>
            <ButtonPrimary size={'md'} type='submit' className={'self-start'}>
              Create
            </ButtonPrimary>
          </FormGroup>
        </>
      )}
    </Form>
  );
}
