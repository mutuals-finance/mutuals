import React, { useState } from 'react';
import Input from '@/components/Form/Input';
import InputText from '@/components/Form/InputText';
import Form from '@/components/Form';
import InputImage from '@/components/Form/InputImage';
import { ButtonPrimary } from '@/components/Button';
import { Controller, useForm } from 'react-hook-form';
import InputSwitch from '@/components/Form/InputSwitch';
import PayeeList, { initialPayee, Payee } from './PayeeList';
import CreateFormGroup from './CreateFormGroup';
import CreateSplitModal from '@/components/CreateSplitModal';

export interface CreateFormData {
  image: File;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: Payee[];
}

export function CreateForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateFormData>({
    defaultValues: {
      payees: [initialPayee],
      metadataLocked: false,
    },
  });

  return (
    <>
      <CreateSplitModal
        data={watch()}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Form
        className={'max-w-2xl space-y-8'}
        onSubmit={handleSubmit(() => setIsModalOpen(true))}
      >
        <CreateFormGroup
          description={`Please enter a unique name for your split and define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
        >
          <div className={'flex flex-col space-y-4'}>
            <Controller
              name='image'
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <InputImage
                  id={'image'}
                  label={'Image'}
                  onDrop={(value) => {
                    if (value.length > 0) {
                      field.onChange(value[0]);
                    }
                  }}
                  {...field}
                />
              )}
            />

            <Input
              label={'Name'}
              id={'name'}
              error={errors.name && errors.name.message}
              {...register('name', { required: 'Please enter a name' })}
            />
            <InputText
              label={'Description'}
              id={'description'}
              error={errors.description && errors.description.message}
              {...register('description', {
                required: 'Please enter a description',
              })}
            />
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
      </Form>
    </>
  );
}
