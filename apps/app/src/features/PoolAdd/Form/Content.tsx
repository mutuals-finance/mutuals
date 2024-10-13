import { Button, Stack } from "@mutuals/ui";
import { UseFormReturn } from "react-hook-form";
import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";

import Allocations, {
  PoolAddAllocationProps,
} from "@/features/PoolAdd/Allocations";
import FileUpload from "@/components/Form/FileUpload";

interface PoolAddFormContentProps extends PoolAddAllocationProps {
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
      {/*
      <PoolAddModal data={data} open={isModalOpen} onClose={onModalClose} />
*/}

      <FormGroup>
        <FileUpload label="Image" id="image" inputProps={{ maxW: "2xs" }} />

        <Input
          label="Name"
          id="name"
          validation={{ required: "Please enter a name" }}
        />
        <TextArea label="Description" id="description" />
      </FormGroup>

      <Allocations {...props} />

      <Stack direction="row">
        <Button size="lg" type="submit">
          Create Pool
        </Button>
      </Stack>
    </>
  );
}
