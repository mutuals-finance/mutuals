"use client";

import { useToggle } from "react-use";

import {
  Button,
  Fieldset,
  useSteps,
  Form,
  Group,
  Stack,
  FormErrorAlert,
  Steps,
  SimpleGrid,
  GridItem,
  Card,
  IconButton,
  Text,
} from "@mutuals/ui";
import { useAccount } from "wagmi";
import { usePoolCreate } from "@mutuals/graphql-client-nextjs/client";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback } from "react";
import AuthSignInCard from "@/features/Auth/SignInCard";
import { PoolCreateInput } from "@mutuals/sdk-react";
import PoolAddModal from "@/features/PoolAdd/Modal";
import {
  IoChevronBackSharp,
  IoChevronForwardSharp,
  IoRefreshSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import PoolAddPanel from "@/features/PoolAdd/Panel";
import {
  initialClaims,
  stepCollection,
  stepItems,
} from "@/features/PoolAdd/items";

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [upsertPool, { error, loading }] = usePoolCreate();

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
    count: stepCollection.items.length,
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
              columns={{ base: 1, lg: 9 }}
              gap={{ base: "6", lg: "6" }}
            >
              <GridItem colSpan={{ base: 1, lg: 6 }}>
                <Stack direction="row" justifyContent={"space-between"}>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Steps.PrevTrigger asChild>
                      <IconButton
                        variant="subtle"
                        disabled={!steps.hasPrevStep}
                      >
                        <IoChevronBackSharp />
                      </IconButton>
                    </Steps.PrevTrigger>
                    <Text
                      as={"span"}
                      textStyle={"sm"}
                      color={!steps.hasPrevStep ? "fg.subtle" : "fg"}
                      hideBelow={"lg"}
                    >
                      Previous
                    </Text>
                  </Stack>
                  <Stack direction="row" justifyContent={"flex-end"}>
                    <Button variant={"subtle"}>
                      <IoRefreshSharp />
                      Reset
                    </Button>
                    <IconButton variant={"subtle"}>
                      <IoSettingsSharp />
                    </IconButton>
                  </Stack>
                </Stack>
              </GridItem>
              <GridItem colSpan={{ base: 1, lg: 3 }} hideBelow={"lg"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Text
                    as={"span"}
                    textStyle={"sm"}
                    color={!steps.hasNextStep ? "fg.subtle" : "fg"}
                  >
                    Next
                  </Text>
                  <Steps.NextTrigger asChild>
                    <IconButton variant="subtle" disabled={!steps.hasNextStep}>
                      <IoChevronForwardSharp />
                    </IconButton>
                  </Steps.NextTrigger>
                </Stack>
              </GridItem>

              <GridItem colSpan={{ base: 1, lg: 6 }}>
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

                        {Object.values(stepItems).map((step, index) => (
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
                      {steps.hasNextStep ? (
                        <Steps.NextTrigger asChild>
                          <Button type="button" flex="1" size="xl">
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

              <GridItem
                order={{ base: "-1", lg: "2" }}
                colSpan={{ base: 1, lg: 3 }}
              >
                <PoolAddPanel {...steps} />
              </GridItem>
            </SimpleGrid>
          </Steps.RootProvider>
        </>
      )}
    </Form>
  );
}
