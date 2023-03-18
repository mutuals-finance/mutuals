import React from 'react';
import { Controller } from 'react-hook-form';
import { useToggle } from 'react-use';

import { ButtonPrimary } from '@/components/Button';
import CreateSplitModal from '@/components/CreateSplitModal';
import Form from '@/components/Form';
import Input from '@/components/Form/Input';
import InputDropzone from '@/components/Form/InputImage';
import InputSwitch from '@/components/Form/InputSwitch';
import TextArea from '@/components/Form/TextArea';

import CreateFormGroup from './CreateFormGroup';
import PayeeList, { initialPayee, Payee } from './PayeeList';

export interface CreateFormData {
  image: File;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: Payee[];
}

export function CreateForm() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<CreateFormData>
      className={'max-w-2xl space-y-8'}
      onSubmit={() => toggleIsModalOpen()}
      mode={'onTouched'}
      defaultValues={{ payees: [initialPayee], metadataLocked: false }}
    >
      {({ control, register, watch, formState: { errors } }) => (
        <>
          <CreateSplitModal
            data={watch()}
            open={isModalOpen}
            onClose={() => toggleIsModalOpen()}
          />

          <CreateFormGroup
            description={`Please enter a unique name for your split and define each recipient’s wallet address and split amount. The overall split amount must total 100. Fields marked with * are mandatory.`}
          >
            <div className={'flex flex-col space-y-4'}>
              <InputDropzone id='image' label='Image' />

              <Input
                label='Name'
                id='name'
                validation={{ required: 'Please enter a name' }}
              />

              <TextArea label='Description' id='description' />

              <Controller
                name='metadataLocked'
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <InputSwitch
                    label={'Metadata Locked'}
                    checked={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
          </CreateFormGroup>

          <CreateFormGroup
            title={`Payees`}
            description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
          >
            <Controller
              name='payees'
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <PayeeList
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              )}
            />
          </CreateFormGroup>

          <div className={'self-start'}>
            <ButtonPrimary size={'md'} type='submit'>
              Create
            </ButtonPrimary>
          </div>
        </>
      )}
    </Form>
  );
}
