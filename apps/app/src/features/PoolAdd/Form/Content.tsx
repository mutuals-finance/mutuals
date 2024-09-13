import { Button, Stack } from "@mutuals/ui";
import { UseFormReturn } from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";
import InputImage from "@/components/Form/InputImage";
import TextArea from "@/components/Form/TextArea";

import Allocations from "@/features/PoolAdd/Allocations";
import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddModal from "@/features/PoolAdd/Modal";

interface PoolAddFormContentProps extends UseFormReturn<PoolAddData, never> {
  onModalClose: () => void;
  isModalOpen: boolean;
}

export default function PoolAddFormContent({
  isModalOpen,
  onModalClose,
  ...props
}: PoolAddFormContentProps) {
  const { getValues } = props;
  const data = getValues();

  return (
    <>
      <PoolAddModal data={data} open={isModalOpen} onClose={onModalClose} />
      <FormGroup>
        <InputImage id="image" label="Image" />

        <Input
          label="Name"
          id="name"
          validation={{ required: "Please enter a name" }}
        />

        <TextArea label="Description" id="description" />
      </FormGroup>

      <Allocations {...props} />

      <Stack direction="row" justify={"space-between"}>
        <Button variant={"blackWhite"} type="submit">
          Create Pool
        </Button>
      </Stack>
    </>
  );
}
