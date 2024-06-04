import { Box, Button, Grid, GridItem, Stack, Text } from "@splitfi/ui";
import { UseFormReturn } from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";
import InputImage from "@/components/Form/InputImage";
import InputSwitch from "@/components/Form/InputSwitch";
import TextArea from "@/components/Form/TextArea";
import SplitCard from "@/components/Split/Card";
import InputBase from "@/components/Form/InputBase";

import PoolAddFormPayees from "@/features/PoolAdd/Payees";
import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddModal from "@/features/PoolAdd/Modal";

interface PoolAddFormContentProps extends UseFormReturn<PoolAddData, never> {
  onModalClose: () => void;
  isModalOpen: boolean;
}

export default function PoolAddFormContent({
  getValues,
  isModalOpen,
  onModalClose,
}: PoolAddFormContentProps) {
  const data = getValues();

  const previewData = { ...data, image: data.image?.preview?.toString() };

  return (
    <>
      <PoolAddModal data={data} open={isModalOpen} onClose={onModalClose} />
      <Grid templateColumns={"1fr 24rem"} gap={{ base: "6", lg: "12" }}>
        <GridItem as={Stack} gap={"6"}>
          <FormGroup>
            <InputImage id="image" label="Image" />

            <Input
              label="Name"
              id="name"
              validation={{ required: "Please enter a name" }}
            />

            <TextArea label="Description" id="description" />

            <InputSwitch label={"Metadata Locked"} id={"metadataLocked"} />
          </FormGroup>

          <FormGroup
            title={`Payees`}
            description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
          >
            <PoolAddFormPayees id={"payees"} />
          </FormGroup>

          <Stack direction="row" justify={"space-between"}>
            <Button variant={"blackWhite"} type="submit">
              Create Pool
            </Button>
          </Stack>
        </GridItem>

        <GridItem>
          <Box position={"sticky"} top={"20"}>
            <InputBase label={`Preview`}>
              <SplitCard metaData={previewData!} />
            </InputBase>

            <Stack direction={"row"} mt={"6"} justify={"space-between"}>
              <Box>
                <InputSwitch label={"Auto Save"} />
              </Box>

              <Box>
                <Text variant={"label"}>Unsaved changes</Text>
              </Box>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
