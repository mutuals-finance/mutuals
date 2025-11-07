"use client";

import { useToggle } from "react-use";

import {
  Button,
  Fieldset,
  useSteps,
  Form,
  FormErrorAlert,
  Steps,
  SimpleGrid,
  GridItem,
  Card,
} from "@mutuals/ui";
import { useAccount } from "wagmi";
import { usePoolCreate } from "@/features/PoolAdd/usePoolCreate";
import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import React, { useCallback } from "react";
import AuthSignInCard from "@/features/Auth/SignInCard";
import { PoolCreateInput } from "@mutuals/sdk-react";
import PoolAddModal from "@/features/PoolAdd/Modal";
import { poolAddSteps } from "@/features/PoolAdd/steps";
import PoolAddPanel from "@/features/PoolAdd/Panel";
import { defaultClaims } from "@/features/Claim/utils";
import { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";
import PoolAddToolbar from "@/features/PoolAdd/Toolbar";

export type PoolAddProps = { user?: User };

export default function PoolAdd({ user }: PoolAddProps) {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [createPool, { error, loading }] = usePoolCreate();

  const onSubmit = useCallback(
    (input: PoolCreateInput, status: PoolStatus) => {
      createPool(input);
      if (status == PoolStatus.Active) {
        // setModalOpen(true);
      } else {
        //  createPool(input);
      }
    },
    [createPool],
  );

  const steps = useSteps({
    defaultStep: 0,
    count: poolAddSteps.collection.items.length,
  });

  return (
    <Form<PoolCreateInput>
      onSubmit={(values) => onSubmit(values, PoolStatus.Active)}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{
        owner: address,
        name: "Prudent Armadillo",
        description: "",
        image: "",
        slug: "prudent-armadillo",
        private: false,
        donationBps: 1,
        addClaims: defaultClaims,
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
              <PoolAddToolbar {...steps} />

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

                        {Object.values(poolAddSteps.items).map(
                          (step, index) => (
                            <Steps.Content key={index} index={index}>
                              {step.children}
                            </Steps.Content>
                          ),
                        )}

                        <Steps.CompletedContent>
                          {!user ? (
                            <AuthSignInCard
                              description={
                                "You must sign in to your account to create a new payment pool."
                              }
                            />
                          ) : (
                            <FeatureUpcoming
                              description={
                                "Creating pools is currently planned but not yet available for use."
                              }
                            />
                          )}
                        </Steps.CompletedContent>
                      </Fieldset.Content>
                    </Fieldset.Root>
                  </Card.Body>
                  <Card.Footer
                    px={{ base: "0", lg: "6" }}
                    pb={{ base: "0", lg: "6" }}
                  >
                    {steps.hasNextStep ? (
                      <Steps.NextTrigger asChild>
                        <Button type="button" flex="1">
                          Continue
                        </Button>
                      </Steps.NextTrigger>
                    ) : (
                      <Button
                        flex="1"
                        type="submit"
                        disabled={false}
                        loading={loading}
                      >
                        Confirm
                      </Button>
                    )}
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
