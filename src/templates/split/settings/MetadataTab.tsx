import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import { SplitMetadata } from '@/lib/graphql/__generated__/graphql';
import { ipfsResolveData } from '@/lib/utils';

import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import Input from '@/components/Form/Input';
import InputImage from '@/components/Form/InputImage';
import TextArea from '@/components/Form/TextArea';
import { FileWithPreview } from '@/components/Form/types';

import { useSplit } from '@/context/SplitContext';

type MetadataEditType = {
  name: SplitMetadata['name'];
  description: SplitMetadata['description'];
  image: FileWithPreview;
};

export function MetadataTab() {
  const { split } = useSplit();

  const defaultValues = {
    ...split.metaData,
    image: split.metaData.image
      ? { preview: ipfsResolveData(split.metaData.image) }
      : undefined,
  };

  return (
    <Box as={'article'}>
      <Heading as={'h3'} size={'md'} mb={'6'}>
        Edit Metadata
      </Heading>
      <Form<MetadataEditType> defaultValues={defaultValues}>
        <FormGroup description={`Modify the metadata of your split contract.`}>
          <InputImage id='image' label='Image' />

          <Input
            label='Name'
            id='name'
            validation={{ required: 'Please enter a name' }}
          />

          <TextArea label='Description' id='description' />
        </FormGroup>

        <Box>
          <Button colorScheme='teal' type={'submit'}>
            Update Metadata
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
