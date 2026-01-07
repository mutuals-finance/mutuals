"use client";

import {
  Button,
  Fieldset,
  Input,
  Textarea,
  FileUpload,
  Field,
  Form,
  SimpleGrid,
  Box,
  GridItem,
} from "@mutuals/ui";
import React from "react";

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
                  id="image"
                  maxW={"36"}
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
                />
              </Field>

              <Field label="Name" id="name">
                <Input id="name" rules={{ required: "Please enter a name" }} />
              </Field>

              <Field label="Description" id="description">
                <Textarea id="description" />
              </Field>

              <Box>
                <Button type="submit" disabled={false} size={"lg"}>
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
