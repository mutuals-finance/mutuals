"use client";

import { useToggle } from "react-use";

import {
  Button,
  Fieldset,
  IconButton,
  Box,
  useSteps,
  Form,
  Group,
  Stack,
  FormErrorAlert,
  Steps,
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
  createTreeCollection,
} from "@mutuals/ui";
import { useAccount } from "wagmi";
import { usePoolCreate } from "@mutuals/graphql-client-nextjs/client";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import AuthSignInCard from "@/features/Auth/SignInCard";
import {
  ClaimCreateNode,
  PoolCreateInput,
  stateIds,
  strategyIds,
} from "@mutuals/sdk-react";
import PoolAddModal from "@/features/PoolAdd/Modal";
import PoolAddFormInfo from "@/features/PoolAdd/Form/Info";
import PoolAddFormClaims from "@/features/PoolAdd/Form/Claims";

const initialClaims = createTreeCollection<ClaimCreateNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.recipientAddress ?? node.id,
  rootNode: {
    id: "ROOT",
    value: 0,
    stateId: "",
    strategyId: "",
    data: "",
    children: [
      {
        id: "1",
        value: 0,
        stateId: stateIds.Offchain,
        strategyId: strategyIds.DefaultAllocation,
        data: "",
      },
      {
        id: "2",
        value: 0,
        stateId: stateIds.Offchain,
        strategyId: strategyIds.DefaultAllocation,
        data: "",
      },
    ],
  },
});

const items = {
  0: {
    label: "Step 1",
    description: "Enter pool information",
    children: <PoolAddFormInfo />,
  },
  1: {
    label: "Step 2",
    description: "Configure pool allocations",
    children: <PoolAddFormClaims />,
  },
};

const collection = createListCollection({
  items: Object.entries(items).map(([key, value]) => ({
    ...value,
    value: key,
  })),
});

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [upsertPool, { error, loading }] = usePoolCreate();

  const signedId = false;

  const onSubmit = useCallback(
    (
      {
        image: _image,
        ownerAddress: _ownerAddress,
        // TODO enable claims add
        addClaims: _addClaims,
        ...input
      }: PoolCreateInput,
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
    <Form<PoolCreateInput>
      onSubmit={(values) => onSubmit(values, PoolStatus.Active)}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{
        ownerAddress: address,
        name: "",
        description: "",
        addClaims: initialClaims,
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
                  size={"lg"}
                  collection={collection}
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
                  <SelectTrigger maxW={"32"} w="full">
                    <SelectValueText placeholder="Select step" />
                  </SelectTrigger>
                  <SelectContent portalled={false} maxW={"full"} minW={"64"}>
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
                <Card.Root
                  border={{ base: "none", lg: "1px solid" }}
                  borderColor={{ lg: "border" }}
                >
                  <Card.Body
                    px={{ base: "0", lg: "6" }}
                    pt={{ base: "0", lg: "6" }}
                  >
                    <Fieldset.Root minW={"0"}>
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
                      </Fieldset.Content>
                    </Fieldset.Root>
                  </Card.Body>
                  <Card.Footer
                    px={{ base: "0", lg: "6" }}
                    pb={{ base: "0", lg: "6" }}
                  >
                    <Group w={"full"}>
                      <Steps.PrevTrigger asChild>
                        <IconButton
                          variant="subtle"
                          size="xl"
                          disabled={!steps.hasPrevStep}
                        >
                          <IoChevronBackSharp />
                        </IconButton>
                      </Steps.PrevTrigger>

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
                          variant="solid"
                          size="xl"
                          disabled={true}
                        >
                          Confirm
                        </Button>
                      )}
                    </Group>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            </SimpleGrid>
          </Steps.RootProvider>
        </>
      )}
    </Form>
  );
}
