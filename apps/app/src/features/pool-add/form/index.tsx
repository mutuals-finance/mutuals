"use client";

import { PoolStatus } from "@mutuals/graphql-client-nextjs";
import type { PoolCreateInput } from "@mutuals/sdk-react";
import {
  Button,
  Card,
  Fieldset,
  Form,
  FormErrorAlert,
  GridItem,
  SimpleGrid,
  Steps,
  useSteps,
} from "@mutuals/ui";
import type { User } from "@privy-io/node";
import { useCallback } from "react";
import { useToggle } from "react-use";
import { useAccount } from "wagmi";
import AuthSignInCard from "@/features/auth/sign-in-card";
import { defaultClaims } from "@/features/claim/utils";
import PoolAddModal from "@/features/pool-add/modal";
import PoolAddPanel from "@/features/pool-add/panel";
import { poolAddSteps } from "@/features/pool-add/steps";
import PoolAddToolbar from "@/features/pool-add/toolbar";
import { usePoolCreate } from "@/features/pool-add/use-pool-create";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export interface PoolAddProps {
  user?: User;
}

export default function PoolAdd({ user }: PoolAddProps) {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();
  const [createPool, { error, loading }] = usePoolCreate();

  const onSubmit = useCallback(
    (input: PoolCreateInput, status: PoolStatus) => {
      createPool(input);
      if (status === PoolStatus.Active) {
        // setModalOpen(true);
      } else {
        //  createPool(input);
      }
    },
    [createPool]
  );

  const steps = useSteps({
    defaultStep: 0,
    count: poolAddSteps.collection.items.length,
  });

  return (
    <Form<PoolCreateInput>
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
        error
          ? {
              root: {
                upsertPool: {
                  type: "upsertPool",
                  message: error.message,
                },
              },
            }
          : {}
      }
      onSubmit={(values) => onSubmit(values, PoolStatus.Active)}
    >
      {(methods) => (
        <>
          <PoolAddModal
            onOpenChange={({ open }) => setModalOpen(open)}
            open={modalOpen}
            {...methods}
          />

          <Steps.RootProvider
            orientation={"vertical"}
            size={"sm"}
            value={steps}
          >
            <SimpleGrid
              columns={{ base: 1, lg: 11 }}
              gap={{ base: "6", lg: "6" }}
              w={"full"}
            >
              <PoolAddToolbar {...steps} />

              <GridItem colSpan={{ base: 1, lg: 8 }}>
                <Card.Root
                  border={{ base: "none", lg: "1px solid" }}
                  borderColor={{ lg: "border" }}
                >
                  <Card.Body
                    pt={{ base: "0", lg: "6" }}
                    px={{ base: "0", lg: "6" }}
                  >
                    <Fieldset.Root minW={"0"}>
                      <Fieldset.Content>
                        <FormErrorAlert name={"root.upsertPool"} />

                        {Object.entries(poolAddSteps.items).map(
                          ([key, step], index) => (
                            <Steps.Content index={index} key={key}>
                              {step.children}
                            </Steps.Content>
                          )
                        )}

                        <Steps.CompletedContent>
                          {user ? (
                            <FeatureUpcoming
                              description={
                                "Creating pools is currently planned but not yet available for use."
                              }
                            />
                          ) : (
                            <AuthSignInCard
                              description={
                                "You must sign in to your account to create a new payment pool."
                              }
                            />
                          )}
                        </Steps.CompletedContent>
                      </Fieldset.Content>
                    </Fieldset.Root>
                  </Card.Body>
                  <Card.Footer
                    pb={{ base: "0", lg: "6" }}
                    px={{ base: "0", lg: "6" }}
                  >
                    {steps.hasNextStep ? (
                      <Steps.NextTrigger asChild>
                        <Button
                          flex="1"
                          size={"lg"}
                          type="button"
                          variant={"subtle"}
                        >
                          Continue
                        </Button>
                      </Steps.NextTrigger>
                    ) : (
                      <Button
                        disabled={false}
                        flex="1"
                        loading={loading}
                        size={"lg"}
                        type="submit"
                      >
                        Confirm
                      </Button>
                    )}
                  </Card.Footer>
                </Card.Root>
              </GridItem>

              <GridItem
                colSpan={{ base: 1, lg: 3 }}
                order={{ base: "-1", lg: "2" }}
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
