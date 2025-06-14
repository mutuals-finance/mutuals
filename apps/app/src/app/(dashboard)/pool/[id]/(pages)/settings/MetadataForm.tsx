"use client";

import {
  Box,
  Button,
  Fieldset,
  Input,
  Textarea,
  FileUpload,
  Field,
  Form,
} from "@mutuals/ui";

type PoolMetadataEditType = {
  name?: string;
  description?: string;
  image?: any;
};

interface PoolMetadataFormProps {
  defaultValues: PoolMetadataEditType;
}

export default function PoolMetadataForm({
  defaultValues,
}: PoolMetadataFormProps) {
  return (
    <Form<PoolMetadataEditType> defaultValues={defaultValues}>
      <Fieldset.Root>
        <Fieldset.Legend>Metadata</Fieldset.Legend>
        <Fieldset.HelperText>
          Modify the metadata of your split contract.
        </Fieldset.HelperText>

        <Fieldset.Content>
          <Field label="Image" id="image">
            <FileUpload id="image" />
          </Field>

          <Field label="Name" id="name">
            <Input id="name" rules={{ required: "Please enter a name" }} />
          </Field>

          <Field label="Description" id="description">
            <Textarea id="description" />
          </Field>

          <Box>
            <Button size={"xl"} type={"submit"}>
              Update Metadata
            </Button>
          </Box>
        </Fieldset.Content>
      </Fieldset.Root>
    </Form>
  );
}
