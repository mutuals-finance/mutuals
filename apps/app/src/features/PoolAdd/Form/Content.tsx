import { Box, Button, Stack } from "@mutuals/ui";
import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";

import Allocations from "@/features/PoolAdd/Allocations";
import FileUpload from "@/components/Form/FileUpload";

interface PoolAddFormContentProps {
  onModalClose?: () => void;
  isModalOpen?: boolean;
}

export default function PoolAddFormContent({}: PoolAddFormContentProps) {
  return (
    <>
      <FormGroup maxW={"xl"}>
        <FileUpload label="Image" id="image" inputProps={{ maxW: "3xs" }} />

        <Input label="Name" id="name" />
        <TextArea label="Description" id="description" />
      </FormGroup>

      <Allocations />

      <Box>
        <Button size="xl" type="submit">
          Confirm and review
        </Button>
      </Box>
    </>
  );
}
