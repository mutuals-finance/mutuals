import React from 'react';

import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import InputSwitch from '@/components/Form/InputSwitch';
import TextArea from '@/components/Form/TextArea';

export function Metadata() {
  return (
    <Form>
      <FormGroup description={`Modify the contract metadata of your split.`}>
        <InputImage id='image' label='Image' />

        <Input
          label='Name'
          id='name'
          validation={{ required: 'Please enter a name' }}
        />

        <TextArea label='Description' id='description' />
      </FormGroup>
    </Form>
  );
}
