import React from 'react';

import { SplitMetadata } from '@/lib/graphql/__generated__/graphql';

import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import TextArea from '@/components/Form/TextArea';

import { useSplit } from '@/context/SplitContext';

type MetadataEditType = Pick<SplitMetadata, 'image' | 'name' | 'description'>;
export function MetadataTab() {
  const { split } = useSplit();
  return (
    <article>
      <h3 className={'title-3 mb-6'}>Edit Metadata</h3>
      <Form<MetadataEditType>
        defaultValues={{
          ...split.metaData,
          image: null,
        }}
      >
        <FormGroup description={`Modify the metadata of your split contract.`}>
          <InputImage id='image' label='Image' />

          <Input
            label='Name'
            id='name'
            validation={{ required: 'Please enter a name' }}
          />

          <TextArea label='Description' id='description' />
        </FormGroup>
      </Form>
    </article>
  );
}
