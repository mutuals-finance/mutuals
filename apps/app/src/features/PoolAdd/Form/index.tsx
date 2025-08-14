"use client";

import { useToggle } from "react-use";

import {
  Button,
  Field,
  Fieldset,
  FileUpload,
  Form,
  Text,
  Group,
  Input,
  Textarea,
  Stack,
  FormErrorAlert,
  Separator,
} from "@mutuals/ui";

import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddModal from "@/features/PoolAdd/Modal";
import { useAccount } from "wagmi";
import { useUpsertPool } from "@mutuals/graphql-client-nextjs/client";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback, useEffect } from "react";
import AllocationInput from "@/features/PoolAdd/AllocationInput";

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [upsertPool, { error, loading }] = useUpsertPool();

  const onSubmit = useCallback(
    (
      { image: _image, ownerAddress: _ownerAddress, ...input }: PoolAddData,
      status: PoolStatus,
    ) => {
      if (status == PoolStatus.Active) {
        setModalOpen(true);
      } else {
        void upsertPool({
          fetchPolicy: "no-cache",
          variables: {
            input,
          },
          onCompleted: (d) => console.log("onCompleted: upsertPool", d),
        });
      }
    },
    [setModalOpen, upsertPool],
  );

  useEffect(() => console.log({ error }), [error]);

  return (
    <Form<PoolAddData>
      onSubmit={(values) => onSubmit(values, PoolStatus.Active)}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{
        ownerAddress: address,
        name: "",
        description: "",
        allocations: [],
      }}
      errors={
        !error
          ? {}
          : {
              root: {
                upsertPool: {
                  type: "upsertPool",
                  message: error.cause?.message ?? "",
                },
              },
            }
      }
    >
      {(methods) => (
        <>
          <PoolAddModal
            open={modalOpen}
            onOpenChange={({ open }) => setModalOpen(open)}
            {...methods}
          />
          <Stack maxW={"3xl"}>
            <Fieldset.Root>
              <Fieldset.Content>
                <FormErrorAlert name={"root.upsertPool"} />

                <Field label={"Owner"} id={"ownerAddress"}>
                  <Input id="ownerAddress" />
                </Field>

                <Field id={"image"} label={"Image"}>
                  <FileUpload
                    id="image"
                    maxW={"3xs"}
                    dropzoneProps={{ maxW: "3xs", minH: "3xs", label: "Image" }}
                  />
                </Field>
                <Field id={"name"} label={"Name"}>
                  <Input id="name" />
                </Field>
                <Field id={"description"} label={"Description"}>
                  <Textarea id="description" />
                </Field>

                <Stack>
                  <Text fontWeight={"medium"} textStyle={"sm"}>
                    Allocations
                  </Text>
                  <AllocationInput id="allocations" />
                </Stack>

                <Separator my={"4"} />

                <Group>
                  <Button
                    size="xl"
                    type="button"
                    onClick={() =>
                      onSubmit(methods.getValues(), PoolStatus.Draft)
                    }
                    variant={"subtle"}
                    loading={loading}
                  >
                    Save draft
                  </Button>

                  <Button size="xl" type="submit">
                    Confirm and review
                  </Button>
                </Group>
              </Fieldset.Content>
            </Fieldset.Root>
          </Stack>
        </>
      )}
    </Form>
  );
}
