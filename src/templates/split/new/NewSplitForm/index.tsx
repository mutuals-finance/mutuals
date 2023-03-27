import React from 'react';
import { useToggle } from 'react-use';

import Form from '@/components/Form';
import { FileWithPreview } from '@/components/Form/types';

import NewSplitFormInner from '@/templates/split/new/NewSplitForm/NewSplitFormInner';

import { defaultPayee, Payee } from '../PayeeList';

export interface CreateFormData {
  image: FileWithPreview;
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
      onSubmitInvalid={(errors, data) => console.log('INVALID', errors, data)}
      defaultValues={{
        payees: [defaultPayee, defaultPayee],
      }}
    >
      {(props) => (
        <NewSplitFormInner
          isModalOpen={isModalOpen}
          onModalClose={() => toggleIsModalOpen()}
          {...props}
        />
      )}
    </Form>
  );
}
