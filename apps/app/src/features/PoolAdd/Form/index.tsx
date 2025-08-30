"use client";

import { useToggle } from "react-use";

import {
  Button,
  Field,
  Fieldset,
  IconButton,
  Box,
  useSteps,
  FileUpload,
  Form,
  Group,
  Input,
  Text,
  Textarea,
  Stack,
  FormErrorAlert,
  Steps,
  SimpleGrid,
  GridItem,
  Card,
} from "@mutuals/ui";

import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddModal from "@/features/PoolAdd/Modal";
import AllocationInput from "@/features/PoolAdd/AllocationInput";
import { useAccount } from "wagmi";
import { usePoolCreate } from "@mutuals/graphql-client-nextjs/client";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback } from "react";
import { IoChevronBackSharp } from "react-icons/io5";

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [upsertPool, { error, loading }] = usePoolCreate();

  const signedId = false;

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

  const items = [
    {
      title: "Step 1",
      description: "Enter pool information",
      children: (
        <>
          <Field label={"Owner"} id={"ownerAddress"}>
            <Input id="ownerAddress" />
          </Field>

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
                  color: "fg.muted",
                  fontSize: "md",
                },
              }}
            />
          </Field>
          <Field id={"name"} label={"Name"}>
            <Input id="name" />
          </Field>
          <Field id={"description"} label={"Description"}>
            <Textarea id="description" />
          </Field>
        </>
      ),
    },
    {
      title: "Step 2",
      description: "Configure pool allocations",
      children: (
        <>
          <Stack>
            <Text fontWeight={"medium"} textStyle={"sm"}>
              Allocations
            </Text>
            <AllocationInput id="allocations" />
          </Stack>
        </>
      ),
    },
  ];

  const steps = useSteps({
    defaultStep: 1,
    count: items.length,
  });

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

          <Steps.RootProvider orientation="vertical" size={"sm"} value={steps}>
            <SimpleGrid
              w={"full"}
              columns={{ base: 1, md: 7 }}
              gap={{ base: "6", md: "16" }}
            >
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Box position={"sticky"} top={"24"} left={"0"}>
                  <Card.Root>
                    <Card.Body>
                      <Steps.List h={"32"}>
                        {items.map((step, index) => (
                          <Steps.Item
                            key={index}
                            index={index}
                            title={step.title}
                            direction="column"
                          >
                            <Steps.Indicator />
                            <Stack>
                              <Steps.Title>{step.title}</Steps.Title>
                              <Steps.Description>
                                {step.description}
                              </Steps.Description>
                            </Stack>
                            <Steps.Separator />
                          </Steps.Item>
                        ))}
                      </Steps.List>
                    </Card.Body>
                  </Card.Root>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 5 }}>
                <Card.Root>
                  <Card.Body>
                    <Stack>
                      <Fieldset.Root>
                        <Fieldset.Content>
                          <FormErrorAlert name={"root.upsertPool"} />

                          {items.map((step, index) => (
                            <Steps.Content key={index} index={index}>
                              {step.children}
                            </Steps.Content>
                          ))}
                          <Steps.CompletedContent>
                            All steps are complete!
                          </Steps.CompletedContent>

                          <Group>
                            {steps.hasPrevStep && (
                              <Steps.PrevTrigger asChild>
                                <IconButton variant="subtle" size="xl">
                                  <IoChevronBackSharp />
                                </IconButton>
                              </Steps.PrevTrigger>
                            )}

                            {steps.hasNextStep ? (
                              <Steps.NextTrigger asChild>
                                <Button
                                  type="button"
                                  flex="1"
                                  variant="subtle"
                                  size="xl"
                                >
                                  Continue
                                </Button>
                              </Steps.NextTrigger>
                            ) : (
                              <Button
                                type="submit"
                                flex="1"
                                variant="subtle"
                                size="xl"
                                disabled={true}
                              >
                                Confirm
                              </Button>
                            )}
                          </Group>
                        </Fieldset.Content>
                      </Fieldset.Root>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </SimpleGrid>
          </Steps.RootProvider>
        </>
      )}
    </Form>
  );
}
