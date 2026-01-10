import {
  VStack,
  StackSeparator,
  Button,
  Form,
  Fieldset,
  SimpleGrid,
  GridItem,
  Box,
} from "@mutuals/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default async function PoolSettingsSecurityPage() {
  return (
    <Form>
      <SimpleGrid columns={{ base: 1, lg: 11 }} gap={"6"}>
        <GridItem colSpan={{ base: 1, lg: 8 }}>
          <VStack separator={<StackSeparator />} gap={"6"}>
            <Fieldset.Root>
              <Fieldset.Legend textStyle={"xl"}>
                Disable Payment Pool
              </Fieldset.Legend>
              <Fieldset.HelperText textStyle={"md"}>
                This action will disable the payment pool. No further funds can
                be withdrawn once disabled. You can also choose to delete the
                payment pool entirely.
              </Fieldset.HelperText>

              <Fieldset.Content>
                <Box>
                  <Button colorPalette={"orange"} variant={"subtle"}>
                    Disable this Payment Pool
                  </Button>
                </Box>
              </Fieldset.Content>
            </Fieldset.Root>

            <Fieldset.Root>
              <Fieldset.Legend textStyle={"xl"}>
                Delete Payment Pool
              </Fieldset.Legend>
              <Fieldset.HelperText textStyle={"md"}>
                This action will delete the payment pool. The smart contract
                will remain on-chain, but all references to it will be removed
                from our systems. This is irreversible so please be certain
                before proceeding.
              </Fieldset.HelperText>

              <Fieldset.Content>
                <Box>
                  <Button colorPalette={"red"} variant={"subtle"}>
                    Delete this Payment Pool
                  </Button>
                </Box>
              </Fieldset.Content>
            </Fieldset.Root>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Form>
  );
}
