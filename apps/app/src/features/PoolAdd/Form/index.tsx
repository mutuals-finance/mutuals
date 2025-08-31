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
  UseStepsReturn,
  SimpleGrid,
  GridItem,
  Card,
  SelectRoot,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValueText,
  createListCollection,
  SelectItemText,
  Span,
} from "@mutuals/ui";

import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddModal from "@/features/PoolAdd/Modal";
import { useAccount } from "wagmi";
import { usePoolCreate } from "@mutuals/graphql-client-nextjs/client";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import AuthSignInCard from "@/features/Auth/SignInCard";

const items = {
  0: {
    label: "Step 1",
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
  1: {
    label: "Step 2",
    description: "Configure pool allocations",
    children: (
      <>
        <Stack>
          <Text fontWeight={"medium"} textStyle={"sm"}>
            Allocations
          </Text>
          <AuthSignInCard
            description={
              "You must sign in to your account to configure allocations."
            }
          />
          {/*
          <AllocationInput id="allocations" />
*/}
        </Stack>
      </>
    ),
  },
};

const collection = createListCollection({
  items: Object.entries(items).map(([key, value]) => ({
    ...value,
    value: key,
  })),
});

type PoolAddFormFieldsetProps = UseStepsReturn;

function PoolAddFormFieldset({
  hasPrevStep,
  hasNextStep,
}: PoolAddFormFieldsetProps) {
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <FormErrorAlert name={"root.upsertPool"} />

        {collection.items.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.children}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>
          <AuthSignInCard
            description={
              "You must sign in to your account to create a new payment pool."
            }
          />
        </Steps.CompletedContent>
        <Group>
          <Steps.PrevTrigger asChild>
            <IconButton variant="subtle" size="xl" disabled={!hasPrevStep}>
              <IoChevronBackSharp />
            </IconButton>
          </Steps.PrevTrigger>

          {hasNextStep ? (
            <Steps.NextTrigger asChild>
              <Button type="button" flex="1" variant="subtle" size="xl">
                Continue
              </Button>
            </Steps.NextTrigger>
          ) : (
            <Button
              type="submit"
              flex="1"
              variant="solid"
              size="xl"
              disabled={true}
            >
              Confirm
            </Button>
          )}
        </Group>
      </Fieldset.Content>
    </Fieldset.Root>
  );
}

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

  const steps = useSteps({
    defaultStep: 0,
    count: collection.items.length,
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

          <Steps.RootProvider
            orientation={"vertical"}
            size={"sm"}
            value={steps}
          >
            <SimpleGrid
              w={"full"}
              columns={{ base: 1, lg: 7 }}
              gap={{ base: "6", lg: "16" }}
            >
              <GridItem colSpan={{ base: 1, lg: 2 }}>
                <SelectRoot
                  collection={collection}
                  w="full"
                  variant={"subtle"}
                  defaultValue={[collection.items[0]!.value]}
                  value={[
                    collection.items[
                      Math.min(steps.value, collection.items.length - 1)
                    ]!.value,
                  ]}
                  onValueChange={(e) => {
                    steps.setStep(Number(e.value[0]!));
                  }}
                  hideFrom={"lg"}
                >
                  <SelectTrigger>
                    <SelectValueText placeholder="Select step" />
                  </SelectTrigger>
                  <SelectContent portalled={false}>
                    {collection.items.map((step) => (
                      <SelectItem item={step} key={step.value}>
                        <Stack gap={"0"}>
                          <SelectItemText>{step.label}</SelectItemText>
                          <Span color="fg.subtle" textStyle="sm">
                            {step.description}
                          </Span>
                        </Stack>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>

                <Box position={"sticky"} top={"24"} left={"0"} hideBelow={"lg"}>
                  <Card.Root>
                    <Card.Body>
                      <Steps.List h={"32"}>
                        {collection.items.map((step, index) => (
                          <Steps.Item
                            key={step.value}
                            index={index}
                            title={step.label}
                            direction={{ md: "column" }}
                          >
                            <Steps.Indicator />
                            <Stack>
                              <Steps.Title>{step.label}</Steps.Title>
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

              <GridItem colSpan={{ base: 1, lg: 5 }}>
                <Card.Root border={{ base: "none", smToLg: "none" }}>
                  <Card.Body p={{ base: "0", smToLg: "0" }}>
                    <PoolAddFormFieldset {...steps} />
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
