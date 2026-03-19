"use client";

import {
  Box,
  Button,
  Field,
  Fieldset,
  FileUpload,
  Form,
  GridItem,
  Input,
  SimpleGrid,
  Textarea,
} from "@mutuals/ui";

interface PoolMetadataEditType {
  description?: string;
  image?: unknown;
  name?: string;
}

interface PoolMetadataFormProps {
  defaultValues: PoolMetadataEditType;
}

export default function PoolMetadataForm({
  defaultValues,
}: PoolMetadataFormProps) {
  return (
    <Form<PoolMetadataEditType> defaultValues={defaultValues}>
      <SimpleGrid columns={{ base: 1, lg: 11 }} gap={"6"}>
        <GridItem colSpan={{ base: 1, lg: 8 }}>
          <Fieldset.Root>
            <Fieldset.Legend textStyle={"xl"}>Metadata</Fieldset.Legend>
            <Fieldset.HelperText textStyle={"md"}>
              Modify the payment pool metadata. This information will be
              displayed to users when they interact with the pool via our
              platform.
            </Fieldset.HelperText>

            <Fieldset.Content>
              <Field id={"image"} label={"Image"}>
                <FileUpload
                  dropzoneProps={{
                    maxW: "36",
                    minH: "36",
                    label: "Upload pool image",
                    gap: "2",
                    iconProps: {
                      color: "fg.subtle",
                      fontSize: "md",
                    },
                  }}
                  id="image"
                  maxW={"36"}
                />
              </Field>

              <Field id="name" label="Name">
                <Input id="name" rules={{ required: "Please enter a name" }} />
              </Field>

              <Field id="description" label="Description">
                <Textarea id="description" />
              </Field>

              <Box>
                <Button disabled={false} size={"lg"} type="submit">
                  Confirm
                </Button>
              </Box>
            </Fieldset.Content>
          </Fieldset.Root>
        </GridItem>
      </SimpleGrid>
    </Form>
  );
}
